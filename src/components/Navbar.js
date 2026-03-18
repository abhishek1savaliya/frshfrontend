import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navLink = (path) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition ${
      location.pathname === path
        ? "bg-white/20 text-white"
        : "text-gray-300 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-md">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text"
          >
            aNotebook
          </Link>

          {/* Desktop Menu */}
          {localStorage.getItem("token") && (
            <div className="hidden md:flex space-x-2">
              <Link to="/" className={navLink("/")}>
                Home
              </Link>

              <Link to="/about" className={navLink("/about")}>
                About
              </Link>
            </div>
          )}

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-3">

            <Link to="/profile" className={navLink("/profile")}>
              Profile
            </Link>

            {localStorage.getItem("token") ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm rounded-lg font-medium bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className={navLink("/login")}>
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 transition"
                >
                  Signup
                </Link>
              </>
            )}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-white text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white/5 backdrop-blur-lg border-t border-white/10">

          {localStorage.getItem("token") && (
            <>
              <Link to="/" className={navLink("/")}>
                Home
              </Link>

              <Link to="/about" className={navLink("/about")}>
                About
              </Link>
            </>
          )}

          <Link to="/profile" className={navLink("/profile")}>
            Profile
          </Link>

          {localStorage.getItem("token") ? (
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 rounded-lg text-sm bg-gradient-to-r from-pink-500 to-purple-600"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className={navLink("/login")}>
                Login
              </Link>

              <Link
                to="/signup"
                className="block px-4 py-2 rounded-lg text-sm bg-gradient-to-r from-pink-500 to-purple-600"
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