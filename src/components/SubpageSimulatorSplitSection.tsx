import type { ClubSubpageContent } from '../data/clubs/subpageTypes';
import { SectionHeading } from './SectionHeading';
import { SubpageFeatureIcon } from './SubpageFeatureIcon';

interface SubpageSimulatorSplitSectionProps {
  intro: ClubSubpageContent['intro'];
  practicalCard?: ClubSubpageContent['detailSection']['cards'][number];
}

export function SubpageSimulatorSplitSection({
  intro,
  practicalCard,
}: SubpageSimulatorSplitSectionProps) {
  return (
    <section className="section section--compact subpage-intro-section">
      <div className="container">
        <SectionHeading sectionLabel={intro.sectionLabel} title={intro.title} description={intro.subtitle} />
        <div className="split-grid subpage-simulator-layout">
          <article className="content-card subpage-simulator-main-card">
            <h3 className="about-panel__title">{intro.cardTitle}</h3>
            <p className="about-panel__intro">{intro.cardBody}</p>
            <div className="subpage-simulator-highlights">
              {intro.features.map((feature) => (
                <div key={feature.title} className="subpage-simulator-highlight">
                  <span className="subpage-simulator-highlight__icon" aria-hidden="true">
                    <SubpageFeatureIcon icon={feature.icon} />
                  </span>
                  <p className="subpage-simulator-highlight__text">{feature.title}</p>
                </div>
              ))}
            </div>
            <div className="about-pills">
              {intro.chips?.map((chip) => (
                <span key={chip} className="about-pill">
                  {chip}
                </span>
              ))}
            </div>
          </article>

          {practicalCard ? (
            <article className="content-card subpage-simulator-practical-card">
              <h3 className="subpage-detail-card__title">{practicalCard.title}</h3>
              <div className="subpage-simulator-practical-rows">
                {practicalCard.rows?.map((row) => (
                  <div key={row.label} className="subpage-simulator-practical-row">
                    <span className="subpage-simulator-practical-row__label">{row.label}</span>
                    <span className="subpage-simulator-practical-row__value">{row.value}</span>
                  </div>
                ))}
              </div>
              {practicalCard.cta ? (
                <a className="button button--primary subpage-simulator-practical-card__cta" href={practicalCard.cta.href}>
                  {practicalCard.cta.label}
                </a>
              ) : null}
            </article>
          ) : null}
        </div>
      </div>
    </section>
  );
}
