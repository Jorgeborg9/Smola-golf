import { useEffect, useRef, useState } from 'react';
import { SectionHeading } from './components/SectionHeading';
import { PartnerLogoCard } from './components/PartnerLogoCard';
import { ReviewCard } from './components/ReviewCard';
import { defaultGolfClubData, getClubDataForPath, getClubSlugFromPath } from './data/clubs';

function FacilityIcon({ icon }: { icon: 'range' | 'clubhouse' | 'access' }) {
  if (icon === 'range') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 19h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M8 19V7.2a1.2 1.2 0 0 1 1.9-1l4.7 3.4a1.2 1.2 0 0 1 0 1.95L8 16.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === 'clubhouse') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m4 11.2 8-6.2 8 6.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 10.7V19h12v-8.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 19v-4.8h4V19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 8.8v9.7M8.3 12.1l3.7 2.2 3.7-2.2M9.6 19h4.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function App() {
  const reviewsStripRef = useRef<HTMLDivElement | null>(null);
  const [desktopReviews, setDesktopReviews] = useState(false);
  const [reviewStart, setReviewStart] = useState(0);
  const currentPath = typeof window === 'undefined' ? '/' : window.location.pathname;
  const clubData = getClubDataForPath(currentPath);
  const currentSlug = getClubSlugFromPath(currentPath);
  const currentRoute = currentSlug ? `/golf/${currentSlug}` : '/';
  const businessName = clubData.club.name;
  const navigationItems = [
    { label: 'Banen', href: '#banen' },
    { label: 'Nyheter', href: '#nyheter' },
    { label: 'Priser', href: '#priser' },
    { label: 'Besøk', href: '#besok' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1180px)');
    const syncDesktopState = () => setDesktopReviews(mediaQuery.matches);

    syncDesktopState();
    mediaQuery.addEventListener('change', syncDesktopState);

    return () => mediaQuery.removeEventListener('change', syncDesktopState);
  }, []);

  useEffect(() => {
    document.title = clubData.seo.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', clubData.seo.description);
    }
  }, [clubData]);

  useEffect(() => {
    if (!desktopReviews) {
      setReviewStart(0);
      return;
    }

    const maxStart = Math.max(0, clubData.reviews.cards.length - 4);
    const intervalId = window.setInterval(() => {
      setReviewStart((current) => (current >= maxStart ? 0 : current + 1));
    }, 3800);

    return () => window.clearInterval(intervalId);
  }, [clubData, desktopReviews]);

  useEffect(() => {
    const strip = reviewsStripRef.current;

    if (!strip) {
      return;
    }

    if (!desktopReviews) {
      strip.scrollTo({ left: 0, behavior: 'auto' });
      return;
    }

    const targetCard = strip.children[reviewStart] as HTMLElement | undefined;

    if (targetCard) {
      strip.scrollTo({ left: targetCard.offsetLeft, behavior: 'smooth' });
    }
  }, [desktopReviews, reviewStart]);

  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero__media" style={{ backgroundImage: `url(${clubData.media.heroImage})` }} />
        <div className="container hero__inner">
          <div className="hero-bar" aria-label="Toppnavigasjon">
            <a className="hero-bar__brand" href={currentRoute}>
              <img src={clubData.club.logo.src} alt={clubData.club.logo.alt} />
            </a>
            <nav className="hero-nav" aria-label="Seksjoner">
              {navigationItems.map((item) => (
                <a key={item.href} className="hero-nav__link" href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
            <a className="hero-bar__link" href={clubData.club.socialHref}>
              <span className="sr-only">Facebook</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M13.5 21v-7.5h2.55l.45-3h-3V8.58c0-.84.27-1.41 1.47-1.41H16.5V4.53c-.27-.03-1.2-.12-2.28-.12-2.28 0-3.84 1.38-3.84 4.02v2.07H7.8v3h2.58V21h3.12Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          <div className="hero__content">
            <p className="hero__eyebrow">{clubData.hero.eyebrow}</p>
            <h1>{clubData.hero.title}</h1>
            <p className="hero__text">{clubData.hero.subtitle}</p>

            <div className="hero__actions">
              <a className="button button--primary" href={clubData.hero.primaryCta.href}>
                {clubData.hero.primaryCta.label}
              </a>
              <a className="button button--ghost" href={clubData.hero.secondaryCta.href}>
                {clubData.hero.secondaryCta.label}
              </a>
            </div>

            <div className="hero__facility-grid">
              {clubData.hero.statusCards.map((card) => (
                <article key={card.title} className="hero-teaser hero-teaser--course">
                  <p className="hero-teaser__label">{card.title}</p>
                  <div className="hero-teaser__status-row">
                    <span
                      className={`facility-card__status-dot facility-card__status-dot--${card.status}`}
                      aria-hidden="true"
                    />
                    <p className="hero-teaser__status">{card.statusLabel}</p>
                  </div>
                  <p className="hero-teaser__detail">{card.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section section--compact reviews-section">
          <div className="container">
            <div className="reviews-section__header">
              <SectionHeading
                sectionLabel={clubData.reviews.sectionLabel}
                title={clubData.reviews.title}
                description={clubData.reviews.subtitle}
              />
              <div className="reviews-section__meta">
                <div className="reviews-summary" aria-label="Anmeldelser sammendrag">
                  <p className="reviews-summary__label">{clubData.reviews.summaryLabel}</p>
                  <p className="reviews-summary__score">{clubData.reviews.summaryScore}</p>
                </div>
                <a className="reviews-section__link" href={clubData.reviews.linkHref}>
                  {clubData.reviews.linkLabel}
                </a>
              </div>
            </div>

            <div className="reviews-strip" aria-label="Anmeldelser" ref={reviewsStripRef}>
              {clubData.reviews.cards.map((review) => (
                <ReviewCard
                  key={`${review.name}-${review.quote}`}
                  rating={review.rating}
                  text={review.quote}
                  name={review.name}
                  sourceLabel={review.sourceLabel}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="banen" className="section section--compact about-section">
          <div className="container">
            <div className="section-heading">
              <p className="section-label">{clubData.aboutCourse.sectionLabel}</p>
            </div>
            <div className="about-split">
              <article className="content-card about-panel">
                <div className="about-panel__content">
                  <h3 className="about-panel__title">{clubData.aboutCourse.title}</h3>
                  <p className="about-panel__intro">{clubData.aboutCourse.subtitle}</p>
                </div>
                <div className="about-panel__copy">
                  {clubData.aboutCourse.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="about-pills">
                  {clubData.aboutCourse.pills.map((pill) => (
                    <span key={pill} className="about-pill">
                      {pill}
                    </span>
                  ))}
                </div>
              </article>

              <article className="image-block image-block--tall about-image-card">
                <img src={clubData.media.aboutImage.src} alt={clubData.media.aboutImage.alt} />
              </article>
            </div>
          </div>
        </section>

        <section className="section section--compact">
          <div className="container">
            <SectionHeading
              sectionLabel={clubData.facilities.sectionLabel}
              title={clubData.facilities.title}
              description={clubData.facilities.subtitle}
            />
            <div className="facility-feature-grid">
              {clubData.facilities.cards.map((card) => (
                <article key={card.title} className="content-card facility-feature-card">
                  <div className="facility-feature-card__top">
                    <span className="facility-feature-card__icon">
                      <FacilityIcon icon={card.icon} />
                    </span>
                    <span className="facility-feature-card__chip">{card.label}</span>
                  </div>
                  <div className="facility-feature-card__content">
                    <h3 className="facility-feature-card__title">{card.title}</h3>
                    <p className="facility-feature-card__intro">{card.intro}</p>
                  </div>
                  <div className="facility-feature-card__divider" />
                  <ul className="facility-feature-card__list">
                    {card.bullets.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="nyheter" className="section section--compact news-section">
          <div className="container">
            <SectionHeading
              sectionLabel={clubData.news.sectionLabel}
              title={clubData.news.title}
              description={clubData.news.subtitle}
            />
            <div className="news-grid">
              {clubData.news.items.map((item) => (
                <article key={item.title} className="content-card news-card">
                  <div className="news-card__image">
                    <img src={item.image.src} alt={item.image.alt} />
                  </div>
                  <div className="news-card__body">
                    <div className="news-card__meta">
                      <span className="news-card__badge">{item.badge}</span>
                      <span className="news-card__date">{item.dateLabel}</span>
                    </div>
                    <p className="news-card__title">{item.title}</p>
                    <p className="news-card__text">{item.text}</p>
                    <a className="news-card__link" href={item.linkHref}>
                      {item.linkLabel}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div id="practical" className="section-anchor" aria-hidden="true" />
          <div className="container">
            <div className="section-heading practical-section__heading">
              <p className="section-label">{clubData.playOrTrain.sectionLabel}</p>
              <h2>{clubData.playOrTrain.title}</h2>
            </div>
            <div className="facility-grid">
              {clubData.playOrTrain.cards.map((facility) => (
                <article
                  key={facility.title}
                  className={`facility-card facility-card--${facility.variant}`}
                >
                  <div className="facility-card__header">
                    <p className="facility-card__eyebrow">{facility.eyebrow}</p>
                    <h3>{facility.title}</h3>
                    <div className="facility-card__status-row">
                      <span
                        className={`facility-card__status-dot facility-card__status-dot--${facility.status}`}
                        aria-hidden="true"
                      />
                      <span className="facility-card__status-text">{facility.statusLabel}</span>
                    </div>
                    <p className="facility-card__hours">{facility.hours}</p>
                  </div>

                  {facility.greenkeeperComment ? (
                    <div className="facility-card__comment">
                      <p className="facility-card__section-title">{facility.greenkeeperComment.title}</p>
                      <p>{facility.greenkeeperComment.text}</p>
                      {facility.greenkeeperComment.warning ? (
                        <p className="facility-card__comment-warning">
                          {facility.greenkeeperComment.warning}
                        </p>
                      ) : null}
                    </div>
                  ) : null}

                  <div className="facility-card__detail-groups">
                    {facility.groups.map((group) => (
                      <section key={group.title} className="facility-card__notes facility-card__notes--compact">
                        <p className="facility-card__section-title">{group.title}</p>
                        {group.intro ? <p className="facility-card__section-intro">{group.intro}</p> : null}
                        <ul>
                          {group.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                        {group.note ? <p className="facility-card__section-note">{group.note}</p> : null}
                        {group.example ? <p className="facility-card__section-example">{group.example}</p> : null}
                      </section>
                    ))}
                  </div>

                  <a className="button button--primary facility-card__cta" href={facility.cta.href}>
                    {facility.cta.label}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="priser" className="section section--accent">
          <div id="pricing" className="section-anchor" aria-hidden="true" />
          <div className="container">
            <SectionHeading
              sectionLabel={clubData.pricing.sectionLabel}
              title={clubData.pricing.title}
              description={clubData.pricing.subtitle}
            />
            <div className="pricing-layout">
              <article className="pricing-panel">
                <p className="pricing-panel__title">{clubData.pricing.play.title}</p>
                <div className="pricing-table">
                  {clubData.pricing.play.items.map((item) => (
                    <div key={item.label} className="pricing-row">
                      <div>
                        <p className="pricing-row__label">{item.label}</p>
                        <p className="pricing-row__sub">{item.sublabel}</p>
                      </div>
                      <p className="pricing-row__price">{item.price}</p>
                    </div>
                  ))}
                </div>
                <p className="pricing-panel__note">{clubData.pricing.play.note}</p>
              </article>

              <article className="pricing-panel">
                <p className="pricing-panel__title">{clubData.pricing.membership.title}</p>
                <div className="pricing-table">
                  {clubData.pricing.membership.items.map((item) => (
                    <div key={item.label} className="pricing-row">
                      <div>
                        <p className="pricing-row__label">{item.label}</p>
                        <p className="pricing-row__sub">{item.sublabel}</p>
                      </div>
                      <p className="pricing-row__price">{item.price}</p>
                    </div>
                  ))}
                </div>
                <div className="pricing-panel__info">
                  <p className="pricing-panel__subtitle">{clubData.pricing.membership.infoTitle}</p>
                  <ul className="pricing-panel__info-list">
                    {clubData.pricing.membership.infoLines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--compact gallery-section">
          <div className="container">
            <SectionHeading
              sectionLabel={clubData.gallery.sectionLabel}
              title={clubData.gallery.title}
              description={clubData.gallery.subtitle}
            />
            <div className="gallery-strip" aria-label={`Bildegalleri fra ${businessName}`}>
              {clubData.media.gallery.map((item, index) => (
                <article
                  key={item.alt}
                  className={`gallery-card gallery-card--local${index === 0 ? ' gallery-card--featured' : ''}`}
                >
                  <img src={item.src} alt={item.alt} />
                  <div className="gallery-card__overlay">
                    <p className="gallery-card__caption">
                      {index === 0 ? clubData.gallery.featuredCaption : businessName}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="besok" className="section">
          <div id="booking" className="section-anchor" aria-hidden="true" />
          <div className="container split-grid reverse-on-mobile">
            <div className="content-card">
              <SectionHeading
                sectionLabel={clubData.booking.sectionLabel}
                title={clubData.booking.title}
                description={clubData.booking.subtitle}
              />
              <div className="steps-list">
                {clubData.booking.steps.map((step, index) => (
                  <div key={step.label} className="step">
                    <span className="step__number">{index + 1}</span>
                    <div>
                      <p className="step__title">{step.label}</p>
                      <p className="step__detail">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a className="button button--primary" href={clubData.booking.cta.href}>
                {clubData.booking.cta.label}
              </a>
            </div>

            <div className="notes-stack">
              {clubData.booking.notes.map((note) => (
                <article key={note.title} className="content-card note-card">
                  <p className="note-card__title">{note.title}</p>
                  <p>{note.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section partners-section">
          <div className="container">
            <SectionHeading
              sectionLabel={clubData.partners.sectionLabel}
              title={clubData.partners.title}
              description={clubData.partners.subtitle}
            />
            <div className="partners-grid partners-grid--logos">
              {clubData.media.partners.map((partner) => (
                <PartnerLogoCard key={partner.name} name={partner.name} logo={partner.logo} />
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="kontakt">
          <div id="contact" className="section-anchor" aria-hidden="true" />
          <div className="container split-grid">
            <div>
              <SectionHeading
                sectionLabel={clubData.contact.sectionLabel}
                title={clubData.contact.title}
                description={clubData.contact.subtitle}
              />
              <div className="contact-list">
                <div className="contact-item">
                  <span className="contact-item__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z" stroke="currentColor" strokeWidth="1.7" />
                      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" />
                    </svg>
                  </span>
                  <div>
                    <p className="contact-item__label">{clubData.contact.area.label}</p>
                    <p className="contact-item__value">{clubData.contact.area.value}</p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-item__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M6.8 4.5h2.7l1.1 3.5-1.6 1.7a13 13 0 0 0 5.2 5.2l1.7-1.6 3.5 1.1v2.7a1.8 1.8 0 0 1-2 1.8A15.6 15.6 0 0 1 5 6.5a1.8 1.8 0 0 1 1.8-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="contact-item__label">{clubData.contact.phone.label}</p>
                    <p className="contact-item__value">{clubData.contact.phone.value}</p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-item__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="3.5" y="6" width="17" height="12" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
                      <path d="m5.5 8 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="contact-item__label">{clubData.contact.email.label}</p>
                    <p className="contact-item__value">{clubData.contact.email.value}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="map-card">
              <div
                className="map-placeholder"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(24, 31, 28, 0.18)), url(${clubData.media.mapImage})`,
                }}
              >
                <div className="map-placeholder__content">
                  <p className="map-placeholder__eyebrow">{clubData.contact.mapCard.eyebrow}</p>
                  <p className="map-placeholder__title">{clubData.contact.mapCard.title}</p>
                  <p className="map-placeholder__text">{clubData.contact.mapCard.description}</p>
                  <a className="button button--primary map-placeholder__cta" href={clubData.contact.mapCard.cta.href}>
                    {clubData.contact.mapCard.cta.label}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__content">
          <a className="footer__cta" href={clubData.footer.cta.href}>
            {clubData.footer.cta.label}
          </a>
          <p>{clubData.footer.copyright}</p>
          <p>{clubData.footer.description}</p>
        </div>
      </footer>
    </div>
  );
}
