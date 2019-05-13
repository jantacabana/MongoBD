const mongoose = require("mongoose");
const enterpriseModel = require("./enterprise");

const productDigitalSchema = mongoose.Schema({
    code: {type: String, required: true},
    status: String,
    enterprise: { _id: mongoose.ObjectId, businessName: String, code: {type: String, required: true}},
    denomination: String,
    description: String,
    productName: String,
    sentMailStatus: String,
    registrationUser: String,
    modificationUser: String,
    registrationDate: {type: Date, default: Date.now },
    modificationDate: Date,
    numericCode: Number,
    isDeleted: Boolean,
    templates: Array,
    headers: Array
},
        {versionKey: false});

module.exports = mongoose.model("ProductDigital", productDigitalSchema);