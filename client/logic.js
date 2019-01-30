/*
 * Luis Antonio Vázquez García
 * Archivo para representar el cliente 
 */
var local_clock = document.getElementById('local_clock');
var server_clock = document.getElementById('server_clock');
var serverClockDate;

/**
 * Function to get the current date of the client
 * and display it in the screen
 */
function localClock(){
    var time = new Date();

    var hours = (time.getHours()%12).toString();
    var mins = twodigits(time.getMinutes().toString());
    var seconds = twodigits(time.getSeconds().toString());
    var milisecs = time.getMilliseconds().toString();

    if (hours.length < 2) {
        hours = '0' + hours;
    }if (mins.length < 2) {
        mins = '0' + mins;
    }if (seconds.length < 2) {
        seconds = '0' + seconds;
    }

    var finalClock = "Local Time: " + hours + ":" + mins + ":" + seconds + "." + milisecs;
    local_clock.textContent = finalClock;
}

function obtenerHoraMiServidor(){
	$.ajax({
		url: 'http://localhost:3000/serverTime',
		type: 'GET',
		dataType:"json",
		cache: false,
		timeout: function(){
			console.log("Process completed!");
		},
		success:function(response){
            //console.log("Exito!");
            construirReloj(response.data);
            console.log(construirReloj(response.data));
		},
		error:function(xhr,status, error){
			console.log("Error!");
			console.log(error.message);
		},
	});
}


function serverClock() { 
    $.ajax({type: 'GET', url: 'http://localhost:3000'}).done(function(date) {
        var t = new Date(date);
        var hours = (t.getHours()%12).toString();
        var mins = twodigits(t.getMinutes().toString());
        var seconds = twodigits(t.getSeconds().toString());
        var milisecs = t.getMilliseconds().toString();

        var f = hours + ":" + mins + ":" + seconds + "." + milisecs;

        server_clock.textContent = "Server Time: " + f;
        document.body.style.background = "#"+milisecs;
    });
}



function sc(){
    var returnValue;
	$.ajax({
		url: 'http://localhost:3000/serverTime',
        type: 'GET',
        async: false,
		dataType:"json",
        cache: false,
        contentType: 'application/json; charset=utf-8',
		timeout: function(){
			console.log("Process completed!");
		},
		success:function(response){
            //console.log("Exito!");
            console.log("AAASASAS " + new Date(response.data));
            returnValue =  response.data;
		},
    });
    return returnValue;
}


/**
 * Function to make the 
 * 
 * @returns {string}
 */
function twodigits(digits){
    if(digits.length < 2){
        digits = '0' + digits;
    }
    return digits;
}

function runClocks(){
    localClock();
    serverClock();
}
runClocks();
setInterval(runClocks, 1000);