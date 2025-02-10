import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-center md:justify-start space-x-6">
          <a
            href="https://github.com/melihcanndemir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/melihcandemir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://instagram.com/melihcandemir"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaInstagram size={28} />
          </a>
        </div>
        <div className="text-center md:text-right text-sm text-gray-400">
          © 2025 Melih Can Demir. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
