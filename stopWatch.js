`use strict`
let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let timer;

function stopWatch() {
    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
    }

    if (minutes / 60 === 1) {
        minutes = 0;
        hours++;
    }

//    If one digit
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    }

    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    }

    if (hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    }

    document.getElementById("stopwatch").innerText = `${displayHours} : ${displayMinutes} : ${displaySeconds}`;
}

function start() {
    if (timer) {
        return;
    }

    timer = setInterval(stopWatch, 1000);
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("stopwatch").innerText = `00 : 00 : 00`;
}

document.getElementById("stopwatch-start").addEventListener("click", start);
document.getElementById("stopwatch-stop").addEventListener("click", stop);
document.getElementById("stopwatch-reset").addEventListener("click", reset);

