interface LinkContent {
  label: string;
  href: string;
}

interface SectionHeaderContent {
  sectionLabel: string;
  title: string;
  subtitle: string;
}

interface ContactItemContent {
  label: string;
  value: string;
}

interface HeroStatusCard {
  title: string;
  status: string;
  statusLabel: string;
  detail: string;
}

interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  socialHref: string;
  statusCards: HeroStatusCard[];
  primaryCta: LinkContent;
  secondaryCta: LinkContent;
}

interface ReviewCardContent {
  name: string;
  rating: number;
  quote: string;
  sourceLabel: string;
}

interface ReviewsContent {
  title: string;
  subtitle: string;
  summaryLabel: string;
  summaryScore: string;
  linkLabel: string;
  linkHref: string;
  cards: ReviewCardContent[];
}

interface PlayOrTrainGroup {
  title: string;
  points: string[];
  intro?: string;
  note?: string;
  example?: string;
}

interface PlayOrTrainCard {
  eyebrow: string;
  title: string;
  status: string;
  statusLabel: string;
  hours: string;
  greenkeeperComment: {
    title: string;
    text: string;
    warning?: string;
  };
  groups: PlayOrTrainGroup[];
  cta: LinkContent;
  variant: string;
}

interface PlayOrTrainContent {
  sectionLabel: string;
  title: string;
  cards: PlayOrTrainCard[];
}

interface PricingCourseItem {
  label: string;
  sublabel: string;
  price: string;
}

interface PricingContent extends SectionHeaderContent {
  play: {
    title: string;
    items: PricingCourseItem[];
    note: string;
  };
  membership: {
    title: string;
    items: PricingCourseItem[];
    infoTitle: string;
    infoLines: string[];
  };
}

interface AboutCourseContent extends SectionHeaderContent {
  introLabel: string;
  body: string[];
  pills: string[];
  imageIndex: number;
}

interface FacilityFeatureCard {
  label: string;
  title: string;
  intro: string;
  bullets: string[];
  icon: 'range' | 'clubhouse' | 'access';
}

interface FacilitiesContent extends SectionHeaderContent {
  cards: FacilityFeatureCard[];
}

interface NewsItemContent {
  badge: string;
  dateLabel: string;
  title: string;
  text: string;
  linkLabel: string;
  linkHref: string;
  imageIndex: number;
}

interface NewsContent extends SectionHeaderContent {
  items: NewsItemContent[];
}

interface GalleryContent {
  title: string;
  description: string;
  featuredCaption: string;
}

interface BookingContent {
  title: string;
  description: string;
  ctaLabel: string;
  steps: {
    label: string;
    detail: string;
  }[];
  notes: {
    title: string;
    text: string;
  }[];
}

interface PartnersContent {
  title: string;
  description: string;
}

interface ContactContent extends SectionHeaderContent {
  area: ContactItemContent;
  phone: ContactItemContent;
  email: ContactItemContent;
  mapCard: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: LinkContent['label'];
    ctaHref: LinkContent['href'];
  };
}

interface FooterContent {
  ctaLabel: string;
  ctaHref: string;
  copyright: string;
  description: string;
}

interface SiteContent {
  businessName: string;
  hero: HeroContent;
  reviews: ReviewsContent;
  aboutCourse: AboutCourseContent;
  facilities: FacilitiesContent;
  news: NewsContent;
  playOrTrain: PlayOrTrainContent;
  pricing: PricingContent;
  gallery: GalleryContent;
  booking: BookingContent;
  partners: PartnersContent;
  contact: ContactContent;
  footer: FooterContent;
}

export const siteContent: SiteContent = {
  businessName: 'Smøla Golfklubb',
  hero: {
    eyebrow: 'Smøla Golfklubb',
    title: 'Golf ytterst i havgapet',
    subtitle: 'Spill golf i vakre omgivelser på Smøla',
    socialHref: 'https://www.facebook.com/groups/181331778221/',
    statusCards: [
      {
        title: 'Golfbanen',
        status: 'open',
        statusLabel: 'Åpen for spill',
        detail: '9 hull i Dyrnesdalen',
      },
    ],
    primaryCta: {
      label: 'Se info',
      href: '#practical',
    },
    secondaryCta: {
      label: 'Bli medlem',
      href: '#pricing',
    },
  },
  reviews: {
    title: 'Hva folk sier om Smøla Golfklubb',
    subtitle: '',
    summaryLabel: 'Tripadvisor',
    summaryScore: '5,0/5',
    linkLabel: 'Se anmeldelser',
    linkHref: 'https://www.tripadvisor.com/Attraction_Review-g1183551-d23532355-Reviews-Smola_Golfklubb-Smola_More_og_Romsdal_Western_Norway.html',
    cards: [
      {
        name: 'Bob',
        rating: 5,
        quote: 'Easy golf course to play with good prices and a warm welcome.',
        sourceLabel: 'Tripadvisor',
      },
      {
        name: 'Joerg K',
        rating: 5,
        quote: 'A fantastic golf course in the middle of nature. I can only recommend it.',
        sourceLabel: 'Tripadvisor',
      },
    ],
  },
  aboutCourse: {
    sectionLabel: 'Smøla Golfklubb',
    title: 'Om banen',
    subtitle: 'Banen i Dyrnesdalen kombinerer natur, lune forhold og en kompakt 9-hullsopplevelse.',
    introLabel: 'Ytterst i havgapet',
    body: [
      'Banen i Dyrnesdalen byr på en variert og naturskjønn 9-hulls opplevelse, omgitt av skog, åpne partier og rolige omgivelser.',
      'Smøla Golfklubb kombinerer kystnær beliggenhet med gode spilleforhold, der banen ligger beskyttet i terrenget uten å miste følelsen av å være ytterst i havgapet.',
      'Alle hull har både rødt og gult utslag, og det er benker ved hvert utslag. Banen er oversiktlig og lett å spille, samtidig som den gir nok utfordring til å gjøre runden interessant for både medlemmer og gjester.',
    ],
    pills: [
      '9 hull i Dyrnesdalen',
      'Beskyttet mot vær og vind',
      'Rødt og gult utslag',
      'Benker ved alle utslag',
    ],
    imageIndex: 1,
  },
  facilities: {
    sectionLabel: 'Smøla Golfklubb',
    title: 'Fasiliteter på anlegget',
    subtitle: 'Praktiske tilbud ved banen gjør det enklere å komme i gang, trene og bruke anlegget gjennom sesongen.',
    cards: [
      {
        label: 'Trening',
        title: 'Driving range og kurs',
        intro: 'Driving range ligger ved anlegget og brukes både til egentrening og kursaktivitet gjennom sommeren.',
        bullets: [
          'Driving range ved banen',
          'Kurs holdes ved nok påmeldte',
          'Klubben tar imot interesse for nye kurs',
        ],
        icon: 'range',
      },
      {
        label: 'Service',
        title: 'Greenfeebu, kiosk og klubbtilbud',
        intro: 'Greenfeebu og kiosk er samlet rundt anlegget, slik at praktisk informasjon og enkel servering er tett på banen.',
        bullets: [
          'Stor garasje fungerer som greenfeebu',
          'Kiosken åpner under aktivitet og arrangementer',
          'Banekart og slopetabell finnes ved anlegget',
        ],
        icon: 'clubhouse',
      },
      {
        label: 'Tilgjengelighet',
        title: 'Utstyr og enkel tilgang',
        intro: 'Klubben gjør det lettere å komme i gang med både utleie, praktisk utstyr og løsninger for spillere med ulike behov.',
        bullets: [
          'Golfsett kan leies av klubben',
          'Golfbil kan brukes ved nedsatt førlighet',
          'Praktisk informasjon er tilgjengelig direkte på stedet',
        ],
        icon: 'access',
      },
    ],
  },
  news: {
    sectionLabel: 'Smøla Golfklubb',
    title: 'Siste nytt',
    subtitle: 'Siste nytt fra klubben, turneringer og aktivitet på banen.',
    items: [
      {
        badge: 'Klubbaktivitet',
        dateLabel: 'Fast gjennom sesongen',
        title: 'Seriespill og faste spillerunder',
        text: 'Det arrangeres seriespill hver søndag kl. 12, mens sosiale runder går mandag og torsdag kl. 18.',
        linkLabel: 'Se praktisk spillinfo',
        linkHref: '#practical',
        imageIndex: 0,
      },
      {
        badge: 'Turnering',
        dateLabel: 'Første søndag i måneden',
        title: 'Åpen turnering hver måned',
        text: 'Første søndag hver måned arrangeres åpen turnering kl. 12 for medlemmer og gjester.',
        linkLabel: 'Les mer om klubblivet',
        linkHref: '#booking',
        imageIndex: 1,
      },
      {
        badge: 'Miljø',
        dateLabel: 'Onsdag kl. 11',
        title: 'Seniorgolf og klubbmiljø',
        text: 'Senior- og formiddagsgolf spilles onsdager kl. 11, og klubben holder et aktivt miljø gjennom sesongen.',
        linkLabel: 'Se klubbtilbud',
        linkHref: '#booking',
        imageIndex: 3,
      },
    ],
  },
  playOrTrain: {
    sectionLabel: 'Smøla Golfklubb',
    title: 'Spill og aktiviteter',
    cards: [
      {
        eyebrow: 'For deg som vil spille',
        title: 'Golfbanen',
        status: 'open',
        statusLabel: 'Åpen',
        hours: 'Banen er åpen hver dag',
        greenkeeperComment: {
          title: 'Praktisk spillinfo',
          text: 'Banen er lett å bruke for både medlemmer og gjester, med tydelig informasjon ved anlegget og en oversiktlig 9-hullsrunde.',
        },
        groups: [
          {
            title: 'Spill og runde',
            points: [
              '9-hulls golfbane med slope-godkjenning fra 2005',
              'Skogs- og parkpreg gjennom hele runden',
              'Banekart og slopetabell finnes ved anlegget',
            ],
          },
          {
            title: 'Praktisk på banen',
            points: [
              'Benker ved alle utslag',
              'Rødt og gult utslag på alle hull',
              'Passer både medlemmer og gjestespillere',
              'Naturskjønn og lun bane i Dyrnesdalen',
            ],
          },
        ],
        cta: {
          label: 'Se baneinfo',
          href: '#booking',
        },
        variant: 'course',
      },
      {
        eyebrow: 'For deg som vil delta',
        title: 'Klubbtilbud og aktivitet',
        status: 'open',
        statusLabel: 'Aktivt klubbmiljø',
        hours: 'Turneringer, sosiale runder og medlemstilbud',
        greenkeeperComment: {
          title: 'Praktisk info',
          text: 'Oversikt over spill, turneringer og tilbud gjennom sesongen.',
        },
        groups: [
          {
            title: 'Ukentlig aktivitet',
            points: [
              'Seriespill hver søndag kl. 12',
              'Åpen turnering første søndag hver måned kl. 12',
              'Sosiale runder mandag og torsdag kl. 18',
              'Senior- og formiddagsgolf onsdag kl. 11',
            ],
          },
          {
            title: 'Tilbud ved klubben',
            points: [
              'Kurs arrangeres ved nok påmeldte',
              'Klubben leier ut golfsett',
              'Medlemmer får Norsk Golf tilsendt ca. 8 ganger i året',
              'Medlemmer kan møte på årsmøtet',
            ],
          },
          {
            title: 'Medlemsinfo',
            points: [
              'Klubben sender løpende medlemsinformasjon gjennom sesongen',
            ],
          },
        ],
        cta: {
          label: 'Se klubbtilbud',
          href: '#booking',
        },
        variant: 'range',
      },
    ],
  },
  pricing: {
    sectionLabel: 'Smøla Golfklubb',
    title: 'Priser og medlemskap',
    subtitle: '',
    play: {
      title: 'Greenfee og spill',
      items: [
        {
          label: 'Senior',
          sublabel: 'Greenfee per dag',
          price: '300,-',
        },
        {
          label: 'Junior',
          sublabel: 'Greenfee per dag',
          price: '100,-',
        },
        {
          label: 'Samarbeidende klubb, senior',
          sublabel: 'Greenfee per dag',
          price: '250,-',
        },
        {
          label: 'Samarbeidende klubb, junior',
          sublabel: 'Greenfee per dag',
          price: '0,-',
        },
        {
          label: 'Klubbmedlem',
          sublabel: 'Greenfee per dag',
          price: '100,-',
        },
      ],
      note: 'Prislisten er basert på klubbens oppgitte satser.',
    },
    membership: {
      title: 'Medlemskap',
      items: [
        {
          label: 'Familie',
          sublabel: '2 voksne + barn under 18 år',
          price: '4.500,-',
        },
        {
          label: 'Medlem',
          sublabel: 'Ordinært medlemskap',
          price: '1.500,-',
        },
        {
          label: 'Ektefelle / samboer',
          sublabel: 'Redusert sats',
          price: '1.000,-',
        },
        {
          label: 'Senior',
          sublabel: 'Pensjonistmedlemskap',
          price: '1.000,-',
        },
        {
          label: 'Junior',
          sublabel: 'Til og med 18 år',
          price: '500,-',
        },
        {
          label: 'Støttemedlem',
          sublabel: 'Støtter klubben uten spillerett',
          price: '200,-',
        },
      ],
      infoTitle: 'Om medlemskap',
      infoLines: [
        'Introduksjonskurs kreves for golfkort og spillerett.',
        'Spilleavgift kommer i tillegg der dette er aktuelt.',
        'Junior har spilleavgift 0,- til og med året de fyller 18 år.',
        'Medlemmer får løpende informasjon fra klubben gjennom sesongen.',
      ],
    },
  },
  gallery: {
    title: 'Fra anlegget',
    description: 'Noen glimt fra banen, naturen rundt og banekartet på Smøla Golfklubb.',
    featuredCaption: 'Se flere bilder fra anlegget',
  },
  booking: {
    title: 'Slik fungerer det',
    description: 'Det skal være enkelt å bruke anlegget, enten du kommer for en runde, vil bli medlem eller ønsker å prøve golf for første gang.',
    ctaLabel: 'Ta kontakt',
    steps: [
      {
        label: 'Skal du spille banen?',
        detail: 'Banen er åpen hver dag. Se greenfee og medlemspriser før du drar, og bruk greenfeebua ved anlegget for praktisk informasjon.',
      },
      {
        label: 'Vil du lære eller trene?',
        detail: 'Klubben arrangerer kurs i løpet av sommeren ved nok påmeldte og har både driving range og utleie av golfsett.',
      },
      {
        label: 'Vil du bli med i miljøet?',
        detail: 'Det er faste sosiale runder, seniorgolf, seriespill og åpne turneringer gjennom sesongen.',
      },
    ],
    notes: [
      {
        title: 'Før du kommer',
        text: 'Banen ligger i Dyrnesdalen på vestsiden av Smøla og er kjent for å være beskyttet mot vær og vind.',
      },
      {
        title: 'Banen og anlegget',
        text: 'Alle hull har både rødt og gult utslag, og det finnes benker ved alle utslag. Banekart og slopetabell er tilgjengelig ved anlegget.',
      },
      {
        title: 'Utstyr og service',
        text: 'Klubben kan leie ut golfsett, og golfbil kan brukes av spillere med nedsatt førlighet. Kiosken holder åpent under arrangementer.',
      },
    ],
  },
  partners: {
    title: 'Våre partnere',
    description: 'Smøla Golfklubb samarbeider med lokale og regionale aktører som bidrar til aktivitet og drift rundt klubben.',
  },
  contact: {
    sectionLabel: 'Smøla Golfklubb',
    title: 'Kontakt og beliggenhet',
    subtitle: 'Dyrnes på Smøla, med kort vei ut til en naturskjønn bane ytterst i havgapet.',
    area: {
      label: 'Område',
      value: 'Dyrnes, Smøla',
    },
    phone: {
      label: 'Telefon',
      value: '+47 413 14 214',
    },
    email: {
      label: 'E-post',
      value: 'post@smolagolfklubb.no',
    },
    mapCard: {
      eyebrow: 'Smøla / Dyrnes',
      title: 'Finn veien til banen',
      description: 'Smøla Golfklubb ligger i Dyrnesdalen på Smøla, i lune omgivelser med enkel adkomst til anlegget.',
      ctaLabel: 'Åpne i Google Maps',
      ctaHref: 'https://www.google.com/maps/search/?api=1&query=Dyrnes%2C+Sm%C3%B8la%2C+Norway',
    },
  },
  footer: {
    ctaLabel: 'Se priser og info',
    ctaHref: '#pricing',
    copyright: '© 2026 Smøla Golfklubb',
    description: '9-hulls golfbane og klubbmiljø i Dyrnes på Smøla.',
  },
};
