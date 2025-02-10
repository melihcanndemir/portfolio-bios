import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// Define a proper interface for SyntaxHighlighter props.
interface SyntaxHighlighterProps {
  language: string;
  style: object;
  showLineNumbers?: boolean;
  children?: React.ReactNode;
  customStyle?: React.CSSProperties;
}

// Cast SyntaxHighlighter to React component type with defined props.
const RHComponent =
  SyntaxHighlighter as unknown as React.ComponentType<SyntaxHighlighterProps>;

const CodeReveal = ({
  codeLines,
  children,
  title = "code_reveal.tsx",
}: {
  codeLines: string[];
  children: React.ReactNode;
  title?: string;
}) => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [codeComplete, setCodeComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedCode(codeLines.slice(0, index + 1).join("\n"));
      index++;
      if (index > codeLines.length) {
        clearInterval(interval);
        setTimeout(() => setCodeComplete(true), 500); // Kod tamamlandıktan sonra küçük gecikme
      }
    }, 200);

    return () => clearInterval(interval);
  }, [codeLines]); // added codeLines as dependency

  const customStyle = {
    background: '#1a1b26',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    border: '1px solid #414868',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full p-2 bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7] rounded-lg shadow-lg"
      style={{ maxWidth: "100%" }}
    >
      <div className="w-full bg-[#1a1b26] rounded-lg p-4">
        <div className="flex items-center mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="ml-4 text-[#a9b1d6] font-mono text-sm">
            {title}
          </div>
        </div>

        {!codeComplete ? (
          <RHComponent 
            language="typescript" 
            style={vscDarkPlus} 
            showLineNumbers
            customStyle={{
              ...customStyle,
              width: '100%',
              maxWidth: '100%'
            }}
          >
            {displayedCode}
          </RHComponent>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full bg-[#1a1b26] rounded-lg"
          >
            {children}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default CodeReveal;
