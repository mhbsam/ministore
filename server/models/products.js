var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
 productname: {type: String, require: true, minlength:2}, image_url: {type: String, require: true, minlength:2}, description: {type: String, require: true, minlength:2}, initial_quantity: {type: Number, require: true, minlength:1}}, {timestamps: true});

var Product = mongoose.model('Product', ProductSchema);
