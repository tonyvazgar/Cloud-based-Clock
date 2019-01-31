/** 
 * Luis Antonio Vázquez García
 * ---------------------------
 * Archivo para representar el servidor
 */
var express = require('express');
var app = express();

/**
 * Returns the current date of the sever
 */
function getDateTime() {
    var date = new Date();
    return date.toJSON();
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.send(getDateTime());
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});