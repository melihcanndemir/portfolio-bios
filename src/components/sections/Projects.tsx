import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaGooglePlay, FaDesktop, FaRaspberryPi, FaBrain, FaCode, FaRobot } from "react-icons/fa";
import { GoBeaker } from "react-icons/go";
import { useState } from "react";
import CodeReveal from "../common/CodeReveal";

const projects = [
  {
    title: "KesifPlus",
    description: "AI-powered education platform for quantum computing and technology. Features modern UI/UX and interactive learning experience.",
    liveLink: "https://kesifplus.netlify.app",
    type: "web",
    status: "development",
    features: ["React", "TypeScript", "Tailwind CSS", "Modern UI/UX", "AI-Enhanced"],
    aiEnhanced: true,
    progress: {
      completed: ["Modern UI Design", "Basic Content Structure", "Authentication"],
      inProgress: ["Interactive Learning Modules", "AI Content Generation"],
      planned: ["Community Features", "Progress Tracking", "Certificates"]
    }
  },
  {
    title: "Live Code Editor",
    description: "Real-time HTML & CSS preview editor with live rendering and syntax highlighting.",
    type: "web",
    status: "development",
    features: ["Live Preview", "Code Editor", "Syntax Highlighting"],
    aiEnhanced: false,
    progress: {
      completed: ["Live Preview", "Basic Editor Functions", "Syntax Highlighting"],
      inProgress: ["Multiple File Support", "Project Templates"],
      planned: ["Code Sharing", "User Accounts", "Export Options"]
    }
  },
  {
    title: "Mindbook",
    description: "AI-enhanced React Native note-taking app with smart categorization and theme suggestions.",
    type: "mobile",
    status: "private",
    features: ["React Native", "Local Storage", "Dark Mode", "Categories", "AI-Enhanced"],
    aiEnhanced: true,
    progress: {
      completed: ["Core Note Taking", "Categories", "Dark Mode"],
      inProgress: ["AI Categorization", "Cloud Sync"],
      planned: ["Collaboration", "Rich Text Editor", "Voice Notes"]
    }
  },
  {
    title: "Raspberry Pi WiFi Extender",
    description: "AI-optimized WiFi extender configuration tool with automatic network optimization and security setup.",
    githubLink: "https://github.com/melihcanndemir/raspberrypi_wifi_extender",
    type: "iot",
    features: ["Python", "Network Management", "DHCP Server", "AI-Enhanced"],
    aiEnhanced: true,
    progress: {
      completed: ["Basic WiFi Extension", "DHCP Server", "Network Management"],
      inProgress: ["AI Network Optimization", "Security Features"],
      planned: ["Web Interface", "Mobile App Control", "Multi-device Support"]
    }
  },
  {
    title: "React Project Automator",
    description: "AI-powered React project creation tool with smart template suggestions and automatic configuration.",
    githubLink: "https://github.com/melihcanndemir/React-Project-Automator",
    type: "desktop",
    features: ["Cross-Platform", "Git Integration", "Project Templates", "AI-Enhanced"],
    aiEnhanced: true,
    progress: {
      completed: ["Project Generation", "Git Integration", "Basic Templates"],
      inProgress: ["AI Template Suggestions", "Custom Configurations"],
      planned: ["Plugin System", "Team Collaboration", "Cloud Integration"]
    }
  },
  {
    title: "QR Code Scanner",
    description: "AI-enhanced QR code scanning and generation app with smart format detection and optimization.",
    type: "mobile",
    status: "development",
    features: ["QR Scanning", "QR Generation", "History", "AI-Enhanced"],
    aiEnhanced: true,
    progress: {
      completed: ["QR Scanning", "QR Generation", "History"],
      inProgress: ["AI Format Detection", "Batch Processing"],
      planned: ["Cloud Storage", "Share Features", "Business Cards"]
    }
  },
  {
    title: "APK Backup",
    description: "AI-optimized Android app backup tool with smart storage management and cloud integration.",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.melihcandemir.apkbackup",
    type: "mobile",
    features: ["Android", "Cloud Storage", "AI-Enhanced"],
    aiEnhanced: true,
    popular: true,
    progress: {
      completed: ["App Backup", "Cloud Storage", "App Management"],
      inProgress: ["Smart Backup Suggestions", "Storage Optimization"],
      planned: ["Cross-device Sync", "App Data Backup", "Schedule Backups"]
    }
  },
  {
    title: "Notepad",
    description: "AI-enhanced modern note-taking app with smart note organization and theme suggestions.",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.melihcandemir.notepad",
    type: "mobile",
    features: ["Android", "Notes", "Themes", "AI-Enhanced"],
    aiEnhanced: true,
    popular: true,
    progress: {
      completed: ["Note Taking", "Theme System", "Categories"],
      inProgress: ["AI Organization", "Cloud Backup"],
      planned: ["Collaboration", "Rich Text", "Web Version"]
    }
  },
  {
    title: "CodeLLAMA Chat",
    description: "AI code assistant using LLAMA 7B model with advanced code completion and explanation features.",
    githubLink: "https://github.com/melihcanndemir/code_llama_ai",
    type: "ai",
    features: ["LLAMA 7B", "Code Completion", "AI-Enhanced"],
    aiEnhanced: true,
    popular: true,
    progress: {
      completed: ["Base AI Integration", "Code Completion", "Syntax Highlighting"],
      inProgress: ["Multi-language Support", "Code Optimization"],
      planned: ["Real-time Collaboration", "Custom Model Training"]
    }
  },
  {
    title: "Markdown Previewer",
    description: "AI-enhanced real-time Markdown preview tool with smart formatting suggestions.",
    liveLink: "https://webmarkdown.netlify.app/",
    githubLink: "https://github.com/melihcanndemir/markdown-previewer",
    type: "web",
    features: ["Markdown", "Live Preview", "AI-Enhanced"],
    aiEnhanced: true,
    popular: true,
    progress: {
      completed: ["Markdown Preview", "Basic Editor", "Export Options"],
      inProgress: ["AI Suggestions", "Custom Themes"],
      planned: ["Collaboration", "Templates", "Plugin System"]
    }
  },
  {
    title: "UUID & HEX Generator",
    description: "AI-optimized UUID and HEX color code generator with smart color suggestions.",
    liveLink: "https://uuid-hex-generator.netlify.app/",
    githubLink: "https://github.com/melihcanndemir/uuid-hex-generator",
    type: "web",
    features: ["UUID", "HEX Colors", "AI-Enhanced"],
    aiEnhanced: true,
    popular: true,
    progress: {
      completed: ["UUID Generation", "HEX Generation", "Color Preview"],
      inProgress: ["AI Color Suggestions", "Batch Generation"],
      planned: ["Color Palettes", "Export Options", "API Access"]
    }
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  
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

  const codeLines = [
    `// Tokyo Night Temalı Projeler Bileşeni`,
    `const Projects = () => {`,
    `  const [showAll, setShowAll] = useState(false);`,
    `  const projects = [`,
    `    {`,
    `      title: "KesifPlus",`,
    `      description: "AI-powered education platform",`,
    `      features: ["React", "TypeScript", "AI-Enhanced"],`,
    `      status: "development"`,
    `    },`,
    `    // ... diğer projeler ...`,
    `  ];`,
    ``,
    `  return (`,
    `    <section className="py-20 px-6 bg-[#1a1b26] text-white">`,
    `      <h2 className="text-4xl font-bold text-[#7aa2f7]">Projects</h2>`,
    `      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`,
    `        {projects.map(project => (`,
    `          <div className="p-6 bg-gradient-to-br from-[#24283b] via-[#2a2e3f] to-[#1a1b26] rounded-lg shadow-lg hover:shadow-xl border border-[#414868] transition-all duration-300 hover:bg-gradient-to-br hover:from-[#2a2e3f] hover:via-[#24283b] hover:to-[#1f2335]">`,
    `            <h3>{project.title}</h3>`,
    `            <p>{project.description}</p>`,
    `            {/* ... diğer proje detayları ... */}`,
    `          </div>`,
    `        ))}`,
    `      </div>`,
    `    </section>`,
    `  );`,
    `};`
  ];

  return (
    <CodeReveal codeLines={codeLines} title="projects.tsx">
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
            <motion.div
              key={index}
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
              <p className="mt-2 text-[#a9b1d6]">{project.description}</p>
              
              {project.features && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.features.map((feature, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-[#414868] text-[#a9b1d6]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              )}

              {project.progress && (
                <div className="mt-4">
                  <button
                    onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
                    className="flex items-center gap-2 text-sm text-[#7aa2f7] hover:text-[#bb9af7] transition-colors"
                  >
                    <span className="transform transition-transform duration-200" style={{
                      transform: expandedProject === project.title ? 'rotate(90deg)' : 'rotate(0deg)'
                    }}>▶</span>
                    Project Progress
                  </button>
                  
                  {expandedProject === project.title && (
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
          ))}
        </div>

        {projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-8 py-3 bg-[#414868] hover:bg-[#5a638c] rounded-lg text-white transition-all duration-300 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="relative">
                {showAll ? "Show Less Projects" : `Show All Projects (${projects.length})`}
              </span>
            </button>
          </motion.div>
        )}
      </section>
    </CodeReveal>
  );
};

export default Projects;
