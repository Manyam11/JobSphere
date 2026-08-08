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

      // Search: role, company, location, skills
      const matchesSearch =
        text === "" ||
        job.role.toLowerCase().includes(text) ||
        job.company.toLowerCase().includes(text) ||
        job.location.toLowerCase().includes(text) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(text)
        );

      // Location filter
      const matchesLocation =
        locationText === "" ||
        job.location.toLowerCase().includes(locationText);

      // Company filter
      const matchesCompany =
        company === "" ||
        job.company.toLowerCase() === company.toLowerCase();

      // Category filter
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
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-5xl font-bold mb-3">
        💼 Available Jobs
      </h1>

      {/* Search information */}
      {(urlSearch || urlLocation) && (
        <p className="text-gray-500 text-lg mb-6">
          Showing results
          {urlSearch && (
            <>
              {" "}for <strong>{urlSearch}</strong>
            </>
          )}
          {urlLocation && (
            <>
              {" "}in <strong>{urlLocation}</strong>
            </>
          )}
        </p>
      )}

      {company && (
        <p className="text-blue-600 text-lg mb-6">
          Showing jobs for <strong>{company}</strong>
        </p>
      )}

      {/* Search inside Jobs page */}
      <input
        type="text"
        placeholder="🔍 Search by job, company, location or skill..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-xl px-4 py-3 mb-10 outline-none focus:border-blue-600"
      />

      <div className="grid md:grid-cols-2 gap-8">

        {filteredJobs.length > 0 ? (

          filteredJobs.map((job) => (

            <div
              key={job.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
            >

              <div className="flex justify-between items-center">

                <h2 className="text-2xl font-bold">
                  {job.role}
                </h2>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {job.type}
                </span>

              </div>

              <p className="text-blue-600 mt-2 font-semibold">
                {job.company}
              </p>

              <p className="mt-2">
                📍 {job.location}
              </p>

              <p className="mt-2 font-semibold">
                💰 {job.salary}
              </p>

              <p className="mt-2 text-gray-500">
                ⏰ {job.posted}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">

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
                className="block text-center mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
              >
                View Job →
              </Link>

            </div>

          ))

        ) : (

          <div className="col-span-2 text-center py-16">

            <h2 className="text-3xl font-bold text-gray-500">
              😔 No Jobs Found
            </h2>

            <p className="text-gray-400 mt-3">
              Try another job title, company, skill or location.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default Jobs;