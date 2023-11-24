import React, { useEffect, useState } from 'react';
import "./App.css"
const CircularProgressBar = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Example: Update the percentage over time (you can replace this with your own logic)
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => (prevPercentage + 1) % 101);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const strokeWidth = 10;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  const offset = ((100 - percentage) / 100) * circumference;

  return (
    <div className="circular-progress-bar">
      <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
        <circle
          className="progress-bar-background"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="progress-bar"
          cx="60"
          cy="60"
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="percentage">
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
