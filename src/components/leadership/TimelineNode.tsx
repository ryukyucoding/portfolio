import type { TimelineEntry } from '../../data/leadership';
import { useReveal } from '../../hooks/useReveal';
import { Icon } from '../ui/Icon';
import { Gallery } from './Gallery';

/**
 * One milestone. Which column it lands in is decided by useTimelineLayout;
 * the caret and reveal direction follow from :nth-of-type in CSS, so the two
 * always agree as long as both alternate on the same parity.
 */
export function TimelineNode({ entry }: { readonly entry: TimelineEntry }) {
  const ref = useReveal<HTMLLIElement>(0.15);

  return (
    <li className="timeline-item reveal" ref={ref}>
      <span className="timeline-marker" aria-hidden="true">
        <Icon name={entry.icon} size={22} />
      </span>

      <article className="timeline-card">
        <span className="timeline-card-period">{entry.period}</span>
        <h3 className="timeline-card-title">{entry.title}</h3>
        <p className="timeline-card-org">{entry.org}</p>
        <p className="timeline-card-body">{entry.description}</p>

        {entry.links && (
          <div className="timeline-card-links">
            {entry.links.map((link) => (
              <a
                key={link.label}
                className="timeline-card-link"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name={link.icon} size={14} />
                {link.label}
              </a>
            ))}
          </div>
        )}

        {entry.gallery && <Gallery images={entry.gallery} label={entry.title} />}
      </article>
    </li>
  );
}
