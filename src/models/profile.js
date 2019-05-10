const mongoose = require("mongoose");
const enterpriseModel = require ("./enterprise");

const profileSchema = mongoose.Schema({
    name: String,
    description: String,
    enterprise : {_id: mongoose.ObjectId, businessName:String, code: {type: String}, ruc: String},
    permissions : [String],
    status: [String],
    productsDigital: [{_id:mongoose.ObjectId, productName:String, code: String}],
    productsPhisical:[{_id:mongoose.ObjectId, productName:String, code: String}]
},{versionKey:false})

module.exports = mongoose.model("Profile", profileSchema);