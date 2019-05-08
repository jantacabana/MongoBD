const mongoose = require('mongoose');
// const Joi = require('joi');
var Schema = mongoose.Schema;

const schema = new Schema({
    // isActive: Boolean,
    username: String,
    fullname: String,
    // password: String,
    // email: String,
    // token: String,
    // expires: { type: Date, default: Date.now },
    // timeCreated: { type: Date, default: Date.now }
},
{versionKey:false})

class UserHelper {

    static get USER_CREATE(){ return "user_create"; }
    static get USER_EDIT(){ return "user_edit"; }
    static get USER_DELETE(){ return "user_delete"; }
    static get USER_SUSPENT(){ return "user_suspent"; }
    static get USER_PASSWORD_RESET(){ return "user_password_reset"; }
    static get USER_CLIENT_ACCESS(){ return "user_client_access"; }

}



// Schema.loadClass(UserHelper)
// User.collection ='users'
var User = mongoose.model("User", schema);
// module.exports = db.model("AccountManagement", schema);
User.create({username:'Jose',fullname:'Jose F'}).
then(doc=>{
    return "User.findByFullName('Jon Snow');"
})


// var small = new User({ fullname: 'smallsave',username:'samall2' });
// small.save(function (err) {
//     if (err) return handleError(err);
//     // saved!
//     console.log("save")
//   });
  
//   // or
  
//   User.create({ fullname: 'smallcreate',username:'samall2' }, function (err, small) {
//     if (err) return handleError(err);
//     // saved!
//     console.log("create")
//   });
  
//   // or, for inserting large batches of documents
//   User.insertMany([{ size: 'small' }], function(err) {
  
//   });