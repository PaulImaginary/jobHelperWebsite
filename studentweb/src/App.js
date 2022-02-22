import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Jobs from "./pages/jobs";
import Contract from "./pages/contract";
import Testimonials from "./pages/testimonials";
import Teams from "./pages/team";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/testimonials" element={<Testimonials/>} />
        <Route path="/contract" element={<Contract/>} />
        <Route path="/team" element={<Teams/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/sign-up" element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;
