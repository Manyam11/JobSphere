function TrendingJobs() {
  const jobs = [
    {
      role: "React Developer",
      company: "Google",
      type: "Full Time",
      salary: "₹18 LPA",
    },
    {
      role: "Java Backend Developer",
      company: "Microsoft",
      type: "Remote",
      salary: "₹22 LPA",
    },
    {
      role: "AI Engineer",
      company: "OpenAI",
      type: "Hybrid",
      salary: "₹30 LPA",
    },
    {
      role: "Software Engineer",
      company: "Amazon",
      type: "Full Time",
      salary: "₹20 LPA",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-10">
        🔥 Trending Jobs
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-bold">{job.role}</h3>

            <p className="text-blue-600 mt-2">{job.company}</p>

            <div className="flex justify-between mt-5">
              <span>{job.type}</span>
              <span className="font-semibold">{job.salary}</span>
            </div>

            <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingJobs;