import React from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Responsive, mobile-friendly, and natural-feeling Navbar.
 * - Hamburger menu for mobile.
 * - Larger touch targets.
 * - Smooth transitions.
 * - Sticky top for desktop, sticky bottom for mobile.
 * - Accessible.
 */

interface NavItemProps {
  href: string;
  title: string;
  onClick: () => void;
}

const navItems = [
  { href: "#home", title: "Home", id: "home" },
  { href: "#experience", title: "Experience", id: "experience" },
  { href: "#projects", title: "Projects", id: "projects" },
  { href: "#education", title: "Education", id: "education" },
  { href: "#contact", title: "Contact", id: "contact" },
];

const NavItem = ({ href, title, onClick }: NavItemProps) => (
  <button
    onClick={onClick}
    className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 px-4 py-2 text-base font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded"
    tabIndex={0}
    aria-label={title}
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

  // Responsive: sticky top for desktop, sticky bottom for mobile
  // Mobile: full-width, bottom bar, larger touch targets, icons+labels
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 shadow-sm bg-gradient-to-r from-slate-50/80 via-teal-50/80 to-indigo-50/80 dark:from-slate-900/80 dark:via-teal-900/80 dark:to-indigo-900/80 backdrop-blur-md
        h-16 flex items-center
        px-2
        transition-all
        md:static
        md:h-16
        md:px-0
        md:block
        "
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div className="max-w-7xl w-full flex items-center justify-between h-16 mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex-shrink-0">
            <button 
              onClick={() => navigate('/')}
              className="text-xl font-bold bg-gradient-to-r from-teal-500 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
              aria-label="Go to home"
            >
              Charan's Portfolio
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavItem
                key={item.title}
                href={item.href}
                title={item.title}
                onClick={() => handleNavigation(item.id)}
              />
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 dark:text-slate-200 hover:text-teal-700 dark:hover:text-teal-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation: sticky bottom bar, full width, large touch targets */}
      <div className="md:hidden">
        {/* Slide-in menu for mobile */}
        <div
          className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
        <nav
          className={`fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-50/95 via-teal-50/95 to-indigo-50/95 dark:from-slate-900/95 dark:via-teal-900/95 dark:to-indigo-900/95 shadow-t transition-transform duration-300
            ${mobileMenuOpen ? 'translate-y-0' : 'translate-y-full'}
            flex flex-col
            md:hidden
          `}
          style={{ minHeight: '56px' }}
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col divide-y divide-slate-200 dark:divide-slate-800">
            {navItems.map((item) => (
              <button
                key={item.title}
                onClick={() => handleNavigation(item.id)}
                className="flex items-center justify-center py-4 text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                tabIndex={mobileMenuOpen ? 0 : -1}
                aria-label={item.title}
              >
                {item.title}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
