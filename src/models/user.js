const mongoose = require("mongoose");
const enterpriseModel = require ("./enterprise");
// const Joi = require("joi");
var Schema = mongoose.Schema;

const schema = new Schema({
    isActive: Boolean,
    enterprise : {_id:mongoose.ObjectId,businessName:String,code: {type:String, required : true}},
    username: String,
    fullname: String,
    password: String,
    email: String,
    token: String, 
    permissions: Array,
    status:String,
    expires: { type: Date, default: Date.now },
    timeCreated: { type: Date, default: Date.now }
},
{versionKey:false})

module.exports = mongoose.model("User", schema);
