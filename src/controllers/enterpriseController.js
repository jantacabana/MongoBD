//const mongoose = require('mongoose');
const enterpriseModel = require('../models/enterprise');
const permissions = require('../models/permissions');

class EnterpriseController{
    //var userModel = new user
    createEnterprise(enterprise) {
        enterpriseModel.create({username: profile.username}).
        then(doc=>{
            console.log("Valor buscado: ", doc);
            return doc.username;
        })  
    }

    createEnterprise(enterprise) {
        
        //profile._id = ObjectId("5cd44dd411cfee06ac03d540");
        enterpriseModel.create(enterprise).
        then(doc=>{
            console.log("empresa creada: ", doc);
            return doc;
        })
    }

     findEnterprise(param){
       return enterpriseModel.findOne(param);              
    }
}

module.exports = EnterpriseController;
