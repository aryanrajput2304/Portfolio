import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "Modern ecommerce platform with authentication, cart, filtering and responsive UI.",
      tech: ["React", "Tailwind CSS", "Node.js", "express.js", "MongoDB"],
      github:
        "https://github.com/aryanrajput2304/Ecommerce_Website_Egadegets.git",
      live: "https://ecommerce-website-e-gadgets.onrender.com",
      image: "/gadgetgalaxy.png",
    },
    {
      title: "Pomodoro Timer",
      description:
        "Productivity timer with focus sessions, pause/reset functionality and clean UI.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/aryanrajput2304/PomodoroTimer.git",
      live: "https://pomodorotimer-pkzx.onrender.com",
      image: "/Pomodoro.png",
    },
    {
      title: "Todo List",
      description:
        "Task management app with CRUD operations and local storage support.",
      tech: ["React", "Tailwind CSS", "JavaScript", "jSON SERVER"],
      github: "https://github.com/aryanrajput2304/TODO-APP.git",
      live: "https://todo-rwg9.onrender.com",
      image: "/TodoApp.png",
    },
    {
      title: "Tourism Website",
      description:
        "Responsive tourism website with destination pages and modern design.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/aryanrajput2304/TourIndia.git",
      live: "https://tourindia-km71.onrender.com",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Blog Website",
      description:
        "Dynamic blogging platform with authentication and responsive layouts.",
      tech: ["React", "JavaScript", "Tailwind CSS", "JSON SERVER"],
      github: "https://github.com/aryanrajput2304/BlogApp.git",
      live: "https://blogapp-fvih.onrender.com",
      image: "/blog.png",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-[#fcfcfd] dark:bg-[#070a13] text-gray-900 dark:text-gray-50 px-6 sm:px-10 lg:px-20 xl:px-32 py-24 relative overflow-hidden animate-fadeIn">
      {/* Background Mesh Glows */}
      <div className="absolute w-[600px] h-[600px] bg-amber-500/[0.03] rounded-full blur-3xl top-[-150px] left-[-120px] pointer-events-none"></div>
      <div className="absolute w-[500px] h-[500px] bg-sky-500/[0.03] rounded-full blur-3xl bottom-[-150px] right-[-120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200/50 dark:border-amber-500/20 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            <p className="text-amber-600 dark:text-amber-400 font-semibold tracking-wider text-xs uppercase">
              My Portfolio
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-5 tracking-tight text-gray-900 dark:text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Work
            </span>
          </h1>

          <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-6 rounded-full"></div>

          <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A collection of frontend and full stack projects built with modern
            technologies and clean responsive interfaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-[#0e1322] border border-gray-200/60 dark:border-white/[0.06] rounded-2xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-xl hover:shadow-amber-500/[0.01]"
            >
              {/* Project Image Panel */}
              <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-[#070a13] relative border-b border-gray-100 dark:border-white/[0.04]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Card Meta Content */}
              <div className="p-6 md:p-7">
                <h2 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white mb-2.5">
                  {project.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-5 min-h-[3.5rem]">
                  {project.description}
                </p>

                {/* Tech Badges Container */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-bold tracking-tight rounded-md bg-gray-50 dark:bg-white/[0.03] text-gray-500 dark:text-gray-400 border border-gray-200/60 dark:border-white/[0.05]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Call-to-Action Links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-300 dark:border-white/10 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition duration-200"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold transition-all duration-200 shadow-md shadow-orange-500/10 hover:shadow-orange-500/20"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
