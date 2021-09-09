// Récupère l'API créé dans le fichier api.js du dossier models
const api = require("../models/api");

// Objet qui contient toutes les méthodes de l'api qui nous interesse
const apiController = {
    getAllContacts: async function(req, res) {
        let apiInstance = new api.ContactsApi();

        try {
            const data = await apiInstance.getContacts();
            res.send('API called successfully. Returned data: ' + JSON.stringify(data));
        } catch(error) {
            res.status(404).send(JSON.stringify(error));
        }
    },

    getOneContact: async function(req, res) {
        const email = req.params.email;
        let apiInstance = new api.ContactsApi();

        try {
            const data = await apiInstance.getContactInfo(email);
            res.send('API called successfully. Returned data: ' + JSON.stringify(data));
        } catch(error) {
            res.status(404).send(JSON.stringify(error));
        }
    },
}

module.exports = apiController;