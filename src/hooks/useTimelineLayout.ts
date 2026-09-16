import { useCallback, useEffect, useRef } from 'react';

/** Implicit grid row height. Smaller = finer packing, more rows to span. */
const ROW_UNIT = 4;
/** Breathing room below a card before the next one in the same column. */
const ITEM_GAP = 28;
/** Each milestone starts at least this far below the previous one, so the
 *  timeline still reads in order top-to-bottom (newest first) rather than
 *  letting a short card jump above the entry that precedes it. */
const MIN_STAGGER = 72;
/** Below this width the timeline is a single column and CSS handles it. */
const BREAKPOINT = 860;

const toRows = (px: number) => Math.ceil(px / ROW_UNIT);

/**
 * Packs an alternating timeline so each column flows independently — a tall
 * card on the left no longer forces an equally tall gap on the right.
 *
 * Items keep their DOM order (newest first, correct for screen readers and
 * tab order); only their grid placement is computed here.
 */
export function useTimelineLayout<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  const layout = useCallback(() => {
    const container = ref.current;
    if (!container) return;

    const items = [...container.querySelectorAll<HTMLElement>('.timeline-item')];
    if (items.length === 0) return;

    if (window.innerWidth <= BREAKPOINT) {
      container.style.removeProperty('grid-auto-rows');
      for (const item of items) {
        item.style.removeProperty('grid-column');
        item.style.removeProperty('grid-row');
      }
      return;
    }

    container.style.gridAutoRows = `${ROW_UNIT}px`;

    const columnBottom = [0, 0];
    let previousStart = 0;

    items.forEach((item, index) => {
      const column = index % 2;
      const card = item.querySelector<HTMLElement>('.timeline-card');
      const span = toRows((card?.offsetHeight ?? item.offsetHeight) + ITEM_GAP);
      const stagger = index === 0 ? 0 : toRows(MIN_STAGGER);
      const start = Math.max(columnBottom[column], previousStart + stagger);

      const gridColumn = column === 0 ? '1' : '3';
      const gridRow = `${start + 1} / span ${span}`;
      // Only write when it actually changes — assigning styles inside a
      // ResizeObserver callback would otherwise keep retriggering it.
      if (item.style.gridColumn !== gridColumn) item.style.gridColumn = gridColumn;
      if (item.style.gridRow !== gridRow) item.style.gridRow = gridRow;

      columnBottom[column] = start + span;
      previousStart = start;
    });
  }, []);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    layout();

    // Card heights change with viewport width, font loading and image decode.
    const observer = new ResizeObserver(() => requestAnimationFrame(layout));
    container.querySelectorAll('.timeline-card').forEach((card) => observer.observe(card));

    window.addEventListener('resize', layout);
    document.fonts?.ready.then(layout).catch(() => {});

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', layout);
    };
  }, [layout]);

  return ref;
}
