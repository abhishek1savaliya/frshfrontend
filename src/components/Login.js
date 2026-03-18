import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DNA } from 'react-loader-spinner';

const Login = (props) => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  // ✅ Redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, [navigate]); // ✅ FIXED

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        'https://anotebookbackend.onrender.com/api/auth/login',
        {
          email: credentials.email,
          password: credentials.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const { data } = response;

      if (data.success) {
        localStorage.setItem('token', data.authToken);
        props.showAlert('Logged in Success', 'success');
        navigate('/');
      } else {
        props.showAlert('Invalid Credentials', 'danger');
      }
    } catch (error) {
      props.showAlert('Error occurred while logging in', 'danger');
    } finally {
      setLoading(false); // ✅ cleaner
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">

      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl">

        <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
          Login to Continue
        </h2>

        <p className="text-center text-gray-400 mb-6">
          Welcome back to <span className="text-pink-400 font-semibold">Abhishek Notebook</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-sm text-gray-300">
              Email address
            </label>

            <input
              type="email"
              onChange={onChange}
              value={credentials.email}
              id="email"
              name="email"
              required
              className="mt-1 p-3 w-full rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              placeholder="Enter your email"
            />

            <p className="mt-2 text-xs text-gray-500">
              We'll never share your email.
            </p>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="text-sm text-gray-300">
              Password
            </label>

            <input
              type="password"
              onChange={onChange}
              value={credentials.password}
              name="password"
              id="password"
              required
              className="mt-1 p-3 w-full rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              placeholder="Enter your password"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center py-3 rounded-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 transition duration-300 disabled:opacity-50"
          >
            {loading ? (
              <DNA height="40" width="40" ariaLabel="loading" />
            ) : (
              "Login"
            )}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;