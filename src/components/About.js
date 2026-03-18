import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]); // ✅ FIXED

  return (
    <div className="text-center">
      <div className="bg-pink-600 text-white p-4">
        <h1 className="text-2xl font-bold">My Note Application</h1>
      </div>

      <div className="container mx-auto mt-8 p-8 bg-white rounded shadow-lg mb-10">
        <h2 className="text-xl font-semibold mb-4">
          About My Note Application
        </h2>

        <p className="text-lg mb-4">
          Welcome to my Note Application! This application allows you to manage your notes effectively.
          You can add new notes, update existing ones, delete unwanted notes, and also view all your notes in one place.
        </p>

        <h3 className="text-lg font-semibold mb-2">Features:</h3>
        <ul className="list-disc pl-5">
          <li>Add new notes</li>
          <li>Update existing notes</li>
          <li>Delete unwanted notes</li>
          <li>Show all your notes</li>
        </ul>

        <p className="mt-6">
          For any queries or feedback, please contact us at{" "}
          <a
            href="mailto:abhisheksavaliya555@gmail.com"
            className="text-blue-500 hover:underline"
          >
            abhisheksavaliya555@gmail.com
          </a>.
        </p>
      </div>

      <div className="my-5">
        <p className="text-4xl">🌸 Jay Shree Krishna 🌸</p>
      </div>
    </div>
  );
}

export default About;