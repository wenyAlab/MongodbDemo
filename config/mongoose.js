var config = require('./config.js');
var mongoose = require('mongoose');

mongoose.connect(config.uri);
