const mongoose = require('mongoose');
const user = require('../models/user');

class UserController{
    
    FindUserAll(){
        user.find().
        then(doc=>{
            console.log("Valor buscado: ", doc);
            return doc;
        })        
    }

    UserAdd(obj){
        
        console.log(">>>>>",obj)
        user.create(obj).
        then(doc=>{
        return "User.findByFullName('Jon Snow');"
        })
        
    }

   

}

module.exports = UserController;

