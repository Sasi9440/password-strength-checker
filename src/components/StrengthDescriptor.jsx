import React from 'react';

const StrengthDescriptor = ({ password }) => {
  const calculateStrengthName = (pwd) => {
    if (!pwd) return { strength: 'Enter password', color: '#999' };

    let charset = 0;
    if (/[a-z]/.test(pwd)) charset += 26;
    if (/[A-Z]/.test(pwd)) charset += 26;
    if (/\d/.test(pwd)) charset += 10;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) charset += 32;

    const combinations = Math.pow(charset, pwd.length);
    const attemptsPerSecond = 1e12;
    const secondsToCrack = combinations / (2 * attemptsPerSecond);

    if (secondsToCrack < 1) return { strength: 'Terrible', color: '#F44336' };
    if (secondsToCrack < 60) return { strength: 'Very Weak', color: '#F44336' };
    if (secondsToCrack < 3600) return { strength: 'Weak', color: '#FF5722' };
    if (secondsToCrack < 86400) return { strength: 'Fair', color: '#FF9800' };
    if (secondsToCrack < 2592000) return { strength: 'Good', color: '#FFC107' };
    if (secondsToCrack < 31536000) return { strength: 'Strong', color: '#8BC34A' };
    if (secondsToCrack < 3153600000) return { strength: 'Very Strong', color: '#4CAF50' };
    if (secondsToCrack < 31536000000) return { strength: 'Excellent', color: '#2E7D32' };
    if (secondsToCrack < 315360000000) return { strength: 'Unbreakable', color: '#1B5E20' };
    return { strength: 'Impossible', color: '#0D47A1' };
  };

  const strengthInfo = calculateStrengthName(password);

  return (
    <div className="strength-descriptor-box">
      <div className="strength-descriptor-content">
        <span className="strength-label-text">Security Level:</span>
        <span 
          className="strength-name-display"
          style={{ color: strengthInfo.color }}
        >
          {strengthInfo.strength}
        </span>
      </div>
    </div>
  );
};

export default StrengthDescriptor;