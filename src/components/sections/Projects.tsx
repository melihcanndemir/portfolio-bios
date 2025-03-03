import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "../projects/ProjectCard";
import CodeReveal from "../common/CodeReveal";
import { projectsCodeSample } from "../projects/ProjectsCodeSample";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Sort projects by popularity and development status
  const sortedProjects = [...projects].sort((a, b) => {
    // First sort by popularity
    if (a.popular && !b.popular) return -1;
    if (!a.popular && b.popular) return 1;
    
    // Then sort by development status (completed first)
    if (!a.status && b.status === "development") return -1;
    if (a.status === "development" && !b.status) return 1;
    
    return 0;
  });

  const displayedProjects = showAll ? sortedProjects : sortedProjects.slice(0, 6);

  return (
    <CodeReveal codeLines={projectsCodeSample} title="projects.tsx">
      <section className="py-20 px-6 bg-[#1a1b26] text-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center text-[#7aa2f7] mb-10"
        >
          Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center text-[#a9b1d6] mb-8 max-w-2xl mx-auto"
        >
          All projects are developed using modern software development approaches and AI-enhanced development processes. 
          This approach ensures faster iteration and higher quality.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {projects.length > 6 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-[#414868] hover:bg-[#5a638c] text-white rounded-lg transition"
            >
              {showAll ? "Show Less" : "Show All Projects"}
            </button>
          </div>
        )}
      </section>
    </CodeReveal>
  );
};

export default Projects;
