// Récupère le module de l'api sendinblue
const SibApiV3Sdk = require('sib-api-v3-sdk');

// Création du client par défaut
const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configuration de la clé API
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = "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"

// Exportation de l'api
module.exports = SibApiV3Sdk;