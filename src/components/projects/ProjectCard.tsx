import type { Project } from '../../data/projects';
import { Icon } from '../ui/Icon';

/** Deterministic hue per project, so generated covers stay stable across builds. */
function coverHue(id: string): number {
  let hash = 0;
  for (const char of id) hash = (hash * 31 + char.charCodeAt(0)) % 360;
  return hash;
}

function initials(title: string): string {
  // A CJK title reads better as its own first characters than as a Latin initial.
  const han = title.match(/[\u4e00-\u9fff]/g);
  if (han) return han.slice(0, 2).join('');

  const words = title
    .replace(/[^A-Za-z ]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
  if (words.length >= 2) return words.slice(0, 2).map((word) => word[0].toUpperCase()).join('');
  return (words[0] ?? '?').slice(0, 2).toUpperCase();
}

export function ProjectCard({ project }: { readonly project: Project }) {
  return (
    <article className="project-card">
      <header className="project-card-head">
        <h3 className="project-card-title">{project.title}</h3>
        <span className="project-card-period">{project.period}</span>
      </header>
      <p className="project-card-stack">{project.stack}</p>

      <div className="project-card-links">
        {project.links.map((link) =>
          link.href ? (
            <a
              className="project-chip"
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name={link.icon} size={14} />
              <span>{link.label}</span>
            </a>
          ) : (
            <span className="project-chip project-chip-static" key={link.label}>
              <Icon name={link.icon} size={14} />
              <span>{link.label}</span>
            </span>
          ),
        )}
      </div>

      <div className="project-card-visual">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            width={1100}
            height={620}
            loading="lazy"
            decoding="async"
            style={
              {
                objectFit: project.imageFit,
                objectPosition: project.imagePosition,
              } as React.CSSProperties
            }
          />
        ) : (
          <div
            className="project-cover"
            style={{ '--cover-hue': coverHue(project.id) } as React.CSSProperties}
            aria-hidden="true"
          >
            <span>{initials(project.title)}</span>
          </div>
        )}
      </div>

      <p className="project-card-summary">{project.summary}</p>
    </article>
  );
}
