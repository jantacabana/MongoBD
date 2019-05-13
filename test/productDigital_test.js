const assert = require("assert");
const mongoose = require('mongoose');
const ObjetoModel = require("../src/models/productDigital");
const Util = require("./utilidad");
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', true);

const Utilitario = Util;
let objeto = new ObjetoModel(Utilitario.objProdDig);

describe('Productos Fisicos', () => {
    before((done)=> {
        mongoose.connect('mongodb://localhost:27017/mean');
        mongoose.connection
            .once('open', () => {
                console.log('Connected!'); done();
            })
            .on('error', (error) => {
            console.warn('Error : ', error);
            });
    });
    it('Creando Nuevo Ojeto', (done) => {
        objeto.save()
            .then((result) => {
                assert(result);
                done();
            });
    });

    it('Buscando Ojeto', (done) => {
        ObjetoModel.findOne(Utilitario.objProdDigBuscar)
            .then((result) => {
                assert(result);
                done();
            });
    });

    it('Actualizando Ojeto', (done) => {
        ObjetoModel.updateMany(Utilitario.objProdDigBuscar, Utilitario.objProdDigupdate)
            .then((result) => {
                assert(result);
                done();
            });
    });

    it('Eliminando Ojeto', (done) => {
        objeto.deleteOne()
            .then(() => ObjetoModel.findOne(Utilitario.objProdDigBuscar))
            .then((result) => {
                assert(result === null);
                done();
            });
    });

});