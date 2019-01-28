var local_clock = document.getElementById('local_clock');
var server_clock = document.getElementById('server_clock');
//var hexColor = document.getElementById('hex');

function updateClock(){
    var time = new Date();

    var hours = (time.getHours()%12).toString();
    var mins = twodigits(time.getMinutes().toString());
    var seconds = twodigits(time.getSeconds().toString());

    var finalClock = "Local Time: " + hours + ":" + mins + ":" + seconds;

    local_clock.textContent = finalClock;
}

function edit() { 
    $.ajax({type: 'GET', url: 'http://localhost:3000'}).done(function(date) {
        var t = new Date(date);
        var hours = (t.getHours()%12).toString();
        var mins = twodigits(t.getMinutes().toString());
        var seconds = twodigits(t.getSeconds().toString());

        var f = hours + " : " + mins + " : " + seconds;

        server_clock.textContent = f;
        console.log(new Date(date));

    });
}

function twodigits(digits){
    if(digits.length < 2){
        digits = '0' + digits;
    }
    return digits;
}

updateClock();
edit();
setInterval(edit, 1000);
setInterval(updateClock, 1000);

