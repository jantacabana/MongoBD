const mongoose = require('mongoose');

const productDigitalSchema = mongoose.Schema({  
    code : String,
    status : String,
    enterpriseId : String,
    denomination : String,
    description : String,
    productName : String,
    sentMailStatus : String,
    registrationUser : String,
    modificationUser : String,
    registrationDate : { type: Date, default: Date.now },
    modificationDate : Date,
    numericCode : Number,
    isDeleted : Boolean,
    templates : Array,
    headers : Array
},
{versionKey:false})

module.exports = mongoose.model('ProductDigital', productDigitalSchema);