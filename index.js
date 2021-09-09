// Récupère les variables du fichier .env
require("dotenv").config();

const express = require("express");
const router = require("./app/router");

// Utilise la variable PORT du fichier .env, si aucun fichier .env le port 3000 sera utilisé
const PORT = process.env.PORT || 3000;
const app = express();

// Permet au serveur de communiquer au format JSON
app.use(express.json());

// Utilisation du router
app.use(router);

// Ecoute du serveur sur le port renseigné dans la variable PORT
app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}`);
});