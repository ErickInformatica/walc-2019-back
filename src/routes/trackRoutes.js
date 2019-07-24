'use strict'

var express = require('express');
var TrackController = require('../controllers/trackController');
var md_auth = require('../middlewares/autheticated');



//Rutas
var api = express.Router();
api.get('/tracks',  TrackController.gettracks);
api.post('/track', TrackController.addtracks);
api.get('/track/:id',  TrackController.gettrack)



module.exports = api;