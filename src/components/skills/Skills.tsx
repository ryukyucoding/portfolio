import { SKILL_GROUPS } from '../../data/skills';
import { useReveal } from '../../hooks/useReveal';
import { SectionHeading } from '../ui/SectionHeading';
import './skills.css';

export function Skills() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="section reveal" id="skills" aria-labelledby="skills-heading" ref={ref}>
      <div className="section-content">
        <SectionHeading number="05" id="skills-heading">
          Skills &amp; Technologies
        </SectionHeading>

        {SKILL_GROUPS.map((group) => (
          <section className="skill-group" key={group.id} aria-labelledby={`skills-${group.id}`}>
            <h3 className="skill-group-heading" id={`skills-${group.id}`}>
              {group.heading}
            </h3>
            <ul className="skill-grid">
              {group.items.map((tech) => (
                <li className="skill-tile" key={tech.name}>
                  <img
                    src={tech.logo}
                    alt=""
                    width={60}
                    height={60}
                    loading="lazy"
                    decoding="async"
                  />
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
