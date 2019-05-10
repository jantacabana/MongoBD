const assert = require("assert");
const mongoose = require('mongoose');
const Profile = require("../src/models/profile");
const permissions = require("../src/models/permissions");
//tell mongoose to use es6 implementation of promises
mongoose.Promise = global.Promise;

let profile;
let objProfile = {
    name: "callcenter",
    //enterprise : res,
    permissions : [permissions.actions.ENTERPRISE_ACCESS, permissions.actions.PRODUCT_PHISICAL_SEARCH]
}
describe('Deleting a Profile', () => {
    console.log("paso 1")

    before((done)=>{
    mongoose.connect('mongodb://localhost:27017/mean'); 
    mongoose.connection
        .once('open', () => {console.log('Connected!'); done(); })
        .on('error', (error) => {
        console.warn('Error : ',error);
    });
    })
    beforeEach((done) => {
        profile = new Profile(objProfile);
        console.log("OBJETO SAVE>>>",objProfile)
        profile.save()
        .then(() => {       
            done()});
    });

    
  it('removes a profile using its instance', (done) => {
    profile.remove()
      .then(() => Profile.findOne({ name: 'callcenter' }))
      .then((result) => {
        assert(result === null);
        done();
      });
  });

})