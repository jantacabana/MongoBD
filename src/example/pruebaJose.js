const mongoose = require('mongoose');
const Async = require('async');
const permissions = require('../models/permissions');
const userController = require('../controllers/userController');
const productPhisical = require('../controllers/productPhisical');
const productDigital = require('../controllers/productDigital');
const EnterpriseController = require('../controllers/enterpriseController');
const ProfileController = require('../controllers/profileController');


  var objEnter =
  {
    _id : "5cd4623463b9451308c1c427",
    code : "00120",
    bucket : "webservices.enotriasimple.ripley",
    businessName: "BCP OUTSOURCING",
    commercialName: "Banco de Crédito del Perú S.A.",
    abbreviation: "BCP",
    ruc : "1234567",
    createdAt: Date.now(),
    createdBy: "root"
  }
var objProdDig = {
    _id : "cd4669c3d746811f0f53f6d",
    code :  "VCB",
    status : "String",
    enterprise : objEnter,
    denomination :"htm",
    description : "htm",
    productName : "BCP FISICO",
    sentMailStatus : "k",
    registrationUser : "root",
    modificationUser : "root",            
    numericCode : 2,
    isDeleted : false
}

var objProdPhi = {
    code :  "CO2",
    status : "String",    
    denomination :"BCP",
    enterprise : objEnter,
    description : "BCP FISICO",
    productName : "BCP FISICO",
    sentMailStatus : "k",
    registrationUser : "root",
    modificationUser : "root",            
    numericCode : 2,
    isDeleted : false
}

var objUsuario ={
    isActive: true,
    username: "Josefl",
    fullname: "Jose Flores",
    password: "123",
    email: "flores@enotriasa.com",
    token: "asxaser2zxca",   
    enterprise : objEnter,           
    permissions:[permissions.actions.ENTERPRISE_CREATE,permissions.actions.ENTERPRISE_EDIT_LOGO],
    status:permissions.status.ENABLED
  }
  var objProfile = {
    name: "callcenter",
    enterprise : objEnter    
    }


var userc = new userController();
// userc.UserAdd(objUsuario)
//userc.FindUserAll();

var prodPhisical = new productPhisical();
// prodPhisical.ProductPhisicalAdd(objProdPhi);
// prodPhisical.FindProductPhisicalAll();

var prodDigital = new productDigital();
 //prodDigital.ProductDigitalAdd(objProdDig);
//prodDigital.FindProductDigitalAll();

var enterprisec= new EnterpriseController();
// enterprisec.saveEnterprise(objEnter)

var update={
     $set: { code: "mundo"},
    //$push: { productsDigital: {_id: objProdDig._id,code:objProdDig.code}}
}





async function f(){
    var resultado1= await  enterprisec._findEnterprise({},{})
    var filter={
        _id:resultado1[0]._id
        // _id: '5cd4623463b9451308c1c427'
    }    
    enterprisec.updateEnterprise(filter,update);
    
    
    // var resultado2= await  enterprisec._findEnterprise({},{})

    

}

f();


// var res,res2
// // 
// var res=  enterprisec.buscar((err, result) => {
// console.log(">>>>")
// res=result
// console.log(">>>>",result)
// });
// res2=await res






var ProfileContr = new ProfileController();
// ProfileCkontr.saveProfile(objProfile);