import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import jobs from "../data/jobs";

function AppliedJobs() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const saved =
          JSON.parse(localStorage.getItem("appliedJobs")) || [];

        const userJobs = saved.filter(
          (item) => item.email === currentUser.email
        );

        setAppliedJobs(userJobs);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto py-16 text-center">
        <h2 className="text-2xl font-semibold">
          Loading...
        </h2>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-6xl mx-auto py-16 text-center">

        <h1 className="text-4xl font-bold">
          🔐 Login Required
        </h1>

        <p className="text-gray-500 mt-4">
          Please login to see your applied jobs.
        </p>

        <Link
          to="/login"
          className="inline-block mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700"
        >
          Login
        </Link>

      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold mb-2">
        📋 Applied Jobs
      </h1>

      <p className="text-gray-500 mb-10">
        Jobs you have applied for
      </p>

      {appliedJobs.length === 0 ? (
        <div className="text-center py-16">

          <h2 className="text-2xl font-bold text-gray-500">
            No Applied Jobs Yet 😔
          </h2>

          <p className="text-gray-400 mt-2">
            Start applying for jobs to see them here.
          </p>

          <button
            onClick={() => navigate("/jobs")}
            className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700"
          >
            Explore Jobs
          </button>

        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">

          {appliedJobs.map((item) => {
            const job = jobs.find(
              (job) => job.id === item.jobId
            );

            if (!job) return null;

            return (
              <div
                key={job.id}
                className="bg-white rounded-2xl shadow-lg p-6"
              >

                <div className="flex justify-between items-start">

                  <div>
                    <h2 className="text-2xl font-bold">
                      {job.role}
                    </h2>

                    <p className="text-blue-600 mt-2 font-semibold">
                      {job.company}
                    </p>
                  </div>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    ✅ Applied
                  </span>

                </div>

                <p className="mt-4">
                  📍 {job.location}
                </p>

                <p className="mt-2 font-semibold">
                  💰 {job.salary}
                </p>

                <Link
                  to={`/job/${job.id}`}
                  className="block text-center mt-6 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
                >
                  View Job
                </Link>

              </div>
            );
          })}

        </div>
      )}

    </div>
  );
}

export default AppliedJobs;