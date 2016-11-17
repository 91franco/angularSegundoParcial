var MongoClient = require( 'mongodb' ).MongoClient;
var express = require("express");
var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



var routerProductos = require("./modulos/routerProductos");
var routerCategorias = require("./modulos/routerCategorias");



//importar cors





//app.METHOD(PATH, HANDLER)
//app es la instancia de expres, METHOD es un metodo de solicitud HTTP. PATH es una via de acceso a un sv y HANDLER la funcion que se le aplica


MongoClient.connect('mongodb://localhost:27017/clase13', function(err, db) {
	if (err)
		console.log(err);

	app.use((req,res,next) => {
		req.db = db;
		next();
	})

	app.use(function (req, res, next) {
	 	var time = Date();
		
	  console.log('Time:',time);
	  next();
	});

	app.use("/",routerProductos);
	app.use("/",routerCategorias);


	app.listen(3000,function(){
	console.log("app.listen: servidor funcionando");
	});

});


