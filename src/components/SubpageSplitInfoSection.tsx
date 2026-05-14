import type { ClubSubpageContent } from '../data/clubs/subpageTypes';

interface SubpageSplitInfoSectionProps {
  narrative: ClubSubpageContent['narrative'];
}

export function SubpageSplitInfoSection({ narrative }: SubpageSplitInfoSectionProps) {
  return (
    <section className="section section--compact about-section">
      <div className="container">
        <div className="about-split">
          <article className="content-card about-panel">
            <div className="about-panel__content">
              <h3 className="about-panel__title">{narrative.title}</h3>
            </div>
            <div className="about-panel__copy">
              {narrative.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="about-pills">
              {narrative.pills.map((pill) => (
                <span key={pill} className="about-pill">
                  {pill}
                </span>
              ))}
            </div>
          </article>

          <article className="image-block image-block--tall about-image-card">
            <img src={narrative.image.src} alt={narrative.image.alt} />
          </article>
        </div>
      </div>
    </section>
  );
}
