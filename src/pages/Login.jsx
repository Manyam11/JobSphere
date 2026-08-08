import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("Login successful! 🎉");
      navigate("/");
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        setError("Invalid email or password.");
      } else if (error.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (error.code === "auth/wrong-password") {
        setError("Wrong password.");
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md">

        {/* Logo */}
        <Link
          to="/"
          className="flex justify-center items-center gap-2 mb-8"
        >
          <span className="text-4xl">💼</span>
          <span className="text-3xl font-bold text-blue-600">
            JobSphere
          </span>
        </Link>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8">

          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-4">
              🔐
            </div>

            <h1 className="text-3xl font-bold text-gray-900">
              Welcome Back 👋
            </h1>

            <p className="text-gray-500 mt-2">
              Login to your JobSphere account
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-6 text-sm">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleLogin}>

            {/* Email */}
            <label className="block font-semibold text-gray-700 mb-2">
              Email Address
            </label>

            <div className="relative mb-5">
              <span className="absolute left-4 top-1/2 -translate-y-1/2">
                📧
              </span>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
              />
            </div>

            {/* Password */}
            <label className="block font-semibold text-gray-700 mb-2">
              Password
            </label>

            <div className="relative mb-6">
              <span className="absolute left-4 top-1/2 -translate-y-1/2">
                🔑
              </span>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold text-lg hover:bg-blue-700 active:scale-[0.98] transition-all shadow-lg shadow-blue-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "⏳ Logging in..." : "Login 🚀"}
            </button>

          </form>

          {/* Signup */}
          <p className="text-center text-gray-600 mt-7">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Create Account
            </Link>
          </p>

        </div>

        {/* Back Home */}
        <Link
          to="/"
          className="block text-center text-gray-500 hover:text-blue-600 mt-6 transition"
        >
          ← Back to Home
        </Link>

      </div>
    </div>
  );
}

export default Login;