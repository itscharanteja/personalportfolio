import React from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavItemProps {
  href: string;
  title: string;
  onClick: () => void;
}

const NavItem = ({ href, title, onClick }: NavItemProps) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 text-sm font-medium transition-colors duration-300"
  >
    {title}
  </a>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Charan's Portfolio
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavItem href="#home" title="Home" onClick={() => scrollToSection('home')} />
            <NavItem href="#experience" title="Experience" onClick={() => scrollToSection('experience')} />
            <NavItem href="#projects" title="Projects" onClick={() => scrollToSection('projects')} />
            <NavItem href="#education" title="Education" onClick={() => scrollToSection('education')} />
            <NavItem href="#contact" title="Contact" onClick={() => scrollToSection('contact')} />
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
            <NavItem href="#home" title="Home" onClick={() => scrollToSection('home')} />
            <NavItem href="#experience" title="Experience" onClick={() => scrollToSection('experience')} />
            <NavItem href="#projects" title="Projects" onClick={() => scrollToSection('projects')} />
            <NavItem href="#education" title="Education" onClick={() => scrollToSection('education')} />
            <NavItem href="#contact" title="Contact" onClick={() => scrollToSection('contact')} />
          </div>
        </div>
      )}
    </nav>
  );
}