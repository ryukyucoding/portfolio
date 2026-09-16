import { useEffect } from 'react';

const MIN_OPACITY = 0.3;
const MAX_OPACITY = 0.8;
const RAMP = 0.5;

/**
 * Deepens the colour wash over the fixed backdrop photo as the page scrolls,
 * by writing one CSS custom property. Reads are rAF-batched; the property
 * only drives a pseudo-element's background, so nothing re-lays-out.
 */
export function useScrollBackdrop(): void {
  useEffect(() => {
    let frame = 0;

    const apply = () => {
      frame = 0;
      const progress = window.scrollY / window.innerHeight;
      const opacity = Math.min(MAX_OPACITY, MIN_OPACITY + progress * RAMP);
      document.documentElement.style.setProperty('--backdrop-opacity', opacity.toFixed(3));
    };

    const onScroll = () => {
      if (frame === 0) frame = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}
