
const apiLimit = require('./middlewares/rateLimit');
const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const routes = require('./routes');


app.use(apiLimit);
app.use('/', routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


 




module.exports = app