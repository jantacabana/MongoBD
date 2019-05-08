const mongoose = require('mongoose');
const profileModel = require('../models/profile');

class ProfileController{
    //var userModel = new user
    AddProfile(profile) {
        profileModel.find({username: profile.username}).
        then(doc=>{
            console.log("Valor buscado: ", doc);
            return doc.username;
        })
        
    }
}

module.exports = ProfileController;

