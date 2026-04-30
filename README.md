# 🌟 SITO AGRO NOCERINO-SARNESE

> **Un sito moderno, bello e facile da capire**

---

## 👋 CHE COS'È QUESTO SITO?

È un **catalogo turistico e gastronomico** che mostra i 28 siti più belli della regione:

- 🏛️ **11 Siti Storici** (chiese, musei, rovine romane)
- 🌿 **5 Siti Naturali** (montagne, boschi, fiumi)
- 🍷 **6 Aziende Enogastronomiche** (vino, formaggi, olio, pasta)

---

## 🎯 COSA PUOI FARE QUI?

✅ **Sfogliare i siti** - Vedi foto e descrizione di ogni luogo  
✅ **Filtrare per categoria** - Vuoi solo chiesa? Solo natura? Fatto!  
✅ **Leggere i dettagli** - Clicca su un sito per la pagina completa  
✅ **Vedere sulla mappa** - Google Maps ti mostra dove si trova  
✅ **Registrarti** - Crea un account con login semplice  
✅ **Tema chiaro/scuro** - Scegli se preferisci la modalità notturna

---

## 🚀 COME INIZIARE

### 1. Apri il Sito

```bash
# Se lo hai in locale, apri il terminale nella cartella e digita:
python -m http.server 8000

# Poi vai su: http://localhost:8000
```

### 2. Esplora

- Scorri la homepage
- Clicca i filtri (Tutto, Storia, Natura, Enogastronomia)
- Visualizza i dettagli di un sito
- Prova il tema scuro (bottone in alto a destra)

### 3. Registrati (Opzionale)

- Clicca "Sign In"
- Scegli "Register"
- Crea username, email, password
- Il sito ti ricorda per 7 giorni!

---

## 📁 COSA CONTIENE QUESTA CARTELLA

```
📦 Sito prof/
│
├─ 📄 index.html                    ← La HOMEPAGE (quello che vedi)
├─ 🎨 styles.css                    ← Tutti i colori e il design
├─ 🧠 script.js                     ← Il cervello del sito
│
├─ 📚 places/                       ← I 28 siti, uno per file
│  ├─ monte-vesuvio.html
│  ├─ azienda-viticola-fiano.html
│  ├─ ... (altri 26)
│
├─ 🖼️ src/assets/                   ← Le immagini
│
├─ 📖 GUIDA-UMANA.md               ← LEGGI QUESTO! Spiega tutto
├─ 📄 package.json                  ← Configurazione del progetto
├─ 🤖 robots.txt                    ← Per Google
│
└─ ⚙️ tsconfig.json, postcss.config.js ← File di configurazione
```

---

## 💡 I 3 Pilastri Del Sito

### 🏗️ **HTML** (Struttura)

- File: `index.html` + 28 file in `places/`
- Cosa fa: Dice **cosa** mettere dove
- Esempio: "Qui metto un bottone, lì una foto, più giù il menu"

### 🎨 **CSS** (Design)

- File: `styles.css`
- Cosa fa: Dice **come** fare le cose belle
- Esempio: "Il bottone sia arancione, grande 50px, con angoli rotondi"

### 🧠 **JavaScript** (Comportamento)

- File: `script.js`
- Cosa fa: Dice **cosa fare** quando l'utente interagisce
- Esempio: "Quando clicca il filtro, ricarica la griglia"

---

## 🎨 PERSONALIZZAZIONE FACILE

### Vuoi Cambiare I Colori?

1. Apri `styles.css`
2. Vai all'inizio (cerca `:root {`)
3. Cambia `--primary: hsl(16, 70%, 55%);` con il tuo colore
4. TUTTO il sito cambia colore! ✨

**Provalo:** Risorse online per colori HSL → "HSL color picker"

---

### Vuoi Aggiungere Un Nuovo SITO?

1. Apri `script.js`
2. Trova l'array `const luoghi = [`
3. Aggiungi un nuovo oggetto:

```javascript
{
  id: 'nuovo-sito',
  nome: 'Nome Del Sito',
  comune: 'Città',
  lat: 40.7500,
  lng: 14.6000,
  categoria: 'natura', // oppure 'storia' o 'enogastronomia'
  descrizione: 'Una breve descrizione...',
  image: 'src/assets/landmark-1.jpg'
}
```

4. Crea il file `places/nuovo-sito.html` (copia uno dei 28 come template)

---

## 📱 Come Funziona Su Telefono?

Il sito è **100% responsive**:

- ✅ Su computer → Layout grande e spazioso
- ✅ Su tablet → Layout pulito e ordinato
- ✅ Su telefono → Verticale, facile da leggere con un dito

Non devi fare NULLA, il CSS se ne occupa automaticamente! 📐

---

## 🔧 TECNOLOGIE USATE

| Tecnologia           | Versione     | Cosa Fa                    |
| -------------------- | ------------ | -------------------------- |
| **HTML5**            | -            | Struttura della pagina     |
| **CSS3**             | -            | Design e animazioni        |
| **JavaScript (ES6)** | -            | Interattività              |
| **Leaflet.js**       | 1.9.4        | Mappe interattive          |
| **Poppins Font**     | Google Fonts | Il font del sito (moderno) |

**Note importanti:**

- Nessun framework complicato (React, Vue, ecc)
- Nessun server (puro HTML, CSS, JavaScript)
- Nessun database (localStorage per i login)
- **100% Leggero, veloce, facile da capire!**

---

## 🎯 FUNZIONALITÀ PRINCIPALI

### 1. Griglia Dinamica (28 Siti)

- JavaScript crea le card dal database
- Ogni card ha foto, nome, città, descrizione
- Animazione dolce al caricamento

### 2. Filtri per Categoria

- 4 bottoni: Tutto, Storia, Natura, Enogastronomia
- JavaScript filtra al volo
- Le card si aggiornano senza ricaricare

### 3. Animazioni Fluide

- Elementi appaiono al scroll
- Numeri contano quando li vedi
- Sfondo si muove lentamente (parallax)
- Bottoni brillano al hover

### 4. Login Semplice

- Username, email, password
- Salvati nel localStorage del browser
- Cookie per 7 giorni di ricordo
- Buttone cambia da "Sign In" a "Hello, Marco"

### 5. Tema Chiaro/Scuro

- Bottone sole/luna in alto a destra
- CSS cambia automaticamente i colori
- La scelta è ricordata nei cookie

### 6. Mappe Interattive

- Ogni sito ha una mappa Leaflet/Google Maps
- Mostra il marker della posizione
- Puoi zoomare e muoverti

---

## 🐛 TROUBLESHOOTING (Se Qualcosa Non Funziona)

### "La pagina appare ma senza colori"

❌ **Problema:** CSS non è caricato  
✅ **Soluzione:** Ricarica il browser (Ctrl+F5 o Cmd+Shift+R)

### "Non vedo i 28 siti"

❌ **Problema:** JavaScript ha un errore  
✅ **Soluzione:** Apri F12 → Console → Leggi l'errore in rosso

### "Il login non ricorda l'utente"

❌ **Problema:** Le impostazioni dei cookie sono disattivate  
✅ **Soluzione:** Attiva i cookie nel browser (Chrome → Impostazioni → Privacy)

### "Le animazioni sono lente"

❌ **Problema:** Troppi elementi animati contemporaneamente  
✅ **Soluzione:** Riduci il numero di siti visualizzati (modifica CSS)

### "Le immagini non appaiono"

❌ **Problema:** I percorsi delle immagini sono errati  
✅ **Soluzione:** Controlla che `src/assets/` contenga le foto con i nomi giusti

---

## 📚 LEGGI ANCHE

Questi file ti insegnano come funziona tutto:

1. **GUIDA-UMANA.md** ← Guida completa, spiega ogni dettaglio
2. **script.js** ← Leggi i commenti dentro il file (sono italiani e chiari)
3. **styles.css** ← Leggi i commenti dentro il file (spiegano ogni colore)

---

## 🚀 PROSSIMI STEP

### Vuoi Pubblicare Online?

1. **Compra un dominio** (es: www.agro-sito.com)
2. **Usa Netlify o Vercel** (hosting gratuito per siti statici)
3. **Connetti il tuo GitHub** (deploy automatico)
4. **Il sito è online!** ✨

### Vuoi Aggiungere Funzioni Avanzate?

- [ ] Backend con Node.js + Express
- [ ] Database vero (MongoDB, PostgreSQL)
- [ ] E-commerce (carrello, pagamenti)
- [ ] Notifiche email (quando clicca "Contattaci")
- [ ] Commenti e recensioni
- [ ] Sistema di prenotazioni

---

## 📞 SUPPORTO

### Se hai domande su come funziona:

1. Leggi la **GUIDA-UMANA.md**
2. Cerca il commento nel **script.js** o **styles.css**
3. Apri il browser → F12 → Console (vedi gli errori)

### Se vuoi modificare qualcosa:

1. Apri il file (sono solo HTML, CSS, JavaScript)
2. Leggi i commenti (sono intenzionalmente chiari e italiani)
3. Cambia quello che vuoi
4. Salva il file
5. Ricarica il browser (Ctrl+F5)

---

## ⭐ CREDITI

**Creato con ❤️ per il territorio Agro Nocerino-Sarnese**

Sviluppato usando:

- HTML5 moderno
- CSS3 avanzato
- JavaScript puro (niente framework)
- Leaflet.js per le mappe
- GoogleFonts per i caratteri

**Licenza:** Libero da usare, modificare e distribuire

---

## 📝 NOTE FINALI

Questo sito è stato creato con un **obiettivo principale**:

> Essere **facile da capire**, **facile da modificare** e **facile da imparare**

Non troverai codice complicato o oscuro. Tutto è:

- ✅ Commentato in italiano
- ✅ Logicamente organizzato
- ✅ Facile da personalizzare
- ✅ Velocissimo a caricare

**Se pensi che il codice sia troppo complicato, è una BUG! Segnalalo! 🐛**

---

**Buona esplorazione del meraviglioso Agro Nocerino-Sarnese!** 🇮🇹
