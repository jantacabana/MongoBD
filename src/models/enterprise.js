const mongoose = require('mongoose');
// const profile = require('./profile');
const user = require('./user');

var schema = mongoose.Schema;

const enterpriseSchema = new schema({
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
},
{versionkey:false})

module.exports = mongoose.model('Enterprise', enterpriseSchema);