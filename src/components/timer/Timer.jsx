import React, { useEffect, useState } from "react";
import { TimerWrapper } from "./Timer.styles";

const Timer = () => {
  const [timer, setTimer] = useState(20);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (timer === 0) {
      setIsRunning(false);
    }
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer((prev) => prev > 0 && prev - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (time) => {
    let minutes = String(Math.floor(time / 60));
    let seconds = String(time % 60);
    return `${minutes.padStart(2, "0")} : ${seconds.padStart(2, "0")}`;
  };

  const StartStopHandling = () => {
    setIsRunning((prev) => !prev);
  };

  const calcualteProgress = (max, currnet, r) => {
    let progressValue = -2 * Math.PI * r * (1 - currnet / max);
    return progressValue;
  };

  return (
    <TimerWrapper>
      <svg xmlns="http://www.w3.org/2000/svg">
        <circle cx="50%" cy="50%" r="130" strokeWidth="10" />
        <circle
          cx="50%"
          cy="50%"
          r="130"
          strokeWidth="10"
          strokeDasharray={2 * Math.PI * 130}
          strokeDashoffset={calcualteProgress(20, timer, 130)}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="percentage"
        >
          {formatTime(timer)}
        </text>
      </svg>

      <button onClick={StartStopHandling}>
        {isRunning ? "STOP" : "START"}
      </button>
    </TimerWrapper>
  );
};

export default Timer;
