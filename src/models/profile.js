const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    enterpriseId: String,
    name: {type : String, required : true},
    products: Array,
    modules: Array,
    permissions: Array
})

class ProfileHelper{

    static get PROFILE_CREATE(){return "profile-create"};
    static get PROFILE_EDIT(){return "profile-edit"};

}
profileSchema.loadClass(ProfileHelper);
var Profile = db.model('Profile', profileSchema);