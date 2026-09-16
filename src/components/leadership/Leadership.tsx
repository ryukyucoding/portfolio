import { TIMELINE } from '../../data/leadership';
import { useReveal } from '../../hooks/useReveal';
import { useTimelineLayout } from '../../hooks/useTimelineLayout';
import { SectionHeading } from '../ui/SectionHeading';
import { TimelineNode } from './TimelineNode';
import './leadership.css';

export function Leadership() {
  const sectionRef = useReveal<HTMLElement>();
  const timelineRef = useTimelineLayout<HTMLOListElement>();

  return (
    <section
      className="section reveal"
      id="leadership"
      aria-labelledby="leadership-heading"
      ref={sectionRef}
    >
      <div className="section-content">
        <SectionHeading number="04" id="leadership-heading">
          Leadership &amp; Achievements
        </SectionHeading>

        <div className="timeline-wrap">
          <span className="timeline-spine" aria-hidden="true" />
          <ol className="timeline" ref={timelineRef}>
            {TIMELINE.map((entry) => (
              <TimelineNode key={entry.id} entry={entry} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
