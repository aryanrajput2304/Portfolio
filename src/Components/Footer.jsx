import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#fcfcfd] dark:bg-[#070a13] border-t border-gray-200/60 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Aryan Rajput
              </span>
            </h2>

            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-2">
              MERN Stack Developer | Building Modern Web Applications
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
            <Link
              to="/"
              className="text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200"
            >
              Home
            </Link>

            <Link
              to="/experience"
              className="text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200"
            >
              Experience
            </Link>

            <Link
              to="/projects"
              className="text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200"
            >
              Projects
            </Link>

            <Link
              to="/contact"
              className="text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Right - Social Icons */}
          <div className="flex items-center gap-5 text-xl">
            <a
              href="https://github.com/aryanrajput2304"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/aryan-rajput-b0b723292/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:aryanrajput2304@gmail.com"
              className="text-gray-500 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200"
              aria-label="Email Contact"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Bottom - Copyright Disclaimer */}
        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/[0.04] text-center">
          <p className="text-gray-400 dark:text-gray-500 text-xs font-medium tracking-wide">
            © {new Date().getFullYear()} Aryan Rajput. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
