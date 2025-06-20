import React from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useNavigate, useLocation } from "react-router-dom";

/**
 * Navbar is now designed to be visually integrated ("mixed in") with the Hero/intro section.
 * - No fixed or absolute positioning.
 * - No background, shadow, or separation.
 * - Renders as a natural part of the page flow, typically at the top of the Hero section.
 * - Responsive and accessible.
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
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Integrated Navbar: no fixed/absolute, no background, no shadow */}
      <nav
        className="w-full flex items-center justify-between py-4 px-2 md:px-0 max-w-7xl mx-auto"
        style={{
          position: "relative",
          background: "none",
          boxShadow: "none",
          zIndex: 1,
        }}
      >
        <div className="flex-shrink-0">
          <button
            onClick={() => navigate("/")}
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
      </nav>

      {/* Mobile Navigation: overlay menu, not fixed to top/bottom */}
      <div className="md:hidden">
        {/* Slide-in menu for mobile */}
        <div
          className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 ${
            mobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
        <nav
          className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-50/95 via-teal-50/95 to-indigo-50/95 dark:from-slate-900/95 dark:via-teal-900/95 dark:to-indigo-900/95 shadow-t transition-transform duration-300
            ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"}
            flex flex-col
            md:hidden
          `}
          style={{ minHeight: "56px" }}
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
