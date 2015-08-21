require("babel/register");


var app = require('./app-starter');
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});