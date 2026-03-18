import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setMenuOpen(false);
  };

  // Active link styling
  const navLink = (path) =>
    `block px-4 py-2 rounded-lg text-sm font-medium transition ${
      location.pathname === path
        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
        : "text-gray-300 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/10 border-b border-white/20">

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text"
          >
            aNotebook
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-3">

            {isLoggedIn && (
              <>
                <Link to="/" className={navLink("/")}>Home</Link>
                <Link to="/about" className={navLink("/about")}>About</Link>
                <Link to="/profile" className={navLink("/profile")}>Profile</Link>
              </>
            )}

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className={navLink("/login")}>
                  Login
                </Link>

                <Link to="/signup" className={navLink("/signup")}>
                  Signup
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-300 hover:text-white"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 py-4 space-y-3 bg-black/40 backdrop-blur-lg border-t border-white/10">

          {isLoggedIn && (
            <>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className={navLink("/")}
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={navLink("/about")}
              >
                About
              </Link>

              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className={navLink("/profile")}
              >
                Profile
              </Link>
            </>
          )}

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-pink-500 to-purple-600"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className={navLink("/login")}
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className={navLink("/signup")}
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