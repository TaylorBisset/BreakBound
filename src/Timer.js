// Timer.js

import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [startTime, setStartTime] = useState(0);
  const [pausedTime, setPausedTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [timeInterval, setTimeInterval] = useState(null);
  const [formattedTime, setFormattedTime] = useState('00:00:00');

  useEffect(() => {
    if (!isPaused) {
      setTimeInterval(setInterval(updateTimer, 1000));
    }
    return () => clearInterval(timeInterval);
  }, [isPaused]);

  const getTime = () => Date.now() - startTime;

  const startTimer = () => {
    setStartTime(Date.now() - pausedTime);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    clearInterval(timeInterval);
    setPausedTime(getTime());
    setIsPaused(true);
  };

  const updateTimer = () => {
    let elapsedTime = getTime();
    let newFormattedTime = convertTimeToHHMMSS(elapsedTime);
    setFormattedTime(newFormattedTime);
  };

  const convertTimeToHHMMSS = (time) => {
    let hours = Math.floor(time / (60 * 60 * 1000));
    time %= (60 * 60 * 1000);
    let minutes = Math.floor(time / (60 * 1000));
    time %= (60 * 1000);
    let seconds = Math.floor(time / 1000);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const resetTimer = () => {
    clearInterval(timeInterval);
    setStartTime(0);
    setPausedTime(0);
    setIsPaused(true);
    setFormattedTime('00:00:00');
  };

  return (
    <div>
      <div id="timerDisplay">{formattedTime}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;