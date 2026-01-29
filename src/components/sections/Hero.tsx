import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import ResumePDF from '../../assets/Rudra.pdf';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center bg-gray-900 py-16">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="w-full max-w-2xl text-center">
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-xl font-medium text-blue-500 mb-2">Hello, I'm</h2>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
              Rudra Pratap Singh
            </h1>
            <h2 className="text-2xl font-semibold text-gray-300 mb-6">
              App Developer & Software Developer
            </h2>
            <p className="mb-8 text-gray-400 text-lg max-w-lg">
              Passionate about creating beautiful, functional, and user-centered digital experiences. 
              Specialized in building modern web applications with cutting-edge technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={ResumePDF}
                download="Rudra_CV.pdf"
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3 text-white transition-all hover:bg-blue-700"
              >
                Download CV <HiDownload />
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-white/20 px-7 py-3 text-white transition-all hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-4 justify-center">
              <a
                href="https://github.com/rudrapratap19"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rudra-pratap-singh-677149314/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              
            </div>
          </motion.div>
        </div>
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
