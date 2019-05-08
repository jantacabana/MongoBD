const mongoose = require('mongoose');

const enterpriseSchema = mongoose.Schema({
    code: {type:String, required : true},
    businessName: String,
    commercialName: String,
    abbreviation: String,
    ruc : Number,
    status: String,
    registrationDate: Date,
    modificationDate: Date,
    registrationUser: String,
    modificationUser: String,
    pathLogo: String,
    pathLogo2: String,
    fileLogoName: String,
    Permissions: Array
})


class EnterpriseHelper{

    static get ENTERPRISE_ACCESS(){return "enterprise-access"};
    static get ENTERPRISE_CREATE(){return "enterprise-create"};
    static get ENTERPRISE_EDIT_LOGO(){return "enterprise-edit-logo"};
       
    
}
enterpriseSchema.loadClass(EnterpriseHelper);
var Enterprise = db.model('Enterprise', enterpriseSchema);