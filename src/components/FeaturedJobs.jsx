import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import jobs from "../data/jobs";

function FeaturedJobs() {
  const featuredJobs = jobs.slice(0, 3);

  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("savedJobs")) || [];

    setSavedJobs(saved);
  }, []);

  const toggleSave = (id) => {
    let updated;

    if (savedJobs.includes(id)) {
      updated = savedJobs.filter((jobId) => jobId !== id);
    } else {
      updated = [...savedJobs, id];
    }

    setSavedJobs(updated);

    localStorage.setItem(
      "savedJobs",
      JSON.stringify(updated)
    );
  };

  return (
    <section className="py-12 sm:py-16">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">

        <div>
          <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-sm font-semibold mb-3">
            Top Opportunities
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            ⭐ Featured Jobs
          </h2>

          <p className="text-gray-500 mt-2">
            Explore some of the latest opportunities.
          </p>
        </div>

        <Link
          to="/jobs"
          className="text-blue-600 font-semibold hover:text-blue-700 transition"
        >
          View All Jobs →
        </Link>

      </div>

      {/* Jobs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7">

        {featuredJobs.map((job) => (

          <div
            key={job.id}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >

            {/* Top */}
            <div className="flex items-start justify-between gap-3">

              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl sm:text-3xl font-bold text-blue-600">
                {job.company.charAt(0)}
              </div>

              <span className="bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                {job.type}
              </span>

            </div>

            {/* Job Info */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 break-words">
              {job.role}
            </h3>

            <p className="text-blue-600 font-semibold mt-2">
              {job.company}
            </p>

            <div className="mt-4 space-y-2 text-sm sm:text-base">

              <p className="text-gray-700">
                📍 {job.location}
              </p>

              <p className="font-semibold text-gray-800">
                💰 {job.salary}
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

            {/* Actions */}
            <div className="flex gap-3 mt-7">

              <Link
                to={`/job/${job.id}`}
                className="flex-1 text-center bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all"
              >
                View Job →
              </Link>

              <button
                onClick={() => toggleSave(job.id)}
                aria-label={
                  savedJobs.includes(job.id)
                    ? "Remove saved job"
                    : "Save job"
                }
                className={`w-12 sm:w-14 rounded-xl border flex items-center justify-center text-xl sm:text-2xl transition ${
                  savedJobs.includes(job.id)
                    ? "bg-red-50 border-red-200"
                    : "border-gray-200 hover:bg-red-50 hover:border-red-200"
                }`}
              >
                {savedJobs.includes(job.id) ? "❤️" : "🤍"}
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturedJobs;