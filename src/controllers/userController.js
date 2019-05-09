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

    UserAdd(){
        var objUsuario ={
            isActive: true,
            username: "Jose2323",
            fullname: "Jose Flores",
            password: "123",
            email: "flores@enotriasa.com",
            token: "asxaser2zxca",              
            permissions:[permissions.actions.ENTERPRISE_CREATE,permissions.actions.ENTERPRISE_EDIT_LOGO],
            status:permissions.status.ENABLED
          }
        user.create(objUsuario).
        then(doc=>{
            console.log("Valor creado: ", doc);
            return doc;
        })
    }
}

module.exports = UserController;