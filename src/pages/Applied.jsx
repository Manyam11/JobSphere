import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import jobs from "../data/jobs";

function Applied() {
  const [user, setUser] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/login");
        return;
      }

      setUser(currentUser);

      const applications =
        JSON.parse(localStorage.getItem("appliedJobs")) || [];

      const myApplications = applications.filter(
        (application) =>
          application.email === currentUser.email
      );

      const myJobs = myApplications
        .map((application) => {
          const job = jobs.find(
            (job) => job.id === Number(application.jobId)
          );

          if (!job) return null;

          return {
            ...job,
            appliedAt: application.appliedAt,
          };
        })
        .filter(Boolean);

      setAppliedJobs(myJobs);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">
          Loading Applied Jobs...
        </h2>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold">
          📋 Applied Jobs
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Jobs you have applied for
        </p>
      </div>

      {/* No Applications */}
      {appliedJobs.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center">

          <div className="text-6xl mb-5">
            📭
          </div>

          <h2 className="text-3xl font-bold text-gray-600">
            No Applications Yet
          </h2>

          <p className="text-gray-500 mt-3">
            You haven't applied for any jobs yet.
          </p>

          <Link
            to="/jobs"
            className="inline-block mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Explore Jobs 🚀
          </Link>

        </div>
      ) : (

        /* Applications */
        <div className="grid md:grid-cols-2 gap-8">

          {appliedJobs.map((job) => (

            <div
              key={job.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
            >

              <div className="flex justify-between items-start gap-4">

                <div>
                  <h2 className="text-2xl font-bold">
                    {job.role}
                  </h2>

                  <p className="text-blue-600 font-semibold mt-2">
                    {job.company}
                  </p>
                </div>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                  ✓ Applied
                </span>

              </div>

              <div className="mt-5 space-y-3 text-gray-600">
                <p>
                  📍 {job.location}
                </p>

                <p>
                  💰 {job.salary}
                </p>

                <p>
                  💼 {job.type}
                </p>

                {job.appliedAt && (
                  <p>
                    📅 Applied on{" "}
                    {new Date(
                      job.appliedAt
                    ).toLocaleDateString()}
                  </p>
                )}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-5">

                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}

              </div>

              <Link
                to={`/job/${job.id}`}
                className="block text-center mt-6 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                View Job →
              </Link>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default Applied;