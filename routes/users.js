const users = require('express').Router();
const { getMe } = require('./controllers/users')
const {checkAuth} = require('../middlewares/auth');
const query = require('../helpers/queries')

users.get('/me', checkAuth, getMe);  

users.get('/medb', query.getUser)


module.exports = users 