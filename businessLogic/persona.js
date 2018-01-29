var Persona  = require('../models/persona');

function getPersona(dni){

    return new Promise((resolve,reject)=>{
        var persona = new Persona();
        resolve(persona);
    });
}