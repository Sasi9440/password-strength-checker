import React from 'react';

const Suggestions = ({ strength, password }) => {
  const getSuggestions = () => {
    if (!password) return ['Start typing to see password requirements'];
    
    const suggestions = [];
    
    if (!strength.checks?.length) {
      suggestions.push('Use at least 8 characters');
    }
    if (!strength.checks?.uppercase) {
      suggestions.push('Add uppercase letters (A-Z)');
    }
    if (!strength.checks?.lowercase) {
      suggestions.push('Add lowercase letters (a-z)');
    }
    if (!strength.checks?.number) {
      suggestions.push('Add at least one number (0-9)');
    }
    if (!strength.checks?.special) {
      suggestions.push('Add special characters (!@#$%^&*)');
    }

    if (suggestions.length === 0) {
      suggestions.push('✅ Great! Your password is strong');
    }

    return suggestions;
  };

  return (
    <div className="suggestions">
      <h3>Requirements:</h3>
      <ul className="suggestions-list">
        {getSuggestions().map((suggestion, index) => (
          <li key={index} className="suggestion-item">
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;