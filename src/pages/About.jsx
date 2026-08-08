import { Link } from "react-router-dom";

function About() {
  return (
    <div className="max-w-7xl mx-auto">

      {/* Hero */}
      <section className="text-center py-10 sm:py-16">

        <span className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-5">
          💼 About JobSphere
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
          Your Career,
          <span className="text-blue-600"> Our Mission.</span>
        </h1>

        <p className="text-gray-600 text-base sm:text-lg lg:text-xl mt-6 max-w-3xl mx-auto leading-8">
          JobSphere is a modern job portal designed to help job seekers
          discover opportunities, explore companies and find the right
          career path.
        </p>

      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7 mt-5">

        {/* Find Jobs */}
        <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-7 sm:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center text-4xl group-hover:scale-110 transition">
            🔎
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-5">
            Find Jobs
          </h2>

          <p className="text-gray-500 mt-3 leading-7">
            Search jobs by role, company, location and skills.
          </p>

        </div>

        {/* Companies */}
        <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-7 sm:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

          <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-50 flex items-center justify-center text-4xl group-hover:scale-110 transition">
            🏢
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-5">
            Explore Companies
          </h2>

          <p className="text-gray-500 mt-3 leading-7">
            Discover opportunities from top companies and organizations.
          </p>

        </div>

        {/* Career */}
        <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-7 sm:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

          <div className="w-16 h-16 mx-auto rounded-2xl bg-green-50 flex items-center justify-center text-4xl group-hover:scale-110 transition">
            🚀
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-5">
            Build Your Career
          </h2>

          <p className="text-gray-500 mt-3 leading-7">
            Find opportunities that match your skills and career goals.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="mt-14 sm:mt-20 mb-10">

        <div className="bg-blue-600 rounded-3xl px-6 py-10 sm:px-10 sm:py-14 text-center shadow-lg">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Ready to find your next opportunity?
          </h2>

          <p className="text-blue-100 mt-4 max-w-2xl mx-auto">
            Explore available jobs and take the next step in your career.
          </p>

          <Link
            to="/jobs"
            className="inline-block mt-7 bg-white text-blue-600 px-7 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-100 active:scale-95 transition-all"
          >
            Explore Jobs 🚀
          </Link>

        </div>

      </section>

    </div>
  );
}

export default About;