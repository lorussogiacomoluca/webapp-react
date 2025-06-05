# 🎯 Esercizio 62

📁 **Repo**: `webapp-react`

---

## 🧠 Esercizio

Ora è il momento di prepararci al frontend della nostra Web App!

---

## 🚩 MILESTONE 1

✅ Mettiamo su un nuovo progetto **React** aiutandoci con **Vite**  
🧹 Ripuliamo come sempre l’app da file e codice di esempio non necessari  
📦 Installiamo il necessario:

- React Router
- Axios _(oggi non è obbligatorio installarlo, lo sarà martedì)_
- Bootstrap _(se volete utilizzarlo)_

---

## 🚧 MILESTONE 2

🎨 Creiamo un layout di base per la nostra applicazione ed impostiamo le rotte per le diverse pagine.

📄 **Creiamo 2 pagine:**

- 🏠 _La home_, in cui mostreremo la lista dei film
- 🎬 _La pagina di dettaglio_ di un singolo film in cui mostrare sia le informazioni del film che le recensioni

🧱 Fate tutto **statico**.

---

## 🎁 Bonus

- 🎞️ Create un array finto di film da ciclare e mostrare nella homepage
- 🧩 Creare la componente `MovieCard` in cui passare tramite **props** il singolo libro

---

## 🦸‍♂️ SUPER BONUS

📌 Nella pagina di dettaglio del film:

- Copiate l'array dei film aggiungendo a ciascun oggetto un'array di recensioni
- Trovate l'elemento all'interno dell'array da mostrare nella pagina attraverso l'**id** che avete passato come parametro
- Mostratelo in pagina assieme alle sue **recensioni**

---

# ⚙️ Integrazione SETUP Web App React

📦 **Installate axios** nell'app **frontend** e provate quindi ad effettuare una **chiamata Ajax** dalla **home** del progetto React, per ottenere la **lista dei libri**.  
📄 In utlimo effettuiamo una **chiamata AJAX** dalla **pagina di dettaglio** per ottenere il **dettaglio di un singolo film**, comprese le sue **recensioni**

---

## 🎁 BONUS

- ✨ Realizzare una componente **StarsRating** in cui mostrare il voto delle recensioni (magari anche il voto medio, chissà....)
- 🎨 Curare l’aspetto estetico della vostra ap

---

## 🚀 Aggiungere recensioni

Creiamo un componente che contenga il form per le recensioni
Inseriamo questo componente nella pagina di dettaglio del film
All’invio del form, la nuova recensione viene salvata sul database e visualizzata nella pagina, in fondo alle altre

---

## 🚀 Concludiamo migliorando l’esperienza sulla nostra SPA, inserendo un loader.

### 🧱 creiamo un componente loader

Questo componente deve poter apparire su qualunque pagina della nostra app.

### 🌐 Creiamo e sfruttiamo un Context

Per dare la possibilità ad ogni componente di attivare o disattivare il loader sulla propria pagina.

---

### 🎁 BONUS

_(scegliete voi quale fare, non siete obbligati a farli tutti, potete farne solo alcuni)_:

1. 🎨 Personalizziamo l’aspetto della nostra app col CSS
2. 🔍 Aggiungere il filtraggio dei film nella homepage
3. 🧾 Aggiungere la validazione della form delle recensioni mostrando un messaggio d'errore generico quando i dati inseriti non sono validi
4. 🛑 Validazione dei campi della form singola: quando un utente sbaglia ad inserire un valore di un campo o non lo inserisce viene mostrato l'errore inerente quel campo

---

🎉 **Buon Lavoro e buon divertimento!**
