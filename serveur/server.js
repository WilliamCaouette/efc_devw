// npm run devserver -> lance le script (pakage.json)

// Initialiser Express
const express = require('express');
const app = express();

// Modules pour créer des chemins (path) vers des ressouces
const path = require('path');
//-------------------------------------
// Middlewares

app.use(express.static('public'));

app.use(express.json());

const cors = require('cors');
app.use(cors());

//db

const shortId = require('shortid');



//----------------------------------------
// Fichiers "statiques"

app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "../public", "index.html"));

})






//-------------------------------
// 404

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "404.html"));
})

//-----------------------------------
// Lancer l'écoute du port

const port = 3000;


app.listen(port, () => {
    console.log(`Express écoute le port ${port}`);
})
