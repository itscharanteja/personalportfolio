import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

/**
 * Hook for scroll-triggered animation using framer-motion and react-intersection-observer.
 * Returns [ref, controls] for use in motion components.
 */
export function useScrollAnimation(threshold = 0.2, triggerOnce = true) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce, threshold });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return [ref, controls] as const;
}
