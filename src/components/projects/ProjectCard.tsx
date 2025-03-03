import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaGooglePlay, FaDesktop, FaRaspberryPi, FaBrain, FaCode, FaRobot } from "react-icons/fa";
import { GoBeaker } from "react-icons/go";
import { useState } from "react";
import { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [expandedProject, setExpandedProject] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-[#24283b] via-[#2a2e3f] to-[#1a1b26] hover:shadow-xl border border-[#414868] transition-all duration-300 hover:bg-gradient-to-br hover:from-[#2a2e3f] hover:via-[#24283b] hover:to-[#1f2335]"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-2xl font-semibold text-[#bb9af7]">
          {project.title}
        </h3>
        <div className="flex gap-2">
          {project.popular && (
            <span className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-[#ff9e64] text-white">
              <span className="text-sm">⭐</span>
              Popular
            </span>
          )}
          {project.aiEnhanced && (
            <span className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-[#9d7cd8] text-white">
              <FaRobot className="text-sm" />
              AI Enhanced
            </span>
          )}
          {project.status === "development" && (
            <span className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-[#e0af68] text-[#1a1b26]">
              <GoBeaker className="text-sm" />
              In development
            </span>
          )}
          {project.status === "private" && (
            <span className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-[#f7768e] text-white">
              <FaCode className="text-sm" />
              Private
            </span>
          )}
          {project.type === "iot" && (
            <span className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-[#73daca] text-[#1a1b26]">
              <FaRaspberryPi className="text-sm" />
              IoT
            </span>
          )}
          {project.type === "ai" && (
            <span className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-[#bb9af7] text-white">
              <FaBrain className="text-sm" />
              AI
            </span>
          )}
        </div>
      </div>

      <p className="mb-4 text-[#a9b1d6]">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.features.map((feature, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs rounded-full bg-[#414868] text-[#7aa2f7]"
          >
            {feature}
          </span>
        ))}
      </div>

      {project.progress && (
        <div className="mt-4">
          <button
            onClick={() => setExpandedProject(!expandedProject)}
            className="flex items-center gap-2 text-sm text-[#7aa2f7] hover:text-[#bb9af7] transition-colors"
          >
            <span className="transform transition-transform duration-200" style={{
              transform: expandedProject ? 'rotate(90deg)' : 'rotate(0deg)'
            }}>▶</span>
            Project Progress
          </button>
          
          {expandedProject && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 text-sm space-y-2"
            >
              {project.progress.completed.length > 0 && (
                <div>
                  <span className="text-[#9ece6a]">✓ Completed:</span>
                  <ul className="ml-4 text-[#a9b1d6]">
                    {project.progress.completed.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.progress.inProgress.length > 0 && (
                <div>
                  <span className="text-[#e0af68]">⟳ In Progress:</span>
                  <ul className="ml-4 text-[#a9b1d6]">
                    {project.progress.inProgress.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.progress.planned.length > 0 && (
                <div>
                  <span className="text-[#7aa2f7]">○ Planned:</span>
                  <ul className="ml-4 text-[#a9b1d6]">
                    {project.progress.planned.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          )}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-4">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-[#414868] hover:bg-[#5a638c] text-white px-4 py-2 rounded-lg transition"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        )}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-[#7aa2f7] hover:bg-[#5d7cd0] text-white px-4 py-2 rounded-lg transition"
          >
            <FaExternalLinkAlt />
            <span>Live Demo</span>
          </a>
        )}
        {project.playStoreLink && (
          <a
            href={project.playStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-[#9ece6a] hover:bg-[#73a347] text-white px-4 py-2 rounded-lg transition"
          >
            <FaGooglePlay />
            <span>Google Play</span>
          </a>
        )}
        {project.type === "desktop" && (
          <div className="flex items-center space-x-2 bg-[#565f89] text-white px-4 py-2 rounded-lg">
            <FaDesktop />
            <span>Desktop App</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard; 