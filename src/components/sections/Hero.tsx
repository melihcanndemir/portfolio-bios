import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as RawSyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const SyntaxHighlighter = RawSyntaxHighlighter as unknown as React.FC<{
  language: string;
  style: object;
  showLineNumbers?: boolean;
  customStyle?: React.CSSProperties;
  children: React.ReactNode;
}>;

const codeLines = [
  `// AI-First Development Approach`,
  `const Hero = () => (`,
  `  <section className="relative flex flex-col items-center justify-center h-screen text-center bg-gray-900 text-white overflow-hidden">`,
  `    <h1 className="text-7xl font-bold">Hello, I'm <span className="text-blue-400">Melih</span></h1>`,
  `    <h2 className="text-3xl mt-2">AI-First Developer 🤖 | Full Stack & Innovation</h2>`,
  `    <p className="text-xl mt-4 text-gray-400">"Transforming ideas into reality with AI-powered development"</p>`,
  `    <div className="flex mt-6 space-x-6">`,
  `      <FaGithub className="text-4xl hover:text-blue-400 transition duration-300" />`,
  `      <FaLinkedin className="text-4xl hover:text-blue-400 transition duration-300" />`,
  `      <FaInstagram className="text-4xl hover:text-blue-400 transition duration-300" />`,
  `    </div>`,
  `  </section>`,
  `);`,
  `export default Hero;`,
];

const CodeTypewriter = ({ onComplete }: { onComplete: () => void }) => {
  const [displayedCode, setDisplayedCode] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedCode(codeLines.slice(0, index + 1).join("\n"));
      index++;
      if (index > codeLines.length) {
        clearInterval(interval);
        setTimeout(onComplete, 500); // Short delay after code completion
      }
    }, 300);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      showLineNumbers
      customStyle={{
        fontSize: "24px",
        padding: "20px",
        borderRadius: "10px",
        overflowX: "hidden",
      }}
    >
      {displayedCode}
    </SyntaxHighlighter>
  );
};

const HeroComponent = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col justify-center items-center relative overflow-x-hidden overflow-y-hidden">
      {/* Modern Gradient Background Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 opacity-20 blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Secondary Gradient Layer for Depth */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-emerald-500 to-violet-500 opacity-15 blur-[150px] pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Code Writing Area */}
      <AnimatePresence>
        {step === 0 && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="p-6 w-full max-w-4xl bg-gray-900 rounded-lg shadow-lg"
          >
            <CodeTypewriter onComplete={() => setStep(1)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Bileşeni */}
      {step >= 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <Hero />
        </motion.div>
      )}
    </div>
  );
};

// Hero Component
const Hero = () => (
  <section className="relative flex flex-col items-center justify-center h-screen w-full bg-gray-900 text-white overflow-hidden">
    {/* Modern Gradient Background Effect */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 opacity-20 blur-[120px] pointer-events-none"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 15, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }}
    />

    {/* Secondary Gradient Layer for Depth */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-emerald-500 to-violet-500 opacity-15 blur-[150px] pointer-events-none"
      animate={{
        scale: [1.2, 1, 1.2],
        rotate: [0, -15, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    />

    <h1 className="text-7xl font-bold">
      Hello, I'm{" "}
      <motion.span
        className="text-blue-400"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Melih
      </motion.span>
    </h1>

    <motion.h2 
      className="text-3xl mt-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      AI-First Developer 🤖 | Full Stack & Innovation
    </motion.h2>

    <motion.p
      className="text-xl mt-4 text-gray-400"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      "Transforming ideas into reality with AI-powered development"
    </motion.p>

    {/* Social Media Icons */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="flex mt-6 space-x-6"
    >
      <motion.a
        href="https://github.com/melihcanndemir"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl cursor-pointer"
        whileHover={{
          scale: 1.3,
          color: "#60a5fa",
          textShadow: "0px 0px 12px #3b82f6",
        }}
        transition={{ duration: 0.3 }}
      >
        <FaGithub />
      </motion.a>
      <motion.a
        href="https://linkedin.com/in/melihcandemir"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl cursor-pointer"
        whileHover={{
          scale: 1.3,
          color: "#60a5fa",
          textShadow: "0px 0px 12px #3b82f6",
        }}
        transition={{ duration: 0.3 }}
      >
        <FaLinkedin />
      </motion.a>
      <motion.a
        href="https://instagram.com/melihcandemir"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl cursor-pointer"
        whileHover={{
          scale: 1.3,
          color: "#60a5fa",
          textShadow: "0px 0px 12px #3b82f6",
        }}
        transition={{ duration: 0.3 }}
      >
        <FaInstagram />
      </motion.a>
    </motion.div>
  </section>
);

export default HeroComponent;
