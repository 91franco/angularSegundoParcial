var express = require("express");
var router = express.Router();

router.get('/categorias',function(req,res){
	req.db.collection('productos')
    .find({},{"categoria":1})
    .toArray((err, data) => {

      if (err)
        console.log(err);

      res.json(data);
    })
});

router.get('/categorias/:categoria',function(req,res){

  req.db.collection('productos')
    .find({$or:[{'categoria.nombre':req.params.categoria},{'categoria.descripcion':req.params.categoria}]},{"categoria":1})
    .toArray((err, data) => {

      if (err)
        console.log(err);

      res.json(data);
    })
});

router.get('/categorias/stock/menor/:cantidad', function(req,res){
  var laCantidad =  parseInt(req.params.cantidad);
  req.db.collection('productos')
    .find({"stock":{$lt:laCantidad}},{"categoria":1})
    .toArray((err, data) => {

      if (err)
        console.log(err);

      res.json(data);
    })
});

router.get('/catalogo', function(req,res){
  res.download("./pdf/catalogo.pdf");
});


module.exports = router;

