// Récupère l'API créé dans le fichier api.js du dossier models
const api = require("../models/api");

// Objet qui contient toutes les méthodes de l'api qui nous interesse
const apiController = {
    // Méthode pour récupérer tout les contacts
    getAllContacts: async function (req, res) {
        // Crée une instance de la classe contactsApi qui va permettre d'acceder aux méthodes pour gérer les contacts
        let apiInstance = new api.ContactsApi();

        try {
            const data = await apiInstance.getContacts();
            res.send('API called successfully. Returned data: ' + JSON.stringify(data));
        } catch (error) {
            res.status(404).send(JSON.stringify(error));
        }
    },

    // Méthode pour récupérer un contact grâce à une adresse mail
    getOneContact: async function (req, res) {
        // Récupère l'email passé en paramètre de la route
        const email = req.params.email;
        // Crée une instance de la classe contactsApi qui va permettre d'acceder aux méthodes pour gérer les contacts
        let apiInstance = new api.ContactsApi();

        try {
            const data = await apiInstance.getContactInfo(email);
            res.send('API called successfully. Returned data: ' + JSON.stringify(data));
        } catch (error) {
            res.status(404).send(JSON.stringify(error));
        }
    },

    createContact: async function (req, res) {
        // Crée une instance de la classe contactsApi qui va permettre d'acceder aux méthodes pour gérer les contacts
        let apiInstance = new api.ContactsApi();

        // Crée une une instance de la classe createContact qui va permettre de modifier les attributs du nouveau contact
        let createContact = new api.CreateContact();

        // Récupère le prenom, nom et date d'anniversaire du contact passé à travers le formulaire
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const birthDate = new Date(req.body.birthDate);

        // Initialise l'email avec celui passé en paramètre
        createContact.email = req.params.email;
        // Initialise les attributs
        createContact.attributes = {
            NOM: lastName,
            PRENOM: firstName,
            DATE_NAISSANCE: birthDate
        }

        try {
            const data = await apiInstance.createContact(createContact);
            res.send('API called successfully. Returned data: ' + JSON.stringify(data));
        } catch (error) {
            res.status(404).send(JSON.stringify(error));
        }
    },
}

module.exports = apiController;