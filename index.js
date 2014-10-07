/*
 +==================================================+
 +                   StringStack                    +
 +==================================================+
*/

// ================ Dependencies ==================
var restify = require('restify');
var mongoose = require('mongoose');
var redis = require("redis");
// ================================================

// ================ Mongoose ======================
db = mongoose.connect('mongodb://localhost/StringStack');

// Models
require('./models/Strings');
require('./models/Tags');


// Controllers
//var aircraft = require('./routes/Aircraft');
// =================================================

// ================ Server set-up ==================
var server = restify.createServer({
    name: 'StringStack'
});

server.listen(8000, function () {
  console.log('%s listening at %s', server.name, server.url);
});

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE, OPTIONS");
    next();
});

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.throttle({
  burst: 50,
  rate: 20,
  ip: true
}));
// =================================================

var ROOT_PATH = '/api';

server.get('/', function(req, res){
    res.send('Ok');
});

//server.get(USER_PATH + 's', user.getUsers);