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

function convertTimeToHHMMSS(time) {
    let hours = Math.floor(time / (60 * 60 * 1000)); // find hours from time
    time %= (60 * 60 * 1000); // time remaining after hours
    let minutes = Math.floor(time / (60 * 1000)); // find minutes after hours
    time %= (60 * 1000); // time remaining after minutes
    let seconds = Math.floor(time / 1000); // find seconds after minutes

    // display time as [HH:MM:SS]
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function resetTimer() {
    clearInterval(timeInterval);
    startTime = 0;
    pausedTime = 0;
    isPaused = false;
    displayTime("00:00:00");
}

function displayTime(formattedTime) {
    document.getElementById('timerDisplay').textContent = formattedTime;
}

// EVENT LISTENERS
document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('pauseButton').addEventListener('click', pauseTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);
