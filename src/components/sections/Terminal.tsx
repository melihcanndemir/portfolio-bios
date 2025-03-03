import { useState, useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import figlet from "figlet";
// Figlet'in Standard fontunu tarayıcıda kullanabilmek için import edip parse ediyoruz
// @ts-expect-error - Figlet importable fonts modülü için eksik tip tanımlaması
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

// Terminal başlangıç yazıları için typewriter bileşeni
const TerminalIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    if (step === 3) {
      // Bir sonraki adıma hemen geç
      onComplete();
    }
  }, [step, onComplete]);

  // Her adımı sadece 50ms bekleyerek hızlandır
  useEffect(() => {
    const timer = setTimeout(() => {
      if (step < 3) {
        setStep(step + 1);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <>
      {step >= 0 && <p className="text-[#bb9af7]">Terminal Portfolio v1.0</p>}
      {step >= 1 && <p className="text-[#9ece6a]">Melih Can Demir - Full Stack Developer</p>}
      {step >= 2 && <p className="text-[#7aa2f7]">Type 'help' for a list of commands</p>}
    </>
  );
};

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [banner, setBanner] = useState("");
  const [introComplete, setIntroComplete] = useState(false);
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
      figlet.text(text, { font: "Standard", width: 80 }, (err, data) => {
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

  // Daha hızlı terminal çıktısı sağlayacak yardımcı fonksiyon
  const addOutputFast = (lines: string[]) => {
    // Tüm satırları doğrudan ekle, animasyon olmadan
    setOutput(prev => [...prev, ...lines]);
    setIsTyping(false);
  };
  
  const handleCommand = async () => {
    if (input.trim() === "") return;

    // İlk önce girdiyi ekle, herhangi bir gecikme olmadan
    setOutput(prev => [...prev, `guest@melih:~$ ${input}`]);
    
    const commandInput = input.trim();
    const commandLower = commandInput.toLowerCase();
    
    // Input alanını hemen temizle
    setInput("");
    setIsTyping(true);

    // Minimal bir gecikme, gerçek zamanlı hissi için
    await new Promise((resolve) => setTimeout(resolve, 10));

    if (commandLower === "clear") {
      setOutput([]);
      setIsTyping(false);
    } else if (commandLower === "theme dark") {
      setTheme("dark");
      addOutputFast(["Theme changed to dark mode"]);
    } else if (commandLower === "theme light") {
      setTheme("light");
      addOutputFast(["Theme changed to light mode"]);
    } else if (commandLower.startsWith("figlet ")) {
      const textToConvert = commandInput.slice(7);
      try {
        const asciiArt = await generateFigletText(textToConvert);
        addOutputFast([asciiArt]);
      } catch {
        addOutputFast(["Error generating ASCII art."]);
      }
    } else if (commandLower === "matrix") {
      // Basit matrix efekti: rastgele 0 ve 1'lerden oluşan satırlar - Satır sayısı azaltıldı
      const matrixLines = 8; // 10'dan 8'e düşürüldü
      const lineLength = 60;
      const matrixOutput = Array.from({ length: matrixLines }, () =>
        Array.from({ length: lineLength }, () =>
          Math.random() > 0.5 ? "0" : "1"
        ).join("")
      );
      addOutputFast([...matrixOutput]);
    } else {
      const response = commands[commandLower];
      if (response) {
        if (Array.isArray(response)) {
          addOutputFast([...response]);
        } else {
          addOutputFast([response]);
        }
      } else {
        addOutputFast([`Command not found: ${commandInput}. Type 'help' for available commands.`]);
      }
    }
    
    // İşlem tamamlandıktan sonra input'a tekrar odaklan
    inputRef.current?.focus();
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
              
              {!introComplete ? (
                <TerminalIntro onComplete={() => setIntroComplete(true)} />
              ) : (
                <>
                  <p className="text-[#bb9af7]">Terminal Portfolio v1.0</p>
                  <p className="text-[#9ece6a]">Melih Can Demir - Full Stack Developer</p>
                  <p className="text-[#7aa2f7]">Type 'help' for a list of commands</p>
                </>
              )}
              
              <br />
              {output.map((line, index) => (
                <p key={index} className="text-sm whitespace-pre-wrap overflow-x-auto">
                  {line}
                </p>
              ))}
              {isTyping && (
                <p>
                  <Typewriter words={["..."]} loop={false} cursor typeSpeed={10} deleteSpeed={5} />
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
