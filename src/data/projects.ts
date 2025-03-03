// Proje veri tipi tanımı
export interface ProjectProgress {
  completed: string[];
  inProgress: string[];
  planned: string[];
}

export interface Project {
  title: string;
  description: string;
  liveLink?: string;
  githubLink?: string;
  playStoreLink?: string;
  type: 'web' | 'mobile' | 'desktop' | 'iot' | 'ai';
  status?: 'development' | 'private';
  features: string[];
  aiEnhanced: boolean;
  popular?: boolean;
  progress?: ProjectProgress;
}

// Projeler listesi
export const projects: Project[] = [
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