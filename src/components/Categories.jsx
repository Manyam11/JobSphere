import { Link } from "react-router-dom";
import jobs from "../data/jobs";

const categories = [
  { icon: "💻", name: "Software" },
  { icon: "🤖", name: "AI / ML" },
  { icon: "☁️", name: "Cloud" },
  { icon: "🎨", name: "Design" },
  { icon: "📊", name: "Marketing" },
  { icon: "💰", name: "Finance" },
  { icon: "🏥", name: "Healthcare" },
  { icon: "📚", name: "Education" },
];

function Categories() {
  return (
    <section className="py-12 sm:py-16">

      {/* Header */}
      <div className="text-center mb-10">

        <span className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Explore Opportunities
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          📂 Browse by Category
        </h2>

        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          Find the right opportunities based on your career interests.
        </p>

      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

        {categories.map((category, index) => {

          const jobCount = jobs.filter(
            (job) => job.category === category.name
          ).length;

          return (
            <Link
              key={index}
              to={`/jobs?category=${encodeURIComponent(category.name)}`}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-7 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >

              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>

              {/* Name */}
              <h3 className="text-base sm:text-xl font-bold text-gray-900 mt-5">
                {category.name}
              </h3>

              {/* Count */}
              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                <span className="font-semibold text-blue-600">
                  {jobCount}
                </span>{" "}
                {jobCount === 1 ? "job" : "jobs"}
              </p>

              {/* CTA */}
              <p className="text-blue-600 text-sm font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                Explore →
              </p>

            </Link>
          );
        })}

      </div>

    </section>
  );
}

export default Categories;