var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
 name: {type: String, require: true, minlength:2}}, {timestamps: true});

var Customer = mongoose.model('Customer', CustomerSchema);
