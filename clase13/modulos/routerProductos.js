var express = require("express");
var router = express.Router();

router.get('/productos',function(req,res){
	req.db.collection('productos')
    .find()
    .toArray((err, data) => {

      if (err)
        console.log(err);

      res.json(data);
    })
});

router.get('/productos/marca/:marca',function(req,res){
	req.db.collection('productos')
    .find({'marca':req.params.marca})
    .toArray((err, data) => {

      if (err)
        console.log(err);

      res.json(data);
    })
});

router.get('/productos/precio/mayor/:precio', function(req,res){
  var elPrecio =  parseInt(req.params.precio);
	req.db.collection('productos')
    .find({"precio":{$gt:elPrecio}})
    .toArray((err, data) => {

      if (err)
        console.log(err);

      res.json(data);
    })
});

router.get('/productos/stock/menor/:cantidad', function(req,res){
  var laCantidad =  parseInt(req.params.cantidad);
  req.db.collection('productos')
    .find({"stock":{$lt:laCantidad}})
    .toArray((err, data) => {

      if (err)
        console.log(err);

      res.json(data);
    })
});

router.post('/productos/cargar', function(req,res){
  req.db.collection('productos')
    .insert(req.body);
});

module.exports = router;

