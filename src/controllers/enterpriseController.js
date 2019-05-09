//const mongoose = require('mongoose');
const enterpriseModel = require('../models/enterprise');
const permissions = require('../models/permissions');

class EnterpriseController{
    //var userModel = new user
    createEnterprise(enterprise) {
        enterpriseModel.create({username: profile.username}).
        then(doc=>{
            console.log("Valor buscado: ", doc);
            return doc.username;
        })
        
    }

    saveEnterprise(enterpriseParam){
        enterpriseParam.status = permissions.status.ENABLED;
        var enterprise = new enterpriseModel(enterpriseParam);

        // create a comment
        // enterprise.children.push({ name: 'Liesl' });
        // var subdoc = parent.children[0];
        // console.log(subdoc) // { _id: '501d86090d371bab2c0341c5', name: 'Liesl' }
        // subdoc.isNew; // true

        enterprise.save(function (err) {
            if (err) {
                console.log(err);
            //    return handleError(err)
            }

            console.log('Success!');
          });
    }

    findEnterprise(param){
        enterpriseModel.find(param).
        then(doc=>{
            console.log("Empresa buscado: ", doc);
            return doc;
        })        
    }
}

module.exports = EnterpriseController;
