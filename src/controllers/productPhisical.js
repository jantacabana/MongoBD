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

    ProductPhisicalAdd(){
        var obj = {
            code :  "CO2",
            status : "String",
            enterpriseId : "590a53f8fd21e523309f4448",
            denomination :"BCP",
            description : "BCP FISICO",
            productName : "BCP FISICO",
            sentMailStatus : "k",
            registrationUser : "root",
            modificationUser : "root",            
            numericCode : 2,
            isDeleted : false
        }
        productPhisical.create(obj).
        then(doc=>{
            console.log("Valor creado: ", doc);
            return doc;
        })
    }
}

module.exports = ProductPhisicalController;