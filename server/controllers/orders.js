var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');



module.exports = {

    //displaying all the products in the index route
        display_all: function(req, res){
            Order.find({}).populate(['product', 'customer']).exec(function(err, orders){

                if(err){
                    console.log(err);
                    res.json(err);
                }
                else{
                    console.log(orders);
                    res.json(orders);
                    // res.json([{firstname: 'Sam', lastname:'Mhb', birthday:'08/15/1986'}, {firstname:'Kam', lastname:'Mhb', birthday:'04/17/1992'}]);
                }
            })
        },


    //Creating a new product on /new route
        CreateOrder:  function(req, res){
            console.log("req body in sever controller:",req.body);

            var order = new Order ({customer: req.body.customer, product:req.body.product, order_quantity: req.body.order_quantity});

            // *** creating order
            var updated_quantity = req.body.product.initial_quantity - req.body.order_quantity;
            console.log('updated_quantity in the server', updated_quantity);

            //*** updating product quantity
            Product.findById(req.body.product._id , function(err, result){
                if (err){
                    console.log(err);
                }
                else{
                    result.initial_quantity = updated_quantity;
                    result.save(function(err, result){
                        if(err){
                            console.log(err);
                            res.json(err);
                        }
                        else{
                            console.log(result,'=======================');
                            // res.json(result);
                        }
                    })
                }
            });

            order.save(function(err){
                if(err){
                    console.log(err);
                    res.json(err);
                }
                else{
                    console.log("The order successfully created!", order);
                    res.redirect('/index_orders');
                }
            })
            // console.log("user after creation", user);
        },
}
