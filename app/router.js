// Récupère la classe Router du module express
const { Router } = require("express");
const apiController = require("./controllers/apiController");

// Initialisation du router
const router = Router();

// Renvoie tout les contacts
router.get('/contacts', apiController.getAllContacts);

// Renvoie les infos du contact passé en paramètre
router.get('/contacts/:email', apiController.getOneContact);

module.exports = router;