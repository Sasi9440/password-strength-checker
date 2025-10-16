import React from 'react';

const StrengthMeter = ({ strength, password }) => {
  const getStrengthColor = () => {
    switch (strength.level) {
      case 'Strong': return '#4CAF50';
      case 'Medium': return '#FF9800';
      default: return '#F44336';
    }
  };

  const getProgressWidth = () => {
    if (!password) return 0;
    return (strength.score / 5) * 100;
  };

  return (
    <div className="strength-meter">
      <div className="strength-header">
        <span className="strength-label">Password Strength:</span>
        <span 
          className={`strength-level ${strength.level.toLowerCase()}`}
          style={{ color: getStrengthColor() }}
        >
          {password ? strength.level : 'Enter password'}
        </span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ 
            width: `${getProgressWidth()}%`,
            backgroundColor: getStrengthColor()
          }}
        />
      </div>
    </div>
  );
};

export default StrengthMeter;