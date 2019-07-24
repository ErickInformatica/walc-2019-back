'use strict'

var express = require('express');
var TrackController = require('../controllers/trackController');
var md_auth = require('../middlewares/autheticated');



//Rutas
var api = express.Router();
api.get('/tracks', md_auth.ensureAuth, TrackController.gettracks);
api.post('/track', md_auth.ensureAuth, TrackController.addtracks);
api.get('/track/:id', md_auth.ensureAuth, TrackController.gettrack)



module.exports = api;