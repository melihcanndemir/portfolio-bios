import { useState } from "react";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Terminal from "./components/sections/Terminal";
import CodeEditor from "./components/sections/Code";
import BiosScreen from "./components/common/BiosScreen";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [isBooting, setIsBooting] = useState(true);

  return (
    <>
      {isBooting ? (
        <BiosScreen onBootComplete={() => setIsBooting(false)} />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-gray-900 min-h-screen"
          >
            <Hero />
            <Terminal />
            <CodeEditor />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}

export default App;
