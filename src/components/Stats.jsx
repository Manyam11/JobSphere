function Stats() {
  const stats = [
    { number: "50K+", label: "Active Jobs", icon: "💼" },
    { number: "5K+", label: "Companies", icon: "🏢" },
    { number: "100K+", label: "Candidates", icon: "👥" },
    { number: "98%", label: "Success Rate", icon: "🚀" },
  ];

  return (
    <section className="py-12 sm:py-16">

      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 sm:p-7 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >

            {/* Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-blue-50 rounded-xl flex items-center justify-center text-2xl sm:text-3xl">
              {item.icon}
            </div>

            {/* Number */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mt-4">
              {item.number}
            </h3>

            {/* Label */}
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              {item.label}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Stats;