const mongoose = require('mongoose');
const enterpriseModel = require('./enterprise');

const profileSchema = mongoose.Schema({
    name: {type : String, required : true},
    //products: Array,
    //modules: Array,
    //permissions: Array,
    enterprise: enterpriseModel
})

module.exports = mongoose.model('Profile', profileSchema);