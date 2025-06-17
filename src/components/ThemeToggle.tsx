import React, { useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

// No overlay, just a "background" circle effect behind the content
function getThemeRevealBackground(isDarkMode: boolean) {
  // Use a subtle, non-dimming, non-blurring gradient for the reveal
  return isDarkMode
    ? 'radial-gradient(circle, #f8fafc 0%, #e0f2fe 100%)'
    : 'radial-gradient(circle, #0f172a 0%, #134e4a 100%)';
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

    // Set up the reveal circle style: no blur, no opacity, pointerEvents none, zIndex -1 (behind content)
    setRevealStyle({
      position: 'fixed',
      left: cx,
      top: cy,
      width: 0,
      height: 0,
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: -1, // BEHIND the content
      transform: 'translate(-50%, -50%)',
      background: getThemeRevealBackground(isDarkMode),
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
