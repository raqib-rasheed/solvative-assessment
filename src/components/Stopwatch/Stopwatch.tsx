import React from 'react';
import { useStopwatch } from '../../hooks/useStopwatch';
import styles from './Stopwatch.module.css';

const Stopwatch: React.FC = () => {
  const {
    time,
    isRunning,
    handleStartPause,
    handleStop,
    handleReset,
  } = useStopwatch();

  return (
    <div className={styles.stopwatch}>
      <h1>Stopwatch</h1>
      <div className={styles.timerDisplay}>{time}</div>
      <div className={styles.controls}>
        <button onClick={handleStartPause}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
