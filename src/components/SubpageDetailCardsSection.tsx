import type { ClubSubpageContent } from '../data/clubs/subpageTypes';
import { SectionHeading } from './SectionHeading';
import { SubpageFeatureIcon } from './SubpageFeatureIcon';

interface SubpageDetailCardsSectionProps {
  detailSection: ClubSubpageContent['detailSection'];
}

export function SubpageDetailCardsSection({ detailSection }: SubpageDetailCardsSectionProps) {
  return (
    <section className="section section--compact">
      <div className="container">
        <SectionHeading
          sectionLabel={detailSection.sectionLabel}
          title={detailSection.title}
          description={detailSection.subtitle}
        />
        <div className="subpage-detail-grid">
          {detailSection.cards.map((card) => (
            <article key={card.title} className="content-card subpage-detail-card">
              {card.icon ? (
                <span className="subpage-detail-card__icon" aria-hidden="true">
                  <SubpageFeatureIcon icon={card.icon} />
                </span>
              ) : null}
              <h3 className="subpage-detail-card__title">{card.title}</h3>
              {card.text ? <p className="subpage-detail-card__text">{card.text}</p> : null}
              <ul className="subpage-detail-card__list">
                {card.bullets.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {card.chips?.length ? (
                <div className="subpage-detail-card__chips">
                  {card.chips.map((chip) => (
                    <span key={chip} className="about-pill">
                      {chip}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
