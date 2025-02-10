import { useState, useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import figlet from "figlet";
// Figlet'in Standard fontunu tarayıcıda kullanabilmek için import edip parse ediyoruz
// @ts-ignore
import standardFont from "figlet/importable-fonts/Standard.js";
import CodeReveal from "../common/CodeReveal";

const codeLines = [
  `// Terminal Bileşeni Tanımlanıyor...`,
  `const Terminal = () => (`,
  `  <motion.div className="h-[70vh] bg-gray-900 text-gray-300 font-mono p-4">`,
  `    <pre>Melih Can Demir - Terminal Portfolio</pre>`,
  `    <p>Type 'help' for available commands...</p>`,
  `  </motion.div>`,
  `);`,
  `export default Terminal;`,
];

// Standard fontu figlet'e tanıtıyoruz
figlet.parseFont("Standard", standardFont);

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [banner, setBanner] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Component mount olduğunda inputa odaklan
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Figlet font parse edildikten sonra banner'ı oluşturuyoruz
  useEffect(() => {
    try {
      const bannerText = figlet.textSync("Melih Can Demir", {
        font: "Standard",
      });
      setBanner(bannerText);
    } catch (err) {
      console.error("Banner oluşturulurken hata:", err);
      setBanner("Melih Can Demir");
    }
  }, []);

  // Kullanılabilir komutlar
  const commands: { [key: string]: string | string[] } = {
    help: [
      "Commands:",
      "about - About me",
      "projects - Show my projects",
      "contact - Show contact information",
      "clear - Clear the terminal",
      "theme dark/light - Change terminal theme",
      "whoami - Discover who I am",
      "matrix - Generate a matrix effect",
      "figlet <text> - Generate ASCII art from text",
    ],
    about: "I am Melih, a Full Stack Developer & AI Enthusiast 🚀.",
    projects: [
      "1. Markdown Previewer - https://webmarkdown.netlify.app/",
      "2. UUID & HEX Generator - https://uuid-hex-generator.netlify.app/",
      "3. CodeLLAMA Chat - https://github.com/melihcanndemir/code_llama_ai",
      "4. Apk Backup - https://play.google.com/store/apps/details?id=com.melihcandemir.apkbackup&hl=en",
    ],
    contact: [
      "LinkedIn: https://linkedin.com/in/melihcandemir",
      "GitHub: https://github.com/melihcanndemir",
      "E-Mail: melihcandemir@protonmail.com",
    ],
    whoami: "Just a coding enthusiast trying to be legendary. 😎",
    "sudo rm -rf /": "Haha, nice try! Not today. 😂",
  };

  // Asenkron figlet komutu için yardımcı fonksiyon
  const generateFigletText = (text: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      figlet.text(text, { font: "Standard" }, (err, data) => {
        if (err) {
          reject(err);
        } else if (data) {
          resolve(data);
        } else {
          reject(new Error("Failed to generate ASCII art"));
        }
      });
    });
  };

  const handleCommand = async () => {
    if (input.trim() === "") return;

    setIsTyping(true);
    const commandInput = input.trim();
    const commandLower = commandInput.toLowerCase();

    // Yazma efekti için 500ms gecikme
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (commandLower === "clear") {
      setOutput([]);
    } else if (commandLower === "theme dark") {
      setTheme("dark");
    } else if (commandLower === "theme light") {
      setTheme("light");
    } else if (commandLower.startsWith("figlet ")) {
      const textToConvert = commandInput.slice(7);
      try {
        const asciiArt = await generateFigletText(textToConvert);
        setOutput((prev) => [...prev, `> ${commandInput}`, asciiArt]);
      } catch {
        setOutput((prev) => [
          ...prev,
          `> ${commandInput}`,
          "Error generating ASCII art.",
        ]);
      }
    } else if (commandLower === "matrix") {
      // Basit matrix efekti: rastgele 0 ve 1'lerden oluşan satırlar
      const matrixLines = 20;
      const lineLength = 60;
      const matrixOutput = Array.from({ length: matrixLines }, () =>
        Array.from({ length: lineLength }, () =>
          Math.random() > 0.5 ? "0" : "1"
        ).join("")
      );
      setOutput((prev) => [...prev, `> ${commandInput}`, ...matrixOutput]);
    } else {
      const response = commands[commandLower];
      if (response) {
        setOutput((prev) => [
          ...prev,
          `> ${commandInput}`,
          ...(Array.isArray(response) ? response : [response]),
        ]);
      } else {
        setOutput((prev) => [
          ...prev,
          `> ${commandInput}`,
          "Error: Unknown command! Try `help`.",
        ]);
      }
    }
    setInput("");
    setIsTyping(false);
  };

  return (
    <section className="w-full">
      <CodeReveal codeLines={codeLines} title="terminal.tsx">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className={`w-full min-h-[70vh] ${
            theme === "dark" ? "bg-[#1a1b26] text-[#a9b1d6]" : "bg-white text-black"
          } font-mono rounded-lg border border-[#414868] shadow-lg overflow-hidden`}
          style={{ maxWidth: "100%" }}
          tabIndex={0}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between p-2 bg-[#24283b] border-b border-[#414868]">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-[#a9b1d6] text-sm">Terminal</div>
            <div className="w-16"></div>
          </div>

          {/* Terminal Content */}
          <div className="p-4 h-full flex flex-col">
            <div className="overflow-auto flex-grow">
              {/* Figlet banner */}
              <pre className="text-[#7aa2f7] whitespace-pre-wrap overflow-x-auto">{banner}</pre>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-[#bb9af7]"
              >
                Terminal Portfolio v1.0
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-[#9ece6a]"
              >
                Melih Can Demir - Full Stack Developer
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-[#7aa2f7]"
              >
                Type 'help' for a list of commands
              </motion.p>
              <br />
              {output.map((line, index) => (
                <p key={index} className="text-sm whitespace-pre-wrap overflow-x-auto">
                  {line}
                </p>
              ))}
              {isTyping && (
                <p>
                  <Typewriter words={["..."]} loop={false} cursor />
                </p>
              )}
            </div>
            <div className="mt-6 flex items-center bg-[#24283b] p-2 rounded-lg">
              <span className="text-[#7aa2f7]">guest@melih:~$</span>{" "}
              <input
                className="flex-grow ml-2 bg-transparent border-none outline-none text-[#a9b1d6] text-sm w-full"
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleCommand();
                }}
                autoFocus={false}
              />
            </div>
          </div>
        </motion.div>
      </CodeReveal>
    </section>
  );
};

export default Terminal;
