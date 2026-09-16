import { ABOUT, EDUCATION, PROFILE } from '../../data/profile';
import { useReveal } from '../../hooks/useReveal';
import { RichText } from '../ui/RichText';
import { SectionHeading } from '../ui/SectionHeading';
import './about.css';

export function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="section reveal" id="about" aria-labelledby="about-heading" ref={ref}>
      <div className="section-content">
        <SectionHeading number="01" id="about-heading">
          About Me
        </SectionHeading>

        <div className="about-grid">
          <div className="about-text">
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>
                <RichText text={paragraph} />
              </p>
            ))}
            <p>{ABOUT.currentStackLead}</p>
            <ul className="about-stack">
              {ABOUT.currentStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className="about-portrait">
            <img
              src={ABOUT.portrait}
              alt={`Portrait of ${PROFILE.name}`}
              width={400}
              height={400}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <section className="edu" aria-labelledby="edu-heading">
          <div className="edu-head">
            <div>
              <h3 className="edu-school" id="edu-heading">
                {EDUCATION.school}
              </h3>
              <p className="edu-degree">{EDUCATION.degree}</p>
            </div>
            <div className="edu-meta">
              <span className="edu-gpa">{EDUCATION.gpa}</span>
              <span className="edu-period">{EDUCATION.period}</span>
            </div>
          </div>

          <div className="edu-body">
            <div className="edu-block">
              <h4>Honors</h4>
              <ul className="edu-honors">
                {EDUCATION.honors.map((honor) => (
                  <li key={honor}>{honor}</li>
                ))}
              </ul>
            </div>

            <div className="edu-block">
              <h4>Relevant coursework</h4>
              <ul className="edu-courses">
                {EDUCATION.coursework.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
