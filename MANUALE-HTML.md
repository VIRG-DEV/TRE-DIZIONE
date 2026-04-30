# 📄 MANUALE HTML - Come È Strutturato Il Sito

> **Guida per capire come è organizzato il codice HTML**

---

## 📂 COSA CONTIENE IL NOSTRO HTML

Il file `index.html` è come la **spina dorsale** del sito.  
Dice al browser: "Fai un header qui, il contenuto qui, il footer qui".

```
index.html (HOME PAGE)
├─ <head> → Meta, CSS, Google Fonts
├─ <body>
│  ├─ <nav> → Barra in alto (logo, menu, tema, login)
│  ├─ <section class="hero"> → Grande immagine + titolo
│  ├─ <section class="discover"> → 3 categorie (Storia, Natura, Cibo)
│  ├─ <section class="stats"> → 3 numeri statistici
│  ├─ <section class="places"> → I 28 siti
│  ├─ <section class="carousel"> → Galleria di immagini
│  ├─ <section class="map"> → Mappa interattiva
│  ├─ <footer> → Link, contatti, social
│  └─ <div class="modal"> → Pop-up login/registrazione
└─ <script> → JavaScript esterno (script.js)
```

---

## 🧱 SEZIONE PER SEZIONE

### 1️⃣ **HEAD** (Informazioni Per Il Browser)

```html
<head>
  <meta charset="UTF-8" />
  ← Codifica caratteri (ä, é, ecc)
  <meta name="viewport" ... />
  ← Responsive (funziona su telefono)
  <link rel="stylesheet" href="styles.css" />
  ← Il file dei colori e design
  <link href="..." rel="stylesheet" />
  ← Font Google (caratteri belli)
  <title>...</title>
  ← Titolo che vedi nella tab del browser
</head>
```

**Cosa fa:**

- Dice al browser quale file CSS usare
- Dice che il sito è responsive
- Carica i font da Google Fonts
- Carica l'icona del sito (favicon)

---

### 2️⃣ **NAVBAR** (Barra In Alto)

```html
<nav class="navbar">
  <div class="nav-container">
    <!-- Logo A Sinistra -->
    <div class="nav-brand">
      <svg>...</svg>
      <span>AGRO NOCERINO-SARNESE</span>
    </div>

    <!-- Menu Al Centro -->
    <div class="nav-menu">
      <a href="#hero">Home</a>
      <a href="#discover">Scopri</a>
      <a href="#places">Tutti i Siti</a>
    </div>

    <!-- Bottoni A Destra (Tema, Login) -->
    <div class="nav-actions">
      <button class="theme-toggle">☀️ / 🌙</button>
      <button class="sign-in-btn">Sign In</button>
    </div>
  </div>
</nav>
```

**Cosa fa:**

- Mostra il logo del sito
- Contiene i link per navigare
- Bottone per attivare il tema scuro
- Bottone per login/registrazione

**Classe importante:**

- `navbar.scrolled` → Quando scrolli, la navbar riceve un'ombra

---

### 3️⃣ **HERO SECTION** (Prima Cosa Che Vedi)

```html
<section class="hero" id="hero">
  <!-- Sfondo immagine -->
  <div
    class="hero-bg"
    style="background-image: url('src/assets/hero-agro.jpg')"
  ></div>

  <!-- Testo centrato sopra -->
  <div class="hero-content">
    <h1>BENVENUTO NELL'AGRO NOCERINO-SARNESE</h1>
    <p>Scopri 28 siti pieni di storia, natura e tradizione</p>

    <!-- Due bottoni -->
    <div class="hero-actions">
      <button class="btn btn-primary">Esplora Ora</button>
      <button class="btn btn-secondary">Scopri Di Più</button>
    </div>
  </div>

  <!-- Icona "Scorri Verso Il Basso" -->
  <div class="scroll-indicator">
    <svg>...</svg>
  </div>
</section>
```

**CSS Magic:**

- `height: 100vh` → Occupa tutto lo schermo
- `background-image` → L'immagine di fondo
- `::after` → Sfumatura scura sopra l'immagine

---

### 4️⃣ **DISCOVER SECTION** (Le 3 Categorie)

```html
<section class="discover-section" id="discover">
  <div class="section-header">
    <h2>Scopri Le Categorie</h2>
    <p>Scegli quello che più ti affascina</p>
  </div>

  <!-- 3 Card -->
  <div class="poi-grid">
    <!-- Card 1: Storia -->
    <div class="poi-card">
      <div class="poi-icon">
        <svg><!-- Icona chiesa --></svg>
      </div>
      <h3>🏛️ Siti Storici</h3>
      <p>Esplora chiese, musei e rovine romane...</p>
    </div>

    <!-- Card 2: Natura -->
    <div class="poi-card">
      <div class="poi-icon">
        <svg><!-- Icona montagna --></svg>
      </div>
      <h3>🌿 Natura</h3>
      <p>Boschi, montagne, fiumi e panorami...</p>
    </div>

    <!-- Card 3: Enogastronomia -->
    <div class="poi-card">
      <div class="poi-icon">
        <svg><!-- Icona vino --></svg>
      </div>
      <h3>🍷 Enogastronomia</h3>
      <p>Cantine, caseifici, frantoi e tradizione...</p>
    </div>
  </div>
</section>
```

**Cosa fa:**

- Mostra 3 card grandi
- Al click su una card, filtra la griglia dei 28 siti
- Le card hanno effetto hover (si alzano)

---

### 5️⃣ **STATS SECTION** (Numeri Statistici)

```html
<div class="stats-grid">
  <div class="stat-item scroll-trigger scroll-stagger">
    <div class="stat-number">28</div>
    <div class="stat-label">Siti Interessanti</div>
  </div>

  <div class="stat-item scroll-trigger scroll-stagger">
    <div class="stat-number">11</div>
    <div class="stat-label">Siti Storici</div>
  </div>

  <!-- ... altri numeri ... -->
</div>
```

**Magic:**

- I numeri "contano" dal 0 al valore finale quando scrolli
- Usano `scroll-trigger` e `scroll-stagger` per l'animazione
- JavaScript fa il conteggio (vedi script.js)

---

### 6️⃣ **PLACES SECTION** (I 28 Siti)

```html
<section class="places-section" id="places">
  <!-- FILTRI SOPRA -->
  <div class="places-controls">
    <button class="filter-btn active" data-filter="all">🎯 Tutti (28)</button>
    <button class="filter-btn" data-filter="storia">🏛️ Storia (11)</button>
    <button class="filter-btn" data-filter="natura">🌿 Natura (5)</button>
    <button class="filter-btn" data-filter="enogastronomia">🍷 Cibo (6)</button>
  </div>

  <!-- GRIGLIA DI CARD -->
  <div class="places-grid" id="places-grid">
    <!-- JavaScript crea le card qui dinamicamente -->
    <!-- Ogni card avrà:
         - Immagine
         - Nome sito
         - Città
         - Descrizione
         - Bottone "Scopri Di Più"
    -->
  </div>
</section>
```

**Come Funziona:**

1. Clicchi un filtro (ad es: "Natura")
2. JavaScript vede il click
3. Filtra l'array "luoghi" per categoria
4. Genera le card HTML solo per quei siti
5. Applica animazioni staggered

---

### 7️⃣ **MAP SECTION** (Mappa Interattiva)

```html
<section class="map-section">
  <div class="container">
    <div class="section-header">
      <h2>Localizzazione Dei Siti</h2>
    </div>

    <!-- Contenitore della mappa Leaflet -->
    <div id="interactive-map"></div>
  </div>
</section>
```

**JavaScript Magic:**

- Crea una mappa Leaflet.js
- Aggiunge un marker per ogni sito
- Clicca un marker → Apre la finestra popup con info

---

### 8️⃣ **CAROUSEL** (Galleria Di Immagini)

```html
<section class="carousel-section">
  <div class="carousel-container">
    <!-- Le immagini, una sopra l'altra -->
    <div class="carousel-images">
      <img class="carousel-image active" src="src/assets/banner-1.jpg" alt="" />
      <img class="carousel-image" src="src/assets/banner-2.jpg" alt="" />
      <img class="carousel-image" src="src/assets/banner-3.jpg" alt="" />
    </div>

    <!-- Bottone freccia sinistra -->
    <button class="carousel-btn carousel-prev">
      <svg>←</svg>
    </button>

    <!-- Bottone freccia destra -->
    <button class="carousel-btn carousel-next">
      <svg>→</svg>
    </button>
  </div>
</section>
```

**Magia CSS:**

- Tutte le immagini sono `position: absolute`
- Una ha `opacity: 1` (visibile)
- Le altre hanno `opacity: 0` (invisibili)
- JavaScript cambia quale ha opacity 1

---

### 9️⃣ **FOOTER** (Piè Di Pagina)

```html
<footer class="footer">
  <div class="footer-grid">
    <!-- Colonna 1: Brand -->
    <div>
      <div class="footer-brand">
        <svg>...</svg>
        <h3>AGRO</h3>
      </div>
      <p>Scopri le bellezze della regione...</p>
    </div>

    <!-- Colonna 2: Link Utili -->
    <div class="footer-col">
      <h4>Link Utili</h4>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#places">Siti</a></li>
        <li><a href="#map">Mappa</a></li>
      </ul>
    </div>

    <!-- Colonna 3: Contatti -->
    <div class="footer-col">
      <h4>Contatti</h4>
      <ul class="contact-list">
        <li>
          <svg>📧</svg>
          <span>info@agro.com</span>
        </li>
        <li>
          <svg>📞</svg>
          <span>+39 081 XXXXXXX</span>
        </li>
      </ul>
    </div>

    <!-- Colonna 4: Social Media -->
    <div class="footer-col">
      <h4>Seguici</h4>
      <div class="social-links">
        <a href="#" class="social-link"><svg>f</svg></a>
        <a href="#" class="social-link"><svg>📷</svg></a>
      </div>
    </div>
  </div>

  <!-- Copyright -->
  <div class="footer-bottom">
    <p>&copy; 2026 AGRO NOCERINO-SARNESE. Tutti i diritti riservati.</p>
  </div>
</footer>
```

---

### 🔟 **MODAL** (Pop-up Login)

```html
<div class="modal" id="auth-modal">
  <div class="modal-content">
    <!-- Bottone Chiudi X -->
    <button class="modal-close">✕</button>

    <!-- Form Login/Registrazione -->
    <div class="auth-container">
      <h2>Sign In</h2>
      <p class="auth-subtitle">Oppure crea un nuovo account</p>

      <form id="auth-form">
        <div class="form-group">
          <label>Email</label>
          <input type="email" required />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" required />
        </div>

        <button type="submit" class="btn btn-primary btn-full">Sign In</button>
      </form>

      <div class="auth-toggle">
        Non hai account?
        <a href="#" onclick="toggleRegister()">Registrati qui</a>
      </div>
    </div>
  </div>
</div>
```

---

## 🔗 ATTRIBUTI IMPORTANTI

### `id` - Identificatore Univoco

```html
<!-- id="hero" = Quest'elemento si chiama "hero" -->
<section class="hero" id="hero">...</section>

<!-- Nel menu puoi linkare a lui -->
<a href="#hero">Vai all'hero</a>

<!-- JavaScript può trovarlo -->
const hero = document.getElementById('hero');
```

### `class` - Classe CSS

```html
<!-- class="btn btn-primary" = Questo elemento ha stili dalla CSS -->
<button class="btn btn-primary">Clicca</button>

<!-- Lo stile viene da .btn e .btn-primary in styles.css -->
```

### `data-*` - Dati Personalizzati

```html
<!-- data-filter="natura" = JavaScript sa quale categoria filtrare -->
<button class="filter-btn" data-filter="natura">Natura</button>

<!-- JavaScript legge
const category = button.dataset.filter; // "natura"
-->
```

---

## 📱 RESPONSIVE DESIGN

Dal file `styles.css`, ci sono 2 breakpoint principali:

### **Tablet** (768px e meno)

```css
@media (max-width: 768px) {
  .nav-menu {
    /* Menu diventa mobile, posizionato fisso */
  }
  .places-grid {
    /* Da 3 colonne passa a 2 colonne */
  }
}
```

### **Telefono** (480px e meno)

```css
@media (max-width: 480px) {
  /* Ancora più piccolo, layout single colonna */
  .places-grid {
    grid-template-columns: 1fr;
  }
}
```

**HTML Non Cambia!** Solo il CSS si adatta. Vedi come è bello? 🎉

---

## 🎨 11 PAGINE DI SITI (Places)

Oltre all'homepage, abbiamo 28 file HTML, uno per ogni sito:

```
places/
├─ castello-parco-fienga.html   ← Dettagli Castello
├─ azienda-viticola-fiano.html  ← Dettagli azienda vino
├─ oasi-fiume-sarno.html        ← Dettagli oasi
├─ parco-monti-picentini.html   ← Dettagli parco
├─ ... (altri 24 siti)
```

Ogni pagina place ha:

- Header con background gradient
- Galleria immagini
- Dettagli sulla storia
- Informazioni pratiche (orari, indirizzo, web)
- Mappa Leaflet con marker
- Link a siti correlati

**Struttura simile per tutte!**

---

## 🤖 COME JAVASCRIPT CREA LE CARD

Nel file `script.js` c'è questo:

```javascript
function renderPlaces(filter = "all") {
  // 1. Filtra l'array "luoghi"
  const filtered = luoghi.filter((luogo) => {
    return filter === "all" || luogo.categoria === filter;
  });

  // 2. Crea HTML per ogni sito
  const html = filtered
    .map(
      (luogo, index) => `
    <div class="place-card scroll-trigger scroll-stagger" 
         style="--item-index: ${index}">
      <img src="${luogo.image}" alt="${luogo.nome}">
      <h3>${luogo.nome}</h3>
      <p>${luogo.comune}</p>
      <a href="places/${luogo.id}.html" class="btn btn-small">
        Scopri Di Più
      </a>
    </div>
  `,
    )
    .join("");

  // 3. Mette il HTML nel DOM
  document.getElementById("places-grid").innerHTML = html;
}
```

**Risultato:** Le 28 card appaiono nella griglia senza che tu scriva il codice HTML! ✨

---

## 🎯 CHECKLIST: IL TUO HTML

Assicurati che il tuo `index.html` abbia:

- ✅ `<meta charset="UTF-8">` (caratteri corretti)
- ✅ `<meta name="viewport">` (responsive)
- ✅ `<link rel="stylesheet" href="styles.css">` (CSS caricato)
- ✅ `<div id="places-grid">` (dove JavaScript mette le card)
- ✅ `<div id="interactive-map">` (dove va la mappa)
- ✅ `<div id="auth-modal">` (la finestra di login)
- ✅ `<script src="script.js">` (JavaScript alla fine)
- ✅ Navbar con classe `navbar`
- ✅ Sezioni con id: `hero`, `discover`, `places`, etc

---

## 🚀 AGGIUNGERE UNA NUOVA SEZIONE

Se vuoi aggiungere una sezione nuova (es: "Testimonianze"):

1. Aggiungi il codice HTML in `index.html`
2. Aggiungi lo stile in `styles.css`
3. Eventualmente, aggiungi logica in `script.js`

**Esempio:**

```html
<!-- In index.html, prima del footer -->
<section class="testimonials-section" id="testimonials">
  <div class="container">
    <h2>Cosa Dicono I Visitatori</h2>
    <div class="testimonials-grid">
      <!-- Card testimonianze -->
    </div>
  </div>
</section>
```

```css
/* In styles.css */
.testimonials-section {
  padding: 4rem 0;
  background: linear-gradient(...);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
```

---

## 📝 NOTE IMPORTANTI

### ✅ I Do's (Fai Questo)

- Usa `id` per sezioni importanti
- Usa `class` per stili ripetibili
- Usa `data-*` per passare dati a JavaScript
- Mantieni HTML pulito e logico
- Aggiungi `alt` alle immagini (accessibilità)

### ❌ Don'ts (Non Fai Questo)

- Non aggiungere CSS inline (`style="..."`)
- Non mescolare HTML e logica JavaScript
- Non dimenticare di linkare `styles.css` e `script.js`
- Non usare nomi confusi per id e class

---

## 🎓 RIFERIMENTO VELOCE

| Elemento                     | Cosa Fa                 | Dove                      |
| ---------------------------- | ----------------------- | ------------------------- |
| `<nav>`                      | Barra di navigazione    | In alto, fissa            |
| `<section class="hero">`     | Sezione grande immagine | Prima sezione             |
| `<section class="discover">` | 3 categorie             | Dopo hero                 |
| `<div class="places-grid">`  | Griglia 28 siti         | Dopo discover             |
| `<div id="interactive-map">` | Mappa Leaflet           | Sezione map               |
| `<footer>`                   | Piè di pagina           | In fondo                  |
| `<div id="auth-modal">`      | Pop-up login            | Nascosto, appare al click |

---

**Buona codifica!** 🚀

Se hai dubbi, leggi i commenti nel file `index.html` stesso!
