import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [appliedCount, setAppliedCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        const appliedJobs =
          JSON.parse(localStorage.getItem("appliedJobs")) || [];

        const myAppliedJobs = appliedJobs.filter(
          (item) => item.email === currentUser.email
        );

        setAppliedCount(myAppliedJobs.length);

        const savedJobs =
          JSON.parse(localStorage.getItem("savedJobs")) || [];

        setSavedCount(savedJobs.length);
      } else {
        navigate("/login");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-5xl animate-pulse">💼</div>
          <p className="text-gray-500 mt-4 font-medium">
            Loading your profile...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-10">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 font-bold text-xl hover:text-blue-700 transition"
          >
            💼 JobSphere
          </Link>

          <p className="text-gray-500 mt-2">
            Manage your JobSphere account
          </p>

        </div>

        {/* Main Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

          {/* Profile Banner */}
          <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600 relative">

            <div className="absolute inset-0 flex items-center justify-center opacity-20 text-7xl">
              💼
            </div>

          </div>

          {/* Profile Info */}
          <div className="px-5 sm:px-8 pb-8">

            <div className="relative -mt-12">

              <div className="w-24 h-24 bg-white rounded-full p-1 shadow-lg">

                <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center text-5xl">
                  👤
                </div>

              </div>

            </div>

            <div className="mt-4">

              <h1 className="text-3xl font-bold text-gray-900">
                My Profile
              </h1>

              <p className="text-gray-500 mt-1">
                {user.email}
              </p>

              <div className="inline-flex items-center gap-2 mt-3 bg-green-50 text-green-600 px-3 py-1.5 rounded-full text-sm font-semibold">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Active Account
              </div>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">

              {/* Applied */}
              <Link
                to="/applied"
                className="group border border-gray-100 rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-white hover:shadow-lg hover:-translate-y-1 transition-all"
              >

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-gray-500 font-medium">
                      Applied Jobs
                    </p>

                    <p className="text-4xl font-bold text-blue-600 mt-2">
                      {appliedCount}
                    </p>
                  </div>

                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl">
                    📋
                  </div>

                </div>

                <p className="text-blue-600 font-semibold mt-5 group-hover:underline">
                  View Applications →
                </p>

              </Link>

              {/* Saved */}
              <Link
                to="/saved"
                className="group border border-gray-100 rounded-2xl p-6 bg-gradient-to-br from-red-50 to-white hover:shadow-lg hover:-translate-y-1 transition-all"
              >

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-gray-500 font-medium">
                      Saved Jobs
                    </p>

                    <p className="text-4xl font-bold text-red-500 mt-2">
                      {savedCount}
                    </p>
                  </div>

                  <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-3xl">
                    ❤️
                  </div>

                </div>

                <p className="text-blue-600 font-semibold mt-5 group-hover:underline">
                  View Saved Jobs →
                </p>

              </Link>

            </div>

            {/* Account Details */}
            <div className="mt-8">

              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Account Details
              </h2>

              <div className="space-y-4">

                {/* Email */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 border border-gray-100 rounded-2xl p-5 bg-gray-50">

                  <div className="w-11 h-11 shrink-0 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm">
                    📧
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-gray-500">
                      Email Address
                    </p>

                    <p className="font-semibold text-gray-800 break-all mt-1">
                      {user.email}
                    </p>
                  </div>

                </div>

                {/* User ID */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 border border-gray-100 rounded-2xl p-5 bg-gray-50">

                  <div className="w-11 h-11 shrink-0 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm">
                    🆔
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-gray-500">
                      User ID
                    </p>

                    <p className="font-semibold text-gray-800 break-all mt-1 text-sm">
                      {user.uid}
                    </p>
                  </div>

                </div>

                {/* Account Created */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 border border-gray-100 rounded-2xl p-5 bg-gray-50">

                  <div className="w-11 h-11 shrink-0 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm">
                    📅
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Account Created
                    </p>

                    <p className="font-semibold text-gray-800 mt-1">
                      {user.metadata.creationTime
                        ? new Date(
                            user.metadata.creationTime
                          ).toLocaleDateString()
                        : "Not available"}
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

              <Link
                to="/"
                className="text-center bg-blue-600 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all shadow-lg shadow-blue-100"
              >
                ← Back to Home
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-3.5 rounded-xl font-semibold hover:bg-red-600 active:scale-[0.98] transition-all"
              >
                🚪 Logout
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;