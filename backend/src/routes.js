const express = require('express');

const userController = require('../src/controllers/userController')
const bookController = require('../src/controllers/bookController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/users', userController.index)
routes.post('/users', userController.create);

routes.get('/books', bookController.index);
routes.post('/books', bookController.create);
routes.delete('/books/:id', bookController.delete);

routes.get('/profile', profileController.index);

module.exports = routes;

