import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import JobDetails from "./pages/JobDetails";
import NotFound from "./pages/NotFound";
import SavedJobs from "./pages/SavedJobs";
import About from "./pages/About";
import Companies from "./pages/Companies";
import Apply from "./pages/Apply";
import AppliedJobs from "./pages/AppliedJobs";
import Applied from "./pages/Applied";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/saved" element={<SavedJobs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/apply/:id" element={<Apply />} />
        <Route path="/applied" element={<AppliedJobs />} />
        <Route path="/applied" element={<Applied />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;