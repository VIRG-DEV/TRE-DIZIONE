// ═════════════════════════════════════════════════════════════
// 🌐 SEZIONE 0: TRADUZIONI - MULTILINGUA (ITA/ENG)
// ═════════════════════════════════════════════════════════════

const translations = {
  it: {
    "nav-home": "Home",
    "nav-discover": "Scopri",
    "nav-places": "Luoghi",
    "nav-map": "Mappa",
    "nav-gallery": "Galleria",
    "nav-ai": "Agro AI",
    "nav-3d": "3D",
    "nav-3d-visualizer": "VIEWER",
    "nav-our-photos": "FOTO",
    "section-3d-title": "3D Local Loader",
    "section-3d-desc": "Carica i tuoi file .obj locali per visualizzarli direttamente nel browser.",
    "section-visualizer-title": "3D-VISUALIZER",
    "section-visualizer-desc": "Esplora i monumenti dell'Agro ricostruiti in 3D dal nostro team.",
    "section-photos-title": "FOTO D'AUTORE",
    "section-photos-desc": "Una collezione di scatti esclusivi realizzati dal nostro team sul territorio.",
    "3d-upload-btn": "Carica Modello .obj",
    "3d-load-btn": "Visualizza 3D",
    "3d-loading": "Caricamento...",
    "3d-model-basilica": "Basilica Pontificia",
    "3d-model-basilica-desc": "Modello dettagliato della Basilica Pontificia.",
    "3d-model-chiesa": "Chiesa Barocca",
    "3d-model-chiesa-desc": "Ricostruzione 3D di una chiesa in stile barocco coloniale.",
    "3d-model-santuario": "Santuario",
    "3d-model-santuario-desc": "Visualizzazione 3D del Serene Sanctuary.",
    "hero-title": "Tredizione",
    "hero-subtitle": "Scopri il cuore del patrimonio culturale dell'Italia meridionale, i paesaggi mozzafiato e le tradizioni agricole",
    "hero-explore": "Esplora la Regione",
    "hero-view-map": "Vedi Mappa",
    "section-places-title": "Luoghi da Non Perdere",
    "section-places-desc": "Scopri alcune delle bellezze dell'Agro-Nocerino-Sarnese. Clicca per maggiori dettagli e per trovarle sulla mappa.",
    "filter-all": "Tutti",
    "filter-churches": "Chiese",
    "filter-monuments": "Monumenti",
    "filter-castles": "Castelli",
    "section-discover-title": "Scopri la Regione",
    "section-discover-desc": "Una terra dove storia, cultura e natura convergono per creare esperienze indimenticabili",
    "poi-historic-title": "Patrimonio Storico",
    "poi-historic-desc": "Esplora chiese secolari, cattedrali e meraviglie architettoniche che raccontano la storia del nostro ricco passato.",
    "poi-natural-title": "Bellezza Naturale",
    "poi-natural-desc": "Dalla Valle del Sarno ai Monti Lattari, scopri paesaggi mozzafiato e ambienti naturali incontaminati.",
    "poi-agri-title": "Eccellenza Agricola",
    "poi-agri-desc": "Vivi le tradizioni dal campo alla tavola, visita le fattorie didattiche e assaggia i prodotti locali autentici.",
    "poi-ruins-title": "Siti Archeologici",
    "poi-ruins-desc": "Esplora l'antica Nuceria Alfaterna e altri siti storici che riportano in vita il passato dell'Agro.",
    "stat-historic": "Siti Storici",
    "stat-farms": "Aziende Locali",
    "stat-villages": "Borghi",
    "stat-years": "Anni di Storia",
    "section-map-title": "Esplora la Regione",
    "section-map-desc": "Naviga tra siti storici, punti di riferimento culturali e bellezze naturali",
    "section-gallery-title": "Galleria",
    "section-gallery-desc": "Vivi la bellezza di Tredizione attraverso le immagini",
    "footer-about": "Celebriamo il patrimonio culturale e la bellezza naturale della regione più autentica del Sud Italia.",
    "footer-links": "Link Rapidi",
    "footer-contact": "Contatti",
    "footer-follow": "Seguici",
    "footer-rights": "© 2026 Tredizione. Tutti i diritti riservati.",
    "translate-btn": "English",
    "chat-title": "Assistente Agro AI",
    "chat-online": "Online",
    "chat-welcome": "Ciao! Sono il tuo assistente virtuale per Tredizione. Come posso aiutarti oggi?",
    "chat-placeholder": "Scrivi un messaggio...",
    "chat-bot-typing": "L'assistente sta scrivendo...",
    "chat-error": "Spiacente, si è verificato un errore. Riprova più tardi."
  },
  en: {
    "nav-home": "Home",
    "nav-discover": "Discover",
    "nav-places": "Places",
    "nav-map": "Map",
    "nav-gallery": "Gallery",
    "nav-ai": "Agro AI",
    "nav-3d": "3D",
    "nav-3d-visualizer": "VIEWER",
    "nav-our-photos": "PHOTOS",
    "section-3d-title": "3D Local Loader",
    "section-3d-desc": "Upload your local .obj files to view them directly in the browser.",
    "section-visualizer-title": "3D-VISUALIZER",
    "section-visualizer-desc": "Explore the Agro monuments reconstructed in 3D by our team.",
    "section-photos-title": "EXPERT PHOTOGRAPHY",
    "section-photos-desc": "A collection of exclusive shots taken by our team in the territory.",
    "3d-upload-btn": "Upload .obj Model",
    "3d-load-btn": "View 3D",
    "3d-loading": "Loading...",
    "3d-model-basilica": "Pontifical Basilica",
    "3d-model-basilica-desc": "Detailed model of the Pontifical Basilica.",
    "3d-model-chiesa": "Baroque Church",
    "3d-model-chiesa-desc": "3D reconstruction of a colonial baroque style church.",
    "3d-model-santuario": "Sanctuary",
    "3d-model-santuario-desc": "3D visualization of the Serene Sanctuary.",
    "hero-title": "Tredizione",
    "hero-subtitle": "Discover the heart of Southern Italy's cultural heritage, breathtaking landscapes, and agricultural traditions",
    "hero-explore": "Explore the Region",
    "hero-view-map": "View Map",
    "section-places-title": "Must-See Places",
    "section-places-desc": "Discover some of the beauties of Agro-Nocerino-Sarnese. Click for more details and to find them on the map.",
    "filter-all": "All",
    "filter-churches": "Churches",
    "filter-monuments": "Monuments",
    "filter-castles": "Castles",
    "section-discover-title": "Discover the Region",
    "section-discover-desc": "A land where history, culture, and nature converge to create unforgettable experiences",
    "poi-historic-title": "Historic Heritage",
    "poi-historic-desc": "Explore centuries-old churches, cathedrals, and architectural marvels that tell the story of our rich past.",
    "poi-natural-title": "Natural Beauty",
    "poi-natural-desc": "From the Sarno Valley to the Lattari Mountains, discover breathtaking landscapes and pristine natural environments.",
    "poi-agri-title": "Agricultural Excellence",
    "poi-agri-desc": "Experience farm-to-table traditions, visit working farms, and taste authentic local produce.",
    "poi-ruins-title": "Archaeological Sites",
    "poi-ruins-desc": "Explore ancient Nuceria Alfaterna and other historic sites that bring the past to life.",
    "stat-historic": "Historic Sites",
    "stat-farms": "Local Farms",
    "stat-villages": "Villages",
    "stat-years": "Years of History",
    "section-map-title": "Explore the Region",
    "section-map-desc": "Navigate through historic sites, cultural landmarks, and natural beauty",
    "section-gallery-title": "Gallery",
    "section-gallery-desc": "Experience the beauty of Tredizione through images",
    "footer-about": "Celebrating the cultural heritage and natural beauty of Southern Italy's most authentic region.",
    "footer-links": "Quick Links",
    "footer-contact": "Contact",
    "footer-follow": "Follow Us",
    "footer-rights": "© 2026 Tredizione. All rights reserved.",
    "translate-btn": "Italiano",
    "chat-title": "Agro AI Assistant",
    "chat-online": "Online",
    "chat-welcome": "Hi! I'm your virtual assistant for Tredizione. How can I help you today?",
    "chat-placeholder": "Type a message...",
    "chat-bot-typing": "Assistant is typing...",
    "chat-error": "Sorry, an error occurred. Please try again later."
  }
};

let currentLang = localStorage.getItem('language') || 'en';

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      if (el.tagName === 'INPUT' && (el.type === 'text' || el.type === 'password' || el.type === 'email')) {
        el.placeholder = translations[currentLang][key];
      } else {
        el.textContent = translations[currentLang][key];
      }
    }
  });
  
  // Update the language toggle button text
  const langBtn = document.getElementById('language-toggle-text');
  if (langBtn) {
    langBtn.textContent = translations[currentLang]['translate-btn'];
  }

  // Update HTML lang attribute
  document.documentElement.lang = currentLang;
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'it' : 'en';
  localStorage.setItem('language', currentLang);
  updateContent();
  
  // Re-render places to update dynamic content
  const activeFilter = document.querySelector('.places-controls button.active')?.getAttribute('data-filter') || 'all';
  renderPlaces(activeFilter);
}

/*
╔═══════════════════════════════════════════════════════════════╗
║  🎯 SCRIPT PRINCIPALE - SITO AGRO NOCERINO-SARNESE           ║
║  Versione UMANIZZATA - Facile da leggere e comprendere       ║
╚═══════════════════════════════════════════════════════════════╝

COSA FA QUESTO FILE:
✅ Anima i numeri delle statistiche
✅ Attiva animazioni al scroll (slideIn, zoomIn, ecc)
✅ Crea effetti parallax (sfondo che si muove lentamente)
✅ Gestisce il tema light/dark e lo ricorda
✅ Mostra/nascondi il menu mobile
✅ Gestisce il carousel (slideshow) di immagini
✅ Genera dinamicamente la griglia dei siti (28 luoghi)
✅ Filtra i siti per categoria (Storia, Natura, Enogastronomia)
*/

// ═════════════════════════════════════════════════════════════
// 📊 SEZIONE 1: ANIMAZIONI - IL SITO PRENDE VITA
// ═════════════════════════════════════════════════════════════

/**
 * FUNZIONE: Numeri che contano
 * DOVE SI USA: Nelle statistiche della homepage (50+ Siti, 100+ Aziende, ecc)
 * COME FUNZIONA: Quando scrolliamo fino alle statistiche, i numeri contano da 0 al valore finale
 */
function animateStats() {
  // Step 1: Trova tutti gli elementi che hanno numeri (classe 'stat-number')
  const counters = document.querySelectorAll('.stat-number');
  
  // Step 2: Crea un osservatore che guarda quando gli elementi divengono visibili
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Se questo elemento è visibile sullo schermo...
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target')); // Numero finale (es: 50)
        let count = 0; // Parte da 0
        const speed = target / 100; // Velocità dell'animazione
        
        // Step 3: Funzione che aggiorna il numero ad ogni frame
        const update = () => {
          count += speed;
          if (count < target) {
            // Mentre non ha raggiunto il target
            el.textContent = Math.floor(count) + '+';
            // Continua l'animazione al prossimo frame
            requestAnimationFrame(update);
          } else {
            // Ha raggiunto il target, mostra il numero definitivo
            el.textContent = target.toLocaleString() + '+';
          }
        };
        
        update(); // Avvia il counter
        observer.unobserve(el); // Non controllare più questo elemento
        
        // Aggiungi effetto visuale al genitore (la card della statistica)
        entry.target.parentElement?.classList.add('stat-animate');
      }
    });
  }, { threshold: 0.6 }); // Attiva quando il 60% dell'elemento è visibile
  
  // Step 4: Inizia a controllare tutti i contatori
  counters.forEach(counter => observer.observe(counter));
}

/**
 * FUNZIONE: Animazioni al scroll
 * DOVE SI USA: Quando scrolliamo, gli elementi si animano dolcemente
 * COME FUNZIONA: Elementi con classe 'scroll-trigger' si animano quando diventano visibili
 */
function initScrollAnimations() {
  // Osserva elementi con classe 'scroll-trigger'
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Aggiungi la classe che attiva l'animazione CSS
        entry.target.classList.add('scroll-animate-in');
        
        // EFFETTO SPECIALE: I bambini si animano uno dopo l'altro (stagger)
        if (entry.target.children) {
          Array.from(entry.target.children).forEach((child, idx) => {
            if (child.classList && child.classList.contains('scroll-stagger')) {
              // Salva l'indice come variabile CSS per il delay
              child.style.setProperty('--item-index', idx);
            }
          });
        }
        
        // Non osservare più questo elemento (animazione una sola volta)
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
  
  // Inizia a controllare tutti gli elementi scroll-trigger
  document.querySelectorAll('.scroll-trigger').forEach(el => observer.observe(el));
}

/**
 * FUNZIONE: Effetto Parallax
 * DOVE SI USA: Sfondi delle hero section (si muovono lentamente durante lo scroll)
 * COME FUNZIONA: Elementi con data-parallax="0.5" si muovono più lentamente del resto
 */
function initParallax() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset; // Quanti pixel abbiamo scrollato
    
    // Trova tutti gli elementi con attributo data-parallax
    document.querySelectorAll('[data-parallax]').forEach(el => {
      const speed = el.getAttribute('data-parallax') || 0.5; // Velocità del movimento
      // speed=0.5 = si muove al 50% della velocità di scroll
      // speed=0.2 = si muove al 20% (sembra più lontano)
      el.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

/**
 * FUNZIONE: Tooltip (messaggi hover)
 * DOVE SI USA: Informazioni su hover (quando passi il mouse)
 * COME FUNZIONA: Mostra un messaggetto sopra gli elementi con data-tooltip
 */
function initInteractiveTooltips() {
  // Trova tutti gli elementi con attributo data-tooltip
  document.querySelectorAll('[data-tooltip]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      // Crea il div del tooltip
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip-popup';
      tooltip.textContent = el.getAttribute('data-tooltip'); // Il testo da mostrare
      document.body.appendChild(tooltip); // Aggiungilo alla pagina
      
      // Calcola dove metterlo (sopra l'elemento, centrato)
      const rect = el.getBoundingClientRect();
      tooltip.style.left = rect.left + rect.width / 2 + 'px';
      tooltip.style.top = rect.top - 10 + 'px';
      tooltip.style.transform = 'translateX(-50%) translateY(-100%)';
      
      // Attiva l'animazione di apparizione
      requestAnimationFrame(() => tooltip.classList.add('show'));
      
      // Quando il mouse esce, rimuovi il tooltip
      el.addEventListener('mouseleave', () => {
        tooltip.classList.remove('show');
        setTimeout(() => tooltip.remove(), 300); // Rimuovi dopo l'animazione
      });
    });
  });
}

/**
 * FUNZIONE: Gestione Navbar
 * COSA FA: Aggiunge la classe 'scrolled' quando si scende e evidenzia i link attivi
 */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section, [id]');

  window.addEventListener('scroll', () => {
    // 1. Classe scrolled
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // 2. Highlight link attivo
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// ═════════════════════════════════════════════════════════════
// 🌗 SEZIONE 2: TEMA LIGHT/DARK - IL BROWSER RICORDA
// ═════════════════════════════════════════════════════════════

/**
 * FUNZIONE: Salva un cookie (piccolo file di testo nel browser)
 * CHE È: I cookie sono salvati nel browser dell'utente
 * PERCHÉ: Per ricordare le scelte (tema, utente loggato, ecc)
 */
function setCookie(name, value, days) {
  // Calcola quando il cookie scade (es: 365 giorni da oggi)
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  // Salva il cookie: nome=valore;scadenza;percorso
  document.cookie = `${name}=${value};expires=${expires};path=/`;
}

/**
 * FUNZIONE: Legge un cookie dal browser
 * USA: getCookie('theme') per sapere se l'utente vuole light o dark
 */
function getCookie(name) {
  // Dividi i cookie per ';' e cerca quello con il nome corretto
  return document.cookie.split('; ').reduce((r, v) => {
    const [k, val] = v.split('=');
    return k === name ? val : r;
  }, null);
}

/**
 * FUNZIONE: Carica il tema salvato all'apertura della pagina
 */
function initTheme() {
  const saved = getCookie('theme'); // Leggi il cookie 'theme'
  if (saved === 'dark') {
    // Se era dark, aggiungi la classe 'dark' a <html>
    // CSS cambierà i colori quando vede questa classe
    document.documentElement.classList.add('dark');
  }
}

/**
 * FUNZIONE: Cambia tra light e dark mode
 * USA: toggleTheme() quando l'utente clicca il bottone tema
 */
function toggleTheme() {
  // Aggiungi/togli la classe 'dark' da <html> (toggle = on/off)
  const isDark = document.documentElement.classList.toggle('dark');
  // Salva la scelta nel cookie per i prossimi 365 giorni
  setCookie('theme', isDark ? 'dark' : 'light', 365);
}

// Collega il bottone al toggle del tema
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// ═════════════════════════════════════════════════════════════
// 📱 SEZIONE 3: MENU MOBILE & CAROUSEL
// ═════════════════════════════════════════════════════════════

/**
 * FUNZIONE: Menu Mobile
 * DOVE: Su schermi piccoli (mobile), il menu si nasconde in un hamburger
 * COME: Clicca l'hamburger per mostrare/nascondere il menu
 */
document.getElementById('mobile-toggle').addEventListener('click', function() {
  this.classList.toggle('active');
  document.getElementById('nav-menu').classList.toggle('active');
});

/**
 * SISTEMA: Carousel (Slideshow di immagini)
 * DOVE: Nella sezione principale della homepage
 * COME: Clicca i bottoni prev/next per scorrere tra le immagini
 */
let currentImage = 0; // Traccia quale immagine è visibile
const images = document.querySelectorAll('.carousel-image'); // Tutte le immagini

/**
 * Mostra solo l'immagine all'indice specificato
 */
function showImage(index) {
  images.forEach((img, i) => {
    // La classe 'active' mostra/nascondu l'immagine in CSS
    img.classList.toggle('active', i === index);
  });
}

/**
 * Vai all'immagine successiva (dopo l'ultima torna alla prima)
 */
function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
}

/**
 * Vai all'immagine precedente (prima della prima va all'ultima)
 */
function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage(currentImage);
}

// Collega i bottoni del carousel
document.getElementById('carousel-next').addEventListener('click', nextImage);
document.getElementById('carousel-prev').addEventListener('click', prevImage);

// ═════════════════════════════════════════════════════════════
//  SEZIONE 5: DATABASE - 28 SITI DA VISITARE
// ═════════════════════════════════════════════════════════════

/**
 * DATABASE LOCATIONS
 * Contiene tutti i 28 siti (11 storia + 5 natura + 6 enogastronomia)
 * Struttura di ogni sito:
 * - id: identificativo univoco per l'URL
 * - nome: nome completo del sito
 * - comune: città dove si trova
 * - lat/lng: coordinate GPS per la mappa
 * - categoria: tipo ('storia', 'natura', 'enogastronomia')
 * - descrizione: cosa è questo sito
 * - image: path all'immagine
 */
const luoghi = [
  // 🏛️ STORIA - 11 SITI ARCHEOLOGICI
  { 
    id: 'battistero-santa-maria-maggiore', 
    nome: "Battistero Paleocristiano di Santa Maria Maggiore", 
    comune: "Nocera Superiore", 
    lat: 40.7485, 
    lng: 14.6400, 
    categoria: 'monumenti', 
    descrizione: "Monumento paleocristiano VI secolo (La Rotonda). Vasca battesimale.", 
    image: 'src/assets/Battistero Paleocristiano di Santa Maria Maggiore.jpeg',
    it: { nome: "Battistero Paleocristiano di Santa Maria Maggiore", descrizione: "Monumento paleocristiano VI secolo (La Rotonda). Vasca battesimale." },
    en: { nome: "Early Christian Baptistery of Santa Maria Maggiore", descrizione: "6th-century early Christian monument (The Rotunda). Baptismal font." }
  },
  { 
    id: 'museo-archeologico-provinciale', 
    nome: "Museo Archeologico Provinciale dell'Agro Nocerino", 
    comune: "Nocera Inferiore", 
    lat: 40.7475, 
    lng: 14.6180, 
    categoria: 'monumenti', 
    descrizione: "Collezione di reperti dell'antica Nuceria Alfaterna.", 
    image: "src/assets/Museo Archeologico Provinciale dell'Agro Nocerino.jpg",
    it: { nome: "Museo Archeologico Provinciale dell'Agro Nocerino", descrizione: "Collezione di reperti dell'antica Nuceria Alfaterna." },
    en: { nome: "Provincial Archaeological Museum of Agro Nocerino", descrizione: "Collection of artifacts from ancient Nuceria Alfaterna." }
  },
  { 
    id: 'castello-parco-fienga', 
    nome: "Castello del Parco Fienga", 
    comune: "Nocera Inferiore", 
    lat: 40.7478, 
    lng: 14.6205, 
    categoria: 'castelli', 
    descrizione: "Fortezza medievale con viste panoramiche.", 
    image: 'src/assets/Castello_Del_Parco_Nocera.jpg',
    it: { nome: "Castello del Parco Fienga", descrizione: "Fortezza medievale con viste panoramiche." },
    en: { nome: "Fienga Park Castle", descrizione: "Medieval fortress with panoramic views." }
  },
  { 
    id: 'museo-valle-sarno', 
    nome: "Museo Archeologico Nazionale della Valle del Sarno", 
    comune: "Sarno", 
    lat: 40.8120, 
    lng: 14.6200, 
    categoria: 'monumenti', 
    descrizione: "Palazzo Capua - insediamenti dal IX sec. a.C.", 
    image: 'src/assets/Museo Archeologico Nazionale della Valle del Sarno.jpg',
    it: { nome: "Museo Archeologico Nazionale della Valle del Sarno", descrizione: "Palazzo Capua - insediamenti dal IX sec. a.C." },
    en: { nome: "National Archaeological Museum of the Sarno Valley", descrizione: "Capua Palace - settlements from the 9th century BC." }
  },
  { 
    id: 'cattedrale-san-prisco', 
    nome: "Cattedrale di San Prisco", 
    comune: "Nocera Inferiore", 
    lat: 40.7470, 
    lng: 14.6170, 
    categoria: 'chiese', 
    descrizione: "Chiesa storica della diocesi locale.", 
    image: 'src/assets/Cattedrale di San Prisco.jpg',
    it: { nome: "Cattedrale di San Prisco", descrizione: "Chiesa storica della diocesi locale." },
    en: { nome: "St. Prisco Cathedral", descrizione: "Historic church of the local diocese." }
  },
  { 
    id: 'basilica-santalfonso', 
    nome: "Basilica di Sant'Alfonso Maria de' Liguori", 
    comune: "Pagani", 
    lat: 40.7235, 
    lng: 14.5760, 
    categoria: 'chiese', 
    descrizione: "Santuario e museo alfonsiano.", 
    image: "src/assets/Basilica di Sant'Alfonso Maria de' Liguori.jpg",
    it: { nome: "Basilica di Sant'Alfonso Maria de' Liguori", descrizione: "Santuario e museo alfonsiano." },
    en: { nome: "Basilica of St. Alphonsus Maria de' Liguori", descrizione: "Alphonsian sanctuary and museum." }
  },

  { 
    id: 'concattedrale-san-michele', 
    nome: "Concattedrale di San Michele Arcangelo", 
    comune: "Sarno", 
    lat: 40.8115, 
    lng: 14.6220, 
    categoria: 'chiese', 
    descrizione: "Chiesa storica nel centro di Sarno.", 
    image: 'src/assets/Concattedrale di San Michele Arcangelo.jpg',
    it: { nome: "Concattedrale di San Michele Arcangelo", descrizione: "Chiesa storica nel centro di Sarno." },
    en: { nome: "Co-cathedral of St. Michael the Archangel", descrizione: "Historic church in the center of Sarno." }
  },
  { 
    id: 'santuario-santa-maria-dei-bagni', 
    nome: "Santuario di Santa Maria dei Bagni", 
    comune: "Scafati", 
    lat: 40.7440, 
    lng: 14.4840, 
    categoria: 'chiese', 
    descrizione: "Luogo sacro legato a fonte miracolosa.", 
    image: 'src/assets/Santuario di Santa Maria dei Bagni.jpg',
    it: { nome: "Santuario di Santa Maria dei Bagni", descrizione: "Luogo sacro legato a fonte miracolosa." },
    en: { nome: "Sanctuary of Santa Maria dei Bagni", descrizione: "Sacred place linked to a miraculous spring." }
  },
  { 
    id: 'piazza-del-corso', 
    nome: "Piazza del Corso", 
    comune: "Nocera Inferiore", 
    lat: 40.7480, 
    lng: 14.6190, 
    categoria: 'monumenti', 
    descrizione: "Area archeologica a vista con resti romani.", 
    image: 'src/assets/Piazza del Corso-Nocera_Inferiore.jpg',
    it: { nome: "Piazza del Corso", descrizione: "Area archeologica a vista con resti romani." },
    en: { nome: "Corso Square", descrizione: "Visible archaeological area with Roman remains." }
  },
  { 
    id: 'eremo-santa-maria-castello', 
    nome: "Eremo di Santa Maria a Castello", 
    comune: "Castel San Giorgio", 
    lat: 40.7720, 
    lng: 14.5560, 
    categoria: 'castelli', 
    descrizione: "Eremo medievale con vista panoramica.", 
    image: 'src/assets/Eremo_di_Santa_Maria_a_Castello.jpg',
    it: { nome: "Eremo di Santa Maria a Castello", descrizione: "Eremo medievale con vista panoramica." },
    en: { nome: "Hermitage of Santa Maria a Castello", descrizione: "Medieval hermitage with panoramic view." }
  },
];

// ═════════════════════════════════════════════════════════════
// 🎨 SEZIONE 6: RENDERING DINAMICO - CREA LA GRIGLIA
// ═════════════════════════════════════════════════════════════

/**
 * FUNZIONE: Crea la griglia di siti dinamicamente
 * ARGS: filter = 'all' mostra tutti, oppure /'chiese'/'monumenti'/'castelli' per filtrare
 * COME FUNZIONA:
 * 1. Pulisce la griglia (innerHTML = '')
 * 2. Filtra i siti per categoria
 * 3. Per ogni sito, crea una card HTML
 * 4. Aggiunge un'animazione di slideIn con delay
 * 5. Aggiunge la card alla griglia
 */
function renderPlaces(filter = 'all') {
  const grid = document.getElementById('places-grid');
  if (!grid) return; // Se non esiste la griglia, esci
  
  grid.innerHTML = ''; // Pulisci la griglia
  
  // Filtra i siti in base alla categoria scelta
  const filtered = luoghi.filter(l => filter === 'all' ? true : l.categoria === filter);
  
  // Per ogni sito filtrato...
  filtered.forEach((l, idx) => {
    // Step 1: Crea un elemento <article> per la card
    const card = document.createElement('article');
    card.className = 'place-card';
    
    // Step 2: Aggiungi animazione di slide-in con delay
    card.style.animation = `slideInUp 0.6s ease-out backwards`;
    card.style.animationDelay = `${idx * 0.1}s`; // Ogni card appare con 0.1s di ritardo
    
    // Step 3: Riempi la card con HTML
    const categoryName = translations[currentLang][`filter-${l.categoria}`] || l.categoria;
    const discoverMore = currentLang === 'it' ? 'Scopri di più' : 'Learn more';

    card.innerHTML = `
      <div class="place-card-inner">
        <!-- Immagine e overlay -->
        <div class="place-image-wrapper">
          <img class="place-image" src="${l.image}" alt="${l.nome}" loading="lazy">
          <div class="place-overlay">
            <!-- Badge con icona categoria -->
            <span class="category-badge category-${l.categoria}">
              ${getCategoryIcon(l.categoria)} ${categoryName}
            </span>
          </div>
        </div>
        
        <!-- Contenuto della card -->
        <div class="place-body">
          <div class="place-title">${l[currentLang]?.nome || l.nome}</div>
          <div class="place-meta">
            <span class="meta-item">🗺️ ${l.comune}</span>
          </div>
          <p class="place-desc">${l[currentLang]?.descrizione || l.descrizione}</p>
          <div class="place-actions">
            <!-- Bottone che porta alla pagina del sito -->
            <a class="btn btn-primary btn-glow" href="places/${l.id}.html">
              <span>${discoverMore}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    `;
    
    // Step 4: Aggiungi la card alla griglia
    grid.appendChild(card);
  });
}

/**
 * FUNZIONE: Restituisce l'emoji giusto per ogni categoria
 * INPUT: 'storia', 'natura', 'enogastronomia', o altro
 * OUTPUT: emoji corrispondente
 */
function getCategoryIcon(category) {
  const icons = {
    'chiese': '🏛️',
    'monumenti': '⛪',
    'castelli': '🏰'         // Tempio antico
  };
  return icons[category] || icons.default;
}

/**
 * FUNZIONE: Attiva i bottoni di filtro
 * COME FUNZIONA:
 * 1. Trova tutti i bottoni con classe 'places-controls button'
 * 2. Aggiunge un click listener a ogni bottone
 * 3. Quando clicchi, ricarica renderPlaces() con il filtro scelto
 * 4. Attiva il bottone (aggiunge classe 'active')
 */
function initPlaceFilters() {
  const filterBtns = document.querySelectorAll('.places-controls button');
  
  filterBtns.forEach(b => {
    b.addEventListener('click', () => {
      // Deattiva tutti i bottoni
      filterBtns.forEach(x => x.classList.remove('active'));
      // Attiva solo il bottone cliccato
      b.classList.add('active');
      // Ricarica la griglia con il nuovo filtro
      renderPlaces(b.getAttribute('data-filter'));
    });
  });
  
  // Attiva il primo bottone ("Tutti") per default
  if (filterBtns[0]) filterBtns[0].classList.add('active');
}

// ═════════════════════════════════════════════════════════════
// �️ SEZIONE 6A: INIZIALIZZAZIONE MAPPA LEAFLET
// ═════════════════════════════════════════════════════════════

/**
 * FUNZIONE: initMap()
 * QUANDO SI USA: Al caricamento della pagina
 * CHE FA: Disegna la mappa interattiva con tutti i 28 siti e i marker
 */
function initMap() {
  const mapElement = document.getElementById('interactive-map');
  if (!mapElement) return; // Se non esiste la mappa, esci
  
  // Crea la mappa centrata su Nocera Inferiore (lat: 40.75, lng: 14.62)
  const map = L.map('interactive-map').setView([40.75, 14.62], 11);
  
  // Aggiungi lo stile della mappa da OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);
  
  // Aggiungi i marker per ogni sito nella lista
  luoghi.forEach(luogo => {
    // Crea un marker sulla posizione GPS del sito
    const marker = L.marker([luogo.lat, luogo.lng])
      .bindPopup(`<b>${luogo.nome}</b><br>${luogo.comune}`)
      .addTo(map);
  });
}

// ═════════════════════════════════════════════════════════════
// 🤖 SEZIONE 11: CHATBOT - L'ASSISTENTE VIRTUALE
// ═════════════════════════════════════════════════════════════

function initChatbot() {
  // Se il chatbot-widget non esiste, lo creiamo dinamicamente
  if (!document.getElementById('chatbot-widget')) {
    const chatbotHTML = `
      <div id="chatbot-widget" class="chatbot-widget">
        <button id="chatbot-toggle" class="chatbot-toggle" aria-label="Open chat">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span class="notification-badge" id="chat-notification">1</span>
        </button>

        <div id="chatbot-window" class="chatbot-window">
          <div class="chatbot-header">
            <div class="chatbot-header-info">
              <div class="chatbot-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                  <path d="M12 6a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm0 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm0 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"></path>
                </svg>
              </div>
              <div>
                <h4 data-i18n="chat-title">${translations[currentLang]['chat-title']}</h4>
                <span class="status-online" data-i18n="chat-online">${translations[currentLang]['chat-online']}</span>
              </div>
            </div>
            <button id="chatbot-close" class="chatbot-close">&times;</button>
          </div>

          <div id="chatbot-messages" class="chatbot-messages">
            <div class="message bot">
              <div class="message-content" data-i18n="chat-welcome">
                ${translations[currentLang]['chat-welcome']}
              </div>
            </div>
          </div>

          <div class="chatbot-input-container">
            <form id="chatbot-form">
              <input type="text" id="chatbot-input" placeholder="${translations[currentLang]['chat-placeholder']}" data-i18n="chat-placeholder" autocomplete="off" />
              <button type="submit" id="chatbot-send">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
  }

  const widget = document.getElementById('chatbot-widget');
  const toggle = document.getElementById('chatbot-toggle');
  const window_el = document.getElementById('chatbot-window');
  const close = document.getElementById('chatbot-close');
  const form = document.getElementById('chatbot-form');
  const input = document.getElementById('chatbot-input');
  const messagesContainer = document.getElementById('chatbot-messages');
  const notification = document.getElementById('chat-notification');

  if (!widget || !toggle || !window_el) return;

  const openChat = () => {
    window_el.classList.add('active');
    notification.style.display = 'none';
    input.focus();
  };

  // Apri/Chiudi chat
  toggle.addEventListener('click', openChat);

  // Anche il pulsante AI nella navbar apre la chat
  const navAiBtn = document.getElementById('nav-ai-btn');
  if (navAiBtn) {
    navAiBtn.addEventListener('click', openChat);
  }

  close.addEventListener('click', () => {
    window_el.classList.remove('active');
  });

  // Gestione invio messaggi
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    // Aggiungi messaggio utente
    addMessage(text, 'user');
    input.value = '';

    // Risposta del bot dopo un piccolo delay
    setTimeout(() => {
      const response = getBotResponse(text.toLowerCase());
      addMessage(response, 'bot');
    }, 1000);
  });

  function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}`;
    msgDiv.innerHTML = `<div class="message-content">${text}</div>`;
    messagesContainer.appendChild(msgDiv);
    
    // Scroll in fondo
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function getBotResponse(input) {
    // Risposte semplici basate su parole chiave
    if (input.includes('ciao') || input.includes('hello') || input.includes('hi')) {
      return currentLang === 'it' 
        ? "Ciao! Come posso aiutarti a scoprire Tredizione?" 
        : "Hello! How can I help you discover Tredizione?";
    }
    
    if (input.includes('dove') || input.includes('where') || input.includes('location')) {
      return currentLang === 'it'
        ? "Ci troviamo in Campania, tra Napoli e Salerno. Puoi vedere la mappa qui sopra!"
        : "We are located in Campania, between Naples and Salerno. You can see the map above!";
    }

    if (input.includes('mangiare') || input.includes('eat') || input.includes('food')) {
      return currentLang === 'it'
        ? "L'Agro è famoso per il pomodoro San Marzano e i cipollotti. Ti consiglio di visitare le nostre aziende agricole!"
        : "The region is famous for San Marzano tomatoes and spring onions. I suggest visiting our local farms!";
    }

    if (input.includes('storia') || input.includes('history') || input.includes('monumenti')) {
      return currentLang === 'it'
        ? "Abbiamo una storia millenaria! Non perdere il Battistero di Nocera o il Castello del Parco."
        : "We have a thousand-year history! Don't miss the Nocera Baptistery or the Park Castle.";
    }

    return currentLang === 'it'
      ? "Interessante! Puoi chiedermi informazioni su storia, cibo, o dove ci troviamo."
      : "Interesting! You can ask me about history, food, or where we are located.";
  }
}

// ═════════════════════════════════════════════════════════════
// �🚀 SEZIONE 7: INIZIALIZZAZIONE - AVVIA TUTTO AL CARICAMENTO
// ═════════════════════════════════════════════════════════════

/**
 * EVENTO: DOMContentLoaded
 * QUANDO: Quando la pagina HTML è completamente caricata
 * COSA FA: Inizializza tutte le funzioni
 */
document.addEventListener('DOMContentLoaded', () => {
  // Navbar: Inizializza gestione scroll e active link
  initNavbar();

  // Tema: Carica il tema salvato
  initTheme();
  
  // Carousel: Mostra la prima immagine
  showImage(currentImage);
  
  // Animazioni: Attiva tutte le animazioni
  animateStats();                // Numeri che contano
  initScrollAnimations();        // Elementi che si animano al scroll
  initParallax();                // Sfondo che si muove lentamente
  initInteractiveTooltips();     // Messaggetti al hover
  initMap();                     // Inizializza la mappa interattiva
  
  // Siti: Crea la griglia e attiva i filtri
  renderPlaces();                // Crea le card iniziali
  initPlaceFilters();            // Attiva i bottoni di filtro

  // Chatbot: Inizializza l'assistente
  initChatbot();

  // Traduzione: Inizializza lingua e listener
  updateContent();
  const langToggle = document.getElementById('language-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }

  // Smooth scroll per i link della navbar
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
        // Chiudi menu mobile se aperto
        const navMenu = document.getElementById('nav-menu');
        const mobileToggle = document.getElementById('mobile-toggle');
        if (navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          mobileToggle.classList.remove('active');
        }
      }
    });
  });
});

// ═════════════════════════════════════════════════════════════
// ✨ FINE SCRIPT - TUTTO PRONTO!
// ═════════════════════════════════════════════════════════════
