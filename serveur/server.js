// npm run devserver -> lance le script (pakage.json)

// Initialiser Express
const express = require("express");
const app = express();

// Modules pour créer des chemins (path) vers des ressouces
const path = require("path");
//-------------------------------------
// Middlewares

app.use(express.static("public"));

app.use(express.json());

const cors = require("cors");
app.use(cors());

//----------------------------------------
// Base de données

const shortId = require("shortid");
const db = require("quick.db");
const shortid = require("shortid");

//----------------------------------------
// Fichiers "statiques"

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
});

//-------------------------------
// Get

// Récupérer toute la collection
app.get("/api/quizz", (req, res) => {
    res.send(db.get("quizz.list"));
});

// Récupérer un item de la collection
app.get("/api/quizz/:id", (req, res) => {
    const quizz = db.get("quizz.list").find((c) => c.id == req.params.id);

    if (!quizz) {
        return res.status(404).send("Aucun quizz ne correspond à cet identifiant");
    }

    res.status(200).send(quizz);
});

//-------------------------------
// Post

app.post("/api/quizz", (req, res) => {
    const quizz = {
        id: shortid.generate(),
        name: req.body.name,
    };
    // Stocker le cours dans la bd
    db.push("quizz.list", quizz);
    // Envoyer la réponse au client
    res.status(200).send(quizz);
});

//-------------------------------
// Update

app.put("/api/quizz/:id", (req, res) => {
    const quizzList = db.get("quizz.list");
    const quizz = quizzList.find((c) => c.id == req.params.id);
    if (!quizz) {
        return res.status(404).send("Aucun quizz ne correspond à cet identifiant");
    }
    quizz.name = req.body.name;
    db.set("quizz.list", quizzList);
    // Envoyer la réponse au client
    res.status(200).send(quizz);
});

//-------------------------------
// Delete (optionnel)

//-------------------------------
// 404

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "404.html"));
});

//-----------------------------------
// Lancer l'écoute du port

const port = 3000;

app.listen(port, () => {
    console.log(`Express écoute le port ${port}`);
});

/* 
Création de routes : 
-une pour crée, 
-une pour toutes les récup, 
-une pour en récup une seule
*/
/*Adapter le code : "express-api-rest-quickdb"*/