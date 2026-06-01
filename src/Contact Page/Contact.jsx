import React, { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleMessage = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/Form", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Sent Successfully");
      setFormData({ name: "", email: "", message: "" }); // Clears form on success
    } else {
      alert("Failed to send");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 sm:px-10 lg:px-20 xl:px-32 py-24 bg-[#fcfcfd] dark:bg-[#070a13] text-gray-900 dark:text-gray-50 relative overflow-hidden animate-fadeIn">
      {/* Background Mesh Glows */}
      <div className="absolute w-[500px] h-[500px] bg-amber-500/[0.03] blur-3xl rounded-full top-20 left-10 pointer-events-none"></div>
      <div className="absolute w-[500px] h-[500px] bg-sky-500/[0.03] blur-3xl rounded-full bottom-10 right-10 pointer-events-none"></div>

      {/* Main Contact Card */}
      <div className="relative max-w-2xl w-full bg-white dark:bg-[#0e1322] border border-gray-200/60 dark:border-white/[0.06] rounded-2xl p-8 sm:p-12 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] dark:shadow-none z-10">
        {/* Header Tag and Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200/50 dark:border-amber-500/20 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            <p className="text-amber-600 dark:text-amber-400 font-semibold tracking-wider text-xs uppercase">
              Connect
            </p>
          </div>

          <h1 className="text-4xl font-black mt-4 tracking-tight text-gray-900 dark:text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p className="mt-4 text-base text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
            Have a project idea or want to collaborate? Let’s build something
            amazing together.
          </p>
        </div>

        {/* Contact Info Badges */}
        <div className="flex flex-col md:flex-row justify-center gap-4 lg:gap-6 mt-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/[0.04]">
            <FaPhone className="text-amber-500 shrink-0" />
            <span>+91 9579621911</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/[0.04]">
            <FaEnvelope className="text-amber-500 shrink-0" />
            <span className="break-all">aryanrajput8735@gmail.com</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/[0.04]">
            <FaMapMarkedAlt className="text-amber-500 shrink-0" />
            <span>Chhatrapati Sambhajinagar</span>
          </div>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleMessage} className="mt-10 flex flex-col gap-4">
          <input
            type="text"
            required
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="p-3.5 rounded-xl bg-gray-50 dark:bg-[#070a13] text-gray-900 dark:text-white border border-gray-200 dark:border-white/[0.08] outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition text-sm font-medium placeholder-gray-400 dark:placeholder-gray-500"
          />

          <input
            type="email"
            required
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="p-3.5 rounded-xl bg-gray-50 dark:bg-[#070a13] text-gray-900 dark:text-white border border-gray-200 dark:border-white/[0.08] outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition text-sm font-medium placeholder-gray-400 dark:placeholder-gray-500"
          />

          <textarea
            required
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows="5"
            className="p-3.5 rounded-xl bg-gray-50 dark:bg-[#070a13] text-gray-900 dark:text-white border border-gray-200 dark:border-white/[0.08] outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition text-sm font-medium placeholder-gray-400 dark:placeholder-gray-500 resize-none"
          />

          <button
            type="submit"
            className="mt-4 py-3.5 rounded-xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm transition-all duration-200 shadow-md shadow-orange-500/10 hover:shadow-orange-500/20 hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
