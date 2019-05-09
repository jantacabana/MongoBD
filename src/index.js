const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const path = require('path');
const app = express();
const userController = require('./controllers/userController');
const productPhisical = require('./controllers/productPhisical');
const productDigital = require('./controllers/productDigital');
const permissions = require('./models/permissions');
// importing routes

// setting
app.set('port', process.env.PORT || 3000);
//app.set('models', path(__dirname, 'models'));

//middlewares


// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.status(200).send({
		message: 'GET Home route working fine!'
	});
});

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6  
  };

// Connection to BD
/*
mongoose.connect('mongodb://localhost/crud-mongo')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));
*/
mongoose.connect('mongodb://localhost:27017/mean', options,
    (err, res) => {
        if (err) {
            throw err;
        } else {
            console.log('Conectada con la bbdd...');
            var userc = new userController();
            // userc.UserAdd()
            // userc.FindUserAll();
            var prodPhisical = new productPhisical();
            // prodPhisical.ProductPhisicalAdd();
            // prodPhisical.FindProductPhisicalAll();
            var prodDigital = new productDigital();
            prodDigital.ProductDigitalAdd();
            prodDigital.FindProductDigitalAll();
            

        }
  });
  




// starting the server
app.listen(app.get('port'), function(){
	console.log(`server on port ${app.get('port')}`);
	console.log('Defined routes:');
  console.log(`	[GET] http://localhost:'${app.get('port')}/`);
});