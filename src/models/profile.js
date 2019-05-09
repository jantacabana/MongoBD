const mongoose = require('mongoose');
const enterpriseModel = require ('./enterprise');

const profileSchema = mongoose.Schema({
    name: String,
    enterprise : {_id:mongoose.ObjectId,businessName:String,code: {type:String, required : true}}
},{versionKey:false})

module.exports = mongoose.model('Profile', profileSchema);