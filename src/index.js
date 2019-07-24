'use strict'

const mongoose = require("mongoose");
const app = require("./app");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://erick:erick27997@ds159263.mlab.com:59263/heroku_sstzqx6s', { useNewUrlParser: true }).then(()=>{
    console.log('Se encuentra conectado a la Base de Datos');

    app.set('port', process.env.PORT || 3000 );
    app.listen(app.get('port'), ()=>{
        console.log(`El servidor esta corriendo en el puerto: '${app.get('port')}'`);
    });
}).catch(err => console.log(err));