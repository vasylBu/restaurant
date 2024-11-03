import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useAuth from '../hook/UseAuth';
import styles from '../styles/AuthPage.module.css';

function AuthPage({ onClose }) {
  const [isRegistering, setIsRegistering] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const {handleRegister, handleLogin } = useAuth();
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const register = async () => {
    handleRegister(username,email,password);
      navigate('/');
    
  };

  const login = async () => {
    handleLogin(email, password);
      navigate('/');
  
  };

  return (
    <div className={styles.authPage}>
      <button onClick={onClose} className={styles.closeButton}>✖</button>
      <h2>{isRegistering ? 'Реєстрація' : 'Вхід'}</h2>
      <form onSubmit={isRegistering ? register : login}>
        <div>
          <label>Ім&apos;я користувача:</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
        {isRegistering && (
          <div>
            <label>Електронна пошта:</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
        )}
        <div>
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button type="submit">{isRegistering ? 'Зареєструватися' : 'Увійти'}</button>
      </form>
      <p className={styles.toggleAuth}>
        {isRegistering ? 'Вже є аккаунт?' : 'Немає аккаунта?'}{' '}
        <span onClick={() => setIsRegistering(!isRegistering)} className={styles.toggleLink}>
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
