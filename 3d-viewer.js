// Gestore Multiplo per i Viewer 3D (Uploader e Visualizer a Card)

function createViewer(container, loadingOverlay) {
    if (!container || typeof THREE === 'undefined') {
        console.error('Three.js non è caricato o container mancante');
        return null;
    }

    let scene, camera, renderer, controls, currentModel, demoObject;

    function init() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a0a);
        
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);
        
        const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
        mainLight.position.set(10, 10, 10);
        scene.add(mainLight);

        const fillLight = new THREE.DirectionalLight(0xffffff, 0.6);
        fillLight.position.set(-10, 5, -10);
        scene.add(fillLight);

        camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.set(0, 0, 5);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;

        window.addEventListener('resize', onWindowResize);
        animate();
    }

    function onWindowResize() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }

    function animate() {
        requestAnimationFrame(animate);
        if (demoObject && !currentModel) {
            demoObject.rotation.y += 0.01;
        }
        controls.update();
        renderer.render(scene, camera);
    }

    function addDemoObject() {
        if (demoObject) return;
        const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
        const material = new THREE.MeshStandardMaterial({ 
            color: 0xff6600,
            roughness: 0.3,
            metalness: 0.7 
        });
        demoObject = new THREE.Mesh(geometry, material);
        scene.add(demoObject);
    }

    function loadModel(url) {
        if (demoObject) {
            scene.remove(demoObject);
            demoObject = null;
        }
        if (currentModel) scene.remove(currentModel);

        if (loadingOverlay) {
            loadingOverlay.classList.remove('hidden');
            loadingOverlay.innerHTML = `
                <button class="loading-close-btn" onclick="this.parentElement.classList.add('hidden')">&times;</button>
                <div class="loader"></div>
                <p data-i18n="3d-loading">Caricamento...</p>
            `;
        }

        const loader = new THREE.OBJLoader();
        loader.load(
            url,
            (object) => {
                currentModel = object;
                const box = new THREE.Box3().setFromObject(object);
                const size = box.getSize(new THREE.Vector3());
                const center = box.getCenter(new THREE.Vector3());
                
                object.position.x -= center.x;
                object.position.y -= center.y;
                object.position.z -= center.z;
                
                const maxDim = Math.max(size.x, size.y, size.z);
                const scale = 3.8 / maxDim;
                object.scale.set(scale, scale, scale);
                
                object.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        child.material = new THREE.MeshStandardMaterial({
                            color: 0xffffff,
                            roughness: 0.4,
                            metalness: 0.3
                        });
                    }
                });

                scene.add(object);
                if (loadingOverlay) loadingOverlay.classList.add('hidden');
            },
            (xhr) => {
                if (xhr.lengthComputable && loadingOverlay) {
                    const percentComplete = Math.round((xhr.loaded / xhr.total) * 100);
                    const p = loadingOverlay.querySelector('p');
                    if (p) p.textContent = `Caricamento: ${percentComplete}%`;
                }
            },
            (error) => {
                console.error('Errore nel caricamento del modello:', error);
                if (loadingOverlay) {
                    const isLocal = window.location.protocol === 'file:';
                    loadingOverlay.innerHTML = `
                        <button class="loading-close-btn" onclick="this.parentElement.classList.add('hidden')">&times;</button>
                        <div class="error-msg" style="text-align:center; padding: 20px;">
                            <p style="color: #ff4444; font-weight: bold; margin-bottom: 10px;">❌ Errore caricamento</p>
                            ${isLocal ? 
                                '<p style="font-size: 13px; color: #ccc; margin-bottom: 15px;">I browser bloccano i file locali per sicurezza.<br>Per vedere i modelli, usa un server locale (es. Live Server di VS Code) o carica un file .obj manualmente nella sezione sopra.</p>' : 
                                '<p style="font-size: 13px; color: #ccc; margin-bottom: 15px;">Il file del modello potrebbe essere mancante o troppo grande.</p>'}
                            <button class="btn btn-sm" onclick="location.reload()">Riprova</button>
                        </div>`;
                }
                addDemoObject();
            }
        );
    }

    init();

    return { loadModel, addDemoObject };
}

// Inizializzazione al caricamento
window.addEventListener('load', () => {
    // 1. Inizializza Uploader (Lazy loading via IntersectionObserver)
    const uploadSection = document.getElementById('three-d');
    const uploadContainer = document.getElementById('canvas-upload-container');
    const uploadLoading = document.getElementById('loading-upload');
    
    if (uploadSection && uploadContainer) {
        let uploadViewer = null;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !uploadViewer) {
                    uploadViewer = createViewer(uploadContainer, uploadLoading);
                    uploadViewer.addDemoObject();
                    setupUploader(uploadViewer);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(uploadSection);
    }

    function setupUploader(viewer) {
        const fileInput = document.getElementById('obj-upload');
        const uploadBtn = document.getElementById('upload-btn');
        
        if (uploadBtn) {
            uploadBtn.addEventListener('click', () => fileInput.click());
        }
        if (fileInput) {
            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file && file.name.toLowerCase().endsWith('.obj')) {
                    const url = URL.createObjectURL(file);
                    viewer.loadModel(url);
                }
            });
        }
    }

    // 2. Inizializza Visualizer (Caricamento su Click)
    const cardCanvases = document.querySelectorAll('.card-3d-canvas');
    cardCanvases.forEach(canvas => {
        const loadBtn = canvas.querySelector('.load-3d-btn');
        const placeholder = canvas.querySelector('.model-placeholder');
        const loading = canvas.querySelector('.loading-overlay');
        const modelUrl = canvas.getAttribute('data-model');
        let viewer = null;

        if (loadBtn && modelUrl) {
            loadBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                
                if (viewer) return; // Se già inizializzato, non fare nulla
                
                if (placeholder) placeholder.style.display = 'none';
                if (loading) loading.classList.remove('hidden');
                
                viewer = createViewer(canvas, loading);
                if (viewer) viewer.loadModel(modelUrl);
            });
        }
    });
});
