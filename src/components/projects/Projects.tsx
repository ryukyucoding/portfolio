import { PROJECTS } from '../../data/projects';
import { useReveal } from '../../hooks/useReveal';
import { HorizontalRail } from '../ui/HorizontalRail';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from './ProjectCard';
import './projects.css';

export function Projects() {
  const ref = useReveal<HTMLElement>();

  return (
    <section className="section reveal" id="projects" aria-labelledby="projects-heading" ref={ref}>
      <div className="section-content">
        <SectionHeading number="03" id="projects-heading">
          Projects I worked.
        </SectionHeading>
      </div>

      <HorizontalRail className="projects-rail" label="Project list">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </HorizontalRail>
    </section>
  );
}
