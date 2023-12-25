import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import axios from 'axios';


const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://anotebookbackend.onrender.com/api/auth/login', {
        email: credentials.email,
        password: credentials.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const { data } = response;

      if (data.success) {
        localStorage.setItem('token', data.authToken);
        props.showAlert('Logged in Success', 'success');
        navigate('/');
      } else {
        props.showAlert('Invalid Credentials', 'danger');
      }
    } catch (error) {
      // Handle errors if any
      console.error('Error occurred:', error);
      props.showAlert('Error occurred while logging in', 'danger');
    }
  };


  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className='container mt-5'>
      <h2>Login to Continue to <span className='text-danger'>Abhishek</span>  Notebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" onChange={onChange} value={credentials.email} id="email" name="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" onChange={onChange} value={credentials.password} name="password" id="password" />
        </div>

        <button type="submit" className="btn btn-danger" >Login</button>
      </form>


    </div>
  )
}

export default Login
