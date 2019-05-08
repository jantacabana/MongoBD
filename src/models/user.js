const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const schema = new Schema({
    isActive: Boolean,
    username: String,
    fullname: String,
    password: String,
    email: String,
    token: String,
    expires: { type: Date, default: Date.now },
    timeCreated: { type: Date, default: Date.now }
})

class UserHelper {

    static get USER_CREATE(){ return "user_create"; }
    static get USER_EDIT(){ return "user_edit"; }
    static get USER_DELETE(){ return "user_delete"; }
    static get USER_SUSPENT(){ return "user_suspent"; }
    static get USER_PASSWORD_RESET(){ return "user_password_reset"; }
    static get USER_CLIENT_ACCESS(){ return "user_client_access"; }

}

Schema.loadClass(UserHelper)
var User = db.model("AccountManagement", schema);