import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state
    try {
      const response = await axios.post('http://localhost:8000/api/awt/users', { 
        name, email, password 
      });
      console.log(response);
      // Redirect user to login page after successful signup
      if (response && response.data) {
        toast.success(response.data.message);
        setEmail("");
        setPassword("");
        navigate("/login"); // Redirect to login page
      }
    } 
    catch (error) {
      setError(error.response);
    }
  };
  
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/login', { /* your login data */ });
      // Assuming the response contains a token or some indication of successful login
      setIsLoggedIn(true);
      // You might also store the token in local storage or a cookie for future requests
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);

    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Signup</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Signup
        </button>
      </form>
      <p className="mt-2">Already registered? <Link to="/login" className="text-blue-500 hover:underline">Login{handleLogin}</Link></p>
    </div>
  );
};

export default Signup;
