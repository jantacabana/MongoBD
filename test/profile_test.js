const assert = require("assert");
const mongoose = require("mongoose");
const ProfileModel = require("../src/models/profile");
const permissions = require("../src/models/permissions");
//tell mongoose to use es6 implementation of promises
mongoose.Promise = global.Promise;

let profile;
let objProfile = {
    name: "callcenter",
    //enterprise : res,
    permissions : [permissions.actions.ENTERPRISE_ACCESS, permissions.actions.PRODUCT_PHISICAL_SEARCH]
}
before((done)=>{
    mongoose.connect("mongodb://localhost:27017/mean", {useNewUrlParser: true }); 
    mongoose.connection
        .once("open", () => {console.log("BD Connected!"); done(); })
        .on("error", (error) => {
        console.warn("Error : ",error);
    });
})

describe("profile - creating", () => {
    after((done) => {
        ProfileModel.deleteOne(objProfile)
            .then(() => done());
    });
    it("creates a profile", (done) => {
        //assertion is not included in mocha so 
        //require assert which was installed along with mocha
        const profile = new ProfileModel(objProfile);
        profile.save() //takes some time and returns a promise
            .then(() => {
                assert(!profile.isNew); //if poke is saved to db it is not new
                done();
            });
    });
});


describe("profile - rendering", () => {
    beforeEach((done) => {
        profile = new ProfileModel(objProfile);
        profile.save()
            .then(() => done());
    });
    after((done) => {
        ProfileModel.deleteOne(objProfile)
            .then(() => done());
    });

    it("finds profile with the name of callcenter", (done) => {
        ProfileModel.findOne({ name: "callcenter" })
            .then((result) => {
                assert(result.name === "callcenter"); 
                done();
            });
    })
})

describe("profile - updating", () => {
    let _id = null;
    before((done) => {
        profile = new ProfileModel(objProfile);
        profile.save()
            .then(() => done());
    });
    after((done) => {
        ProfileModel.deleteOne({})
            .then(() => done());
    });

    function assertHelper(statement, done) {
        statement
         .then(() => ProfileModel.find({}))
         .then((profiles) => {
             _id = profiles[0]._id;
          assert(profiles.length === 1);
          assert(profiles[0].name === "distribucion");
          done();
        });
      }
      
      it("sets and saves profile using an instance", (done) => {
        profile.set("name", "distribucion"); //not updated in mongodb yet
        assertHelper(profile.save(), done);
       });
     /*
      it("update pokemon using instance", (done) => {
        //useful to update multiple fields of the object
        assertHelper(profile.update({ name: "distribucion" }), done);
      });*/
    
      /*it("update all matching pokemons using model", (done) => {
        assertHelper(ProfileModel.update({ name: "callcenter" }, { name: "distribucion" }), done);
      });*/
    
      it("update one profile using model", (done) => {
        assertHelper(ProfileModel.findOneAndUpdate({ name: "callcenter" }, { name: "distribucion" }), done);
      });
    
      it("update one profile with id using model", (done) => {
        assertHelper(ProfileModel.findByIdAndUpdate(profile._id, { name: "distribucion" }), done);
      });
})


describe("profile - deleting", () => {
    
    beforeEach((done) => {
        profile = new ProfileModel(objProfile);
        profile.save()
        .then(() => {       
            done()});
    });
    
    it("removes a profile using its instance", (done) => {
        profile.remove()
        .then(() => ProfileModel.findOne({ name: "callcenter" }))
        .then((result) => {
        assert(result === null);
        done();
        });
    });

})