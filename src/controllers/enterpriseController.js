const mongoose = require('mongoose');
const Async = require('async');
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
        enterprise.save(function (err) {
            if (err) {
                console.log(err);
            }
            console.log('Success!');
          });
    }
    updateEnterprise(filter,update){
        enterpriseModel.update(filter,update,
         function (err, doc){
            console.log("err",err);
            console.log("doc",doc);
          });
    }

    findEnterprise(param,callback){
        console.log(">>>",arguments)
         return enterpriseModel.find(param)
         //.
        // then(doc=>{            
        //     return callback(null,doc);
        // })        
    }

    _findEnterprise(param,fields){
        return new Promise((resolve,reject)=>{
            enterpriseModel.find(param,fields,(err,result)=>{
                if(err){
                    return reject(err)
                }
                // console.log("Empresa buscado: ", result);
                resolve(result)
            })
        })
    }

    async buscar(callback){
        var doc =await this._findEnterprise({},{});
        return  callback(null, doc); 
    }
}

// async function _FindEnterprise(){
//     var aux =  await JournalLines._findOne(query,{ _id: 1 })
//     return aux
// }



module.exports = EnterpriseController;
