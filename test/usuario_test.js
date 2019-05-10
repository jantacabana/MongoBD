const assert = require("assert");
const mongoose = require('mongoose');
const UsuarioModel = require("../src/models/user");
const Util = require("./utilidad");
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser',true)
mongoose.set('useFindAndModify',true)

const UsuarioUtil =Util
let usurio = new UsuarioModel(UsuarioUtil.objUsuario);

describe('Usuarios', () => {
    
    before((done)=>{
        mongoose.connect('mongodb://localhost:27017/mean'); 
        mongoose.connection
            .once('open', () => {
                console.log('Connected!'); done(); 
            })
            .on('error', (error) => {
            console.warn('Error : ',error);
        });
    });
    
    it('Creando Nuevo Usurio', (done) => {
        usurio.save()          
          .then((result) => {
            assert(result);
            done();
          });
    });

    it('Buscando Usuario', (done) => {
        UsuarioModel.findOne(UsuarioUtil.objUsuarioBuscar)          
          .then((result) => {
                assert(result);
            done();
          });
    });

    it('Actualizando Usuario', (done) => {
        UsuarioModel.updateMany(UsuarioUtil.objUsuarioBuscar,UsuarioUtil.objUsuarioupdate)
          .then((result) => {
                assert(result);
            done();
          });
    });

    it('Eliminando usuario', (done) => {
        usurio.deleteOne()        
        .then(() => UsuarioModel.findOne(UsuarioUtil.objUsuarioBuscar))
        .then((result) => {
            assert(result === null);
            done();
        });
    });


})