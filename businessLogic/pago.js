var session = require('../models/session');

module.exports = {
    realizarPago :function()
    {
        return new Promise((resolve,reject)=>{
            //check card type 
             //if debit : check credit
             //else just go 
            resolve(true);
        });
    
    }
}

