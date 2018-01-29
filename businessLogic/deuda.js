var Deuda = require('../models/deuda');
var db =  require('./database');

module.exports={

    /**
     * 
     * 
     * @param {number} tipo 
     * @param {number} codigo 
     * @param {number} empresa 
     */
    getDeuda : function(tipo,codigo,empresa){
        db.query('Select * from deuda WHERE codigoUsuario = ? and codigoEmpresa = ?',[codigo,empresa],
        function(err,results,fields){
            if(err)
            {
                console.error(err)
            }
            console.dir(results);
        });
    }
}