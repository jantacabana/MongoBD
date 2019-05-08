const mongoose = require('mongoose');
const user = require('../models/user');

class UserController{
    //var userModel = new user
    findUser(params) {
        user.find({username: params.username}).
        then(doc=>{
            console.log("Valor buscado: ", doc);
            return doc.username;
        })
        
    }
}

module.exports = UserController;

