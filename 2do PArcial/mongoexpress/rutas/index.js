var express = require('express');
var router = express.Router();//{mergeParams:true}


router.get('/productos', (req, res, next) => {

    req.db
    .find()
    .toArray((err, data) => {
        res.json(data);
    });
});

router.get('/productos/marca:marca', (req, res, next) => {
    
    req.db
    .find({_id:req.params.id})
    .toArray((err, data) => {
        res.json(data);
    });
});

router.post('/user', (req, res, next) => {
    
    req.db
    .find({_id:req.body.id})
    .toArray((err, data) => {
        res.json(data);
    });
});
module.exports = router;