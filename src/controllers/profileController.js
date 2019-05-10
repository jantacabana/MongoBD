const mongoose = require('mongoose');
const profileModel = require('../models/profile');

class ProfileController{
    //var userModel = new user
    saveProfile(profile) {
        
        //profile._id = ObjectId("5cd44dd411cfee06ac03d540");
        profileModel.create(profile).
        then(doc=>{
            console.log("Nuevo Perfil: ", doc);
            return doc;
        })
    }

    findAll(param){
        enterpriseModel.find(param).
        then(doc=>{
            //console.log("Empresa buscado: ", doc);
            return doc;
        })        
    }
}

module.exports = ProfileController;

