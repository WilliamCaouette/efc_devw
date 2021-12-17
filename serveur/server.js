// npm run devserver -> lance le script (package.json)

// Initialiser Express
const express = require("express");
const app = express();

// Modules pour créer des chemins (path) vers des ressouces
const path = require("path");
//-------------------------------------
// Middlewares

app.use(express.static("api"));

app.use(express.json());

const cors = require("cors");
app.use(cors());

//----------------------------------------
// Base de données

const shortid = require("shortid");
const db = require("quick.db");

if (!db.has("quizz")) {
    db.set("quizz", {list:[]});
}

if (!db.has("words")) {
    db.set("words", ["carré", "virgule", "cercle", "trois", "cinq", "coeur", "dollar", "arbre"]);
}


/* Pour envoyer un test (SEULEMENT UNE FOIS)
db.push("quizz.list", {
  id: shortid.generate(),
  name: "Test de test",
});*/
/* FAIRE UN PUSH DE MOTS COMPRIS PAR L'IA */

//----------------------------------------
// Fichiers "statiques"

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../api", "index.html"));
});

//-------------------------------
// Get

// Récupérer toute la collection
app.get("/api/quizz", (req, res) => {
    res.send(db.get("quizz.list"));
});
app.get("/api/words", (req, res) => {
    res.send(db.get("words"));
});

// Récupérer un item de la collection
app.get("/api/quizz/:id", (req, res) => {
    const quizz = db.get("quizz.list").find((q) => q == req.params.id);

    if (!quizz) {
        return res.status(404).send("Aucun quizz ne correspond à cet identifiant");
    }

    res.status(200).send(quizz);
});

//-------------------------------
// Post

app.post("/api/quizz", (req, res) => {
    let quizz = req.body;
    quizz.id = shortid.generate();
    console.log(quizz)
    db.push("quizz.list", quizz);
    res.status(200).send(quizz);
});



//-------------------------------
// Delete (optionnel)

//-------------------------------
// 404

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../api", "404.html"));
});

//-----------------------------------
// Lancer l'écoute du port

const port = 3000;

app.listen(port, () => {
    console.log(`Express écoute le port ${port}`);
});

/* installer Thunder client (sorte de postman) à la maison */