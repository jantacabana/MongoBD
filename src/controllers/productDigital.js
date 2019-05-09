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

    ProductDigitalAdd(){
        var obj = {
            code :  "VCB",
            status : "String",
            enterpriseId : "590a53f8fd21e523309f4448",
            denomination :"htm",
            description : "htm",
            productName : "BCP FISICO",
            sentMailStatus : "k",
            registrationUser : "root",
            modificationUser : "root",            
            numericCode : 2,
            isDeleted : false
        }
        productDigital.create(obj).
        then(doc=>{
            console.log("Valor creado: ", doc);
            return doc;
        })
    }
}

module.exports = ProductDigitalController;