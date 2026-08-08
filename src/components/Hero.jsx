import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:max-w-2xl text-center lg:text-left"
          >

            {/* Badge */}
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm sm:text-base font-semibold mb-5">
              🚀 India's Fastest Growing Job Portal
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">

              Find Your{" "}

              <span className="text-blue-600">
                Dream Job
              </span>

              {" "}Faster.

            </h1>

            {/* Description */}
            <p className="text-gray-600 mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 max-w-xl mx-auto lg:mx-0">
              Explore thousands of opportunities from top companies
              around the world and take the next step in your career.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10 justify-center lg:justify-start">

              {/* Get Started */}
              <Link
                to="/signup"
                className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold transition-all shadow-lg shadow-blue-200"
              >
                Get Started 🚀
              </Link>

              {/* Explore Jobs */}
              <Link
                to="/jobs"
                className="w-full sm:w-auto text-center border border-gray-300 bg-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-blue-300 active:scale-95 transition-all"
              >
                Explore Jobs →
              </Link>

            </div>

          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-auto flex justify-center"
          >

            <div className="relative">

              {/* Background Circle */}
              <div className="absolute inset-0 bg-blue-200/40 rounded-full blur-3xl scale-75"></div>

              {/* Emoji */}
              <div className="relative text-[100px] sm:text-[140px] lg:text-[180px] xl:text-[210px] leading-none select-none">
                👨‍💻
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-2 -left-3 sm:-left-8 bg-white shadow-xl rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold animate-bounce">
                💼 Jobs
              </div>

              <div className="absolute bottom-2 -right-3 sm:-right-8 bg-white shadow-xl rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold">
                🚀 Career
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;