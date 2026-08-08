function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      text: "I got my dream job within two weeks using JobSphere!",
    },
    {
      name: "Priya Verma",
      text: "The UI is amazing and applying for jobs is super easy.",
    },
    {
      name: "Aman Singh",
      text: "One of the best job portals I have ever used.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-10">
        What Our Users Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6"
          >
            <p className="text-gray-600 italic">
              "{review.text}"
            </p>

            <h3 className="mt-6 font-bold text-blue-600">
              {review.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;