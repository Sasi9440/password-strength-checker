# Password Strength Checker

A modern, interactive React application that evaluates password strength in real-time with advanced security analysis.

## 🚀 Features

### Core Functionality
- **Real-time Password Analysis** - Instant feedback as you type
- **Advanced Crack Time Calculator** - Shows how long it would take hackers to crack your password
- **Security Level Indicator** - Descriptive strength names from "Terrible" to "Impossible"
- **Visual Strength Meter** - Color-coded progress bar with dynamic feedback
- **Smart Suggestions** - Specific recommendations to improve password security

### Security Analysis
- **Character Set Detection** - Analyzes lowercase, uppercase, numbers, and special characters
- **Entropy Calculation** - Uses modern GPU attack speeds (1 trillion attempts/second)
- **Time-based Strength Levels**:
  - 🔴 **Terrible** - Instantly crackable
  - 🔴 **Very Weak** - Seconds to crack
  - 🟠 **Weak** - Minutes to crack
  - 🟡 **Fair** - Hours to crack
  - 🟡 **Good** - Days to crack
  - 🟢 **Strong** - Months to crack
  - 🟢 **Very Strong** - Years to crack
  - 🟢 **Excellent** - Decades to crack
  - 🔵 **Unbreakable** - Centuries to crack
  - 🔵 **Impossible** - Millions of years to crack

### User Experience
- **Modern UI Design** - Beautiful gradient backgrounds and smooth animations
- **Responsive Layout** - Works perfectly on desktop and mobile devices
- **Password Visibility Toggle** - Show/hide password functionality
- **Clean Component Architecture** - Modular React components for maintainability

## 🛠️ Technology Stack

- **React 19.2.0** - Modern React with latest features
- **CSS3** - Custom styling with gradients and animations
- **JavaScript ES6+** - Modern JavaScript features
- **Create React App** - Zero-configuration setup

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sasi9440/password-strength-checker.git
   cd password-strength-checker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── components/
│   ├── PasswordInput.jsx      # Password input with visibility toggle
│   ├── StrengthMeter.jsx      # Visual strength progress bar
│   ├── CrackTimeEstimator.jsx # Crack time calculation display
│   ├── StrengthDescriptor.jsx # Security level indicator box
│   └── Suggestions.jsx        # Password improvement suggestions
├── App.js                     # Main application component
├── App.css                    # Application styles
└── index.js                   # Application entry point
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Features in Detail

### Password Input Component
- Secure input field with show/hide toggle
- Real-time password strength analysis
- Clean, accessible interface

### Strength Meter
- Dynamic color-coded progress bar
- Visual feedback based on password complexity
- Smooth animations and transitions

### Crack Time Estimator
- Advanced algorithm considering character sets
- Modern GPU attack speed calculations
- Time estimates from seconds to millions of years

### Strength Descriptor
- Beautiful gradient box design
- Clear security level naming
- Color-coded strength indicators

### Smart Suggestions
- Specific improvement recommendations
- Real-time requirement checking
- Success confirmation for strong passwords

## 🔐 Security Algorithm

The password strength is calculated using:

1. **Character Set Analysis**
   - Lowercase letters: +26 characters
   - Uppercase letters: +26 characters
   - Numbers: +10 characters
   - Special characters: +32 characters

2. **Entropy Calculation**
   - Total combinations = charset^length
   - Attack speed = 1 trillion attempts/second (modern GPU)
   - Time to crack = combinations / (2 × attack_speed)

3. **Strength Classification**
   - Based on estimated crack time
   - Ranges from instant to millions of years
   - Color-coded for easy understanding

## 🌟 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Sasi9440**
- GitHub: [@Sasi9440](https://github.com/Sasi9440)
- Repository: [password-strength-checker](https://github.com/Sasi9440/password-strength-checker)

## 🙏 Acknowledgments

- Built with Create React App
- Inspired by modern security best practices
- Designed for educational and practical use

---

**⚡ Try it now and see how strong your passwords really are!**