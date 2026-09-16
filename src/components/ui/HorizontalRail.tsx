import { useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';
import './horizontal-rail.css';

interface HorizontalRailProps {
  readonly children: React.ReactNode;
  readonly label: string;
  readonly className?: string;
  /** Rendered inside the scrolling row, behind the children. */
  readonly underlay?: React.ReactNode;
}

const SCROLL_STEP_RATIO = 0.8;

/**
 * Full-bleed horizontal scroller with faded edges and arrow controls.
 * Native scrolling stays intact (trackpad, touch, keyboard); the arrows are
 * an affordance on top of it rather than a replacement for it.
 */
export function HorizontalRail({ children, label, className, underlay }: HorizontalRailProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncEdges = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(el.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    syncEdges();
    el.addEventListener('scroll', syncEdges, { passive: true });
    window.addEventListener('resize', syncEdges);
    return () => {
      el.removeEventListener('scroll', syncEdges);
      window.removeEventListener('resize', syncEdges);
    };
  }, [syncEdges]);

  const nudge = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * SCROLL_STEP_RATIO, behavior: 'smooth' });
  };

  return (
    <div className={`hrail ${className ?? ''}`.trim()}>
      <div
        className="hrail-scroller rail-scroll"
        ref={scrollerRef}
        role="group"
        aria-label={label}
        tabIndex={0}
      >
        {underlay}
        <div className="hrail-row">{children}</div>
      </div>

      <button
        type="button"
        className="hrail-arrow hrail-arrow-prev"
        onClick={() => nudge(-1)}
        disabled={atStart}
        aria-label={`Scroll ${label} left`}
      >
        <Icon name="chevronLeft" size={18} />
      </button>
      <button
        type="button"
        className="hrail-arrow hrail-arrow-next"
        onClick={() => nudge(1)}
        disabled={atEnd}
        aria-label={`Scroll ${label} right`}
      >
        <Icon name="chevronRight" size={18} />
      </button>
    </div>
  );
}
