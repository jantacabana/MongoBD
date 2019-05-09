const mongoose = require('mongoose');
const productDigital = require('../models/productDigital');


class ProductDigitalController{
    
    FindProductDigitalAll(){
        productDigital.find().
        then(doc=>{
            console.log("Valor buscado: ", doc);
            return doc;
        })        
    }

    ProductDigitalAdd(obj){
        
        productDigital.create(obj).
        then(doc=>{
            console.log("Valor creado: ", doc);
            return doc;
        })
    }
}

module.exports = ProductDigitalController;