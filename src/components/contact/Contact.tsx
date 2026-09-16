import { CONTACT, PROFILE } from '../../data/profile';
import { useReveal } from '../../hooks/useReveal';
import { Icon } from '../ui/Icon';
import { SectionHeading } from '../ui/SectionHeading';
import './contact.css';

export function Contact() {
  const ref = useReveal<HTMLElement>();

  return (
    <section
      className="section section-contact reveal"
      id="contact"
      aria-labelledby="contact-heading"
      ref={ref}
    >
      <div className="section-content">
        <SectionHeading number="06" id="contact-heading">
          Let&apos;s connect!
        </SectionHeading>

        <div className="contact-body">
          <h3 className="contact-title">{CONTACT.heading}</h3>
          <p className="contact-text">{CONTACT.body}</p>

          <div className="contact-actions">
            <a className="ghost-btn contact-cta" href={`mailto:${PROFILE.email}`}>
              {CONTACT.ctaLabel}
            </a>
            <a
              className="contact-secondary"
              href={PROFILE.resumeHref}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="filePdf" size={16} />
              <span>View résumé (PDF)</span>
            </a>
          </div>

          <p className="contact-detail">
            <Icon name="mail" size={15} />
            <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            <span aria-hidden="true">·</span>
            <span>{PROFILE.location}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
