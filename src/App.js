import React, { useState } from 'react';
import './App.css';
import PasswordInput from './components/PasswordInput';
import StrengthMeter from './components/StrengthMeter';
import CrackTimeEstimator from './components/CrackTimeEstimator';
import StrengthDescriptor from './components/StrengthDescriptor';
import Suggestions from './components/Suggestions';

function App() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState({ score: 0, level: 'Weak' });

  const checkPasswordStrength = (pwd) => {
    let score = 0;
    const checks = {
      length: pwd.length >= 8,
      uppercase: /[A-Z]/.test(pwd),
      lowercase: /[a-z]/.test(pwd),
      number: /\d/.test(pwd),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(pwd)
    };

    Object.values(checks).forEach(check => check && score++);

    let level = 'Weak';
    if (score >= 4) level = 'Strong';
    else if (score >= 2) level = 'Medium';

    return { score, level, checks };
  };

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
    const strengthResult = checkPasswordStrength(newPassword);
    setStrength(strengthResult);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <h1>Password Strength Checker</h1>
          <PasswordInput 
            password={password} 
            onChange={handlePasswordChange} 
          />
          <StrengthMeter 
            strength={strength} 
            password={password}
          />
          <CrackTimeEstimator 
            password={password}
            strength={strength}
          />
          <StrengthDescriptor 
            password={password}
          />
          <Suggestions 
            strength={strength} 
            password={password}
          />
        </div>
      </div>
    </div>
  );
}

export default App;