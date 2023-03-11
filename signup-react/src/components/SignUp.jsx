import React, { useState } from 'react';
import "./SignUp.css"
function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    // Email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateConfirmPassword = (confirmPassword) => {
    return confirmPassword === formData.password;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (emailError || passwordError || confirmPasswordError) {
      alert("Can't submit the form");
    } else {
      alert('Form submitted successfully');
      setFormData({email: '',
      password: '',
      confirmPassword: '',});
    }
  };

  const handleEmailBlur = () => {
    const isValidEmail = validateEmail(formData.email);
    setEmailError(!isValidEmail);
  };

  const handlePasswordBlur = () => {
    const isValidPassword = validatePassword(formData.password);
    setPasswordError(!isValidPassword);
  };

  const handleConfirmPasswordBlur = () => {
    const isValidConfirmPassword = validateConfirmPassword(
      formData.confirmPassword
    );
    setConfirmPasswordError(!isValidConfirmPassword);
  };

  const { email, password, confirmPassword } = formData;

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleInputChange}
        onBlur={handleEmailBlur}
        required
        style={{ border: emailError ? '2px solid red' : '2px solid green' }}
      />
      {emailError && (
        <p style={{ color: 'red', fontSize: '0.8rem' }}>
          Please enter a valid email address.
        </p>
      )}
      </div>

      <div>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handleInputChange}
        onBlur={handlePasswordBlur}
        minLength={8}
        required
        style={{
          border: passwordError ? '2px solid red' : '2px solid green',
        }}
      />
      {passwordError && (
        <p style={{ color: 'red', fontSize: '0.8rem' }}>
          Password must be at least 8 characters long.
        </p>
      )}
      </div>

      <div>
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={confirmPassword}
        onChange={handleInputChange}
        onBlur={handleConfirmPasswordBlur}
        required
        style={{
          border: confirmPasswordError ? '2px solid red' : '2px solid green',
        }}
      />
      {confirmPasswordError && (
        <p style={{ color: 'red', fontSize: '0.8rem' }}>
          Passwords do not match.
        </p>
      )}

      </div>
      <button type="submit">Sign Up</button>
   </form>
  )
}

export default SignUp;