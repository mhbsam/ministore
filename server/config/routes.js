var customers = require('../controllers/customers.js');
var products = require('../controllers/products.js');
var orders = require('../controllers/orders.js');




module.exports = function(app){
//======================================================================
//=================== *** Customer Routes *** ==========================
//======================================================================

    //*** display all the customers
    app.get('/index_customers', function(req, res) {
        // console.log("In the index_customers route");
        customers.display_all(req, res)
    })

    //*** Create a new custoemr
    app.post('/new_customer', function(req, res){
        // console.log("req.body in new_customer route",req.body);
        customers.CreateCustomer(req, res)
    })

    //*** Delete a new user
    app.post('/delete_customer', function(req, res) {
        // console.log("req.body in delete_customer route",req.body);
        customers.DeleteCustomer(req, res)
    })

//======================================================================
//=================== *** Product Routes *** ===========================
//======================================================================

    //*** display all the products
    app.get('/index_products', function(req, res) {
        // console.log("In the routes");
        products.display_all(req, res)
    })

    //*** Create a new product
    app.post('/new_product', function(req, res){
        // console.log("req.body in new_product route",req.body);
        products.CreateProduct(req, res)
    })

//======================================================================
//=================== *** Order Routes *** =============================
//======================================================================

    //*** display all the orders
    app.get('/index_orders', function(req, res) {
        // console.log("req.body in index_order route:",req.body);
        orders.display_all(req, res)
    })

    //*** Create a new product
    app.post('/new_order', function(req, res){
        console.log("req.body in new_order route",req.body);
        orders.CreateOrder(req, res)
    })


    //
    // //*** Display infomration regarding requested user
    // app.post('/show/:UserId', function(req, res) {
    //     // console.log('in the routes===========================');
    //     customers.ShowUser(req, res)
    // })
    //
    // //*** Edit a requested User
    // app.get('/edit/:UserId', function(req, res) {
    //     // console.log('in the edit/get route ===========================');
    //     customers.EditUser(req, res)
    // })
    //
    //
    //
    // app.post('/edit/:userId', function(req, res) {
    //     // console.log('in the edit/put route ===========================');
    //     customers.UpdateUser(req, res)
    // })

}
