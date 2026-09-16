import { NAV_ITEMS, PROFILE } from '../../data/profile';
import './nav.css';

interface NavProps {
  readonly activeId: string;
}

export function Nav({ activeId }: NavProps) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-logo" href="#hero" aria-label="Back to top">
          {/* Decorative: the link already carries its own label. */}
          <img src={PROFILE.avatar} alt="" width={50} height={50} />
        </a>

        <nav aria-label="Section navigation">
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  className="nav-link"
                  href={`#${item.id}`}
                  aria-current={activeId === item.id ? 'true' : undefined}
                >
                  <span className="nav-link-number">{item.number}.</span> {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="resume-btn" href={PROFILE.resumeHref} target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </header>
  );
}
