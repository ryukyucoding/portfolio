import type { ExperienceEntry } from '../../data/experience';
import { Icon } from '../ui/Icon';

interface ExperiencePanelProps {
  readonly entry: ExperienceEntry;
  readonly hidden: boolean;
}

export function ExperiencePanel({ entry, hidden }: ExperiencePanelProps) {
  return (
    <div
      className="xp-panel"
      id={`xp-panel-${entry.id}`}
      role="tabpanel"
      aria-labelledby={`xp-tab-${entry.id}`}
      hidden={hidden}
      tabIndex={0}
    >
      <h3 className="xp-role">
        {entry.role}{' '}
        <span className="xp-org">
          @{' '}
          {entry.orgHref ? (
            <a href={entry.orgHref} target="_blank" rel="noreferrer">
              {entry.orgFull}
            </a>
          ) : (
            entry.orgFull
          )}
        </span>
      </h3>

      <p className="xp-meta">
        <span>{entry.period}</span>
        <span aria-hidden="true">·</span>
        <span>{entry.location}</span>
      </p>

      <ul className="xp-highlights">
        {entry.highlights.map((highlight) => (
          <li key={highlight.slice(0, 32)}>{highlight}</li>
        ))}
      </ul>

      {entry.links && (
        <div className="xp-links">
          {entry.links.map((link) => (
            <a
              className="xp-link"
              key={link.label}
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

      <ul className="xp-stack" aria-label="Technologies used">
        {entry.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}
