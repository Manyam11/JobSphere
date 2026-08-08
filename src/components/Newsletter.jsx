function Newsletter() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="bg-blue-600 rounded-3xl p-12 text-center text-white">

        <h2 className="text-4xl font-bold">
          Never Miss Your Dream Job
        </h2>

        <p className="mt-4 text-lg text-blue-100">
          Subscribe to get the latest job updates directly in your inbox.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white text-black px-5 py-3 rounded-xl w-full md:w-96 outline-none"
          />

          <button className="bg-black px-8 py-3 rounded-xl hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
}

export default Newsletter;