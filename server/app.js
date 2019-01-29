/*
 * Luis Antonio Vázquez García
 * Archivo para representar el servidor 
 */
var express = require('express');
var app = express();

var time = require('time');
// var now = new time.Date("July 01, 2015 22:30:00");
var now = new time.Date();
//now.setTimezone("America/Chicago");
// `.getDate()`, `.getDay()`, `.getHours()`, etc. will return values according to UTC-8

function getDateTime() {

    var date = new Date();
    var hola = JSON.stringify(date.toJSON());
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var prueba = new Date(Date.parse(date.toJSON()));
    //Para recibir en el cliente se desempaca de la siguiente mandera:
    //console.log(new Date(date.toJSON()));
    console.log(date.toJSON());
    console.log("Regresando algo de tipo: " + typeof date.toJSON());
    return date.toJSON();
    // var horaBuena = JSON.stringify(date);
    // return horaBuena;
    // //return typeof hola;
    //return hour + " : " + min + " : " + sec;
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', function (req, res) {
    //res.send('Hello World!');
    res.send(getDateTime());
});

app.get('/serverTime' , (req,res) => {
	/**Respond to request: sending actual time in miliseconds back on JSON format*/
	res.json({
		data: getDateTime()
	});
});


app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});