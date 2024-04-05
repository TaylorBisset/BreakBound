// timer.js

// VARIABLES 

let startTime = 0;
let pausedTime = 0;
let isPaused = false;
let timeInterval = null;

// FUNCTIONS 

function getTime() {
    return Date.now() - startTime;
}

function startTimer() {
    startTime = Date.now() - pausedTime;
    timeInterval = setInterval(updateTimer, 1000) // update every 1000 milliseconds
    isPaused = false;
}

function pauseTimer() {
    clearInterval(timeInterval);    // Stops the timer
    pausedTime = getTime();         // Store current time
    isPaused = true;
}

function updateTimer() {
    let elapsedTime = getTime();
    let formattedTime = convertTimeToHHMMSS(elapsedTime);
    displayTime(formattedTime);
}

function convertTimeToHHMMSS() {

}

function resetTimer() {

}

function displayTime() {

}
