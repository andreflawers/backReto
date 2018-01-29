var session = require('../models/session');
var tarjetaBL =  require('./tarjeta');
var db = require('./database');
var businessCode = require('../dummyBusiness/randomGenerator');


module.exports = {
    realizarPago: function (tarjeta,monto,tipoDeuda) {
        return new Promise((resolve, reject) => {
            tarjetaBL.authorize(tarjeta.numero , tarjeta.cvv)
            .then(()=>{
                if(tipoDeuda= 0 )
                {
                    db.query()
                }
                resolve(businessCode.generateDoneCode());
            }).catch(err=>{
                reject(err)    
            })            
            
        });

    },

    /**
     * 
     *      
     * @param {number} codigoUsuario 
     * @param {number} codigoSuministro 
     */
    getDeuda: function ( codigoUsuario, codigoSuministro) {
        
        return new Promise((resolve,reject)=>{
            db.query('select * from pago where `usuario_dni` = ? and `cod_suministro` = ?', [codigoUsuario, codigoSuministro],
            function (err, results, fields) {
                if (err) {
                    console.error(err)
                    reject(err);
                }              
                resolve(results[0]);
            });
        });
        
    }

}

