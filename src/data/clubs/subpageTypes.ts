import type { HeroStatusCard, ImageContent, LinkContent } from './types';

export type SubpageFeatureIcon = 'course' | 'access' | 'community';

export interface ClubSubpageFeatureCard {
  icon: SubpageFeatureIcon;
  eyebrow: string;
  title: string;
  text: string;
}

export interface ClubSubpagePracticalRow {
  label: string;
  value: string;
}

export interface ClubSubpageBulletCard {
  icon?: SubpageFeatureIcon;
  title: string;
  text?: string;
  bullets: string[];
  chips?: string[];
  rows?: ClubSubpagePracticalRow[];
  cta?: LinkContent;
}

export interface ClubSubpagePricingCard {
  title: string;
  intro: string;
  items: {
    label: string;
    value: string;
  }[];
  note?: string;
}

export interface ClubSubpageContent {
  seoTitle: string;
  seoDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    image: string;
    statusCards: HeroStatusCard[];
    primaryCta: LinkContent;
    secondaryCta: LinkContent;
  };
  intro: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    features: ClubSubpageFeatureCard[];
    cardTitle?: string;
    cardBody?: string;
    chips?: string[];
  };
  narrative: {
    image: ImageContent;
    title: string;
    body: string[];
    pills: string[];
  };
  detailSection: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    cards: ClubSubpageBulletCard[];
  };
  mediaSection: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    image: ImageContent;
    caption: string;
    facts: string[];
  };
  pricingSection?: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    cards: ClubSubpagePricingCard[];
  };
  ctaSection: {
    sectionLabel: string;
    title: string;
    text: string;
    links: LinkContent[];
  };
}
