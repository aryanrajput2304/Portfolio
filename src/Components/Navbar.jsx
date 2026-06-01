import React, { useContext, useState } from "react";
import { IoMoon, IoSunny, IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ContextAPI/userContext";

export default function Navbar() {
  const { theme, handleToggle } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const navLink =
    "text-gray-600 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 font-semibold transition-colors duration-200";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-[#070a13]/80 backdrop-blur-md border-b border-gray-200/60 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-black tracking-tight text-gray-900 dark:text-white"
        >
          My
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            Portfolio
          </span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          <li>
            <Link to="/" className={navLink}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/skills" className={navLink}>
              Skills
            </Link>
          </li>

          <li>
            <Link to="/experience" className={navLink}>
              Experience
            </Link>
          </li>

          <li>
            <Link to="/projects" className={navLink}>
              Projects
            </Link>
          </li>

          <li>
            <Link to="/contact" className={navLink}>
              Contact
            </Link>
          </li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* THEME TOGGLE */}
          <button
            onClick={handleToggle}
            className="p-2.5 rounded-xl bg-gray-50 dark:bg-white/[0.02] border border-gray-200/60 dark:border-white/[0.05] hover:bg-gray-100 dark:hover:bg-white/5 transition duration-200"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <IoSunny className="text-xl text-amber-400" />
            ) : (
              <IoMoon className="text-xl text-gray-700" />
            )}
          </button>

          {/* HAMBURGER BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl bg-gray-50 dark:bg-white/[0.02] dark:text-white border border-gray-200/60 dark:border-white/[0.05]"
          >
            {isOpen ? (
              <IoClose className="text-2xl" />
            ) : (
              <IoMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200/60 dark:border-white/[0.06] bg-white dark:bg-[#070a13]">
          <ul className="flex flex-col p-6 gap-5">
            <li>
              <Link to="/" className={navLink} onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/skills"
                className={navLink}
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                to="/experience"
                className={navLink}
                onClick={() => setIsOpen(false)}
              >
                Experience
              </Link>
            </li>

            <li>
              <Link
                to="/projects"
                className={navLink}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={navLink}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
