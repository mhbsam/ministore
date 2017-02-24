var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
 customer: {type: mongoose.Schema.Types.ObjectId, ref:'Customer', require: true},
 product: {type: mongoose.Schema.Types.ObjectId, ref:'Product', require: true},
 order_quantity: {type: Number, require: true, minlength:1}
},  {timestamps: true});

var Order = mongoose.model('Order', OrderSchema);
