const assert = require("assert");
const mongoose = require("mongoose");
const ProfileModel = require("../src/models/profile");
const EnterpriseModel = require("../src/models/enterprise");
const permissions = require("../src/models/permissions");
//tell mongoose to use es6 implementation of promises
mongoose.Promise = global.Promise;

let enterprise;
let objProfile = {
    name: "callcenter",
    //enterprise : res,
    permissions : [permissions.actions.ENTERPRISE_ACCESS, permissions.actions.PRODUCT_PHISICAL_SEARCH]
}

let objUser = {
    userName: "antacabana",
    //enterprise : res,
    permissions : [permissions.actions.ENTERPRISE_ACCESS, permissions.actions.PRODUCT_PHISICAL_SEARCH]
}

let objEnterprise = {
    code : "123",
    businessName : "Banco de crédito del Perú",
    commercialName : "BCP",
    abbreviation : "BCP",
    ruc : "789456132",
    status : permissions.status.ENABLED,
    profiles : [objProfile],
    users : [objUser]
}

before((done)=>{
    mongoose.connect("mongodb://localhost:27017/mean", {useNewUrlParser: true }); 
    mongoose.connection
        .once("open", () => {console.log("BD Connected!"); done(); })
        .on("error", (error) => {
        console.warn("Error : ",error);
    });
})

describe("enterprise - creating", () => {
    after((done) => {
        EnterpriseModel.deleteOne(objEnterprise)
            .then(() => done());
    });
    it("creates a enterprise", (done) => {
        //assertion is not included in mocha so 
        //require assert which was installed along with mocha
        enterprise = new EnterpriseModel(objEnterprise);
        enterprise.save() //takes some time and returns a promise
            .then(() => {
                assert(!enterprise.isNew); //if poke is saved to db it is not new
                done();
            });
    });
});

describe("enterprise - rendering", () => {
    beforeEach((done) => {
        enterprise = new EnterpriseModel(objEnterprise);
        enterprise.save()
            .then(() => done());
    });
    after((done) => {
        EnterpriseModel.deleteOne(objEnterprise)
            .then(() => done());
    });

    it("finds enterprise with the commercial name of BCP", (done) => {
        EnterpriseModel.findOne({ commercialName: "BCP" })
            .then((result) => {
                assert(result.commercialName === "BCP"); 
                done();
            });
    })
})

describe("enterprise - updating", () => {
    let _id = null;
    before((done) => {
        enterprise = new EnterpriseModel(objEnterprise);
        enterprise.save()
            .then(() => done());
    });
    after((done) => {
        EnterpriseModel.deleteOne({})
            .then(() => done());
    });

    function assertHelper(statement, done) {
        statement
         .then(() => EnterpriseModel.find({}))
         .then((enterprises) => {
             _id = enterprises[0]._id;
          assert(enterprises.length === 1);
          assert(enterprises[0].businessName === "BBVA");
          done();
        });
      }
      
      it("sets and saves enterprice using an instance", (done) => {
        enterprise.set("businessName", "BBVA"); //not updated in mongodb yet
        assertHelper(enterprise.save(), done);
       });
     /*
      it("update pokemon using instance", (done) => {
        //useful to update multiple fields of the object
        assertHelper(profile.update({ name: "distribucion" }), done);
      });*/
    
      /*it("update all matching pokemons using model", (done) => {
        assertHelper(ProfileModel.update({ name: "callcenter" }, { name: "distribucion" }), done);
      });*/
    
      it("update one enterprise using model", (done) => {
        assertHelper(EnterpriseModel.findOneAndUpdate({ businessName: "BCP" }, { businessName: "BBVA" }), done);
      });
    
      it("update one enterprise with id using model", (done) => {
        assertHelper(EnterpriseModel.findByIdAndUpdate(enterprise._id, { businessName: "BBVA" }), done);
      });
})


describe("enterprise - deleting", () => {
    
    beforeEach((done) => {
        enterprise = new EnterpriseModel(objEnterprise);
        enterprise.save()
        .then(() => {       
            done()});
    });
    
    it("removes a enterprise using its instance", (done) => {
        enterprise.remove()
        .then(() => EnterpriseModel.findOne({ businessName: "BBVA" }))
        .then((result) => {
        assert(result === null);
        done();
        });
    });

})