const mongoose = require('mongoose');
<<<<<<< HEAD
// const profile = require('./profile');
const user = require('./user');
=======
//const profile = require('./profile');
//const user = require('./user');
>>>>>>> 90a9bade41fdbfa6814114ff7c08a1fefa018caf

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
<<<<<<< HEAD
},
{versionkey:false})
=======
}, {versionKey:false})
>>>>>>> 90a9bade41fdbfa6814114ff7c08a1fefa018caf

module.exports = mongoose.model('Enterprise', enterpriseSchema);