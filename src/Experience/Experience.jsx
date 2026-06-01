import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-[#fcfcfd] dark:bg-[#070a13] text-gray-900 dark:text-gray-50 relative overflow-hidden animate-fadeIn"
    >
      {/* Background Mesh Glows */}
      <div className="absolute w-[600px] h-[600px] bg-amber-500/[0.03] rounded-full blur-3xl top-[-150px] right-[-150px] pointer-events-none"></div>
      <div className="absolute w-[500px] h-[500px] bg-sky-500/[0.03] rounded-full blur-3xl bottom-[-120px] left-[-120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto z-10 relative">
        {/* Heading Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200/50 dark:border-amber-500/20 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            <p className="text-amber-600 dark:text-amber-400 font-semibold tracking-wider text-xs uppercase">
              History
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mt-5 tracking-tight text-gray-900 dark:text-white">
            Experience &{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-6 rounded-full"></div>

          <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
            My professional journey and academic background.
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="relative border-l-2 border-gray-200 dark:border-white/[0.08] ml-4 md:ml-6">
          {/* Internship Card */}
          <div className="mb-14 ml-8 md:ml-10 relative group">
            {/* Timeline node marker */}
            <div className="absolute -left-[49px] md:-left-[53px] top-1.5 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-[#070a13] border-2 border-amber-500 text-amber-500 shadow-md group-hover:scale-110 transition-transform duration-300">
              <FaBriefcase className="text-sm" />
            </div>

            <div className="bg-white dark:bg-[#0e1322] border border-gray-200/60 dark:border-white/[0.06] rounded-xl p-6 md:p-8 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] dark:shadow-none hover:border-amber-500/30 transition-all duration-300">
              <span className="text-xs font-bold tracking-wider uppercase text-gray-400 dark:text-gray-500">
                Internship
              </span>
              <h3 className="text-2xl font-black mt-1 text-gray-900 dark:text-white tracking-tight">
                Full Stack Developer Intern
              </h3>

              <p className="text-amber-600 dark:text-amber-400 font-bold mt-1 text-base">
                Tech Surya IT Solutions
              </p>

              <ul className="mt-5 space-y-2.5 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full"></span>
                  <span>Developed responsive MERN Stack applications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full"></span>
                  <span>Built REST APIs using Node.js and Express.js.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full"></span>
                  <span>Worked with MongoDB database management.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full"></span>
                  <span>Integrated frontend and backend systems.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full"></span>
                  <span>Collaborated on real-world development projects.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Education Card */}
          <div className="ml-8 md:ml-10 relative group">
            {/* Timeline node marker */}
            <div className="absolute -left-[49px] md:-left-[53px] top-1.5 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-[#070a13] border-2 border-amber-500 text-amber-500 shadow-md group-hover:scale-110 transition-transform duration-300">
              <FaGraduationCap className="text-base" />
            </div>

            <div className="bg-white dark:bg-[#0e1322] border border-gray-200/60 dark:border-white/[0.06] rounded-xl p-6 md:p-8 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] dark:shadow-none hover:border-amber-500/30 transition-all duration-300">
              <span className="text-xs font-bold tracking-wider uppercase text-gray-400 dark:text-gray-500">
                Education
              </span>
              <h3 className="text-2xl font-black mt-1 text-gray-900 dark:text-white tracking-tight">
                Bachelor of Technology (B.Tech)
              </h3>

              <p className="text-amber-600 dark:text-amber-400 font-bold mt-1 text-base">
                Information Technology
              </p>

              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
                MGM University, Chhatrapati Sambhajinagar
              </p>

              <div className="mt-6 pt-5 border-t border-gray-100 dark:border-white/[0.04] grid sm:grid-cols-3 gap-4 text-gray-600 dark:text-gray-400 text-sm">
                <div>
                  <p className="font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-wider text-[11px]">
                    Degree
                  </p>
                  <p className="mt-1 font-bold text-gray-800 dark:text-gray-200">
                    B.Tech in IT
                  </p>
                </div>
                <div>
                  <p className="font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-wider text-[11px]">
                    University
                  </p>
                  <p className="mt-1 font-bold text-gray-800 dark:text-gray-200">
                    MGM University
                  </p>
                </div>
                <div>
                  <p className="font-extrabold text-gray-400 dark:text-gray-500 uppercase tracking-wider text-[11px]">
                    Performance
                  </p>
                  <p className="mt-1 font-black text-amber-600 dark:text-amber-400 text-base">
                    7.4 / 10 CGPA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
