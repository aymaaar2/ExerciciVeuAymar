# ExerciciVeuAymar
# 🎙️ Prova de Concepte: Interfície Natural (VUI) amb Electron i Vue 3

## 📖 Descripció del Projecte
Aquest projecte és una aplicació d'escriptori desenvolupada amb **Electron** que implementa una **Interfície d'Usuari de Veu (VUI)**. L'objectiu és demostrar com interactuar amb una aplicació de forma natural mitjançant comandes de veu, sense necessitat de teclat o ratolí per a certes accions.

L'aplicació utilitza la **Web Speech API** nativa de Chromium per al reconeixement de veu en temps real i gestiona la lògica reactiva mitjançant **Vue 3 Composition API**.

### Funcionalitats Principals
* **Reconeixement de veu:** Captura àudio i el transcriu a text en temps real.
* **Feedback visual:** Indicadors visuals (icona polsant) quan el micròfon està actiu.
* **Transcripció en viu:** Mostra el text que s'està detectant abans de confirmar la frase (resultats intermedis).
* **Sistema de comandes:** Reacciona a paraules clau com "saluda" o "ajuda".

## 🛠️ Tecnologies Utilitzades
El projecte està construït sobre el següent stack tecnològic:

* **[Electron](https://www.electronjs.org/):** Per encapsular l'aplicació web com a software d'escriptori.
* **[Vue.js 3](https://vuejs.org/):** Framework JavaScript progressiu (Composition API).
* **[Vuetify](https://vuetifyjs.com/):** Llibreria de components UI (Material Design).
* **Web Speech API:** API estàndard del navegador per a `SpeechRecognition`.

## ⚙️ Instal·lació i Execució

Segueix aquests passos per posar en marxa el projecte al teu entorn local:

### 1. Requisits Previs
* Node.js (versió 16 o superior)
* npm o yarn

### 2. Instal·lació de dependències
Obre una terminal a la carpeta del projecte i executa:

```bash
npm install

npm run electron:serve

src/
├── background.js           # Configuració del procés principal i permisos
├── composables/
│   └── useSpeechRecognition.js # Lògica de la Web Speech API
└── components/
    └── VoiceCommander.vue      # UI i gestió de comandes

    
