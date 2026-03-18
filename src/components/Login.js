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
    <div className="mt-3 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-xl mb-4">
          Login to Continue to <span className="text-red-500">Abhishek</span> Notebook
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email address
            </label>
            <input
              type="email"
              onChange={onChange}
              value={credentials.email}
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
            />
            <p className="mt-2 text-sm text-gray-500">
              We'll never share your email with anyone else.
            </p>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              onChange={onChange}
              value={credentials.password}
              name="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center ${
              loading
                ? ''
                : 'bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded'
            }`}
          >
            {loading ? (
              <DNA height="60" width="60" ariaLabel="dna-loading" />
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;