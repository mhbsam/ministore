var express  = require( 'express' ),
    path     = require( 'path' ),
    bp       = require('body-parser'),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();


app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use( bp.json() );

//connect the model to server
require('./server/config/mongoose.js');


// invoking the routes.js
var routes_setter = require('./server/config/routes.js')(app);
// routes_setter(app);


//tell server to listen on the port 8000
app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
