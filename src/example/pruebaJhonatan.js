const EnterpriseController = require('../controllers/enterpriseController');
const ProfileController = require('../controllers/profileController');


var controller = new EnterpriseController();
// controller.findEnterprise({_id : "5cd455bbb7b76c082c4bc321"});
/*
var objParam =
{
  code : "00120",
  bucket : "webservices.enotriasimple.ripley",
  businessName: "BCP OUTSOURCING",
  commercialName: "Banco de Crédito del Perú S.A.",
  abbreviation: "BCP",
  ruc : "1234567",
  createdAt: Date.now(),
  createdBy: "root"
}

var profileController = new ProfileController();
var objProfile = {
name: "callcenter",
enterprise : objParam
}

profileController.saveProfile(objProfile);
*/