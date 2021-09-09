// Récupère l'API créé dans le fichier api.js du dossier models
const api = require("../models/api");

// Objet qui contient toutes les méthodes de l'api qui nous interesse
const apiController = {
    getAllContacts: async function(req, res) {
        let apiInstance = new api.ContactsApi();

        try {
            const data = await apiInstance.getContacts();
            return console.log('API called successfully. Returned data: ' +JSON.stringify(data));

        } catch(error) {
            console.error(error);
        }
    },
}

module.exports = apiController;