var local_clock = document.getElementById('local_clock');
var server_clock = document.getElementById('server_clock');
var serverClockDate;
//var hexColor = document.getElementById('hex');

function localClock(){
    var time = new Date();

    var hours = (time.getHours()%12).toString();
    var mins = twodigits(time.getMinutes().toString());
    var seconds = twodigits(time.getSeconds().toString());

    var finalClock = "Local Time: " + hours + ":" + mins + ":" + seconds;

    local_clock.textContent = finalClock;
}

// var putaHora = function (){
//     var x = null;
//     $.ajax({
//         type: 'GET', 
//         url: 'http://localhost:3000',
//         success: function(date) {
//             console.log("FECHONOOOON" + date);
//             x = new Date(date);
//             // console.log("***" + x);
//             // console.log("---------> " + typeof x);   
//         } 
//     });
//     return x;
// }();


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

function construirReloj(date){
    var d = new Date(date);
    return d;
}


function serverClock() { 
    $.ajax({type: 'GET', url: 'http://localhost:3000'}).done(function(date) {
        var t = new Date(date);
        var hours = (t.getHours()%12).toString();
        var mins = twodigits(t.getMinutes().toString());
        var seconds = twodigits(t.getSeconds().toString());

        var f = hours + " : " + mins + " : " + seconds;

        server_clock.textContent = "Server Time: " + f;
        console.log("serverClock() = " + new Date(date));

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



function twodigits(digits){
    if(digits.length < 2){
        digits = '0' + digits;
    }
    return digits;
}

function lc(serverDate){
    var time = new Date();
    console.log("********++" + serverDate);
    var server_time = new Date(serverDate);
    var hours = (time.getHours()%12).toString();
    var sh = (server_time.getHours()%12).toString();
    var mins = twodigits(time.getMinutes().toString());
    var sm = twodigits(server_time.getMinutes().toString());
    var seconds = twodigits(time.getSeconds().toString());
    var ss = twodigits(server_time.getSeconds().toString());

    var finalClock = "Local Time: " + hours + ":" + mins + ":" + seconds;
    var sfinalClock = "Server Time: " + sh + ":" + sm + ":" + ss;

    local_clock.textContent = finalClock;
    server_clock.textContent = sfinalClock;
}

//obtenerHoraMiServidor();
localClock();
serverClock();
//lc(sc());
console.log("<<<<<<<<<<<>>>>" + sc());

setInterval(localClock, 1000);
setInterval(serverClock, 1000);

