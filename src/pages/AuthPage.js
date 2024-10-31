import '../styles/AuthPage.css';

import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { loginUser,registerUser } from '../services/api';

function AuthPage({ onClose }) {
  const [isRegistering, setIsRegistering] = useState(true); 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await registerUser(username, email, password); 
      onClose();
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await loginUser(username, password);
      onClose();
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="auth-page">
      <button onClick={onClose} className="close-button">✖</button>
      <h2>{isRegistering ? 'Реєстрація' : 'Вхід'}</h2>
      <form onSubmit={isRegistering ? handleRegister : handleLogin}>
        <div>
          <label>Ім&apos;я користувача:</label>
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} required />
        </div>
        {isRegistering && (
          <div>
            <label>Електронна пошта:</label>
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          </div>
        )}
        <div>
          <label>Пароль:</label>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </div>
        <button type="submit">{isRegistering ? 'Зареєструватися' : 'Увійти'}</button>
      </form>
      <p className="toggle-auth">
        {isRegistering ? 'Вже є аккаунт?' : 'Немає аккаунта?'}{' '}
        <span onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Увійти' : 'Зареєструватися'}
        </span>
      </p>
    </div>
  );
}

AuthPage.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AuthPage;