import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="text-white text-xl font-semibold">
            aNotebook
          </Link>

          {/* Desktop Menu */}
          {localStorage.getItem('token') && (
            <div className="hidden md:flex space-x-4">
              <Link
                to="/"
                className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === '/' ? 'bg-gray-900' : ''
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`text-white px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === '/about' ? 'bg-gray-900' : ''
                }`}
              >
                About
              </Link>
            </div>
          )}

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-3">

            <Link
              to="/profile"
              className={`text-white px-3 py-2 rounded-md text-sm border ${
                location.pathname === '/profile' ? 'bg-gray-900' : ''
              }`}
            >
              Profile
            </Link>

            {localStorage.getItem('token') ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white px-3 py-2 rounded-md text-sm hover:bg-gray-700"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-white px-3 py-2 rounded-md text-sm hover:bg-gray-700"
                >
                  Signup
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white p-2 rounded-md hover:bg-gray-700"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2">

          {localStorage.getItem('token') && (
            <>
              <Link
                to="/"
                className="block text-white px-3 py-2 rounded-md hover:bg-gray-700"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="block text-white px-3 py-2 rounded-md hover:bg-gray-700"
              >
                About
              </Link>
            </>
          )}

          <Link
            to="/profile"
            className="block text-white px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Profile
          </Link>

          {localStorage.getItem('token') ? (
            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="block text-white px-3 py-2 rounded-md hover:bg-gray-700"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="block text-white px-3 py-2 rounded-md hover:bg-gray-700"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
