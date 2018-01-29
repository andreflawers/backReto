var Tarjeta  = require('../models/persona');
var db = require('./database');

module.exports = {

 authorize: function(numeroTarjeta,password){
    return new Promise((resolve,reject)=>{
        db.query("select * from tarjeta where `num_tarjeta` = ?" ,[numeroTarjeta],
    function(error,results,fields){
        if(results.length>0)
        {
            if(results[0].clave == password)
            {
                resolve();
            }else{
                reject("cvv incorrecto")    
            }
        }else{
            reject("nro de tarjeta no encontrado")
        }

    });
        //check if number exist
        
            //check if password match
    });
}
}
