import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [credentias,setCredentias] = useState({name:"",email:"",password:"",cpassword:""})
  let navigate = useNavigate();
  const handleSubmit = async (e)=>{
    e.preventDefault();

   const {name,email,password} = credentias;

    const response = await fetch(`https://anotebookbackend.onrender.com/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
         },
         body: JSON.stringify({ name,email,password}),
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      //Save the auth token and redirect
          localStorage.setItem('token',json.authtoken)
          navigate("/login");
          props.showAlert("Account Created SuccessFully","success");
    }
    else{
      props.showAlert("Invalid Credintials","danger")

    }
}

const onChange = (e) => {
  setCredentias({ ...credentias, [e.target.name]: e.target.value });
};

  return (
    <div className='container mt-3'>
      <h1 className='my-5'>Singup to Abhishek Notebook</h1>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name="name" required  onChange={onChange} aria-describedby="emailHelp" />

  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email"required   onChange={onChange} aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" onChange={onChange} id="password" minLength="5" required />
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="cpassword" className="form-control" name="cpassword" onChange={onChange} id="cpassword" minLength="5" required />
  </div>

  <button type="submit" className="btn btn-danger">Submit</button>
</form>
    </div>
  )
}

export default Signup