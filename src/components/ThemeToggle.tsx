import React, { useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

// Utility to get the theme background color for the animation
function getThemeRevealBackground(isDarkMode: boolean) {
  // Use a semi-transparent color for the reveal so the content is visible underneath
  return isDarkMode
    ? 'radial-gradient(circle, rgba(248,250,252,0.7) 0%, rgba(224,242,254,0.6) 100%)'
    : 'radial-gradient(circle, rgba(15,23,42,0.7) 0%, rgba(19,78,74,0.6) 100%)';
}

export default function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [animating, setAnimating] = useState(false);
  const [revealStyle, setRevealStyle] = useState({});
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Animation duration in ms
  const DURATION = 700;

  const handleToggle = () => {
    if (animating) return;
    // Get button center position
    const button = buttonRef.current;
    if (!button) {
      toggleDarkMode();
      return;
    }
    const rect = button.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    // Get viewport size
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Calculate max radius needed to cover the screen from the button center
    const dx = Math.max(cx, vw - cx);
    const dy = Math.max(cy, vh - cy);
    const radius = Math.sqrt(dx * dx + dy * dy);

    // Set up the reveal circle style with transparency and blur for interactivity
    setRevealStyle({
      position: 'fixed',
      left: cx,
      top: cy,
      width: 0,
      height: 0,
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: 9999,
      transform: 'translate(-50%, -50%)',
      background: getThemeRevealBackground(isDarkMode),
      backdropFilter: 'blur(8px) saturate(1.2)',
      WebkitBackdropFilter: 'blur(8px) saturate(1.2)',
      transition: `width ${DURATION}ms cubic-bezier(.4,0,.2,1), height ${DURATION}ms cubic-bezier(.4,0,.2,1), background ${DURATION}ms`
    });

    setAnimating(true);

    // Animate the circle expanding
    setTimeout(() => {
      setRevealStyle((prev: any) => ({
        ...prev,
        width: radius * 2,
        height: radius * 2,
      }));
    }, 10);

    // After animation, toggle theme and remove circle
    setTimeout(() => {
      toggleDarkMode();
      setAnimating(false);
      setRevealStyle({});
    }, DURATION + 50);
  };

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleToggle}
        className="p-2 rounded-full hover:bg-teal-100 dark:hover:bg-slate-800 transition-colors duration-300 relative z-10"
        aria-label="Toggle dark mode"
        disabled={animating}
        style={{ pointerEvents: animating ? 'none' : undefined }}
      >
        <span className="block transition-transform duration-300">
          {isDarkMode ? (
            <Sun className="text-yellow-400" size={22} />
          ) : (
            <Moon className="text-slate-700" size={22} />
          )}
        </span>
      </button>
      {animating && (
        <div
          style={revealStyle as React.CSSProperties}
          aria-hidden="true"
        />
      )}
    </>
  );
}
