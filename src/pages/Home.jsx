import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Stats from "../components/Stats";
import FeaturedJobs from "../components/FeaturedJobs";
import TopCompanies from "../components/TopCompanies";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import TrendingJobs from "../components/TrendingJobs";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Stats />
      <FeaturedJobs />
      <TopCompanies />
      <Categories />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;