const mongoose = require("mongoose");
// const profile = require("./profile");
const user = require("./user");

var schema = mongoose.Schema;

const enterpriseSchema = new schema({
    code: {type:String, required : true},
    businessName: String,
    bucket: String,
    commercialName: String,
    abbreviation: String,
    ruc : Number,
    status: String,
    createdAt: {type : Date, default:Date.now()},
    modifiedAt: {type : Date},
    createdBy: String,
    modifiedBy: String,
    pathLogo: String,
    pathLogo2: String,
    fileLogoName: String,
    permissions: Array,
    profiles: [{_id: mongoose.ObjectId, Name: String}],
    users: [{_id: mongoose.ObjectId, username: String}],
    productsDigital: [{_id:mongoose.ObjectId, productName:String, code: String}],
    productsPhisical:[{_id:mongoose.ObjectId, productName:String, code: String}],
},
{versionkey:false})

module.exports = mongoose.model("Enterprise", enterpriseSchema);