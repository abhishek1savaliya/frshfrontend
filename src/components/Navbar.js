import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  let location = useLocation();
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">

          <Link to="/" className="text-white text-xl ml-2 font-semibold">
            aNotebook
          </Link>

          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {localStorage.getItem('token') && (
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className={`text-white px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/' ? 'bg-gray-900' : ''
                    }`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`text-white px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/about' ? 'bg-gray-900' : ''
                    }`}
                >
                  About
                </Link>
              </div>
            </div>
          )}

          <Link
            to="/profile"
            className={`text-white px-3 py-2 rounded-md text-sm font-medium text-white px-3 py-2 rounded-md text-sm font-medium btn border ${location.pathname === '/profile' ? 'bg-gray-900' : ''
              }`}
          >
            Profile
          </Link>


          {localStorage.getItem('token') ? (
            <button
              onClick={handleLogout}
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Logout
            </button>
          ) : (
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/login"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                >
                  Signup
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );

}

export default Navbar;
