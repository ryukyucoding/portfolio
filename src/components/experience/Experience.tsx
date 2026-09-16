import { useRef, useState } from 'react';
import { EXPERIENCE } from '../../data/experience';
import { useReveal } from '../../hooks/useReveal';
import { SectionHeading } from '../ui/SectionHeading';
import { ExperiencePanel } from './ExperiencePanel';
import './experience.css';

export function Experience() {
  const ref = useReveal<HTMLElement>();
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  /** Roving focus per the WAI-ARIA tabs pattern. */
  const onKeyDown = (event: React.KeyboardEvent) => {
    const last = EXPERIENCE.length - 1;
    const moves: Record<string, number> = {
      ArrowRight: activeIndex === last ? 0 : activeIndex + 1,
      ArrowDown: activeIndex === last ? 0 : activeIndex + 1,
      ArrowLeft: activeIndex === 0 ? last : activeIndex - 1,
      ArrowUp: activeIndex === 0 ? last : activeIndex - 1,
      Home: 0,
      End: last,
    };

    const next = moves[event.key];
    if (next === undefined) return;

    event.preventDefault();
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="section reveal" id="experience" aria-labelledby="experience-heading" ref={ref}>
      <div className="section-content">
        <SectionHeading number="02" id="experience-heading">
          Where I&apos;ve worked
        </SectionHeading>

        <div className="xp">
          {/* Stacked so switching tabs cross-fades instead of flashing a reload. */}
          <div className="xp-photo" aria-hidden="true">
            {EXPERIENCE.map((entry, index) => (
              <div
                key={entry.id}
                className={index === activeIndex ? 'xp-photo-slide is-active' : 'xp-photo-slide'}
              >
                <span className="xp-photo-wash" style={{ backgroundImage: `url("${entry.photo}")` }} />
                <img
                  src={entry.photo}
                  alt={entry.photoAlt}
                  className="xp-photo-img"
                  width={1000}
                  height={750}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

          <div className="xp-tabs" role="tablist" aria-label="Employers" onKeyDown={onKeyDown}>
            {EXPERIENCE.map((entry, index) => (
              <button
                type="button"
                key={entry.id}
                id={`xp-tab-${entry.id}`}
                className={index === activeIndex ? 'xp-tab is-active' : 'xp-tab'}
                role="tab"
                aria-selected={index === activeIndex}
                aria-controls={`xp-panel-${entry.id}`}
                tabIndex={index === activeIndex ? 0 : -1}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                onClick={() => setActiveIndex(index)}
              >
                {entry.org}
              </button>
            ))}
          </div>

          {EXPERIENCE.map((entry, index) => (
            <ExperiencePanel key={entry.id} entry={entry} hidden={index !== activeIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}
