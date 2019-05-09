const EnterpriseController = require('../controllers/enterpriseController');
const ProfileController = require('../controllers/profileController');
const permissions = require('../models/permissions');


var controller = new EnterpriseController();
var objEnterprise ={}
controller.findEnterprise({_id : "5cd4885a498f342bbc4e4a72"}).then(function(res){ 
  var profileController = new ProfileController();
  var objProfile = {
  name: "callcenter",
  enterprise : res,
  permissions : [permissions.actions.ENTERPRISE_ACCESS, permissions.actions.PRODUCT_PHISICAL_SEARCH]
  }
  profileController.saveProfile(objProfile);
  console.log("empresa encontrado", res);
});
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


