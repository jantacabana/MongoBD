// const permissions = require('./models/permissions');
const userController = require('../controllers/userController');
const productPhisical = require('../controllers/productPhisical');
const productDigital = require('../controllers/productDigital');


var userc = new userController();
// userc.UserAdd()
userc.FindUserAll();
var prodPhisical = new productPhisical();
// prodPhisical.ProductPhisicalAdd();
// prodPhisical.FindProductPhisicalAll();
var prodDigital = new productDigital();
// prodDigital.ProductDigitalAdd();
//prodDigital.FindProductDigitalAll();