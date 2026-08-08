import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMenuOpen(false);
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">

      <div className="max-w-7xl mx-auto px-5 md:px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-blue-600"
          >
            <span className="text-3xl">💼</span>
            JobSphere
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7 font-medium">

            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              to="/jobs"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Jobs
            </Link>

            <Link
              to="/companies"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Companies
            </Link>

            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </Link>

            {user && (
              <Link
                to="/applied"
                className="text-gray-700 hover:text-blue-600 transition"
              >
                Applied Jobs
              </Link>
            )}

          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">

            {user ? (
              <>
                <Link
                  to="/profile"
                  className="px-5 py-2.5 rounded-xl border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 hover:border-blue-300 transition"
                >
                  👤 Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="px-5 py-2.5 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-5 py-2.5 rounded-xl border border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 hover:border-blue-300 transition"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow-md shadow-blue-200 transition"
                >
                  Sign Up 🚀
                </Link>
              </>
            )}

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-3xl text-gray-700 p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-5">

            <div className="flex flex-col gap-2">

              <Link
                to="/"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                🏠 Home
              </Link>

              <Link
                to="/jobs"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                💼 Jobs
              </Link>

              <Link
                to="/companies"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                🏢 Companies
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                ℹ️ About
              </Link>

              {user && (
                <>
                  <Link
                    to="/applied"
                    onClick={closeMenu}
                    className="px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    📋 Applied Jobs
                  </Link>

                  <Link
                    to="/profile"
                    onClick={closeMenu}
                    className="px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    👤 Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 rounded-xl font-medium text-red-600 hover:bg-red-50 transition"
                  >
                    🚪 Logout
                  </button>
                </>
              )}

              {!user && (
                <div className="flex gap-3 pt-3">

                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="flex-1 text-center border border-gray-200 px-4 py-3 rounded-xl font-semibold hover:bg-gray-50"
                  >
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    onClick={closeMenu}
                    className="flex-1 text-center bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-blue-700"
                  >
                    Sign Up 🚀
                  </Link>

                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;