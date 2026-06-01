import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaChartBar,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
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
    <section className="min-h-screen w-full bg-[#fcfcfd] dark:bg-[#070a13] text-gray-900 dark:text-gray-50 px-6 sm:px-10 lg:px-20 xl:px-32 py-24 relative overflow-hidden flex flex-col justify-center animate-fadeIn">
      {/* Background Mesh Glows */}
      <div className="absolute w-[600px] h-[600px] bg-amber-500/[0.03] rounded-full blur-3xl top-[-150px] left-[-150px] pointer-events-none"></div>
      <div className="absolute w-[500px] h-[500px] bg-sky-500/[0.03] rounded-full blur-3xl bottom-[-150px] right-[-150px] pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto z-10">
        {/* Heading Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200/50 dark:border-amber-500/20 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            <p className="text-amber-600 dark:text-amber-400 font-semibold tracking-wider text-xs uppercase">
              Technical Expertise
            </p>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-5 tracking-tight text-gray-900 dark:text-white">
            My{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-6 rounded-full"></div>

          <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I use to build scalable full-stack
            applications and data-driven solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-8 rounded-xl bg-white dark:bg-[#0e1322] border border-gray-200/60 dark:border-white/[0.06] hover:border-amber-500/30 hover:-translate-y-1.5 transition-all duration-300 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-xl hover:shadow-amber-500/[0.02]"
            >
              {/* Icon Container with Permanent Base Colors */}
              <div
                className={`text-4xl sm:text-5xl ${skill.color} mb-4 transition-transform duration-300 group-hover:scale-105`}
              >
                {skill.icon}
              </div>

              {/* Static Text Label */}
              <h3 className="text-sm sm:text-base font-bold tracking-tight text-gray-800 dark:text-gray-200 text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
