import { useEffect, useState } from 'react';

/**
 * Tracks which section id is currently under the viewport's reading line.
 * Uses IntersectionObserver rather than a scroll handler so the main thread
 * stays free during fast scrolls.
 */
export function useScrollSpy(ids: readonly string[], topOffset = 90): string {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        }

        let best = '';
        let bestRatio = -1;
        for (const [id, ratio] of visible) {
          if (ratio > bestRatio) {
            best = id;
            bestRatio = ratio;
          }
        }
        if (best) setActiveId(best);
      },
      {
        rootMargin: `-${topOffset}px 0px -45% 0px`,
        threshold: [0, 0.15, 0.4, 0.75, 1],
      },
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, topOffset]);

  return activeId;
}
