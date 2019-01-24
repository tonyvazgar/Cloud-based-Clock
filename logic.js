var clock = document.getElementById('clock');
//var hexColor = document.getElementById('hex');

function updateClock(){
    var time = new Date();

    var hours = (time.getHours()%12).toString();
    var mins = twodigits(time.getMinutes().toString());
    var seconds = twodigits(time.getSeconds().toString());

    var finalClock = hours + " : " + mins + " : " + seconds;

    clock.textContent = finalClock;

}

function twodigits(digits){
    if(digits.length < 2){
        digits = '0' + digits;
    }
    return digits;
}

updateClock();
setInterval(updateClock, 1000);

