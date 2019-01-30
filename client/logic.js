/**
 * Luis Antonio Vázquez García
 *
 * Archivo para representar el cliente mediante la llamada de AJAX al cliente
 * ubicado en http://localhost:3000/ 
 */

var local_clock = document.getElementById('local_clock');
var server_clock = document.getElementById('server_clock');


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

    if (hours.length < 2)
    {
        hours = '0' + hours;
    }
    if (mins.length < 2)
    {
        mins = '0' + mins;
    }
    if (seconds.length < 2)
    {
        seconds = '0' + seconds;
    }

    var finalClock = "Local Time: " + hours + ":" + mins + ":" + seconds;
    local_clock.textContent = finalClock;
}

/**
 * Function to get the date of the server located in the specified
 * url
 */
function serverClock() { 
    $.ajax({
        type: 'GET', 
        url: 'http://localhost:3000'}).done(function(date)
        {
        var t = new Date(date);
        var hours = (t.getHours()%12).toString();
        var mins = twodigits(t.getMinutes().toString());
        var seconds = twodigits(t.getSeconds().toString());
        var milisecs = t.getMilliseconds().toString();

        var f = hours + ":" + mins + ":" + seconds;

        server_clock.textContent = "Server Time: " + f;
        document.body.style.background = "#"+milisecs;
    });
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

/**
 * Function to update the local
 */
function initialize(){
    localClock();
    serverClock();
}

//Initialization of the clocks and update it each 1000 millisecs
initialize();
setInterval(initialize, 1000);