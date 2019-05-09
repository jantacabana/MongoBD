const mongoose = require('mongoose');
const productPhisical = require('../models/productPhisical');

class ProductPhisicalController{
    
    FindProductPhisicalAll(){
        productPhisical.find().
        then(doc=>{
            console.log("Valor buscado: ", doc);
            return doc;
        })        
    }

    ProductPhisicalAdd(obj){
       
        productPhisical.create(obj).
        then(doc=>{
            console.log("Valor creado: ", doc);
            return doc;
        })
    }
}

module.exports = ProductPhisicalController;