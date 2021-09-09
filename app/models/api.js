// Récupère le module de l'api sendinblue
const SibApiV3Sdk = require('sib-api-v3-sdk');

// Récupère les variables du fichier .env
require("dotenv").config();

// Création du client par défaut
const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configuration de la clé API
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.API_KEY;

// Exportation de l'api
module.exports = SibApiV3Sdk;