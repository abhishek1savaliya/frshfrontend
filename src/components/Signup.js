import React, { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentials.password !== credentials.cpassword) {
      props.showAlert("Passwords do not match", "error");
      return;
    }

    setLoading(true);

    try {
      const { name, email, password } = credentials;

      const response = await fetch(
        "https://anotebookbackend.onrender.com/api/auth/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );

      const json = await response.json();

      if (json.success) {
        localStorage.setItem("token", json.authToken);
        props.showAlert("Account Created Successfully", "success");
        navigate("/login");
      } else {
        props.showAlert("Invalid Credentials", "error");
      }
    } catch (error) {
      props.showAlert("Signup failed. Try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">

      {/* Card */}
      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
          Create Account 🚀
        </h2>

        <p className="text-center text-gray-400 mb-6">
          Join <span className="text-pink-400">Abhishek Notebook</span>
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="text-gray-300 text-sm">Name</label>
            <input
              type="text"
              name="name"
              required
              onChange={onChange}
              className="w-full mt-1 p-3 rounded-lg bg-white/10 border border-gray-600 text-white focus:ring-2 focus:ring-pink-500 outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={onChange}
              className="w-full mt-1 p-3 rounded-lg bg-white/10 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Enter your email"
            />
            <p className="text-xs text-gray-500 mt-1">
              We'll never share your email.
            </p>
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <input
              type="password"
              name="password"
              minLength={5}
              required
              onChange={onChange}
              className="w-full mt-1 p-3 rounded-lg bg-white/10 border border-gray-600 text-white focus:ring-2 focus:ring-pink-500 outline-none"
              placeholder="Enter password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-gray-300 text-sm">Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              minLength={5}
              required
              onChange={onChange}
              className="w-full mt-1 p-3 rounded-lg bg-white/10 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Confirm password"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 transition duration-300 disabled:opacity-50"
          >
            {loading ? (
              <DNA height="40" width="40" ariaLabel="loading" />
            ) : (
              "Signup"
            )}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-pink-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
};

export default Signup;