import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen   bg-gray-950  text-gray-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}