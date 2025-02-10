import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SandpackFiles } from "@codesandbox/sandpack-react";
import {
  SandpackProvider,
  SandpackPreview,
  SandpackCodeEditor,
  SandpackLayout,
} from "@codesandbox/sandpack-react";

const files: SandpackFiles = {
  "/App.tsx": `import React, { useState } from "react";
import "./styles.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Develop TypeScript Project", completed: true },
    { id: 3, text: "Update Portfolio", completed: true },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo, completed: false }
      ]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-[#1a1b26] text-white overflow-x-hidden">
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#24283b] rounded-xl shadow-xl p-6 sm:p-8">
          <h1 className="text-4xl font-bold text-[#7aa2f7] mb-8 text-center">Tokyo Night Todo</h1>
          
          <div className="flex gap-3 mb-8">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && addTodo()}
              placeholder="Add new task..."
              className="flex-1 px-4 py-3 rounded-lg bg-[#1a1b26] text-[#a9b1d6] border border-[#414868] focus:outline-none focus:border-[#7aa2f7] focus:ring-1 focus:ring-[#7aa2f7]"
            />
            <button
              onClick={addTodo}
              className="px-6 py-3 bg-[#7aa2f7] hover:bg-[#5d7cd0] text-white rounded-lg transition-colors duration-200 whitespace-nowrap"
            >
              Add
            </button>
          </div>

          <div className="space-y-3">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center justify-between p-4 rounded-lg bg-[#1a1b26] border border-[#414868] group hover:border-[#7aa2f7] transition-all duration-200"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={\`w-6 h-6 rounded-md flex items-center justify-center transition-colors duration-200 flex-shrink-0 \${
                      todo.completed ? "bg-[#9ece6a]" : "bg-[#414868]"
                    }\`}
                  >
                    {todo.completed && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                  <span
                    className={\`text-[#a9b1d6] text-lg truncate \${
                      todo.completed ? "line-through text-[#565f89]" : ""
                    }\`}
                  >
                    {todo.text}
                  </span>
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-[#f7768e] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0 ml-4"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm text-[#565f89] text-center">
            {todos.filter(t => t.completed).length} / {todos.length} tasks completed
          </div>
        </div>
      </div>
    </div>
  );
}`,
  "/styles.css": `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  padding: 0;
  background-color: #1a1b26;
  color: #a9b1d6;
}

/* Sandpack özelleştirmeleri */
.sp-wrapper {
  background-color: #1a1b26 !important;
}

.sp-preview-container {
  background-color: #1a1b26 !important;
}

.sp-layout {
  background-color: #1a1b26 !important;
  border: 1px solid #2f3447 !important;
}

.cm-editor {
  background-color: #1a1b26 !important;
}`
};

const codeLines = [
  `// Tokyo Night Todo List Uygulaması`,
  `const TodoApp = () => {`,
  `  const [todos, setTodos] = useState([`,
  `    { id: 1, text: "React öğren", completed: true },`,
  `    { id: 2, text: "TypeScript projesi geliştir", completed: true },`,
  `  ]);`,
  `  return (`,
  `    <div className="bg-[#1a1b26] text-white">`,
  `      <h1>Tokyo Night Todo</h1>`,
  `      {/* Todo listesi burada */}`,
  `    </div>`,
  `  );`,
  `};`
];

const LiveCodeEditor = () => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [codeComplete, setCodeComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedCode(codeLines.slice(0, index + 1).join("\n"));
      index++;
      if (index > codeLines.length) {
        clearInterval(interval);
        setTimeout(() => setCodeComplete(true), 500);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 1.5 }}
      className="w-full p-2 bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7] overflow-hidden"
    >
      <div className="w-full bg-[#1a1b26] shadow-lg overflow-hidden">
        <div className="px-4 py-2 flex items-center justify-between bg-[#24283b] border-b border-[#414868]">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-white font-bold">
            code.tsx
          </div>
          <div className="w-16"></div>
        </div>

        <AnimatePresence>
          {!codeComplete ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-4 font-mono text-sm text-[#a9b1d6] bg-[#1a1b26] whitespace-pre"
            >
              {displayedCode}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full"
            >
              <SandpackProvider
                template="react-ts"
                theme="dark"
                files={files}
                options={{
                  externalResources: ["https://cdn.tailwindcss.com"],
                  visibleFiles: ["/App.tsx", "/styles.css"],
                }}
              >
                <SandpackLayout className="!bg-[#1a1b26] !border-none !rounded-none">
                  <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                    <SandpackCodeEditor 
                      showLineNumbers
                      showInlineErrors
                      wrapContent
                      closableTabs
                      className="!min-h-[550px] !h-[calc(100vh-120px)] max-h-[1000px] !bg-[#1a1b26]"
                    />
                    <SandpackPreview 
                      className="!min-h-[550px] !h-[calc(100vh-120px)] max-h-[1000px] !bg-[#1a1b26]"
                      showNavigator
                    />
                  </div>
                </SandpackLayout>
              </SandpackProvider>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default LiveCodeEditor;
