import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import CodeReveal from "../common/CodeReveal";

const codeLines = [
  `// Tokyo Night Temalı İletişim Formu`,
  `const Contact = () => {`,
  `  const [isSubmitting, setIsSubmitting] = useState(false);`,
  `  return (`,
  `    <section className="py-20 bg-[#1a1b26]">`,
  `      <h2 className="text-4xl font-bold text-[#7aa2f7]">`,
  `        Get in Touch`,
  `      </h2>`,
  `      <form className="max-w-4xl mx-auto space-y-6">`,
  `        <input type="text" placeholder="Your name" />`,
  `        <input type="email" placeholder="Your email" />`,
  `        <textarea placeholder="Your message" />`,
  `        <button type="submit">Send Message</button>`,
  `      </form>`,
  `    </section>`,
  `  );`,
  `};`
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"" | "success" | "error">("");

  return (
    <CodeReveal codeLines={codeLines} title="contact.tsx">
      <section className="py-20 px-6 bg-gradient-to-br from-[#13141f] via-[#1a1b2e] to-[#1f1b2c] text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-[#7aa2f7] mb-8">
            Get in Touch
          </h2>
          
          <p className="text-center text-[#a9b1d6] mb-12">
            Feel free to reach out for projects, collaborations, or any opportunities.
          </p>

          <form
            action="https://formspree.io/f/xnnjzyaz"
            method="POST"
            className="space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);
              try {
                const form = e.target as HTMLFormElement;
                const response = await fetch(form.action, {
                  method: 'POST',
                  body: new FormData(form),
                  headers: {
                    Accept: 'application/json',
                  },
                });
                
                if (response.ok) {
                  setSubmitStatus("success");
                  form.reset();
                } else {
                  setSubmitStatus("error");
                }
              } catch {
                setSubmitStatus("error");
              }
              setIsSubmitting(false);
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-[#a9b1d6] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#24283b] text-[#a9b1d6] border border-[#414868] focus:outline-none focus:border-[#7aa2f7] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#a9b1d6] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-[#24283b] text-[#a9b1d6] border border-[#414868] focus:outline-none focus:border-[#7aa2f7] transition-colors"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-[#a9b1d6] mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 rounded-lg bg-[#24283b] text-[#a9b1d6] border border-[#414868] focus:outline-none focus:border-[#7aa2f7] transition-colors"
                placeholder="Subject of your message"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[#a9b1d6] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-2 rounded-lg bg-[#24283b] text-[#a9b1d6] border border-[#414868] focus:outline-none focus:border-[#7aa2f7] transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <div className="flex justify-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-lg flex items-center space-x-2 ${
                  isSubmitting
                    ? "bg-[#414868] cursor-not-allowed"
                    : "bg-[#7aa2f7] hover:bg-[#5d7cd0]"
                } transition-colors`}
              >
                <FaPaperPlane className={isSubmitting ? "animate-ping" : ""} />
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </motion.button>
            </div>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-[#9ece6a]"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-[#f7768e]"
              >
                An error occurred. Please try again later.
              </motion.div>
            )}
          </form>
        </motion.div>
      </section>
    </CodeReveal>
  );
};

export default Contact;
