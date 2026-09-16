import { PROFILE, SOCIALS } from '../../data/profile';
import { Icon } from '../ui/Icon';
import './rails.css';

/** The two fixed vertical rails flanking the page on desktop. */
export function SideRails() {
  return (
    <>
      <aside className="rail rail-social" aria-label="Social profiles">
        <ul>
          {SOCIALS.map((social) => (
            <li key={social.id}>
              <a
                className="rail-icon"
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <Icon name={social.id} size={20} />
              </a>
            </li>
          ))}
        </ul>
        <div className="rail-line" />
      </aside>

      <aside className="rail rail-email" aria-label="Email">
        <a className="rail-email-link" href={`mailto:${PROFILE.email}`}>
          {PROFILE.email}
        </a>
        <div className="rail-line" />
      </aside>
    </>
  );
}
