import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      timerRef.current = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
  };

  const stop = () => {
    setRunning(false);
    clearInterval(timerRef.current);
  };

  const reset = () => {
    setRunning(false);
    clearInterval(timerRef.current);
    setTime(0);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Stopwatch</h1>
      <h2>{time} seconds</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop} style={{ margin: '0 10px' }}>
        Stop
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
