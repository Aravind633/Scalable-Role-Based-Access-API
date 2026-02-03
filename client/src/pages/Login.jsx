import React, { useState } from 'react';
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(formData);
      localStorage.setItem('token', JSON.stringify(data.token));
      navigate('/');
    } catch (error) {
      alert('Login Failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input 
        type="email" 
        placeholder="Email" 
        onChange={(e) => setFormData({...formData, email: e.target.value})} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        onChange={(e) => setFormData({...formData, password: e.target.value})} 
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;