const routes = require('express').Router();

routes.get('/', (req, res) => res.send('Finn Campbell!'));

module.exports = routes;