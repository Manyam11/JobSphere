import { Link, useSearchParams } from "react-router-dom";
import { useState, useMemo } from "react";
import jobs from "../data/jobs";

function Jobs() {
  const [searchParams] = useSearchParams();

  const urlSearch = searchParams.get("search") || "";
  const urlLocation = searchParams.get("location") || "";

  const [search, setSearch] = useState(urlSearch);

  const company = searchParams.get("company") || "";
  const category = searchParams.get("category") || "";

  const filteredJobs = useMemo(() => {
    const text = search.toLowerCase().trim();
    const locationText = urlLocation.toLowerCase().trim();

    return jobs.filter((job) => {
      const matchesSearch =
        text === "" ||
        job.role.toLowerCase().includes(text) ||
        job.company.toLowerCase().includes(text) ||
        job.location.toLowerCase().includes(text) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(text)
        );

      const matchesLocation =
        locationText === "" ||
        job.location.toLowerCase().includes(locationText);

      const matchesCompany =
        company === "" ||
        job.company.toLowerCase() === company.toLowerCase();

      const matchesCategory =
        category === "" ||
        job.category.toLowerCase() === category.toLowerCase();

      return (
        matchesSearch &&
        matchesLocation &&
        matchesCompany &&
        matchesCategory
      );
    });
  }, [search, urlLocation, company, category]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-10">

      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="mb-8">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            💼 Available Jobs
          </h1>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Discover opportunities that match your skills and career goals.
          </p>

        </div>

        {/* Search Information */}
        {(urlSearch || urlLocation || company || category) && (
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-6">

            <p className="text-blue-700 text-sm sm:text-base">

              🔎 Showing results

              {urlSearch && (
                <>
                  {" "}for{" "}
                  <strong>{urlSearch}</strong>
                </>
              )}

              {urlLocation && (
                <>
                  {" "}in{" "}
                  <strong>{urlLocation}</strong>
                </>
              )}

              {company && (
                <>
                  {" "}at{" "}
                  <strong>{company}</strong>
                </>
              )}

              {category && (
                <>
                  {" "}under{" "}
                  <strong>{category}</strong>
                </>
              )}

            </p>

          </div>
        )}

        {/* Search */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 sm:p-4 mb-8">

          <input
            type="text"
            placeholder="🔍 Search by job, company, location or skill..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 sm:py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
          />

        </div>

        {/* Result Count */}
        <div className="flex items-center justify-between mb-5">

          <p className="text-gray-600 text-sm sm:text-base">
            <strong className="text-gray-900">
              {filteredJobs.length}
            </strong>{" "}
            {filteredJobs.length === 1 ? "job" : "jobs"} found
          </p>

        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">

          {filteredJobs.length > 0 ? (

            filteredJobs.map((job) => (

              <div
                key={job.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                {/* Job Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">

                  <div className="min-w-0">

                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 break-words">
                      {job.role}
                    </h2>

                    <p className="text-blue-600 mt-2 font-semibold">
                      {job.company}
                    </p>

                  </div>

                  <span className="self-start shrink-0 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {job.type}
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
                  className="block text-center mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all"
                >
                  View Job →
                </Link>

              </div>

            ))

          ) : (

            /* No Jobs */
            <div className="col-span-1 md:col-span-2 bg-white rounded-2xl p-10 sm:p-16 text-center border border-gray-100">

              <div className="text-6xl mb-5">
                😔
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-600">
                No Jobs Found
              </h2>

              <p className="text-gray-400 mt-3 text-sm sm:text-base">
                Try another job title, company, skill or location.
              </p>

              <button
                onClick={() => setSearch("")}
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Clear Search
              </button>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Jobs;