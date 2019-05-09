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
<<<<<<< HEAD
        })  
=======
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
>>>>>>> 44899c0f2cd939ba85bc05664d017cf1211654ce
    }
    updateEnterprise(filter,update){
        enterpriseModel.update(filter,update,
         function (err, doc){
            console.log("err",err);
            console.log("doc",doc);
          });
    }

<<<<<<< HEAD
    createEnterprise(enterprise) {
        
        //profile._id = ObjectId("5cd44dd411cfee06ac03d540");
        enterpriseModel.create(enterprise).
        then(doc=>{
            console.log("empresa creada: ", doc);
            return doc;
        })
    }

     findEnterprise(param){
       return enterpriseModel.findOne(param);              
=======
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
>>>>>>> 44899c0f2cd939ba85bc05664d017cf1211654ce
    }
}

// async function _FindEnterprise(){
//     var aux =  await JournalLines._findOne(query,{ _id: 1 })
//     return aux
// }



module.exports = EnterpriseController;
