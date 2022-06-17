const routes = require('express').Router();
const contactsRoutes = require('./contacts');

routes.get('/', (req, res) => res.send('Finn Campbell!'));
routes.use('/contacts', contactsRoutes);

module.exports = routes;