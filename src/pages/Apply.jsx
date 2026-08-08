import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import jobs from "../data/jobs";

function Apply() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  const job = jobs.find((job) => job.id === Number(id));

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setCheckingAuth(false);

      if (currentUser) {
        setEmail(currentUser.email);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/login");
      return;
    }

    const appliedJobs =
      JSON.parse(localStorage.getItem("appliedJobs")) || [];

    const jobId = Number(id);

    const alreadyApplied = appliedJobs.some(
      (item) =>
        item.jobId === jobId &&
        item.email === user.email
    );

    if (alreadyApplied) {
      alert("You have already applied for this job.");
      navigate(`/job/${id}`);
      return;
    }

    appliedJobs.push({
      jobId: jobId,
      email: user.email,
      name: name,
      phone: phone,
      coverLetter: coverLetter,
      appliedAt: new Date().toISOString(),
    });

    localStorage.setItem(
      "appliedJobs",
      JSON.stringify(appliedJobs)
    );

    alert("Application Submitted Successfully! 🎉");

    navigate(`/job/${id}`);
  };

  if (checkingAuth) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-5xl mb-4">⏳</div>
          <p className="text-gray-500 font-medium">
            Checking login...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10 text-center">

          <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-4xl">
            🔐
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mt-6">
            Login Required
          </h1>

          <p className="text-gray-500 mt-3 leading-7">
            Please login to your JobSphere account before
            applying for this job.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="mt-7 w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Login to Apply →
          </button>

        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">

        <div className="text-7xl mb-5">
          😔
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          Job Not Found
        </h1>

        <p className="text-gray-500 mt-3">
          The job you are trying to apply for doesn't exist.
        </p>

        <button
          onClick={() => navigate("/jobs")}
          className="mt-7 bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          ← Browse Jobs
        </button>

      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

      {/* Back */}
      <button
        onClick={() => navigate(`/job/${id}`)}
        className="text-gray-500 hover:text-blue-600 font-medium transition mb-6"
      >
        ← Back to Job Details
      </button>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-6 sm:p-8 text-white">

        <p className="text-blue-100 text-sm font-medium">
          Applying for
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold mt-2">
          {job.role}
        </h1>

        <p className="text-blue-100 text-lg mt-2">
          {job.company}
        </p>

        <div className="flex flex-wrap gap-3 mt-5">

          <span className="bg-white/15 px-3 py-1.5 rounded-full text-sm">
            📍 {job.location}
          </span>

          <span className="bg-white/15 px-3 py-1.5 rounded-full text-sm">
            💼 {job.type}
          </span>

          <span className="bg-white/15 px-3 py-1.5 rounded-full text-sm">
            💰 {job.salary}
          </span>

        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8 mt-6"
      >

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Application Details
          </h2>

          <p className="text-gray-500 mt-2">
            Fill in your details to submit your application.
          </p>
        </div>

        {/* Name */}
        <div className="mb-5">
          <label className="block font-semibold text-gray-800 mb-2">
            Full Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block font-semibold text-gray-800 mb-2">
            Email Address
          </label>

          <input
            type="email"
            value={email}
            readOnly
            className="w-full border border-gray-200 rounded-xl px-4 py-3.5 bg-gray-50 text-gray-500 outline-none"
          />

          <p className="text-xs text-gray-400 mt-2">
            Your registered JobSphere email is used automatically.
          </p>
        </div>

        {/* Phone */}
        <div className="mb-5">
          <label className="block font-semibold text-gray-800 mb-2">
            Phone Number
          </label>

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>

        {/* Cover Letter */}
        <div className="mb-7">
          <label className="block font-semibold text-gray-800 mb-2">
            Cover Letter
          </label>

          <textarea
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            placeholder="Tell the employer why you are a good fit for this role..."
            rows="7"
            className="w-full border border-gray-200 rounded-xl px-4 py-3.5 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
          />

          <p className="text-xs text-gray-400 mt-2">
            Keep your cover letter clear and professional.
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg active:scale-[0.99] transition-all"
        >
          Submit Application 🚀
        </button>

      </form>

    </div>
  );
}

export default Apply;