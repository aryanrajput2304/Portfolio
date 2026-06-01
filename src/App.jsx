import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { Route, Routes } from "react-router-dom";
import Skills from "./Skills/Skill";
import Experience from "./Experience/Experience";
import Projects from "./projects/Projects";
import Contact from "./Contact Page/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
