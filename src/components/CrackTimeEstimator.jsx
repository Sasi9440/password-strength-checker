import React from 'react';

const CrackTimeEstimator = ({ password, strength }) => {
  const calculateCrackTime = (pwd) => {
    if (!pwd) return { time: 0, display: 'Enter password', color: '#999' };

    let charset = 0;
    if (/[a-z]/.test(pwd)) charset += 26;
    if (/[A-Z]/.test(pwd)) charset += 26;
    if (/\d/.test(pwd)) charset += 10;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) charset += 32;

    const combinations = Math.pow(charset, pwd.length);
    const attemptsPerSecond = 1e12; // 1 trillion attempts/sec (modern GPU)
    const secondsToCrack = combinations / (2 * attemptsPerSecond);

    return formatTime(secondsToCrack);
  };

  const formatTime = (seconds) => {
    if (seconds < 1) return { time: seconds, display: 'Instantly', strength: 'Terrible', color: '#F44336' };
    if (seconds < 60) return { time: seconds, display: `${Math.ceil(seconds)} seconds`, strength: 'Very Weak', color: '#F44336' };
    if (seconds < 3600) return { time: seconds, display: `${Math.ceil(seconds/60)} minutes`, strength: 'Weak', color: '#FF5722' };
    if (seconds < 86400) return { time: seconds, display: `${Math.ceil(seconds/3600)} hours`, strength: 'Fair', color: '#FF9800' };
    if (seconds < 2592000) return { time: seconds, display: `${Math.ceil(seconds/86400)} days`, strength: 'Good', color: '#FFC107' };
    if (seconds < 31536000) return { time: seconds, display: `${Math.ceil(seconds/2592000)} months`, strength: 'Strong', color: '#8BC34A' };
    if (seconds < 3153600000) return { time: seconds, display: `${Math.ceil(seconds/31536000)} years`, strength: 'Very Strong', color: '#4CAF50' };
    if (seconds < 31536000000) return { time: seconds, display: `${Math.ceil(seconds/31536000)} decades`, strength: 'Excellent', color: '#2E7D32' };
    if (seconds < 315360000000) return { time: seconds, display: `${Math.ceil(seconds/315360000)} centuries`, strength: 'Unbreakable', color: '#1B5E20' };
    return { time: seconds, display: 'Millions of years', strength: 'Impossible', color: '#0D47A1' };
  };

  const crackTime = calculateCrackTime(password);

  return (
    <div className="crack-time-estimator">
      <div className="crack-time-header">
        <span className="crack-time-label">Time to crack:</span>
        <span 
          className="crack-time-value"
          style={{ color: crackTime.color }}
        >
          {crackTime.display}
        </span>
      </div>

    </div>
  );
};

export default CrackTimeEstimator;