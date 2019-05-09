const mongoose = require('mongoose');
const profile = require('./profile');
const user = require('./user');

const enterpriseSchema = mongoose.Schema({
    code: {type:String, required : true},
    businessName: String,
    bucket: String,
    commercialName: String,
    abbreviation: String,
    ruc : Number,
    status: String,
    createdAt: Date,
    modifiedAt: Date,
    createdBy: String,
    modifiedBy: String,
    pathLogo: String,
    pathLogo2: String,
    fileLogoName: String,
    permissions: Array
    //profiles: [profile],
   // users: [user]
    //products: [producto]
})

module.exports = mongoose.model('Enterprise', enterpriseSchema);