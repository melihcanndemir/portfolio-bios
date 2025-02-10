import { useEffect, useState, useRef } from 'react';

// BIOS screen component that simulates a boot sequence
const BiosScreen = ({ onBootComplete }: { onBootComplete: () => void }) => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Konami code tracking
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setShowEasterEgg(true);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, []);

  // Auto scroll effect
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [currentText, currentMessageIndex]);

  const bootMessages = [
    `
    ███╗   ███╗███████╗██╗     ██╗██╗  ██╗██████╗ ███████╗██╗   ██╗
    ████╗ ████║██╔════╝██║     ██║██║  ██║██╔══██╗██╔════╝██║   ██║
    ██╔████╔██║█████╗  ██║     ██║███████║██║  ██║█████╗  ██║   ██║
    ██║╚██╔╝██║██╔══╝  ██║     ██║██╔══██║██║  ██║██╔══╝  ╚██╗ ██╔╝
    ██║ ╚═╝ ██║███████╗███████╗██║██║  ██║██████╔╝███████╗ ╚████╔╝ 
    ╚═╝     ╚═╝╚══════╝╚══════╝╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝  ╚═══╝  
    `,
    'MelihDev BIOS v1.0.0 - Powered by Coffee & Dreams',
    'Copyright (C) 2025, Melih Portfolio Systems',
    '',
    '🧠 CPU: Brain.js v3.0 @ Maximum Capacity',
    '💭 RAM: Creative Memory Installed - 128GB (Expandable with Coffee)',
    '💾 DISK: Infinite Knowledge Storage Device',
    '🎮 GPU: RTX 4090 Gaming Edition (For "research" purposes)',
    '',
    '[ System Configuration ]',
    'Primary Language: JavaScript/TypeScript',
    'Secondary Languages: Python, Java, C#',
    'Operating System: CoffeeOS v4.2.0',
    '',
    '[ Developer Profile Loading Sequence ]',
    'Initializing Developer Profile...',
    'Loading Skills Module...',
    'Checking Project Repository...',
    'Scanning Code Quality...',
    '',
    '[ Skill Validation ]',
    'Validating React Knowledge: OK',
    'Validating TypeScript Knowledge: OK',
    'Validating Frontend Skills: OK',
    'Validating Problem Solving: EXCEPTIONAL',
    'Validating Creativity: OUTSTANDING',
    '',
    '[ Notable Achievements ]',
    '✨ Successfully debugged a production issue while sleeping',
    '🏆 Survived 100+ Stack Overflow tabs open simultaneously',
    '🚀 Completed projects before deadlines (sometimes)',
    '☕ Achieved perfect coffee-to-code ratio',
    '',
    '[ Personal Interests ]',
    '🎮 Gaming Enthusiast',
    '🎵 Music Lover',
    '📚 Continuous Learner',
    '🌟 Tech Explorer',
    '',
    showEasterEgg ? '[🎉 Easter Egg Found! You discovered the Konami Code! 🎮]' : '',
    'Memory Test: 100%',
  ].filter(Boolean);

  // Typing effect implementation
  useEffect(() => {
    if (currentMessageIndex >= bootMessages.length) {
      setTimeout(onBootComplete, 1000);
      return;
    }

    const currentMessage = bootMessages[currentMessageIndex];
    if (!isTyping) {
      setCurrentMessageIndex(prev => prev + 1);
      setIsTyping(true);
      setCurrentText('');
      return;
    }

    if (currentText.length < currentMessage.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentMessage.substring(0, currentText.length + 1));
      }, currentMessageIndex === 0 ? 1 : 5); // Daha hızlı yazma: 20ms -> 5ms

      return () => clearTimeout(timeout);
    } else {
      const delay = currentMessageIndex === 0 ? 500 : // Logo için daha kısa bekleme: 1000ms -> 500ms
                   currentMessage.includes('Easter Egg') ? 800 : // Easter egg için daha kısa: 1500ms -> 800ms
                   currentMessage.startsWith('[') ? 400 : // Başlıklar için daha kısa: 800ms -> 400ms
                   150; // Normal mesajlar için daha kısa: 300ms -> 150ms

      const timeout = setTimeout(() => {
        setIsTyping(false);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentText, currentMessageIndex, isTyping, bootMessages, onBootComplete]);

  const getMessageStyle = (index: number, message: string) => {
    if (index === 0) return 'text-cyan-300 font-bold'; // ASCII art
    if (index === 1) return 'text-cyan-300 font-bold text-lg'; // BIOS başlığı
    if (index === 2) return 'text-gray-400 text-sm'; // Copyright metni
    if (message.includes('CPU:') || message.includes('RAM:') || message.includes('DISK:') || message.includes('GPU:')) 
      return 'text-blue-300';
    if (message.includes('OK')) return 'text-green-400'; // OK durumları
    if (message.includes('EXCEPTIONAL') || message.includes('OUTSTANDING')) 
      return 'text-purple-400 font-bold';
    if (message.includes('Easter Egg')) 
      return 'text-yellow-400 font-bold';
    if (message.startsWith('[') && message.endsWith(']')) 
      return 'text-pink-300 font-bold';
    if (message.includes('Memory Test')) return 'text-yellow-300';
    if (message.startsWith('✨') || message.startsWith('🏆') || message.startsWith('🚀') || message.startsWith('☕'))
      return 'text-green-300';
    if (message.startsWith('🎮') || message.startsWith('🎵') || message.startsWith('📚') || message.startsWith('🌟'))
      return 'text-indigo-300';
    return 'text-gray-100';
  };

  return (
    <div ref={scrollRef} className="fixed inset-0 bg-black font-mono p-8 flex flex-col overflow-auto">
      <div className="max-w-4xl mx-auto w-full">
        {bootMessages.slice(0, currentMessageIndex).map((message, index) => (
          <div key={index} className={`mb-2 ${getMessageStyle(index, message)} ${index === 0 ? 'whitespace-pre' : ''}`}>
            {message}
          </div>
        ))}
        {currentMessageIndex < bootMessages.length && (
          <div 
            className={`mb-2 ${getMessageStyle(currentMessageIndex, bootMessages[currentMessageIndex])} ${currentMessageIndex === 0 ? 'whitespace-pre' : ''}`}
          >
            {currentText}
            <span className="animate-pulse">_</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BiosScreen; 