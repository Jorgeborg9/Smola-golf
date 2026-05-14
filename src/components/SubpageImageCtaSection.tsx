import type { ClubSubpageContent } from '../data/clubs/subpageTypes';
import { SectionHeading } from './SectionHeading';

interface SubpageImageCtaSectionProps {
  ctaSection: ClubSubpageContent['ctaSection'];
}

export function SubpageImageCtaSection({ ctaSection }: SubpageImageCtaSectionProps) {
  return (
    <section className="section section--compact subpage-cta-section">
      <div className="container">
        <article className="content-card subpage-cta-card">
          <SectionHeading
            sectionLabel={ctaSection.sectionLabel}
            title={ctaSection.title}
            description={ctaSection.text}
          />
          <div className="subpage-cta-card__actions">
            {ctaSection.links.map((link) => (
              <a key={link.href} className="button button--primary" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
