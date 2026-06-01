import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaChartBar,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const skills = [
    { name: "React", icon: <FaReact />, color: "text-[#61DAFB]" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-[#339933]" },
    {
      name: "Express.js",
      icon: <SiExpress />,
      color: "text-gray-500 dark:text-gray-400",
    },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E]" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
    { name: "Python", icon: <FaPython />, color: "text-[#3776AB]" },
    { name: "SQL", icon: <FaDatabase />, color: "text-[#00758F]" },
    { name: "Power BI", icon: <FaChartBar />, color: "text-[#F2C811]" },
  ];

  return (
    <div className="min-h-screen w-full bg-[#fcfcfd] dark:bg-[#070a13] text-gray-900 dark:text-gray-50 relative overflow-hidden flex flex-col gap-28 py-16 md:py-24 animate-fadeIn">
      {/* Dynamic Background Mesh Glows */}
      <div className="absolute w-[700px] h-[700px] bg-amber-500/[0.04] rounded-full blur-3xl top-[-200px] right-[-150px] pointer-events-none"></div>
      <div className="absolute w-[600px] h-[600px] bg-sky-500/[0.04] rounded-full blur-3xl bottom-[-150px] left-[-150px] pointer-events-none"></div>

      {/* Hero Section */}
      <section className="w-full max-w-[85%] mx-auto px-4 sm:px-6 z-10">
        <div className="grid lg:grid-cols-12 items-center gap-12 lg:gap-16 w-full">
          {/* Left Side Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[390px] lg:h-[390px]">
              {/* Outer double border framing glow */}
              <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-amber-500 to-sky-400 opacity-25 blur-sm"></div>
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-[#0f1524] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] relative z-10">
                <img
                  src="/ProfilePhoto.jpg"
                  alt="Aryan Rajput"
                  className="w-full h-full object-cover object-top object-center scale-102"
                />
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-6 dark:bg-amber-500/10 border border-amber-200/50 dark:border-amber-500/20">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <p className="text-amber-600 dark:text-amber-400 font-semibold tracking-wider text-xs uppercase">
                Available for Work
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mt-5 text-gray-900 dark:text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Aryan Rajput
              </span>
            </h1>

            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-800 dark:text-gray-200">
              Full Stack Developer &bull; Data Analyst
            </h2>

            <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl font-normal">
              I build scalable web applications using React, Node.js,
              Express.js, and MongoDB. I also work with data analysis,
              visualization, Python, SQL, and Power BI to transform data into
              actionable insights.
            </p>

            {/* Social Links Container */}
            <div className="flex items-center gap-5 mt-6">
              <a
                href="https://github.com/aryanrajput2304"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl transition-all duration-200 hover:-translate-y-0.5"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/aryan-rajput-b0b723292/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-gray-500 hover:text-[#0077B5] dark:hover:text-[#0077B5] text-2xl transition-all duration-200 hover:-translate-y-0.5"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-4 mt-8 w-full justify-start">
              <button
                onClick={() => navigate("/projects")}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm sm:text-base font-bold transition-all duration-200 shadow-lg shadow-orange-500/15 hover:shadow-orange-500/25 hover:-translate-y-0.5"
              >
                View Projects
              </button>

              <button className="px-8 py-3.5 rounded-xl border border-gray-300 dark:border-white/10 text-sm sm:text-base font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition duration-200">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-[85%] mx-auto px-4 sm:px-6 z-10">
        <h2 className="text-left text-2xl sm:text-3xl font-black tracking-tight mb-8 text-gray-900 dark:text-white">
          My <span className="text-amber-500">Skills</span>
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-[#0e1322] border border-gray-200/60 dark:border-white/[0.06] hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] dark:shadow-none"
            >
              <div
                className={`${skill.color} text-3xl mb-3 transition-transform duration-300 group-hover:scale-105`}
              >
                {skill.icon}
              </div>

              <p className="text-xs font-bold tracking-tight text-gray-700 dark:text-gray-300 text-center whitespace-normal break-words w-full">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section className="w-full max-w-[85%] mx-auto px-4 sm:px-6 z-10">
        <h2 className="text-left text-2xl sm:text-3xl font-black tracking-tight mb-10 text-gray-900 dark:text-white">
          About <span className="text-amber-500">Me</span>
        </h2>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Biography */}
          <div className="lg:col-span-7 text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold mb-5 tracking-tight text-gray-900 dark:text-gray-100">
              Full Stack Developer & Data Analyst
            </h3>

            <div className="space-y-5 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                I'm Aryan Rajput, a Full Stack Developer passionate about
                building modern web applications using React, Node.js,
                Express.js and MongoDB.
              </p>

              <p>
                Along with web development, I have a strong interest in Data
                Analytics. I work with Python, SQL, and Power BI to analyze
                data, create interactive dashboards, and generate meaningful
                insights that support data-driven decision making.
              </p>

              <p>
                I completed my B.Tech in Information Technology from MGM
                University, Chhatrapati Sambhajinagar with a CGPA of 7.4.
              </p>

              <p>
                I also worked as a Full Stack Developer Intern at Tech Surya
                where I gained practical experience developing responsive web
                applications and REST APIs.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 w-full">
            <div className="p-6 rounded-xl bg-white dark:bg-[#0e1322] border border-gray-200/60 dark:border-white/[0.06] text-left shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] dark:shadow-none transition-colors hover:border-amber-500/20">
              <h4 className="text-3xl font-black text-amber-500">10+</h4>
              <p className="mt-1 text-[11px] uppercase tracking-wider font-extrabold text-gray-400 dark:text-gray-500">
                Projects
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-[#0e1322] border border-gray-200/60 dark:border-white/[0.06] text-left shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] dark:shadow-none transition-colors hover:border-amber-500/20">
              <h4 className="text-3xl font-black text-amber-500">7.4</h4>
              <p className="mt-1 text-[11px] uppercase tracking-wider font-extrabold text-gray-400 dark:text-gray-500">
                CGPA
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
