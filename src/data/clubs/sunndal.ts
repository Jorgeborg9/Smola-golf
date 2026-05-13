import type { GolfClubData } from './types';

export const sunndalClubData: GolfClubData = {
  club: {
    name: 'Sunndal Golfklubb',
    location: 'Sunndalsøra, Sunndal',
    socialHref: 'https://www.facebook.com/search/top?q=Sunndal%20Golfklubb',
    logo: {
      src: '/images/Sunndal/Sunndal%20logo.png',
      alt: 'Sunndal Golfklubb',
    },
  },
  seo: {
    title: 'Sunndal Golfklubb',
    description:
      'Sunndal Golfklubb ved Sunndalsøra byr på 6-hulls bane rundt Pollen, driving range, rimelige medlemskap og golf mellom fjell og fjord.',
  },
  media: {
    heroImage: '/images/Sunndal/Sunndal%20hero.jpg',
    mapImage: '/images/Sunndal/Map.png',
    aboutImage: {
      src: '/images/Sunndal/sunndal%20course-2.jpg',
      alt: 'Sunndal Golfklubb i landskapet ved Pollen',
    },
    gallery: [
      {
        src: '/images/Sunndal/sunndal%20course-1.png',
        alt: 'Baneområde hos Sunndal Golfklubb',
      },
      {
        src: '/images/Sunndal/sunndal%20course-2.jpg',
        alt: 'Golfbanen ved Pollen i Sunndal',
      },
      {
        src: '/images/Sunndal/sunndal%20course-3.jpg',
        alt: 'Spill i naturskjønne omgivelser hos Sunndal Golfklubb',
      },
      {
        src: '/images/Sunndal/sunndal%20course-4.png',
        alt: 'Utsikt over anlegget hos Sunndal Golfklubb',
      },
      {
        src: '/images/Sunndal/sunndal%20course-5.png',
        alt: 'Green og baneprofil hos Sunndal Golfklubb',
      },
      {
        src: '/images/Sunndal/Sunndal%20hero.jpg',
        alt: 'Oversiktsbilde fra Sunndal Golfklubb',
      },
    ],
    partners: [],
  },
  hero: {
    eyebrow: 'SUNNDAL GOLFKLUBB',
    title: 'Golf mellom fjell og fjord',
    subtitle:
      'Sunndal Golfklubb ligger ved Pollen nær Sunndalsøra og kombinerer 6-hulls bane, driving range og et sosialt klubbmiljø i storslått natur.',
    statusCards: [
      {
        title: '6-hulls bane',
        status: 'open',
        statusLabel: 'Åpen nå',
        detail: 'Rundt idylliske Pollen',
      },
      {
        title: 'Driving range',
        status: 'open',
        statusLabel: 'Åpen nå',
        detail: 'Naturskjønne omgivelser',
      },
    ],
    primaryCta: {
      label: 'Se praktisk info',
      href: '#practical',
    },
    secondaryCta: {
      label: 'Kontakt klubben',
      href: '#contact',
    },
  },
  reviews: {
    sectionLabel: 'Sunndal Golfklubb',
    title: 'Google-anmeldelser',
    subtitle: 'Et utvalg Google-anmeldelser fra gjester og besøkende hos Sunndal Golfklubb.',
    summaryLabel: 'Google',
    summaryScore: '3,6/5',
    linkLabel: '8 anmeldelser',
    linkHref: 'https://www.google.com/maps/search/?api=1&query=Sunndal%20Golfklubb',
    cards: [
      {
        name: 'maria xavier',
        rating: 5,
        quote: '',
        sourceLabel: 'Google-anmeldelse',
      },
      {
        name: 'Gunnar Willy Jensen',
        rating: 4,
        quote: '',
        sourceLabel: 'Google-anmeldelse',
      },
      {
        name: 'Siw Lundquist',
        rating: 5,
        quote: '',
        sourceLabel: 'Google-anmeldelse',
      },
      {
        name: 'Aleksander Xavier',
        rating: 5,
        quote: '',
        sourceLabel: 'Google-anmeldelse',
      },
      {
        name: 'Lars Hurlen',
        rating: 5,
        quote: '',
        sourceLabel: 'Google-anmeldelse',
      },
    ],
  },
  aboutCourse: {
    sectionLabel: 'Sunndal Golfklubb',
    title: 'Golfklubben ved Pollen',
    subtitle:
      'Sunndal Golfklubb ble etablert i 1999 og holder til et par kilometer vest for Sunndalsøra, omgitt av fjell, vann og grønn natur.',
    body: [
      'Banen ligger på Trædal gård ved idylliske Pollen og gir en kompakt, men variert golfrunde i et landskap som gjør besøket til mer enn bare en score på kortet.',
      'Klubben er liten og dugnadsdrevet, med et sosialt og lokalt miljø der turneringer, felles innsats og lave terskler er en viktig del av opplevelsen.',
      'Sunndal Golfklubb har i mange år profilert seg på rimelige medlemskap, og kombinerer nærhet til Sunndalsøra med golf i storslått natur mellom fjell og fjord.',
    ],
    pills: [
      'Etablert i 1999',
      '6-hulls bane ved Pollen',
      'Nær Sunndalsøra',
      'Sosialt klubbmiljø',
    ],
  },
  facilities: {
    sectionLabel: 'Sunndal Golfklubb',
    title: 'Fasiliteter på anlegget',
    subtitle:
      'Et oversiktlig anlegg med bane, treningsmuligheter og et klubbmiljø som gjør det enkelt å komme tilbake.',
    cards: [
      {
        label: 'Bane',
        title: '6 hull i naturskjønne omgivelser',
        intro:
          'Banen slynger seg rundt Pollen og kombinerer korte par 3-hull med mer krevende hull der både vann, bunkere og smale fairwayer er i spill.',
        bullets: [
          '6 hull rundt Pollen',
          'Par 20 per runde',
          'Kan spilles i flere runder for 12 eller 18 hull',
        ],
        icon: 'clubhouse',
      },
      {
        label: 'Trening',
        title: 'Driving range og nærspill',
        intro:
          'Anlegget har driving range og treningsområde for nærspill for deg som vil varme opp, trene teknikk eller komme i gang med golf.',
        bullets: [
          'Driving range',
          'Treningsområde for nærspill',
          'Veien til golf-tilbud for nye spillere',
        ],
        icon: 'range',
      },
      {
        label: 'Klubbmiljø',
        title: 'Dugnad, turneringer og lav terskel',
        intro:
          'Sunndal Golfklubb er kjent for et jordnært klubbmiljø med sosiale aktiviteter, turneringer og fokus på å holde terskelen lav for nye medlemmer.',
        bullets: [
          'Lokalt og sosialt golfmiljø',
          'Turneringer og aktivitet gjennom sesongen',
          'Rimelige medlemskap for lokale og fjernmedlemmer',
        ],
        icon: 'access',
      },
    ],
  },
  news: {
    sectionLabel: 'Sunndal Golfklubb',
    title: 'Siste nytt fra klubben',
    subtitle: 'Sesongnytt, aktivitet og tilbud for både medlemmer og nye golfere.',
    items: [
      {
        badge: 'Sesongstart',
        dateLabel: 'Mars 2026',
        title: 'Banen er åpen',
        text:
          'Etter åpningsdugnad 11. mars meldte klubben at banen var klar for spill. Medlemmene gjorde anlegget i stand, og ny sesong kunne starte tidlig i Sunndal.',
        linkLabel: 'Se praktisk info',
        linkHref: '#practical',
        image: {
          src: '/images/Sunndal/sunndal%20course-4.png',
          alt: 'Banen hos Sunndal Golfklubb ved sesongstart',
        },
      },
      {
        badge: 'Aktivitet',
        dateLabel: 'GolfBox',
        title: 'Turneringer og klubbspill gjennom sesongen',
        text:
          'Klubben legger turneringer ut i GolfBox, og turneringsoversikten viser blant annet parturneringer, Sunndal Open og klubbmesterskap som en del av sesongen.',
        linkLabel: 'Se besøk',
        linkHref: '#booking',
        image: {
          src: '/images/Sunndal/sunndal%20course-1.png',
          alt: 'Klubbaktivitet på banen hos Sunndal Golfklubb',
        },
      },
      {
        badge: 'Nye golfere',
        dateLabel: 'Veien til golf',
        title: 'Lav terskel for å komme i gang',
        text:
          'Klubben viderefører Veien til golf-tilbudet. VTG-kurs er priset til 1 000 kroner og inkluderer kurs, medlemskap og spillerett ut året.',
        linkLabel: 'Kontakt klubben',
        linkHref: '#contact',
        image: {
          src: '/images/Sunndal/sunndal%20course-3.jpg',
          alt: 'Golfmiljø for nye spillere i Sunndal',
        },
      },
    ],
  },
  playOrTrain: {
    sectionLabel: 'Sunndal Golfklubb',
    title: 'Praktisk info',
    subtitle: '',
    cards: [
      {
        eyebrow: 'Banen',
        title: '6-hulls banen ved Pollen',
        status: 'open',
        statusLabel: 'Åpen nå',
        hours: 'Banen ligger et par kilometer vest for Sunndalsøra',
        greenkeeperComment: {
          title: 'Om banen',
          text:
            'Sunndal Golfklubb har en slopet 6-hulls bane med smale fairwayer, bunkere og vann i spill. Banen kan spilles i flere runder for en lengre golfdag.',
        },
        groups: [
          {
            title: 'Banefakta',
            points: [
              '6 hull rundt idylliske Pollen',
              'Par 20 per runde',
              'Par 60 over tre runder',
              'Smale fairwayer, bunkere og vannhinder gir variasjon',
              'Egner seg både for nybegynnere og erfarne spillere',
            ],
          },
        ],
        cta: {
          label: 'Finn veien til banen',
          href: '#contact',
        },
        variant: 'course',
      },
      {
        eyebrow: 'Trening og ny i golf',
        title: 'Driving range og Veien til golf',
        status: 'open',
        statusLabel: 'Åpen nå',
        hours: 'Treningstilbud på anlegget',
        greenkeeperComment: {
          title: 'For nye spillere',
          text:
            'Driving range og nærspillsområde gjør det enkelt å starte rolig. Klubben tilbyr også Veien til golf for deg som vil inn i sporten på en enkel måte.',
        },
        groups: [
          {
            title: 'På anlegget',
            points: [
              'Driving range',
              'Treningsområde for nærspill',
              'Turneringer og klubbspill legges ut i GolfBox',
            ],
          },
          {
            title: 'Nybegynnere',
            points: [
              'Veien til golf-kurs koster 1 000 kroner',
              'Kurset inkluderer medlemskap og spillerett ut året',
              'Send bevis på godkjent kurs eller tidligere medlemsnummer til klubben ved innmelding',
            ],
          },
        ],
        cta: {
          label: 'Kontakt klubben',
          href: '#contact',
        },
        variant: 'range',
      },
    ],
  },
  pricing: {
    sectionLabel: 'Sunndal Golfklubb',
    title: 'Priser og medlemskap',
    subtitle:
      'Prisene er hentet fra klubbens medlemskapsside og årsmøtereferat. Sunndal Golfklubb profilerer seg fortsatt som en av de rimeligste golfklubbene i landet.',
    play: {
      title: 'Greenfee og nybegynnertilbud',
      items: [
        {
          label: 'Greenfee voksen',
          sublabel: 'Dagskort',
          price: '200 kr',
        },
        {
          label: 'Greenfee junior',
          sublabel: 'Dagskort',
          price: '50 kr',
        },
        {
          label: 'Veien til golf',
          sublabel: 'Kurs, medlemskap og spillerett ut året',
          price: '1 000 kr',
        },
      ],
      note:
        'Innmelding skjer via skjema på klubbens nettside. Klubben opplyser at nye medlemmer får faktura, og at bevis på godkjent VTG-kurs eller tidligere medlemsnummer skal sendes til post@sunndal-golfklubb.no.',
    },
    membership: {
      title: 'Medlemskap og spillerett 2026',
      items: [
        {
          label: 'Lokalt medlem senior',
          sublabel: 'Årskontingent',
          price: '1 030 kr',
        },
        {
          label: 'Lokalt medlem junior',
          sublabel: 'Årskontingent',
          price: '530 kr',
        },
        {
          label: 'Fjernmedlem senior',
          sublabel: 'Årskontingent',
          price: '780 kr',
        },
        {
          label: 'Fjernmedlem junior',
          sublabel: 'Årskontingent uten Norsk Golf',
          price: '430 kr',
        },
        {
          label: 'Spillerett lokalt senior',
          sublabel: 'Utendørs spillerett',
          price: '1 530 kr',
        },
        {
          label: 'Spillerett junior lokalt',
          sublabel: 'Utendørs spillerett',
          price: '730 kr',
        },
      ],
      infoTitle: 'Praktisk ved innmelding',
      infoLines: [
        'Fjernmedlemmer senior betaler 1 880 kr med spillerett, og fjernmedlemmer junior 880 kr med spillerett.',
        'Medlemmer av andre klubber betaler 2 030 kr for senior og 1 330 kr for junior/student med spillerett.',
        'Utmelding må skje skriftlig innen 31.12. dersom medlemskapet ikke skal fortsette neste sesong.',
      ],
    },
  },
  gallery: {
    sectionLabel: 'Sunndal Golfklubb',
    title: 'Fra banen',
    subtitle: 'Glimt fra anlegget, terrenget rundt Pollen og golfmiljøet i Sunndal.',
    featuredCaption: 'Se mer fra Sunndal Golfklubb',
  },
  booking: {
    sectionLabel: 'Sunndal Golfklubb',
    title: 'Besøk klubben eller kom i gang med golf',
    subtitle:
      'Sunndal Golfklubb gjør det enkelt å prøve banen, melde seg inn eller starte med golf i et lite og inkluderende klubbmiljø.',
    cta: {
      label: 'Kontakt klubben',
      href: '#contact',
    },
    steps: [
      {
        label: 'Vil du spille banen?',
        detail:
          'Banen ved Pollen kan spilles som en rask 6-hullsrunde eller i flere runder for 12 eller 18 hull. Kontakt klubben hvis du vil ha oppdatert informasjon før besøket.',
      },
      {
        label: 'Vil du bli medlem?',
        detail:
          'Innmelding skjer via klubbens skjema på nettsiden. Sunndal Golfklubb tilbyr både lokale medlemskap og rimelige fjernmedlemskap.',
      },
      {
        label: 'Vil du begynne med golf?',
        detail:
          'Veien til golf-kurs koster 1 000 kroner og inkluderer kurs, medlemskap og spillerett ut året for nye spillere.',
      },
    ],
    notes: [
      {
        title: 'Beliggenhet',
        text: 'Golfbanen ligger på Trædal gård ved Pollen, et par kilometer vest for Sunndalsøra sentrum.',
      },
      {
        title: 'Klubbmiljø',
        text: 'Klubben er dugnadsdrevet og har et sosialt miljø der turneringer, felles aktivitet og lave terskler står sentralt.',
      },
      {
        title: 'Turneringer',
        text: 'Mer detaljert informasjon om klubbspill og turneringsformater blir lagt ut i GolfBox gjennom sesongen.',
      },
    ],
  },
  partners: {
    sectionLabel: '',
    title: '',
    subtitle: '',
  },
  contact: {
    sectionLabel: 'Sunndal Golfklubb',
    title: 'Kontakt og beliggenhet',
    subtitle:
      'Sunndal Golfklubb holder til ved Pollen på Trædal gård, med kort vei fra Sunndalsøra og fjellandskapet tett på hele anlegget.',
    area: {
      label: 'Adresse',
      value: 'Trædal gård, 6601 Sunndalsøra',
    },
    phone: {
      label: 'Telefon',
      value: '413 72 849',
    },
    email: {
      label: 'E-post',
      value: 'post@sunndal-golfklubb.no',
    },
    mapCard: {
      eyebrow: 'Sunndal / Pollen',
      title: 'Finn veien til banen',
      description:
        'Fra Sunndalsøra tar du av fra riksvei 62 mot Aursjøvegen. Etter noen hundre meter er det skiltet til golfbanen ved Pollen.',
      cta: {
        label: 'Finn veien til banen',
        href: 'https://www.google.com/maps/search/?api=1&query=Tr%C3%A6dal%20g%C3%A5rd%2C%206601%20Sunndals%C3%B8ra',
      },
    },
  },
  footer: {
    cta: {
      label: 'Kontakt klubben',
      href: '#contact',
    },
    copyright: '© 2026 Sunndal Golfklubb',
    description: '6-hulls bane, driving range og sosialt klubbmiljø ved Pollen nær Sunndalsøra.',
  },
};
