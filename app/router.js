// Récupère la classe Router du module express
const { Router } = require("express");

// Initialisation du router
const router = Router();

// Route racine
router.get("/", (req, res) => {
    res.send("hello world !");
});

module.exports = router;