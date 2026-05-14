import type { GolfClubData } from '../data/clubs/types';

interface NavigationItem {
  label: string;
  href: string;
}

interface PremiumHeroProps {
  currentRoute: string;
  club: GolfClubData['club'];
  navigationItems: NavigationItem[];
  isActiveNavLink: (href: string) => boolean;
  heroImage: string;
  heroContent: GolfClubData['hero'];
}

export function PremiumHero({
  currentRoute,
  club,
  navigationItems,
  isActiveNavLink,
  heroImage,
  heroContent,
}: PremiumHeroProps) {
  return (
    <header className="hero">
      <div className="hero__media" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="container hero__inner">
        <div className="hero-bar" aria-label="Toppnavigasjon">
          <a className="hero-bar__brand" href={currentRoute}>
            {club.logo ? (
              <img src={club.logo.src} alt={club.logo.alt} />
            ) : (
              <span className="hero-bar__brand-text">{club.wordmark ?? club.name}</span>
            )}
          </a>
          <nav className="hero-nav" aria-label="Seksjoner">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                className={`hero-nav__link${isActiveNavLink(item.href) ? ' hero-nav__link--active' : ''}`}
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a className="hero-bar__link" href={club.socialHref}>
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
          <p className="hero__eyebrow">{heroContent.eyebrow}</p>
          <h1>{heroContent.title}</h1>
          <p className="hero__text">{heroContent.subtitle}</p>

          {heroContent.primaryCta.label.trim() || heroContent.secondaryCta.label.trim() ? (
            <div className="hero__actions">
              {heroContent.primaryCta.label.trim() ? (
                <a className="button button--primary" href={heroContent.primaryCta.href}>
                  {heroContent.primaryCta.label}
                </a>
              ) : null}
              {heroContent.secondaryCta.label.trim() ? (
                <a className="button button--ghost" href={heroContent.secondaryCta.href}>
                  {heroContent.secondaryCta.label}
                </a>
              ) : null}
            </div>
          ) : null}

          {heroContent.statusCards.length ? (
            <div className="hero__facility-grid">
              {heroContent.statusCards.map((card) => (
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
          ) : null}
        </div>
      </div>
    </header>
  );
}
