// timer.js

// variables 
let startTime = 0;
let pausedTime = 0;
let isPaused = false;
let timeInterval = null;

function startTimer() {
    startTime = Date.now() - pausedTime;
    timeInterval = setInterval(updateTimer, 1000) // update every 1000 milliseconds
    isPaused = false;
}

function pauseTimer() {
    clearInterval(timeInterval);
    pausedTime = getTime();
    isPaused = true;
}

function resetTimer() {

}

function updateTimer() {

}

function getTime() {
    return Date.now() - startTime;
}

function convertTimeToHHMMSS() {

}

function displayTime() {

}
