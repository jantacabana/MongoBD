const permissions = require("../src/models/permissions");
const objEnternew =
{
  code : "00120",
  bucket : "webservices.enotriasimple.ripley",
  businessName: "BCP OUTSOURCING",
  commercialName: "Banco de Crédito del Perú S.A.",
  abbreviation: "BCP",
  ruc : "1234567",
  createdAt: Date.now(),
  createdBy: "root"
};

const objEnter =
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
};

const objUsuario ={
    isActive: true,
    username: "Josefl",
    fullname: "Jose Flores",
    password: "123",
    email: "flores@enotriasa.com",
    token: "asxaser2zxca",
    enterprise : objEnter,
    permissions:[permissions.actions.ENTERPRISE_CREATE,permissions.actions.ENTERPRISE_EDIT_LOGO],
    status:permissions.status.ENABLED
};

const objUsuarioBuscar = {
    username: "Josefl"
};
const objUsuarioupdate ={
    $set:{
        email:"flores@enotriasa.com"
    }
};

const objProdDigCreate = {
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
};

const objProdDigBuscar ={
    code :  "VCB"
};

const objProdDigupdate ={
    $set:{
        productName : "BCP FISICO"
    }
};

const objProdDig = {
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
const objProdPhiBuscar ={
    code :  "CO2",
}
const objProdPhiupdate ={
    $set:{       
        productName : "BCP FISICO"
    }
}
const objProdPhi = {
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


module.exports = ({objProdDigupdate,objProdPhiupdate,objProdPhiBuscar,objProdDigBuscar,objEnternew,objEnter,objUsuario,objUsuarioBuscar,objUsuarioupdate,objProdPhi,objProdDig})