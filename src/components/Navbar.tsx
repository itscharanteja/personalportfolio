import React from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavItemProps {
  href: string;
  title: string;
  onClick: () => void;
}

const NavItem = ({ href, title, onClick }: NavItemProps) => (
  <button
    onClick={onClick}
    className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 px-4 py-2 text-sm font-medium transition-colors duration-300"
  >
    {title}
  </button>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-slate-50/80 via-teal-50/80 to-indigo-50/80 dark:from-slate-900/80 dark:via-teal-900/80 dark:to-indigo-900/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button 
              onClick={() => navigate('/')}
              className="text-xl font-bold bg-gradient-to-r from-teal-500 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
            >
              Charan's Portfolio
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavItem href="#home" title="Home" onClick={() => handleNavigation('home')} />
            <NavItem href="#experience" title="Experience" onClick={() => handleNavigation('experience')} />
            <NavItem href="#projects" title="Projects" onClick={() => handleNavigation('projects')} />
            <NavItem href="#education" title="Education" onClick={() => handleNavigation('education')} />
            <NavItem href="#contact" title="Contact" onClick={() => handleNavigation('contact')} />
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 dark:text-slate-200 hover:text-teal-700 dark:hover:text-teal-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-b from-slate-50 via-teal-50 to-indigo-50 dark:from-slate-900 dark:via-teal-900 dark:to-indigo-900">
            <NavItem href="#home" title="Home" onClick={() => handleNavigation('home')} />
            <NavItem href="#experience" title="Experience" onClick={() => handleNavigation('experience')} />
            <NavItem href="#projects" title="Projects" onClick={() => handleNavigation('projects')} />
            <NavItem href="#education" title="Education" onClick={() => handleNavigation('education')} />
            <NavItem href="#contact" title="Contact" onClick={() => handleNavigation('contact')} />
          </div>
        </div>
      )}
    </nav>
  );
}
