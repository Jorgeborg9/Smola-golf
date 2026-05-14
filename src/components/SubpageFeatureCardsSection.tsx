import type { ClubSubpageContent } from '../data/clubs/subpageTypes';
import { SectionHeading } from './SectionHeading';
import { SubpageFeatureIcon } from './SubpageFeatureIcon';

interface SubpageFeatureCardsSectionProps {
  intro: ClubSubpageContent['intro'];
}

export function SubpageFeatureCardsSection({ intro }: SubpageFeatureCardsSectionProps) {
  return (
    <section className="section section--compact subpage-intro-section">
      <div className="container">
        <SectionHeading sectionLabel={intro.sectionLabel} title={intro.title} description={intro.subtitle} />
        <div className="subpage-feature-grid">
          {intro.features.map((feature) => (
            <article key={feature.title} className="content-card subpage-feature-card">
              <span className="subpage-feature-card__icon" aria-hidden="true">
                <SubpageFeatureIcon icon={feature.icon} />
              </span>
              <p className="about-panel__eyebrow">{feature.eyebrow}</p>
              <h3 className="subpage-feature-card__title">{feature.title}</h3>
              <p className="subpage-feature-card__text">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
