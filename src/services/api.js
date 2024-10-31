import axios from 'axios';

export async function registerUser(username, email, password) {
  try {
    const response = await axios.post('http://localhost:5000/register', { 
      username,
      email,
      password,
    });
    alert('Registration successful! Welcome to our furniture store.');
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error.response?.data.message || error.message);
    alert(error.response?.data.message || 'Registration failed. Please try again.');
    throw error;
  }
}



export async function loginUser(username, password) {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', {
      username,
      password,
    });
    localStorage.setItem('token', response.data.token); 
    alert('Login successful! Enjoy browsing our furniture collection.');
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response?.data.message || error.message);
    alert(error.response?.data.message || 'Login failed. Please try again.');
    throw error;
  }
}
