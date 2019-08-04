'use strict'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ConferenciaSchema = Schema({
    titulo: String,
    descripcion: [{
        subIndice: String,
        subDescripcion: String
    }],
    temas: String,
    objetivos: String,
    objetivoGeneral: String,
    dirigidoA: String,
    preRequisitos: String,
    materiales: String,
    metodologia: String,
    instructores: String,
    cupo: String,
    duracion: String,
    agenda: [{
        dia: String,
        descripcionDia: String
    }],
    imagen: String,
    interesados: [{ type: Schema.ObjectId, ref: "User" }],
    preinscritos: [{ type: Schema.ObjectId, ref: "User" }],
    inscritos: [{
        user: { type: Schema.ObjectId, ref: "User" },
        track: { type: Schema.ObjectId, ref: "Conferencia" },
        color: String
    }]
});

module.exports = mongoose.model('Conferencia', ConferenciaSchema);