# 🚀 QUICK START - INIZIA IN 5 MINUTI

> **La guida più veloce per iniziare subito**

---

## ⚡ OPZIONE 1: Vuoi Solo Aprire Il Sito?

### Passo 1: Apri Il Sito (30 secondi)

```bash
# Naviga nella cartella del sito
cd "c:\Desktop 14 12 2026\PROGETTI\Sito prof"

# Apri il terminale qui e digita:
python -m http.server 8000

# Poi apri il browser e vai su:
http://localhost:8000
```

**FATTO!** 🎉 Il sito è accessibile!

---

## ⚡ OPZIONE 2: Vuoi Modificare il Sito?

### Passo 1: Apri il File (1 minuto)

```
Cartella: Sito prof
├─ index.html         ← Scarica questo con un editor (es: VS Code)
├─ script.js          ← Questo ha i commenti italiani
├─ styles.css         ← Questo ha i colori
└─ README.md          ← Leggi questo prima
```

**Scaricamento per principianti:**

1. Apri VS Code
2. Ctrl+O → Seleziona la cartella "Sito prof"
3. Nella left sidebar vedi i file
4. Clicca su README.md

### Passo 2: Leggi Quello Che Ti Serve (5 minuti)

**Se vuoi cambiare un colore:**

```
Apri: styles.css (riga ~10)

PRIMA:  --primary: hsl(16, 70%, 55%);    ← Arancione
DOPO:   --primary: hsl(240, 100%, 50%);  ← Blu

Salva e ricarica il browser (Ctrl+F5)
```

**Se vuoi aggiungere un nuovo sito:**

```
Apri: script.js (cerca "const luoghi = [")

Appena prima della "]" finale, aggiungi:

{
  id: 'nuovo-sito',
  nome: 'Nome Del Sito',
  comune: 'Avellino',
  lat: 40.7500,
  lng: 14.6000,
  categoria: 'natura',
  descrizione: 'Una breve descrizione...',
  image: 'src/assets/landmark-1.jpg'
}

Salva e ricarica il browser (Ctrl+F5)
```

**Se vuoi cambiare il titolo:**

```
Apri: index.html (riga ~1)

PRIMA:  <body>
DOPO:   <body style="color: red;">

Oppure meglio: Apri styles.css e modifica da lì
```

---

## ⚡ OPZIONE 3: Sei Uno Sviluppatore?

### Passo 1: Installa Node.js (2 minuti)

```bash
# Scarica da: https://nodejs.org/
# Installa (accetta tutti i default)
# Nel terminale, digita:
node --version   # Deve mostrare v18+ o v20+
npm --version    # Deve mostrare 9+
```

### Passo 2: Installa le Dipendenze (1 minuto)

```bash
cd "c:\Desktop 14 12 2026\PROGETTI\Sito prof"
npm install
```

### Passo 3: Sviluppa Con Hot Reload (2 minuti)

```bash
npm run dev
# Oppure se non esiste dev:
npm start
```

### Passo 4: Pubblica Online (5 minuti)

```bash
# Build per produzione
npm run build

# La cartella "dist" è pronta per Netlify/Vercel!
```

---

## 🎬 FLOW DEL SITO IN 30 SECONDI

```
1. Browser apre index.html
2. HTML carica styles.css (colori) + script.js (logica)
3. JavaScript legge "const luoghi" (il database dei 28 siti)
4. JavaScript CREA le card HTML dinamicamente
5. CSS anima le card (slideInUp, glow, ecc)
6. BOOM! Sito bellissimo e interattivo ✨
```

---

## 🔧 COMANDI VELOCI

| Cosa Vuoi Fare          | Comando              | Dove                     |
| ----------------------- | -------------------- | ------------------------ |
| Cambiare colore         | Modifica `--primary` | styles.css (riga ~10)    |
| Aggiungere sito         | Aggiungi oggetto     | script.js (const luoghi) |
| Cambiare titolo         | Modifica `<h1>`      | index.html (riga ~140)   |
| Attivare tema scuro CSS | Modifica `.dark`     | styles.css (riga ~30)    |
| Aggiungere animazione   | Copia `@keyframes`   | styles.css (riga ~1450)  |
| Modificare logo navbar  | Sostituisci SVG      | index.html (riga ~50)    |

---

## 📁 3 FILE PRINCIPALI

### 1️⃣ **index.html** - La Struttura

- Cosa vedi nel browser
- Contiene HTML puro
- Leggi i commenti interni

**Come modificarlo:**

- Cambia testi/titoli
- Aggiungi bottoni
- Modifica le sezioni
- Non toccare il JavaScript inline!

### 2️⃣ **script.js** - La Logica

- Fa muovere e animare le cose
- Legge il database dei 28 siti
- Crea le card dinamicamente
- Gestisce il login

**Come modificarlo:**

- Leggi i commenti italiani (sono molto dettagliati!)
- Modifica il database "const luoghi"
- NON toccare le funzioni se non sai cosa fai

### 3️⃣ **styles.css** - Il Design

- Tutti i colori
- Tutte le animazioni
- Layout responsive

**Come modificarlo:**

- Cambia i colori (variabili HSL)
- Modifica le dimensioni
- Aggiungi animazioni nuove
- È il file più sicuro da modificare!

---

## ✨ I 5 ERRORI COMUNI

### ❌ Errore 1: Ho modificato il codice ma non vedo i cambia

**Soluzione:** Premi Ctrl+F5 (ricaricamento forzato)

### ❌ Errore 2: Non vedo i 28 siti

**Soluzione:** Apri F12 → Console → Leggi l'errore rosso

### ❌ Errore 3: Il sito è lento

**Soluzione:** Ottimizza le immagini in src/assets/

### ❌ Errore 4: I colori sono orribili

**Soluzione:** Usa https://www.color-hex.com/ per trovare colori belli

### ❌ Errore 5: Ho toccato il JavaScript e ora è rotto

**Soluzione:** Premi Ctrl+Z negli editor per tornare indietro!

---

## 🎓 IMPARARE DI PIÙ

Se vuoi imparare di più, leggi in questo ordine:

1. **README.md** (5 min) - Overview
2. **GUIDA-UMANA.md** (20 min) - Tutto spiegato semplicemente
3. **MANUALE-HTML.md** (15 min) - Architettura
4. **script.js** (15 min) - Leggi i commenti
5. **styles.css** (10 min) - Leggi i commenti
6. **INDICE.md** - Indice di tutto

---

## 🚀 PROSSIMI STEP

### Passo 1: Approfitta Le Guide

```bash
Leggi: GUIDA-UMANA.md (20 minuti)
↓
Imparerai come funziona TUTTO il sito
```

### Passo 2: Fai Un Cambio Facile

```bash
Modifica il colore primario in styles.css
↓
Ricarica il browser (Ctrl+F5)
↓
Ti sentirai un dev! 😎
```

### Passo 3: Aggiungi Un Nuovo Sito

```bash
Nel script.js, aggiungi un nuovo oggetto a "const luoghi"
↓
Ricarica il browser
↓
Boom! Il tuo sito appare nel filtro! 🎉
```

### Passo 4: Pubblica Online

```bash
Apri Netlify.com oppure Vercel.com
↓
Collega il tuo GitHub (o carica i file)
↓
Domenio: tuodominio.netlify.app
↓
Il sito è online per il mondo! 🌍
```

---

## 📞 HELP VELOCE

**D: Dove cambio il colore?**  
R: styles.css, riga ~10, cerca `--primary`

**D: Come aggiungo un nuovo sito?**  
R: script.js, cerca `const luoghi`, aggiungi un oggetto

**D: Perché il sito non funziona?**  
R: Apri F12 (console), vedi gli errori rossi

**D: Il tema scuro non funziona?**  
R: Leggi script.js, funzione `toggleTheme()`

**D: Come faccio il login a funzionare?**  
R: È già fatto! Usa un qualsiasi username/email/password

---

## 🎯 CHECKLIST: SEI PRONTO?

- [ ] Ho aperto il sito nel browser (localhost:8000)
- [ ] Vedo i 28 siti nella griglia
- [ ] Ho aperto VS Code con la cartella
- [ ] Ho capito cosa fa HTML, CSS, JavaScript
- [ ] Ho letto README.md

**Se tutti ✓:** SEI PRONTO A MODIFICARE IL SITO! 🎉

---

## 💡 PRO TIPS

1. **Sempre salvare prima di ricaricare il browser**

   ```
   Ctrl+S (salva)
   ↓
   Ctrl+F5 (ricarica il browser)
   ```

2. **USA DevTools del browser (F12)**
   - Vedi gli errori
   - Ispeziona gli elementi
   - Modifica CSS al volo per provare

3. \*_Puoi annullare i cambia_
   - Ctrl+Z negli editor
   - Usa `git` per tracciare i cambia
   - Backup dei file importanti!

4. **Scrivere commenti nel codice**

   ```javascript
   // This is a comment
   // Spiega quello che stai facendo
   const myVar = 42; // Commento in linea
   ```

5. **Non avere paura di provare!**
   - È un sito statico (HTML/CSS/JS)
   - Non puoi "rompere" il server
   - Salva un backup e prova pure!

---

## 🎬 STEP BY STEP: Cambiare Un Colore

```
1. Apri VS Code
   ↓
2. Apri la cartella "Sito prof"
   ↓
3. Apri styles.css
   ↓
4. Vai alla riga 10 (Ctrl+G, digita 10)
   ↓
5. Vedi: --primary: hsl(16, 70%, 55%);
   ↓
6. Cambia con: --primary: hsl(240, 100%, 50%);
   ↓
7. Salva (Ctrl+S)
   ↓
8. Vai al browser e premi Ctrl+F5
   ↓
9. MAGIA! Il sito è blu! 🔵
```

---

**Buona Fortuna!** 🚀

Domande? Leggi **GUIDA-UMANA.md** o **INDICE.md**

_Ricorda: È tutto documentato e commentato in italiano!_
