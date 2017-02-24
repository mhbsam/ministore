var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = {


//displaying all the customers in the index route
    display_all: function(req, res){
        Customer.find({}, function(err, customers){
            if(err){
                console.log(err);
            }
            else{
                res.json(customers);
                // res.json([{firstname: 'Sam', lastname:'Mhb', birthday:'08/15/1986'}, {firstname:'Kam', lastname:'Mhb', birthday:'04/17/1992'}]);
            }
        })
    },


//Creating a new customer on /new route
    CreateCustomer:  function(req, res){
        console.log("req body in server controller",req.body);
        var customer = new Customer ({name: req.body.name});
        customer.save(function(err){
            if(err){
                console.log(err);
                res.json(err);
            }
            else{
                console.log("--------------------------- customer successfully created! ------------------------ ");
                res.redirect('/index_customers');
            }
        })
        // console.log("user after creation", user);
    },



//Delete a specific user on /delete route
    DeleteCustomer: function(req, res){
        var query = {_id: req.body._id};
        // console.log('reqbody in delete function', req.body._id);
        Customer.remove(query,function (err) {
            if (err){
                console.log(err);
                res.json(err);
            }
            else{
                console.log("successfully removed the customer");
                res.redirect('/index_customers');
            }
        })
    },
//
//
//
// // Display information about one user on "/show/:id" route
//     ShowCustomer: function(req, res){
//         console.log('in the server Controller========================');
//         console.log(req.params);
//         Customer.findById({_id:req.params.CustomerId}, function(err, user){
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log('user here',user);
//                 // console.log('user in the server side', user);
//                 res.json(user);
//             }
//         })
//     },
//
//
//
// // Render a page on "/edit/:userId" route(get) to edit a particular user
//     EditCustomer: function(req, res){
//         // console.log('in the server controller===========================');
//         // console.log(req.params.CustomerId);
//         Customer.findById({_id:req.params.CustomerId}, function(err, user){
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 res.json(user);
//             }
//         })
//     },
//
//
// //Save updated user information on "/edit/:id" route(put)
//     UpdateCustomer: function(req, res){
//         console.log('in the server Controller');
//         console.log(req.params);
//         console.log(req.body);
//         var query = {_id: req.params.userId};
//         console.log(query);
//         Customer.update(query, {firstname: req.body.firstname, lastname: req.body.lastname, birthday: req.body.birthday,},function (err) {
//             if (err){
//                 console.log(err);
//             }
//             else{
//                 console.log("successfully edited a user");
//                 res.redirect('/index');
//             }
//         })
//     },
}
