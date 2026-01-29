// import ThemeToggle from './ThemeToggle';
import { useState, type MouseEvent } from 'react';
import { siteData } from '../data/siteData';

const navigationItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' }
];

export default function Header() {
  const { profile } = siteData;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove the #
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo/Name */}
        <a 
          href="#" 
          className="text-xl font-bold transition-colors  text-white hover:text-brand-soft"
          onClick={(e) => handleNavClick(e, '#')}
        >
          Rudra Pratap 
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-6 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium  transition-colors text-gray-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Theme Toggle */}
        <div className="flex items-center space-x-4">
          {/* <ThemeToggle /> */}
          
          {/* Mobile Menu Button (you can implement mobile menu later) */}
          <button 
            className="md:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <nav className="border-t border-gray-800 bg-gray-950/95 px-4 py-4">
          <div className="flex flex-col space-y-3">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}