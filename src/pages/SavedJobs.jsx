import jobs from "../data/jobs";
import { Link } from "react-router-dom";

function SavedJobs() {
  const saved = JSON.parse(localStorage.getItem("savedJobs")) || [];

  const savedJobs = jobs.filter((job) => saved.includes(job.id));

  return (
    <div className="max-w-7xl mx-auto">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          ❤️ Saved Jobs
        </h1>

        <p className="text-gray-500 mt-3 text-lg">
          Jobs you've saved for later
        </p>
      </div>

      {/* Empty State */}
      {savedJobs.length === 0 ? (
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-10 sm:p-16 text-center">

          <div className="text-6xl mb-5">
            💔
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">
            No Saved Jobs Yet
          </h2>

          <p className="text-gray-500 mt-3">
            Save interesting jobs and come back to them later.
          </p>

          <Link
            to="/jobs"
            className="inline-block mt-6 bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Explore Jobs 🚀
          </Link>

        </div>
      ) : (

        <>
          {/* Result Count */}
          <div className="mb-5">
            <p className="text-gray-600">
              <strong className="text-gray-900">
                {savedJobs.length}
              </strong>{" "}
              {savedJobs.length === 1 ? "job" : "jobs"} saved
            </p>
          </div>

          {/* Saved Jobs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">

            {savedJobs.map((job) => (

              <div
                key={job.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">

                  <div className="min-w-0">

                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 break-words">
                      {job.role}
                    </h2>

                    <p className="text-blue-600 mt-2 font-semibold">
                      {job.company}
                    </p>

                  </div>

                  <span className="self-start shrink-0 bg-red-50 text-red-600 border border-red-100 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    ❤️ Saved
                  </span>

                </div>

                {/* Job Details */}
                <div className="mt-5 space-y-2 text-sm sm:text-base">

                  <p className="text-gray-700">
                    📍 {job.location}
                  </p>

                  <p className="font-semibold text-gray-800">
                    💰 {job.salary}
                  </p>

                  <p className="text-gray-500">
                    💼 {job.type}
                  </p>

                  <p className="text-gray-500">
                    ⏰ {job.posted}
                  </p>

                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-5">

                  {job.skills.map((skill, index) => (

                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

                {/* Button */}
                <Link
                  to={`/job/${job.id}`}
                  className="block text-center mt-6 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all"
                >
                  View Job →
                </Link>

              </div>

            ))}

          </div>
        </>
      )}

    </div>
  );
}

export default SavedJobs;