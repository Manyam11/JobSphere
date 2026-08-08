import { Link } from "react-router-dom";

const companies = [
  {
    name: "Google",
    logo: "https://www.google.com/favicon.ico",
  },
  {
    name: "Microsoft",
    logo: "https://www.microsoft.com/favicon.ico",
  },
  {
    name: "Amazon",
    logo: "https://www.amazon.com/favicon.ico",
  },
  {
    name: "Adobe",
    logo: "https://www.adobe.com/favicon.ico",
  },
  {
    name: "TCS",
    logo: "https://www.tcs.com/favicon.ico",
  },
  {
    name: "Infosys",
    logo: "https://www.infosys.com/favicon.ico",
  },
  {
    name: "Accenture",
    logo: "https://www.accenture.com/favicon.ico",
  },
  {
    name: "IBM",
    logo: "https://www.ibm.com/favicon.ico",
  },
];

function Companies() {
  return (
    <div className="max-w-7xl mx-auto">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          🏢 Top Companies
        </h1>

        <p className="text-gray-500 mt-3 text-base sm:text-lg">
          Explore exciting career opportunities from leading companies.
        </p>
      </div>

      {/* Companies Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
        {companies.map((company) => (
          <Link
            key={company.name}
            to={`/jobs?company=${encodeURIComponent(company.name)}`}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col items-center justify-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >

            {/* Logo */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center p-4 group-hover:bg-blue-50 transition">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Company Name */}
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mt-5">
              {company.name}
            </h2>

            {/* CTA */}
            <p className="text-blue-600 font-semibold mt-2 group-hover:text-blue-700">
              View Jobs →
            </p>

          </Link>
        ))}
      </div>

    </div>
  );
}

export default Companies;