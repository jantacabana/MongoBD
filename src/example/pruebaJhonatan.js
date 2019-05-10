const EnterpriseController = require("../controllers/enterpriseController");
const ProfileController = require("../controllers/profileController");
const permissions = require("../models/permissions");
const productPhisical = require("../controllers/productPhisical");
const productDigital = require("../controllers/productDigital");

var objEnter =
  {
    _id : "5cd4885a498f342bbc4e4a72",
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
  //_id : "cd4669c3d746811f0f53f6d",
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
/*
var prodPhisical = new productPhisical();
prodPhisical.ProductPhisicalAdd(objProdPhi);

var prodDigital = new productDigital();
prodDigital.ProductDigitalAdd(objProdDig);
*/
/*
var controller = new EnterpriseController();
controller.findEnterprise({_id : "5cd4885a498f342bbc4e4a72"}).then(function(res){ 
  var profileController = new ProfileController();
  var objProfile = {
  name: "callcenter",
  enterprise : res,
  permissions : [permissions.actions.ENTERPRISE_ACCESS, permissions.actions.PRODUCT_PHISICAL_SEARCH]
  }
  profileController.saveProfile(objProfile);
  console.log("empresa encontrado", res);
});*/
//console.log("empresa encontrado", objEnterprise);
//console.log("3")
/*
var objParam =
{
  code : "00121",
  bucket : "webservices.enotriasimple.ripley",
  businessName: "BCP OUTSOURCING",
  commercialName: "Banco de Crédito del Perú S.A.",
  abbreviation: "BCP",
  ruc : "1234567",
  createdAt: Date.now(),
  createdBy: "root"
}*/
//console.log(controller.createEnterprise(objParam));


