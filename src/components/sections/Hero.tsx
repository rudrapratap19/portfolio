import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import ResumePDF from '../../assets/Rudra.pdf';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-950 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/4 translate-y-1/4 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),transparent_60%)]" />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-full max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-blue-200">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Open to opportunities
          </div>

          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Rudra Pratap Singh
          </h1>
          <h2 className="mt-4 text-xl font-semibold text-blue-200 sm:text-2xl">
            App Developer & Software Developer
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Building modern web and mobile experiences with clean design, strong architecture, and user-first thinking.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={ResumePDF}
              download="Rudra_CV.pdf"
              className="flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700"
            >
              Download CV <HiDownload />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3 text-white transition-all hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">400+ DSA problems</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">4+ Projects built</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Leadership roles</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/rudrapratap19"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-300 transition-colors hover:text-white"
            >
              <FaGithub size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rudra-pratap-singh-677149314/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-300 transition-colors hover:text-white"
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/rpsinghiiitr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-300 transition-colors hover:text-white"
            >
              LeetCode
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/rpsinghlfb9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-300 transition-colors hover:text-white"
            >
              GeeksforGeeks
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white">
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
