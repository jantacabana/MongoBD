const mongoose = require('mongoose');
const user = require('../models/user');
const permissions = require('../models/permissions');

class UserController{
    
      
    FindUserAll(){
        user.find().
        then(doc=>{
            console.log("Valor buscado: ", doc);
            return doc;
        })        
    }

    UserAdd(objUsuario){        
        user.create(objUsuario).
        then(doc=>{
            console.log("Valor creado: ", doc);
            return doc;
        })
    }
}

module.exports = UserController;