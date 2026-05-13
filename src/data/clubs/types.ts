export type StatusType = 'open' | 'closed' | 'notice';
export type FacilityIcon = 'range' | 'clubhouse' | 'access';
export type FacilityVariant = 'course' | 'range';

export interface LinkContent {
  label: string;
  href: string;
}

export interface SectionHeaderContent {
  sectionLabel: string;
  title: string;
  subtitle: string;
}

export interface ContactItemContent {
  label: string;
  value: string;
}

export interface ImageContent {
  src: string;
  alt: string;
}

export interface PartnerContent {
  name: string;
  logo: string;
}

export interface HeroStatusCard {
  title: string;
  status: StatusType;
  statusLabel: string;
  detail: string;
}

export interface ReviewCardContent {
  name: string;
  rating: number;
  quote: string;
  sourceLabel: string;
}

export interface PlayOrTrainGroup {
  title: string;
  points: string[];
  intro?: string;
  note?: string;
  example?: string;
}

export interface PlayOrTrainCard {
  eyebrow: string;
  title: string;
  status: StatusType;
  statusLabel: string;
  hours: string;
  greenkeeperComment?: {
    title: string;
    text: string;
    warning?: string;
  };
  groups: PlayOrTrainGroup[];
  cta: LinkContent;
  variant: FacilityVariant;
}

export interface PricingItem {
  label: string;
  sublabel: string;
  price: string;
}

export interface FacilityFeatureCard {
  label: string;
  title: string;
  intro: string;
  bullets: string[];
  icon: FacilityIcon;
}

export interface NewsItemContent {
  badge: string;
  dateLabel: string;
  title: string;
  text: string;
  linkLabel: string;
  linkHref: string;
  image: ImageContent;
}

export interface GolfClubData {
  club: {
    name: string;
    location: string;
    socialHref: string;
    logo: ImageContent;
  };
  seo: {
    title: string;
    description: string;
  };
  media: {
    heroImage: string;
    mapImage: string;
    aboutImage: ImageContent;
    gallery: ImageContent[];
    partners: PartnerContent[];
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    statusCards: HeroStatusCard[];
    primaryCta: LinkContent;
    secondaryCta: LinkContent;
  };
  reviews: SectionHeaderContent & {
    summaryLabel: string;
    summaryScore: string;
    linkLabel: string;
    linkHref: string;
    cards: ReviewCardContent[];
  };
  aboutCourse: SectionHeaderContent & {
    body: string[];
    pills: string[];
  };
  facilities: SectionHeaderContent & {
    cards: FacilityFeatureCard[];
  };
  news: SectionHeaderContent & {
    items: NewsItemContent[];
  };
  playOrTrain: SectionHeaderContent & {
    cards: PlayOrTrainCard[];
  };
  pricing: SectionHeaderContent & {
    play: {
      title: string;
      items: PricingItem[];
      note: string;
    };
    membership: {
      title: string;
      items: PricingItem[];
      infoTitle: string;
      infoLines: string[];
    };
  };
  gallery: SectionHeaderContent & {
    featuredCaption: string;
  };
  booking: SectionHeaderContent & {
    cta: LinkContent;
    steps: {
      label: string;
      detail: string;
    }[];
    notes: {
      title: string;
      text: string;
    }[];
  };
  partners: SectionHeaderContent;
  contact: SectionHeaderContent & {
    area: ContactItemContent;
    phone: ContactItemContent;
    email: ContactItemContent;
    mapCard: {
      eyebrow: string;
      title: string;
      description: string;
      cta: LinkContent;
    };
  };
  footer: {
    cta: LinkContent;
    copyright: string;
    description: string;
  };
}
