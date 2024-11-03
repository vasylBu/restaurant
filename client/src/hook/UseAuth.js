import { useState } from 'react';

import { login,register } from '../services/api.js';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async (name, email, password) => {
    setLoading(true);
    setError(null);
    try {
      const data = await register(name, email, password);
      localStorage.setItem('token', data.token);
      setUser(data);
    } catch (error_) {
      setError(error_);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (email, password) => {
    setLoading(true);
    setError(null);
    try {  
      const data = await login(email, password);
      localStorage.setItem('token', data.token);
      setUser(data);
    } catch (error_) {
      setError(error_);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    handleRegister,
    handleLogin,
  };
};

export default useAuth;
