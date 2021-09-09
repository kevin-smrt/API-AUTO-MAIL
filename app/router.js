// Récupère la classe Router du module express
const { Router } = require("express");
const apiController = require("./controllers/apiController");

// Initialisation du router
const router = Router();

// Route racine
router.get('/', apiController.getAllContacts);

module.exports = router;