import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaJava,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiAndroid,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiJenkins,
  SiGooglecloud,
} from "react-icons/si";
import CodeReveal from "../common/CodeReveal";

const skills = [
  {
    name: "React.js",
    icon: <FaReact className="text-[#7aa2f7]" />,
    color: "bg-gradient-to-br from-[#1a1b26] via-[#24283b] to-[#2f354a]",
    url: "https://reactjs.org"
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-[#a9b1d6]" />,
    color: "bg-gradient-to-br from-[#1a1b26] via-[#24283b] to-[#2f354a]",
    url: "https://nextjs.org"
  },
  {
    name: "Python",
    icon: <FaPython className="text-[#e0af68]" />,
    color: "bg-gradient-to-br from-[#1a1b26] via-[#24283b] to-[#2f354a]",
    url: "https://python.org"
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-[#9ece6a]" />,
    color: "bg-gradient-to-br from-[#1a1b26] via-[#24283b] to-[#2f354a]",
    url: "https://nodejs.org"
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#73daca]" />,
    color: "bg-gradient-to-br from-[#1a1b26] via-[#24283b] to-[#2f354a]",
    url: "https://tailwindcss.com"
  },
  {
    name: "Docker",
    icon: <FaDocker className="text-[#7aa2f7]" />,
    color: "bg-gradient-to-br from-[#1a1b26] via-[#24283b] to-[#2f354a]",
    url: "https://docker.com"
  },
  {
    name: "Android",
    icon: <SiAndroid className="text-[#9ece6a]" />,
    color: "bg-gradient-to-br from-[#1a1b26] via-[#24283b] to-[#2f354a]",
    url: "https://developer.android.com"
  },
  {
    name: "Java",
    icon: <FaJava className="text-[#f7768e]" />,
    color: "bg-gradient-to-br from-[#1a1b26] via-[#24283b] to-[#2f354a]",
    url: "https://java.com"
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-[#f7768e]" />,
    color: "bg-gradient-to-br from-[#1a1b26] via-[#24283b] to-[#2f354a]",
    url: "https://git-scm.com"
  },
  {
    name: "HTML5",
    icon: <SiHtml5 className="text-[#ff9e64]" />,
    color: "bg-gradient-to-br from-[#1a1b26] via-[#24283b] to-[#2f354a]",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  {
    name: "CSS3",
    icon: <SiCss3 className="text-[#7aa2f7]" />,
    color: "bg-gradient-to-br from-[#1a1b26] via-[#24283b] to-[#2f354a]",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  {
    name: "Linux",
    icon: <FaLinux className="text-[#a9b1d6]" />,
    color: "bg-gradient-to-br from-[#1a1b26] via-[#24283b] to-[#2f354a]",
    url: "https://linux.org"
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-[#bb9af7]" />,
    color: "bg-gradient-to-br from-[#1a1b26] via-[#24283b] to-[#2f354a]",
    url: "https://figma.com"
  },
  {
    name: "Jenkins",
    icon: <SiJenkins className="text-[#f7768e]" />,
    color: "bg-gradient-to-br from-[#1a1b26] via-[#24283b] to-[#2f354a]",
    url: "https://jenkins.io"
  },
  {
    name: "Google Cloud",
    icon: <SiGooglecloud className="text-[#7aa2f7]" />,
    color: "bg-gradient-to-br from-[#1a1b26] via-[#24283b] to-[#2f354a]",
    url: "https://cloud.google.com"
  },
];

const codeLines = [
  `// Skills Component with Tokyo Night Theme`,
  `const Skills = () => {`,
  `  return (`,
  `    <section className="py-20 px-6 bg-[#1a1b26]">`,
  `      <h2 className="text-4xl font-bold text-[#7aa2f7]">Skills</h2>`,
  `      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">`,
  `        {skills.map(skill => (`,
  `          <div className="p-6 bg-[#24283b] hover:bg-[#2f354a]">`,
  `            {skill.icon}`,
  `            <p className="text-[#a9b1d6]">{skill.name}</p>`,
  `          </div>`,
  `        ))}`,
  `      </div>`,
  `    </section>`,
  `  );`,
  `};`
];

const Skills = () => {
  return (
    <CodeReveal codeLines={codeLines} title="skills.tsx">
      <section className="py-20 px-6 bg-[#1a1b26] text-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-[#7aa2f7] mb-10"
        >
          Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-[#a9b1d6] mb-12 max-w-2xl mx-auto"
        >
          I work with modern technologies and AI-powered development tools.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              onClick={() => window.open(skill.url, '_blank')}
              className={`flex flex-col items-center p-6 rounded-lg ${skill.color} cursor-pointer
                shadow-lg hover:shadow-xl border border-[#414868] backdrop-blur-sm
                transform transition-all duration-200 hover:bg-gradient-to-br hover:from-[#24283b] hover:via-[#2f354a] hover:to-[#414868]`}
            >
              <div className="text-5xl transform transition-transform group-hover:scale-110">
                {skill.icon}
              </div>
              <p className="mt-4 text-lg font-semibold text-[#a9b1d6] group-hover:text-white">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </CodeReveal>
  );
};

export default Skills;
