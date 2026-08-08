import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jobs from "../data/jobs";

function JobDetails() {
  const { id } = useParams();

  const [saved, setSaved] = useState(false);

  const job = jobs.find((job) => job.id === Number(id));

  useEffect(() => {
    const savedJobs =
      JSON.parse(localStorage.getItem("savedJobs")) || [];

    setSaved(savedJobs.includes(Number(id)));
  }, [id]);

  const handleSaveJob = () => {
    const savedJobs =
      JSON.parse(localStorage.getItem("savedJobs")) || [];

    const jobId = Number(id);

    if (savedJobs.includes(jobId)) {
      const updatedJobs = savedJobs.filter(
        (savedId) => savedId !== jobId
      );

      localStorage.setItem(
        "savedJobs",
        JSON.stringify(updatedJobs)
      );

      setSaved(false);
    } else {
      savedJobs.push(jobId);

      localStorage.setItem(
        "savedJobs",
        JSON.stringify(savedJobs)
      );

      setSaved(true);
    }
  };

  if (!job) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-4 text-center">
        <div className="text-7xl mb-5">😔</div>

        <h1 className="text-3xl font-bold text-gray-800">
          Job Not Found
        </h1>

        <p className="text-gray-500 mt-3">
          The job you are looking for doesn't exist.
        </p>

        <Link
          to="/jobs"
          className="inline-block mt-7 bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          ← Browse Jobs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      {/* Back */}
      <Link
        to="/jobs"
        className="inline-flex items-center text-gray-500 hover:text-blue-600 font-medium transition mb-6"
      >
        ← Back to Jobs
      </Link>

      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 sm:p-10 text-white">

          <div className="flex flex-col sm:flex-row sm:items-center gap-5">

            {/* Company Logo */}
            <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center text-4xl shrink-0">
              🏢
            </div>

            <div className="flex-1">

              <span className="inline-block bg-white/15 px-3 py-1 rounded-full text-sm mb-3">
                {job.type}
              </span>

              <h1 className="text-3xl sm:text-4xl font-bold">
                {job.role}
              </h1>

              <p className="text-blue-100 text-lg mt-2 font-medium">
                {job.company}
              </p>

            </div>

          </div>
        </div>

        {/* Job Information */}
        <div className="p-6 sm:p-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="bg-gray-50 rounded-2xl p-5">
              <p className="text-gray-400 text-sm">
                Location
              </p>
              <p className="font-semibold text-gray-800 mt-2">
                📍 {job.location}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5">
              <p className="text-gray-400 text-sm">
                Salary
              </p>
              <p className="font-semibold text-gray-800 mt-2">
                💰 {job.salary}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5">
              <p className="text-gray-400 text-sm">
                Experience
              </p>
              <p className="font-semibold text-gray-800 mt-2">
                💼 2-4 Years
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5">
              <p className="text-gray-400 text-sm">
                Posted
              </p>
              <p className="font-semibold text-gray-800 mt-2">
                ⏰ {job.posted}
              </p>
            </div>

          </div>

          {/* Description */}
          <div className="mt-10">

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Job Description
            </h2>

            <p className="text-gray-600 leading-8 mt-4">
              We are looking for a passionate{" "}
              <strong>{job.role}</strong> with experience in{" "}
              {job.skills.join(", ")}. You will build modern,
              responsive and scalable applications with our
              engineering team.
            </p>

          </div>

          {/* Skills */}
          <div className="mt-10">

            <h2 className="text-2xl font-bold text-gray-900">
              Required Skills
            </h2>

            <div className="flex flex-wrap gap-3 mt-4">

              {job.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 pt-8 border-t border-gray-100">

            <button
              onClick={handleSaveJob}
              className={`flex-1 py-3.5 rounded-xl font-semibold transition-all ${
                saved
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {saved ? "❤️ Saved Job" : "🤍 Save Job"}
            </button>

            <Link
              to={`/apply/${id}`}
              className="flex-1 text-center bg-blue-600 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg transition-all"
            >
              Apply Now 🚀
            </Link>

          </div>

          {/* Job ID */}
          <p className="text-gray-400 text-sm mt-7 text-center">
            Job ID: {id}
          </p>

        </div>
      </div>
    </div>
  );
}

export default JobDetails;