const mongoose = require('mongoose');
// const Joi = require('joi');
var Schema = mongoose.Schema;

const schema = new Schema({
    isActive: Boolean,
    username: String,
    fullname: String,
    password: String,
    email: String,
    token: String,
    // passwordReset : Object({
    //     token: String,
    //     expires: { type: Date, default: Date.now }
    // }),
    expires: { type: Date, default: Date.now },
    timeCreated: { type: Date, default: Date.now }
},
{versionKey:false})



module.exports = mongoose.model("User", schema);
