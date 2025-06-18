import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Scroll progress bar logic
function setScrollProgressBar() {
  const bar = document.getElementById('scroll-progress-bar');
  if (!bar) return;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  bar.style.width = `${progress}%`;
}

function ScrollProgressBar() {
  useEffect(() => {
    const handleScroll = () => setScrollProgressBar();
    window.addEventListener('scroll', handleScroll, { passive: true });
    setScrollProgressBar();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div id="scroll-progress-bar" />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrollProgressBar />
    <App />
  </StrictMode>
);
