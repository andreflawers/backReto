var restify = require('restify');
var plugins = restify.plugins;
var businessCode = require('./dummyBusiness/randomGenerator');

var db = require('./businessLogic/database');
var pago = require('./businessLogic/pago');
var tarjeta = require('./businessLogic/tarjeta');

function respond(req, res, next) {
  res.send('hello ');  
  next();
}


var server = restify.createServer();
server.use(plugins.jsonBodyParser({mapParams:true}));
server.use(plugins.queryParser({ mapParams: true }));

// tipo
// codigo
// empresa
server.get('/pago',(req,res,next)=>{
  var codigoUser= req.query.codigoUser
  var codigoSuministro =req.query.codigoSuministro  
 console.log("codigoSuministro :" +codigoSuministro);
  pago.getDeuda(codigoUser,codigoSuministro).then(result=>{
    res.send(200,result);
  });
  
});



server.post('/pago',(req,res,next)=>{
    var tarjeta= {
      numero : req.body.numero,
      cvv: req.body.cvv
    }
    console.log(tarjeta.numero);
    pago.realizarPago(tarjeta,req.body.monto,req.body.tipoDeuda).then(codigo=>{
      res.send(200,codigo);
    }).catch(err=>{
      console.error(err);
    });
    
});

server.get('/conectado',(req,res,next)=>{
  db.connect(function(err){
    if(err){
    console.error('error' +err);
    }
    console.log('id : ' +db.threadId);
    res.send(200);
  });  
})



server.listen(process.env.port||process.env.PORT ||3003, function() {
  console.log('%s listening at %s', server.name, server.url);
});
