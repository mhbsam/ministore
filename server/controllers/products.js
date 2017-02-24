var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {

    //displaying all the products in the index route
        display_all: function(req, res){
            Product.find({}, function(err, products){
                if(err){
                    console.log(err);
                }
                else{
                    res.json(products);
                    // res.json([{firstname: 'Sam', lastname:'Mhb', birthday:'08/15/1986'}, {firstname:'Kam', lastname:'Mhb', birthday:'04/17/1992'}]);
                }
            })
        },


    //Creating a new product on /new route
        CreateProduct:  function(req, res){
            console.log("req body in sever controller:",req.body);
            var product = new Product ({productname: req.body.productname, image_url:req.body.image_url, description: req.body.description, initial_quantity: req.body.initial_quantity});
            product.save(function(err){
                if(err){
                    console.log(err);
                    res.json(err);
                }
                else{
                    console.log("product successfully created!");
                    res.redirect('/index_products');
                }
            })
            // console.log("user after creation", user);
        },
}
