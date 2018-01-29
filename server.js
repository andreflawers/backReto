var restify = require('restify');
var plugins = restify.plugins;
var businessCode = require('./dummyBusiness/randomGenerator');
var pago = require('./businessLogic/pago');


function respond(req, res, next) {
  res.send('hello ' + usuario.nombre);  
  next();
}


var server = restify.createServer();
server.use(plugins.jsonBodyParser({mapParams:true}));
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.post('/pago',(req,res,next)=>{
    console.log(req.body.cantidad);
    pago.realizarPago().then(()=>{
      res.send(businessCode.generateDoneCode());
    }).catch(err=>{
      console.error(err);
    });
    
});



server.listen(3003, function() {
  console.log('%s listening at %s', server.name, server.url);
});