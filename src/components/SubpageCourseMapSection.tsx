import type { ClubSubpageContent } from '../data/clubs/subpageTypes';
import { SectionHeading } from './SectionHeading';

interface SubpageCourseMapSectionProps {
  mediaSection: ClubSubpageContent['mediaSection'];
}

export function SubpageCourseMapSection({ mediaSection }: SubpageCourseMapSectionProps) {
  return (
    <section className="section section--compact subpage-media-section">
      <div className="container split-grid">
        <article className="image-block image-block--tall subpage-media-card">
          <img src={mediaSection.image.src} alt={mediaSection.image.alt} />
        </article>
        <article className="content-card subpage-media-copy">
          <SectionHeading
            sectionLabel={mediaSection.sectionLabel}
            title={mediaSection.title}
            description={mediaSection.subtitle}
          />
          {mediaSection.caption ? <p className="subpage-media-copy__caption">{mediaSection.caption}</p> : null}
          {mediaSection.facts.length ? (
            <ul className="subpage-media-copy__facts">
              {mediaSection.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          ) : null}
        </article>
      </div>
    </section>
  );
}
