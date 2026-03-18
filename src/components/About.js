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
   <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">

  {/* Header */}
  <div className="text-center py-10">
    <h1 className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
      My Note Application
    </h1>
    <p className="text-gray-400 mt-2">Organize your thoughts beautifully</p>
  </div>

  {/* Card */}
  <div className="max-w-3xl mx-auto px-6">
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 hover:scale-[1.01] transition duration-300">

      <h2 className="text-2xl font-semibold mb-4 text-white">
        About This App
      </h2>

      <p className="text-gray-300 mb-6 leading-relaxed">
        Welcome to your premium Note Application experience. Effortlessly create, edit, and manage your notes with a clean and modern interface designed for productivity.
      </p>

      <h3 className="text-lg font-semibold mb-3 text-pink-400">
        Features
      </h3>

      <ul className="space-y-2 text-gray-300">
        <li className="flex items-center gap-2">
          ✅ Add new notes
        </li>
        <li className="flex items-center gap-2">
          ✏️ Update existing notes
        </li>
        <li className="flex items-center gap-2">
          🗑️ Delete unwanted notes
        </li>
        <li className="flex items-center gap-2">
          📋 View all notes
        </li>
      </ul>

      <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-400">
        Contact:{" "}
        <a
          href="mailto:abhisheksavaliya555@gmail.com"
          className="text-pink-400 hover:text-pink-300 transition"
        >
          abhisheksavaliya555@gmail.com
        </a>
      </div>

    </div>
  </div>

  {/* Footer */}
  <div className="text-center mt-12 pb-10">
    <p className="text-xl text-gray-400 tracking-wide">
      🌸 Jay Shree Krishna 🌸
    </p>
  </div>

</div>
  );
}

export default About;