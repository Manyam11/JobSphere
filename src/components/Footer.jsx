import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-3xl font-bold text-blue-500"
            >
              💼 JobSphere
            </Link>

            <p className="text-gray-400 mt-4 leading-7">
              Connecting Talent with Opportunity.
              Discover your dream job and build your
              career with JobSphere.
            </p>

            <a
              href="mailto:manyamsingh4@gmail.com"
              className="inline-block mt-5 text-blue-400 hover:text-blue-300 transition"
            >
              📧 manyamsingh4@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Home
              </Link>

              <Link
                to="/jobs"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Find Jobs
              </Link>

              <Link
                to="/companies"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Companies
              </Link>

              <Link
                to="/about"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                About Us
              </Link>

            </div>
          </div>

          {/* Job Seeker */}
          <div>
            <h3 className="text-lg font-bold mb-5">
              For Job Seekers
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/jobs"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                🔍 Browse Jobs
              </Link>

              <Link
                to="/saved"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                ❤️ Saved Jobs
              </Link>

              <Link
                to="/applied"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                📋 Applied Jobs
              </Link>

              <Link
                to="/profile"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                👤 My Profile
              </Link>

            </div>
          </div>

          {/* Contact / Developer */}
          <div>
            <h3 className="text-lg font-bold mb-5">
              Get in Touch
            </h3>

            <p className="text-gray-400 leading-7">
              Have a question or feedback?
              Feel free to reach out.
            </p>

            <a
              href="mailto:manyamsingh4@gmail.com"
              className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold transition"
            >
              📩 Contact Me
            </a>

            <p className="text-gray-500 text-sm mt-5">
              Developed by
            </p>

            <p className="text-blue-400 font-semibold mt-1">
              Manyam Prashar
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-3">

            <p className="text-gray-500 text-sm">
              © 2026 JobSphere. All Rights Reserved.
            </p>

            <p className="text-gray-500 text-sm">
              💙 Designed & Developed by{" "}
              <span className="text-blue-400 font-semibold">
                Manyam Prashar
              </span>
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;