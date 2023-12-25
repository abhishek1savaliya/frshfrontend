import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [])
  return (
    <div className="text-center">
      <div class="bg-pink-600 text-white p-4">
        <h1 class="text-2xl font-bold">My Note Application</h1>
      </div>
      <div class="container mx-auto mt-8 p-8 bg-white rounded shadow-lg mb-10">
        <h2 class="text-xl font-semibold mb-4">About My Note Application</h2>

        <p class="text-lg mb-4">
          Welcome to my Note Application! This application allows you to manage your notes effectively.
          You can add new notes, update existing ones, delete unwanted notes, and also view all your notes in one place.
        </p>

        <h3 class="text-lg font-semibold mb-2">Features:</h3>
        <ul class="list-disc pl-5">
          <li>Add new notes</li>
          <li>Update existing notes</li>
          <li>Delete unwanted notes</li>
          <li>Show all your notes</li>
        </ul>

        <p class="mt-6">
          For any queries or feedback, please contact us at <a href="mailto:abhisheksavaliya555@gmail.com" class="text-blue-500 hover:underline">abhisheksavaliya555@gmail.com</a>.
        </p>
      </div>
      <div className="my-5">
        <p className="text-4xl">&#127801; Jay Shree Krishna &#127801;</p>
      </div>

    </div>
  );
}

export default About;
