# 📚 INDICE COMPLETO DELLA DOCUMENTAZIONE

> **Guida rapida a tutti i manuali di questo sito**

---

## 🎯 DOVE INIZIARE?

Dipende da quello che vuoi fare:

### 👤 **Sono un utente del sito**

→ Leggi: **README.md**

- ✅ Come aprire il sito
- ✅ Come usare i filtri
- ✅ Come registrarsi
- ✅ Come attivare il tema scuro

---

### 👨‍💻 **Voglio modificare il sito**

→ Leggi questi 3 file in questo ordine:

1. **README.md** (3 minuti)
   - Overview generale
   - Struttura delle cartelle
   - Come iniziare

2. **GUIDA-UMANA.md** (10 minuti)
   - Come è organizzato il sito
   - Come funziona
   - 4 esempi pratici di modifiche

3. **MANUALE-HTML.md** (15 minuti)
   - Struttura del codice HTML
   - Cos'è ogni sezione
   - Come aggiungere cose nuove

---

### 🧠 **Sono uno sviluppatore / Voglio capire il codice**

→ Leggi tutto in questo ordine:

1. **README.md** (panoramica)
2. **GUIDA-UMANA.md** (concetti)
3. **MANUALE-HTML.md** (architettura)
4. **Commenti nel script.js** (logica JavaScript)
5. **Commenti nel styles.css** (sistema di design)

---

## 📖 DESCRIZIONE DETTAGLIATA DI OGNI FILE

### 📄 **README.md**

**Lunghezza:** 300 righe  
**Tempo lettura:** 5 minuti  
**Difficoltà:** ⭐ Facile

**Cosa contiene:**

- Introduzione: Cos'è il sito?
- Come iniziare
- Struttura delle cartelle (visualizzazione ad albero)
- I 3 pilastri (HTML, CSS, JavaScript)
- Come personalizzare i colori
- Come aggiungere un nuovo sito
- Tabella delle tecnologie usate
- Troubleshooting per 5 problemi comuni
- Link ai file di documentazione

**Perfetto per:** Chiunque voglia una visione d'insieme

---

### 📖 **GUIDA-UMANA.md**

**Lunghezza:** 600 righe  
**Tempo lettura:** 20 minuti  
**Difficoltà:** ⭐ Facile (ma dettagliato)

**Cosa contiene:**

- 📂 Come è organizzato il sito (metafora casa italiana)
- 🎬 Come funziona il sito (step by step)
- 🧰 I tre ingredienti HTML/CSS/JavaScript
- 📝 Dentro script.js - funzioni principali (6 funzioni spiegate)
- 🎨 Dentro styles.css - colori e design (sistema HSL)
- 📊 Il database - 28 siti (tabella campi)
- 🔄 Il flusso della pagina (diagramma utente)
- 🎯 Come modificare il sito (4 esempi pratici!)
- 🌙 Tema scuro - Come funziona
- 📱 Responsive - Per telefoni e tablet
- ✅ Verifica finale - Checklist
- 🆘 Errori comuni e soluzioni (troubleshooting)
- 🚀 Prossimi passi (idee per espandere)
- 🎓 Glossario veloce (20 termini)

**Perfetto per:** Neofiti che vogliono capire come funziona tutto + esempi pratici

---

### 📘 **MANUALE-HTML.md**

**Lunghezza:** 400 righe  
**Tempo lettura:** 15 minuti  
**Difficoltà:** ⭐⭐ Intermedio

**Cosa contiene:**

- 📂 Struttura completa di index.html (ASCII tree)
- 🧱 Sezione per sezione spiegata (10 sezioni)
  - HEAD (meta info)
  - NAVBAR (barra di navigazione)
  - HERO (grande immagine)
  - DISCOVER (3 categorie)
  - STATS (numeri che contano)
  - PLACES (i 28 siti)
  - MAP (mappa interattiva)
  - CAROUSEL (galleria immagini)
  - FOOTER (piè di pagina)
  - MODAL (pop-up login)
- 🔗 Attributi importanti (id, class, data-\*)
- 📱 Responsive design (breakpoint 768px, 480px)
- 🎨 11 pagine di siti (place pages)
- 🤖 Come JavaScript crea le card dinamicamente
- 🎯 Checklist per HTML
- 🚀 Come aggiungere una nuova sezione
- 📝 Note importanti (Do's e Don'ts)
- 📊 Tabella di riferimento veloco

**Perfetto per:** Sviluppatori che vogliono capire l'architettura e il flusso dati

---

### 💻 **script.js**

**File vero e proprio nel sito**  
**Lunghezza:** 400+ righe  
**Linguaggio:** JavaScript ES6

**Cosa contiene:** (Controllare i commenti italiani nel file)

- **SEZIONE 1:** Animazioni (animateStats, initScrollAnimations, initParallax, initInteractiveTooltips)
- **SEZIONE 2:** Tema & Cookie (setCookie, getCookie, initTheme, toggleTheme)
- **SEZIONE 3:** Menu Mobile & Carousel (showImage, nextImage, prevImage)
- **SEZIONE 4:** Autenticazione (login, register, updateAuthUI)
- **SEZIONE 5:** Database (const luoghi = [...28 oggetti...])
- **SEZIONE 6:** Rendering Dinamico (renderPlaces, initPlaceFilters)
- **SEZIONE 7:** Inizializzazione (DOMContentLoaded)

**Perfetto per:** Sviluppatori che vogliono modificare la logica JavaScript

---

### 🎨 **styles.css**

**File vero e proprio nel sito**  
**Lunghezza:** 1700+ righe  
**Linguaggio:** CSS3

**Cosa contiene:** (Controllare i commenti italiani nel file)

- **SEZIONE 1:** Variabili CSS (colori HSL, ombre, transizioni)
- **SEZIONE 2:** Bottoni (btn, btn-primary, btn-small, icon-btn)
- **SEZIONE 3:** Navbar (barra fissa in alto)
- **SEZIONE 4:** Hero Section (immagine grande)
- **SEZIONE 5:** Discover Section (3 categorie)
- **SEZIONE 6:** Places Section (griglia 28 siti)
- **SEZIONE 7:** Map Section (mappa interattiva)
- **SEZIONE 8:** Carousel (galleria immagini)
- **SEZIONE 9:** Footer (piè di pagina)
- **SEZIONE 10:** Animazioni Place Pages (slideInDown, slideInUp, zoomIn)
- **SEZIONE 11:** Modal (pop-up)
- **SEZIONE 12:** 12 Animazioni Moderne (slideUp, glow, pulse, shimmer, float, ecc)
- **SEZIONE 13:** Effetti Moderni (glassmorphism, glow, ecc)

**Come funzionano le animazioni:**

```
.scroll-trigger         = Elemento invisibile
.scroll-animate-in      = Animazione quando lo vedi al scroll
.scroll-stagger         = Ritardi sfalsati (0.1s, 0.2s, 0.3s, ecc)
--item-index            = CSS variable per il ritardo
```

**Perfetto per:** Web designer e developer CSS

---

## 🎓 PERCORSI DI APPRENDIMENTO

### 📚 **Percorso 1: Utente Finale** (5 minuti)

```
README.md (Come usare il sito)
        ↓
Fine!
```

### 📚 **Percorso 2: Content Manager** (30 minuti)

```
README.md
    ↓
GUIDA-UMANA.md (Sezione "Come modificare")
    ↓
Fai 4 modifiche pratiche
    ↓
Fine!
```

### 📚 **Percorso 3: Developer Frontend** (1 ora)

```
README.md
    ↓
GUIDA-UMANA.md (tutto)
    ↓
MANUALE-HTML.md (tutto)
    ↓
Leggi script.js (con commenti)
    ↓
Leggi styles.css (con commenti)
    ↓
Fine!
```

### 📚 **Percorso 4: Web Master** (2 ore)

```
Percorso 3 (tutto)
    ↓
Installa Node.js + WebPack (opzionale)
    ↓
Setup CI/CD con GitHub Actions
    ↓
Deploy su Netlify o Vercel
    ↓
Fine!
```

---

## 🔍 RICERCA VELOCE

Cerchi qualcosa? Usa Ctrl+F:

### "Come cambio il colore?"

→ Leggi: **README.md** → Sezione "Personalizzazione Facile"

### "Come aggiungo un nuovo sito?"

→ Leggi: **README.md** → Sezione "Aggiungere Un Nuovo SITO"  
→ Oppure: **GUIDA-UMANA.md** → Sezione "CAMBIO 2"

### "Come funziona il responsive?"

→ Leggi: **MANUALE-HTML.md** → Sezione "Responsive Design"  
→ Oppure: **styles.css** → Cerca @media query

### "Come funzionano le animazioni?"

→ Leggi: **styles.css** → Sezione "SEZIONE 12: Animazioni Moderne"

### "Come funziona il filtro per categoria?"

→ Leggi: **GUIDA-UMANA.md** → Sezione "CAMBIO 3"  
→ Oppure: **script.js** → Funzione initPlaceFilters()

### "Come si fa il login?"

→ Leggi: **script.js** → Funzione login() (con commenti italiani)

### "Qual è il database dei 28 siti?"

→ Leggi: **script.js** → const luoghi = [...]  
→ Oppure: **GUIDA-UMANA.md** → Sezione "Il database"

---

## 📊 PANORAMICA DELLA CODEBASE

```
📦 Sito prof/
│
├─ 📚 DOCUMENTAZIONE
│  ├─ README.md              ← INIZIA QUI (uso del sito)
│  ├─ GUIDA-UMANA.md         ← LEGGI QUESTO (come funziona)
│  ├─ MANUALE-HTML.md        ← POI QUESTO (architettura)
│  ├─ INDICE.md              ← TU SEI QUI
│  ├─ progetto.txt           ← Note di progetto
│  └─ sito_completo.txt      ← Backup testo
│
├─ 🌐 CODICE PRINCIPALE
│  ├─ index.html             ← Home page (leggi script.js per la magia)
│  ├─ script.js              ← Logica JavaScript (400+ righe, commentate)
│  └─ styles.css             ← Design del sito (1700+ righe, commentati)
│
├─ 📍 28 PAGINE DI SITI
│  └─ places/
│     ├─ monte-vesuvio.html
│     ├─ azienda-viticola-fiano.html
│     └─ ... (26 altri siti)
│
├─ 🖼️ IMMAGINI
│  └─ src/assets/
│     ├─ hero-agro.jpg
│     ├─ landmark-1.jpg
│     └─ ... (altre immagini)
│
└─ ⚙️ CONFIGURAZIONE
   ├─ package.json           ← Dipendenze Node.js
   ├─ tsconfig.json          ← Configurazione TypeScript (opzionale)
   ├─ tsconfig.app.json      ← Configurazione app TypeScript
   ├─ tsconfig.node.json     ← Configurazione node TypeScript
   ├─ postcss.config.js      ← Configurazione PostCSS
   ├─ components.json        ← Configurazione componenti
   └─ robots.txt             ← Info per Google
```

---

## 🎬 FLUSSO DEL SITO (Per Principianti)

```
1️⃣ UTENTE APRE IL SITO
   ↓
2️⃣ BROWSER CARICA index.html
   ↓
3️⃣ HTML CARICA styles.css (colori e design)
   ↓
4️⃣ HTML CARICA script.js (interattività)
   ↓
5️⃣ JavaScript LEGGE il database (const luoghi)
   ↓
6️⃣ JavaScript CREA le 28 card HTML
   ↓
7️⃣ CSS ANIMA le card (slideInUp, glow, ecc)
   ↓
8️⃣ UTENTE VEDE il sito bello e animato! ✨
   ↓
9️⃣ UTENTE CLICCA un filtro
   ↓
🔟 JavaScript FILTRA i siti e ricrea le card
   ↓
1️⃣1️⃣ CSS ANIMA le carte nuove
   ↓
1️⃣2️⃣ PERFETTO! Il sito funziona! 🎉
```

---

## 🆘 AIUTO VELOCE

### Sto leggendo le guide e sono confuso

- [ ] Hai letto README.md? Se no, inizia di lì
- [ ] Hai capito HTML/CSS/JavaScript? Se no, leggi GUIDA-UMANA.md sezione "I tre ingredienti"
- [ ] Hai cercato nel glossario della GUIDA-UMANA.md?

### Ho aperto il sito e non vedo i siti

- [ ] Il file è stato caricato? (Ctrl+F5 per forzare il download)
- [ ] Apri il browser console (F12) → vedi errori rossi?
- [ ] Controlla che script.js sia caricato (F12 → Network → script.js)

### Ho modificato il codice e non funziona

- [ ] Hai salvato il file? (Ctrl+S)
- [ ] Hai ricaricato il browser? (Ctrl+F5)
- [ ] Hai scatenato un errore? (F12 → Console)

### Voglio aggiungere una nuova funzione

- [ ] Leggi MANUALE-HTML.md → "Aggiungere una nuova sezione"
- [ ] Segui gli step per HTML, CSS, JavaScript
- [ ] Testa nel browser prima di pubblicare

---

## 🌟 FILE CONSIGLIATI LEGGERE

### Per Capire Tutto ⭐⭐⭐⭐⭐

1. GUIDA-UMANA.md (20 minuti, spiega tutto semplicemente)

### Per Modificare Cose ⭐⭐⭐⭐

1. README.md → Sezione "Personalizzazione facile"
2. GUIDA-UMANA.md → Sezione "Come modificare il sito"

### Per Capire Il Codice ⭐⭐⭐⭐⭐

1. MANUALE-HTML.md (15 minuti, architettura)
2. script.js (leggi i commenti italiani)
3. styles.css (leggi i commenti italiani)

### Per Aggiungere Funzioni Nuove ⭐⭐⭐⭐⭐

1. MANUALE-HTML.md → Sezione "Aggiungere una nuova sezione"
2. script.js → Copia una funzione e modifica
3. styles.css → Aggiungi le classi CSS

---

## 📞 SUPPORTO

Se hai dubbi:

1. **Cercare nel README.md** (5 volte su 10 è documentato)
2. **Cercare nel GUIDA-UMANA.md** (4 volte su 10 è qui)
3. **Cercare nel MANUALE-HTML.md** (1 volta su 10 è qui)
4. **Cercare nel glossario** (è veloce!)
5. **Aprire F12 (console del browser)** e leggere gli errori

---

## ✨ CHECKLIST: "Ho Capito Tutto?"

- [ ] Ho aperto il sito nel browser e vedo i 28 siti
- [ ] Ho cliccato un filtro (es: "Natura") e funziona
- [ ] Ho attivato il tema scuro e i colori cambiano
- [ ] Ho aperto F12 console e non vedo errori rossi
- [ ] Ho letto almeno README.md
- [ ] Ho aperto script.js e vedo i commenti italiani
- [ ] Ho aperto styles.css e vedo i commenti italiani
- [ ] Ho capito cosa fa HTML, CSS, JavaScript
- [ ] So dove modificare il colore primario
- [ ] So come aggiungere un nuovo sito

**Se tutti i ✓ sono spuntati... CONGRATULAZIONI! 🎉**

Ora sei pronto a:

- Modificare il sito
- Aggiungere nuovi siti
- Cambiarare i colori
- Pubblicare online
- Mostrare il sito al mondo!

---

**Happy Coding!** 🚀

_Ultima modifica: 2026_  
_Documentazione Versione: 1.0 - Completa e 100% Italiana_
