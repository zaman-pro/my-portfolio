import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  // Frontend
  {
    name: "HTML",
    category: "frontend",
    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    name: "CSS",
    category: "frontend",
    icon: <FaCss3Alt className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: <FaJs className="text-yellow-400" />,
  },
  {
    name: "React",
    category: "frontend",
    icon: <FaReact className="text-blue-400" />,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: <SiTailwindcss className="text-cyan-400" />,
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: <SiNextdotjs />,
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: <FaNodeJs className="text-green-500" />,
  },
  {
    name: "Express",
    category: "backend",
    icon: <SiExpress />,
  },
  {
    name: "MongoDB",
    category: "backend",
    icon: <SiMongodb className="text-green-600" />,
  },
  {
    name: "Firebase",
    category: "backend",
    icon: <SiFirebase className="text-yellow-500" />,
  },

  // Tools
  {
    name: "Git",
    category: "tools",
    icon: <FaGitAlt className="text-orange-600" />,
  },
  {
    name: "GitHub",
    category: "tools",
    icon: <FaGithub />,
  },
  {
    name: "Figma",
    category: "tools",
    icon: <FaFigma />,
  },
  {
    name: "Vercel",
    category: "tools",
    icon: <SiVercel className="" />,
  },
  {
    name: "VS Code",
    category: "tools",
    icon: <VscVscode className="text-blue-500" />,
  },
];

const categories = ["all", "frontend", "backend", "tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center gap-3"
            >
              <div className="text-4xl">{skill.icon}</div>
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
