import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useInView } from "react-intersection-observer";
import CodeReveal from "../common/CodeReveal";

const codeLines = [
  `// Tokyo Night Temalı Hakkımda Bileşeni`,
  `const About = () => {`,
  `  const { ref, inView } = useInView();`,
  `  return (`,
  `    <section className="flex items-center bg-[#1a1b26]">`,
  `      <div className="text-center space-y-4">`,
  `        <h2 className="text-4xl font-bold text-[#7aa2f7]">`,
  `          About Me`,
  `        </h2>`,
  `        <p className="text-lg text-[#a9b1d6]">`,
  `          AI-First Developer & Innovation Engineer 🚀`,
  `        </p>`,
  `      </div>`,
  `    </section>`,
  `  );`,
  `};`
];

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <CodeReveal codeLines={codeLines} title="about.tsx">
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center justify-center py-20 px-6 bg-gradient-to-br from-[#1a1b26] via-[#24283b] to-[#1a1b26] text-white"
      >
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="md:w-1/2 text-center md:text-left space-y-4"
        >
          <h2 className="text-4xl font-bold text-[#7aa2f7]">About Me</h2>
          <p className="text-lg text-[#a9b1d6]">
            Hello! I'm <span className="font-semibold text-white">Melih</span>, an{" "}
            <span className="text-[#7aa2f7] font-semibold">
              AI-First Developer
            </span>{" "}
            and{" "}
            <span className="text-[#bb9af7] font-semibold">
              Innovation Engineer 🚀
            </span>
            . I create modern and effective solutions using AI-powered development approaches.
          </p>
          <p className="text-lg text-[#a9b1d6]">
            Using AI-enhanced development processes, I build web applications with{" "}
            <span className="font-semibold text-white">
              React, Next.js, Tailwind CSS
            </span>
            . On the backend, I utilize{" "}
            <span className="font-semibold text-white">
              Node.js, NestJS, PostgreSQL
            </span>
            , and{" "}
            <span className="font-semibold text-white">Python</span>{" "}
            with AI optimization.
          </p>
          <p className="text-lg text-[#a9b1d6]">
            My AI-driven development approach ensures faster iteration and higher quality. I implement{" "}
            <span className="text-[#9ece6a] font-semibold">
              AI-enhanced testing and optimization
            </span>{" "}
            processes in every project.
          </p>
        </motion.div>

        {/* Right Side - 3D Tilt Effect on Image */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable
          glareMaxOpacity={0.2}
          className="md:w-1/2 flex justify-center mt-6 md:mt-0"
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative w-56 h-56 md:w-72 md:h-72"
          >
            <img
              src="/profile.jpg"
              alt="Profile"
              className="rounded-full border-4 border-[#7aa2f7] shadow-lg object-cover w-full h-full"
            />
            <motion.div
              className="absolute inset-0 bg-[#7aa2f7] opacity-20 blur-2xl rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        </Tilt>
      </motion.section>
    </CodeReveal>
  );
};

export default About;
