# 📚 GUIDA UMANA DEL CODICE - SITO AGRO NOCERINO-SARNESE

> **Una guida scritta per PERSONE normali, non per computer**

---

## 📂 COME È ORGANIZZATO IL SITO

Immagina il sito come una **casa italiana**:

```
La Casa (Sito)
├── 🚪 ENTRATA (index.html) ← La pagina principale che vedi
├── 🎨 DIPINTI (styles.css) ← I colori e le decorazioni
├── 🧠 CERVELLO (script.js) ← Una persona che controlla tutto
└── 📚 STANZE (places/) ← 11 stanze diverse (i siti da visitare)
    ├── castello-parco-fienga.html
    ├── azienda-viticola-fiano.html
    └── ... (altre 26 stanze)
```

---

## 🎬 COME FUNZIONA IL SITO - SPIEGAZIONE SEMPLICE

### Step 1: L'utente Arriva

L'utente digita `www.agro-nocerino.com` nel browser.

### Step 2: Il Browser Legge I File

Il browser scarica:

- `index.html` → La struttura (come il progetto di una casa)
- `styles.css` → I colori e il design (come le pitture)
- `script.js` → Le azioni (come gli interruttori della luce)

### Step 3: La Magia Accade

- **HTML** dice: "Qui mettiamo una foto"
- **CSS** dice: "La foto sia grande 300px, con bordo rotondo"
- **JavaScript** dice: "Quando l'utente clicca, mostra i dettagli"

### Step 4: L'Utente Naviga

- Clicca i bottoni
- Vede animazioni dolci
- Legge i siti nel catalogo
- Parla con l'Agro AI Chatbot
- Tutto funziona perfetto!

---

## 🧰 I TRE INGREDIENTI PRINCIPALI

### 1️⃣ **HTML** = La Struttura (Scheletro)

```html
<!-- È come dire al direttore di un film:
     "Prima una casa, poi una persona dentro, poi il sole" -->

<header>Menu di Navigazione</header>
<main>
  <section id="hero">Immagine Grande Con Titolo</section>
  <section id="places">Griglia di 28 Siti</section>
</main>
<footer>Piede di Pagina</footer>
```

**Che cosa succede:**

- HTML è solo testo: non ha colori, non si muove
- È come lo "scheletro" della pagina

### 2️⃣ **CSS** = L'Aspetto (Pelle, Vestiti, Colori)

```css
/* È come dire all'artista:
   "Fai questo elemento arancione, grande 300px,
   con angoli rotondi e un'ombra dolce" */

.header {
  background-color: #ff6b35; /* Colore arancione */
  padding: 2rem; /* Spazio interno */
  border-radius: 0.5rem; /* Angoli rotondi */
  box-shadow: 0 4px 20px...; /* Ombra */
}
```

**Che cosa succede:**

- CSS trasforma il testo piatto in qualcosa di bello
- Aggiunge colori, spazi, ombre, arrotondamenti

### 3️⃣ **JavaScript** = Il Cervello (Comportamento)

```javascript
/* È come dire a un robot:
   "Quando l'utente clicca qui, conteggia i numeri velocemente" */

document.getElementById("btn").addEventListener("click", () => {
  // Quando clicca il bottone...
  animateCounter(); // Fai l'animazione
});
```

**Che cosa succede:**

- JavaScript fa muovere le cose
- Risponde ai click dell'utente
- Salva i dati (login, tema preferito)
- Crea effetti speciali

---

## 📝 DENTRO SCRIPT.JS - LE FUNZIONI PRINCIPALI

### Funzione 1: Animare i Numeri

```javascript
function animateStats() {
  // Quando scrolli e vedi "50+ Siti", il numero conta da 0 a 50
  // Effetto: 0... 10... 20... 30... 40... 50+ ✨
}
```

**Dove la vedi:** Nella homepage, sezione "Scopri il Territorio"

---

### Funzione 2: Animare al Scroll

```javascript
function initScrollAnimations() {
  // Quando scrolli, gli elementi si animano dolcemente
  // Creiamo un "IntersectionObserver" che guarda se vedi l'elemento
  // Se lo vedi → aggiungi la classe ".scroll-animate-in"
  // CSS fa il resto con @keyframes
}
```

**Dove la vedi:** Ogni card si anima quando la scorri in vista con `slideInUp` 📊

---

### Funzione 3: Effetto Parallax

```javascript
function initParallax() {
  // Quando scrolli, lo sfondo si muove LENTAMENTE
  // Crea l'effetto di profondità
  // = sfondo sembra lontano, il testo sembra vicino
}
```

**Dove la vedi:** Le hero sections (titolo grande) - lo sfondo si muove dietro il testo

---

### Funzione 4: Creare la Griglia Dinamica

```javascript
function renderPlaces(filter = "all") {
  // Legge l'array "luoghi" (28 siti)
  // Per ogni sito, crea HTML:
  //   <article class="place-card">
  //     <img src="foto"/>
  //     <h3>Nome</h3>
  //     <p>Descrizione</p>
  //     <a href="places/monte-vesuvio.html">Scopri più</a>
  //   </article>
  // Aggiunge un'animazione "slideInUp" con delay
  // Primo sito appare dopo 0ms
  // Secondo appare dopo 100ms
  // Terzo dopo 200ms (effetto domino!)
}
```

**Dove la vedi:** La griglia dei 28 siti al centro della homepage

---

### Funzione 5: Filtri per Categoria

```javascript
function initPlaceFilters() {
  // Quando clicchi i bottoni "Tutto / Storia / Natura / Enogastronomia"
  // JavaScript richiama renderPlaces() con il filtro giusto
  // Mostra solo i siti che corrispondono!
}
```

**Dove la vedi:** I 4 bottoni sopra la griglia

---

### Funzione 6: Login Semplice

```javascript
function login(username, password) {
  // Controlla se il username/password sono nel localStorage
  // Se sì → salva l'utente nel cookies per 7 giorni
  // Il bottone cambia da "Sign In" a "Hello, Marco"
}

function register(username, email, password) {
  // Nuovo utente? Aggiungi alla lista nel localStorage
  // Poi loggati automaticamente
}
```

**Dove la vedi:** Il bottone "Sign In" in alto a destra

---

## 🎨 DENTRO STYLES.CSS - I COLORI E IL DESIGN

### Le 3 Variabili Più Importanti

```css
:root {
  /* Il colore **arancione** di tutto il sito */
  --primary: hsl(16, 70%, 55%);

  /* Il colore **giallo** per i dettagli */
  --accent: hsl(38, 92%, 50%);

  /* Il colore **bianco crema** di fondo */
  --background: hsl(42, 45%, 97%);
}
```

**Capire HSL:**

- **H (Hue)**: Il colore (0=rosso, 120=verde, 240=blu, 360=rosso di nuovo)
- **S (Saturation)**: Quanto è vivido (0%=grigio, 100%=colore puro)
- **L (Lightness)**: Quanto è chiaro (0%=nero, 50%=puro, 100%=bianco)

**Esempio pratico:**

```css
/* Rosso vivido */
color: hsl(0, 100%, 50%);

/* Rosso scuro */
color: hsl(0, 100%, 25%);

/* Rosso pallido */
color: hsl(0, 50%, 75%);
```

---

### Le Animazioni Principali

```css
/* Quando un elemento appare dal basso */
@keyframes slideInUp {
  from {
    opacity: 0; /* Inizia invisibile */
    transform: translateY(40px); /* Inizia 40px più in basso */
  }
  to {
    opacity: 1; /* Finisce visibile */
    transform: translateY(0); /* Finisce al posto giusto */
  }
}

/* Quando un elemento appare con uno zoom */
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.9); /* Inizia piccolo (-10%) */
  }
  to {
    opacity: 1;
    transform: scale(1); /* Finisce normale */
  }
}
```

**Come usa il codice queste animazioni:**

```css
.place-card {
  animation: slideInUp 0.6s ease-out;
  /* Nome animazione | Durata | Curva di accelerazione */
}
```

---

## 📊 IL DATABASE - I 28 SITI

### Come È Organizzato

```javascript
const luoghi = [
  // 🏛️ STORIA (11 siti archeologici e chiese)
  {
    id: 'battistero-santa-maria-maggiore',
    nome: 'Battistero Paleocristiano',
    comune: 'Nocera Superiore',
    lat: 40.7485,      // Per Google Maps
    lng: 14.6400,      // Per Google Maps
    categoria: 'storia',
    descrizione: 'Monumento paleocristiano VI secolo...',
    image: 'src/assets/landmark-1.jpg'
  },

  // 🌿 NATURA (5 siti naturali)
  { ... },

  // 🍷 ENOGASTRONOMIA (6 aziende agricole)
  { ... }
];
```

**Cosa significa ogni campo:**

| Campo         | Esempio                   | A che serve                                  |
| ------------- | ------------------------- | -------------------------------------------- |
| `id`          | `'monte-vesuvio'`         | L'URL del sito: `places/monte-vesuvio.html`  |
| `nome`        | `'Monte Vesuvio & Parco'` | Il titolo che legge l'utente                 |
| `comune`      | `'Ercolano'`              | La città                                     |
| `lat` / `lng` | `40.8210` / `14.4265`     | Coordinate GPS per la mappa                  |
| `categoria`   | `'natura'`                | Per il filtro (storia/natura/enogastronomia) |
| `descrizione` | `'Vulcano attivo con...'` | Il testo della card                          |
| `image`       | `'src/assets/...'`        | La foto della card                           |

---

## 🔄 IL FLUSSO DELLA PAGINA

### Quando L'Utente Arriva

```
1. Browser scarica index.html
   ↓
2. HTML dice: "Qui c'è una <div id='places-grid'></div>" (vuota!)
   ↓
3. Browser esegue script.js
   ↓
4. JavaScript cerca <div id='places-grid'>
   ↓
5. Per ogni sito in "luoghi", crea HTML e lo mette nella div
   ↓
6. CSS abbellisce tutto con colori
   ↓
7. L'utente vede la griglia di 28 siti! ✨
```

### Quando L'Utente Filtra

```
Clicca bottone "Natura"
   ↓
JavaScript prende l'attributo data-filter="natura"
   ↓
Richiama renderPlaces('natura')
   ↓
Pulisce la griglia (innerHTML = '')
   ↓
Filtra solo i siti dove categoria === 'natura'
   ↓
Ricrea le card (solo 5 questa volta)
   ↓
L'utente vede solo i siti di natura! 🌿
```

---

## 🎯 COME MODIFICARE IL SITO

### CAMBIO 1: Vuoi un Nuovo Colore Arancione?

**File:** `styles.css`
**Linea:** Vicino all'inizio, dentro `:root {`

```css
PRIMA:
--primary: hsl(16, 70%, 55%);    /* Arancione attuale */

DOPO:
--primary: hsl(10, 80%, 50%);    /* Arancione più rosso */
```

**Il risultato:** Tutto il sito cambia colore (bottoni, link, hover, badge)

---

### CAMBIO 2: Vuoi Aggiungere Un Nuovo SITO?

**File:** `script.js`
**Sezione:** L'array `const luoghi = [ ... ]`

```javascript
AGGIUNGI QUI (alla fine dell'array, prima della ]):

{
  id: 'nome-sito-url', // Deve essere unico, senza spazi
  nome: 'Nome Completo Del Sito',
  comune: 'Nome Città',
  lat: 40.7500,        // Coordinate GPS
  lng: 14.6000,
  categoria: 'storia', // oppure 'natura' oppure 'enogastronomia'
  descrizione: 'Una descrizione breve che appare nella card...',
  image: 'src/assets/landmark-1.jpg'
}
```

**POI:** Crea il file `places/nome-sito-url.html` con la stessa struttura degli altri

---

### CAMBIO 3: Vuoi Cambiare Il Titolo Principale?

**File:** `index.html`
**Linea:** Dentro `<h1>` nella sezione hero

```html
PRIMA:
<h1>Agro Nocerino-Sarnese</h1>

DOPO:
<h1>Benvenuto Nel Paradiso Campano</h1>
```

---

### CAMBIO 4: Vuoi Velocizzare/Rallentare Le Animazioni?

**File:** `styles.css`
**Linea:** Dentro le righe `animation:`

```css
PRIMA (veloce):
animation: slideInUp 0.6s ease-out;

DOPO (più lenta - rimane 1 secondo):
animation: slideInUp 1s ease-out;

DOPO (velocissima - solo 0.3 secondi):
animation: slideInUp 0.3s ease-out;
```

---

## 🌙 TEMA SCURO - Come Funziona

Il tema è gestito da questa magia di CSS:

```css
/* Colori quando il tema è CHIARO */
:root {
  --background: hsl(42, 45%, 97%); /* Bianco crema */
  --foreground: hsl(24, 24%, 20%); /* Nero */
}

/* Colori quando il tema è SCURO */
.dark {
  --background: hsl(24, 30%, 12%); /* Nero-marrone */
  --foreground: hsl(42, 35%, 92%); /* Bianco */
}
```

**Come funziona:**

1. Utente clicca l'icona sole/luna
2. JavaScript esegue: `document.documentElement.classList.toggle('dark')`
3. Questo aggiunge/toglie la classe `.dark` al tag `<html>`
4. CSS vede `.dark` e usa i colori scuri
5. BOOM! Il sito diventa scuro

---

## 📱 RESPONSIVE - Per Telefoni e Tablet

Il sito si adatta automaticamente a schermi piccoli:

```css
/* DESKTOP (default) */
.place-card {
  width: 300px;
}

/* TABLET (max-width 768px) */
@media (max-width: 768px) {
  .place-card {
    width: 200px; /* Più piccolo */
  }
  .hero h1 {
    font-size: 2rem; /* Testo più piccolo */
  }
}

/* TELEFONO (max-width 480px) */
@media (max-width: 480px) {
  .place-card {
    width: 100%; /* Occupa tutta la larghezza */
  }
}
```

**Risultato:**

- Su computer → Layout grande e spazioso
- Su tablet → Layout medio
- Su telefono → Layout verticale, facile da leggere

---

## ✅ VERIFICA FINALE - Checklist

- [x] Tutti e 28 i siti visualizzati
- [x] Filtri per categoria funzionanti
- [x] Animazioni fluidissime
- [x] Tema chiaro/scuro
- [x] Menu responsivo su mobile
- [x] Carosello di immagini funzionante
- [x] Login/Registrazione
- [x] Mappa interattiva
- [x] Nessun errore nella console del browser

---

## 🆘 ERRORI COMUNI E SOLUZIONI

### "Non vedo i siti nella griglia!"

**Problema:** Probabilmente il CSS non è caricato
**Soluzione:** Ricarica la pagina (Ctrl+F5 per forzare il refresh)

### "I numeri non contano!"

**Problema:** JavaScript non riesce a trovare `.stat-number`
**Soluzione:** Controlla che le classi nei bottoni siano identiche

### "I colori cambiano ma non completamente"

**Problema:** Stai cambiando `--primary` ma ci sono colori hardcoded
**Soluzione:** Usa SEMPRE `var(--primary)` nel CSS, non colori diretti

### "La pagina è lenta!"

**Problema:** Le immagini sono troppo grandi
**Soluzione:** Usa immagini compresse (massimo 300KB per foto)

---

## 🚀 PROSSIMI PASSI

### Per Imparare di Più:

1. Leggi i commenti dentro `script.js` (sono molto dettagliati)
2. Apri il browser → Tasto F12 → Sezione "Elementi" (vedi l'HTML)
3. Sezione "Console" (vedi gli errori e i messaggi)
4. Sezione "Network" (vedi cosa scarica il browser)

### Per Migliorare il Sito:

1. Aggiungi più siti al database
2. Cambia le immagini con foto vere
3. Personalizza i colori per il vostro brand
4. Aggiungi un carrello di e-commerce
5. Collega a un database reale (Firebase, MongoDB)

### Per Pubblicare Online:

1. Compra un dominio (www.agro-sito.com)
2. Usa Netlify o Vercel (hosting gratuito)
3. Connetti il tuo repository GitHub
4. Deploy automatico! ✨

---

## 🎓 GLOSSARIO VELOCE

| Parola             | Significato                                          |
| ------------------ | ---------------------------------------------------- |
| **HTML**           | La struttura (il progetto della casa)                |
| **CSS**            | Il design (dipinti, decorazioni, colori)             |
| **JavaScript**     | Il comportamento (i bottoni che funzionano)          |
| **DOM**            | Documento HTML (l'albero di elementi)                |
| **Classe**         | Una categoria di styling (`.place-card`)             |
| **ID**             | Un identificativo unico (`#places-grid`)             |
| **Event Listener** | "Ascoltatore di eventi" (aspetta click, scroll, ecc) |
| **Array**          | Una lista di dati (`[{...}, {...}]`)                 |
| **localStorage**   | Memoria del browser (salva dati)                     |
| **Cookie**         | Piccolo file che il browser ricorda                  |
| **Variable CSS**   | Una variabile di colore (`--primary`)                |
| **Keyframes**      | Le fasi di un'animazione                             |
| **Responsive**     | Si adatta a schermi diversi                          |

---

**Scritto con ❤️ per far capire il codice a TUTTI, non solo ai programmatori professionisti**

_Domanda: "Perché il sito non funziona?"_
_Risposta: Apri il browser → F12 → Console → Leggi l'errore rosso → Cerca la soluzione_
