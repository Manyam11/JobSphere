import { Link } from "react-router-dom";
import jobs from "../data/jobs";
const companies = [
  {
    name: "Google",
    logo: "https://www.google.com/favicon.ico",
    jobs: "120 Jobs",
  },
  {
    name: "Microsoft",
    logo: "https://www.microsoft.com/favicon.ico",
    jobs: "95 Jobs",
  },
  {
    name: "Amazon",
    logo: "https://www.amazon.com/favicon.ico",
    jobs: "88 Jobs",
  },
  {
    name: "Adobe",
    logo: "https://www.adobe.com/favicon.ico",
    jobs: "42 Jobs",
  },
  {
    name: "TCS",
    logo: "https://www.tcs.com/favicon.ico",
    jobs: "130 Jobs",
  },
  {
    name: "Infosys",
    logo: "https://www.infosys.com/favicon.ico",
    jobs: "102 Jobs",
  },
  {
    name: "Accenture",
    logo: "https://www.accenture.com/favicon.ico",
    jobs: "91 Jobs",
  },
  {
    name: "IBM",
    logo: "https://www.ibm.com/favicon.ico",
    jobs: "67 Jobs",
  },
];

function TopCompanies() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        🏢 Top Companies
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {companies.map((company, index) => (
          <Link
            key={index}
            to={`/jobs?company=${encodeURIComponent(company.name)}`}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="w-16 h-16 object-contain"
            />

            <h3 className="mt-4 text-xl font-bold">
              {company.name}
            </h3>

            <p className="text-gray-500 mt-2">
              {
                jobs.filter((job) => job.company === company.name).length
              }{" "}
              jobs 
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default TopCompanies;