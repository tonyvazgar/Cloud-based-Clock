/*
 * Luis Antonio Vázquez García
 * Archivo para representar el servidor 
 */
var express = require('express');
var app = express();

var time = require('time');

/**
 * Returns the current date of the sever
 * 
 * @returns {string}
 */
function getDateTime() {

    var date = new Date();
    var hola = JSON.stringify(date.toJSON());
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    
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

app.get('/serverTime' , (req,res) => {
	res.json({
		data: getDateTime()
	});
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});