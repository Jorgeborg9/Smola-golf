import type { GolfClubData } from './types';

export const bleikClubData: GolfClubData = {
  club: {
    name: 'Bleik Golfstrømbane',
    location: 'Bleik, Andøya',
    socialHref: 'https://www.facebook.com/',
    logo: {
      src: '/images/Bleik/Logo%20bleik.png',
      alt: 'Bleik Golfstrømbane',
    },
  },
  seo: {
    title: 'Bleik Golfstrømbane',
    description:
      'Bleik Golfstrømbane på Andøya er en unik 9-hulls linksbane ved Bleikstranda med havutsikt, fjell og golf i midnattssol.',
  },
  media: {
    heroImage: '/images/Bleik/Hero-bleik.png',
    mapImage: '/images/Bleik/Bleik%20-%20course%205.png',
    aboutImage: {
      src: '/images/Bleik/Bleik%20-%20course%202.png',
      alt: 'Golf ved hav og fjell på Bleik Golfstrømbane',
    },
    gallery: [
      {
        src: '/images/Bleik/Bleik%20-%20course%201.png',
        alt: 'Linksbane ved Bleikstranda',
      },
      {
        src: '/images/Bleik/Bleik%20-%20course%202.png',
        alt: 'Bane og omgivelser ved Bleik Golfstrømbane',
      },
      {
        src: '/images/Bleik/Bleik%20-%20course%203.png',
        alt: 'Golfanlegg på Andøya',
      },
      {
        src: '/images/Bleik/Bleik%20-%20course%204.png',
        alt: 'Driving range og anlegg på Bleik',
      },
      {
        src: '/images/Bleik/Bleik%20-%20course%205.png',
        alt: 'Golfopplevelse ved kysten på Andøya',
      },
      {
        src: '/images/Bleik/Hero-bleik.png',
        alt: 'Oversiktsbilde fra Bleik Golfstrømbane',
      },
    ],
    partners: [],
  },
  hero: {
    eyebrow: 'BLEIK GOLFSTRØMBANE',
    title: 'Golf mellom hav og fjell',
    subtitle:
      'En unik 9-hulls linksbane ved Bleikstranda på Andøya med spektakulær utsikt, midnattssol og golfopplevelser utenom det vanlige.',
    statusCards: [
      {
        title: '9-hulls linksbane',
        status: 'open',
        statusLabel: 'Åpen nå',
        detail: 'Linksbanen ved Bleikstranda',
      },
      {
        title: 'Driving range',
        status: 'open',
        statusLabel: 'Åpen nå',
        detail: '',
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
    sectionLabel: 'Bleik Golfstrømbane',
    title: 'Google-anmeldelser',
    subtitle: 'Et utvalg korte inntrykk som beskriver opplevelsen av banen og beliggenheten.',
    summaryLabel: 'Google',
    summaryScore: '4,7/5',
    linkLabel: '38 anmeldelser',
    linkHref: 'https://www.google.com/',
    cards: [
      {
        name: 'Harald Pedersen',
        rating: 5,
        quote: 'En unik golfbane',
        sourceLabel: 'Google-anmeldelse',
      },
      {
        name: 'Stein Hansen',
        rating: 5,
        quote: 'Praktfullt',
        sourceLabel: 'Google-anmeldelse',
      },
      {
        name: 'Reidar Karoliussen',
        rating: 5,
        quote: 'Bleik er en fantastisk landsby og banen har en helt unik beliggenhet.',
        sourceLabel: 'Google-anmeldelse',
      },
      {
        name: 'Frode Bugge',
        rating: 5,
        quote: 'Velstelt, magisk utsikt, variert vanskelighetsgrad og herlige omgivelser',
        sourceLabel: 'Google-anmeldelse',
      },
    ],
  },
  aboutCourse: {
    sectionLabel: 'Bleik Golfstrømbane',
    title: 'Om banen',
    subtitle:
      'Bleik Golfstrømbane ligger ved Bleikstranda på Andøya og byr på en særegen golfopplevelse mellom hav, strand og fjell.',
    body: [
      'Bleik Golfstrømbane er en 9-hulls linksbane med driving range og klubbhus, plassert i et landskap som gjør runden til noe mer enn bare golf.',
      'Banen ligger ved Bleikstranda på Andøya og er kjent for den spektakulære beliggenheten mellom hav, strand og markante fjellformasjoner.',
      'Klubben er dugnadspreget og har et rolig, vennlig miljø rundt anlegget, med midnattssol om sommeren som en ekstra dimensjon ved besøket.',
    ],
    pills: [
      '9-hulls linksbane',
      'Bleikstranda på Andøya',
      'Driving range og klubbhus',
      'Midnattssol om sommeren',
    ],
  },
  facilities: {
    sectionLabel: 'Bleik Golfstrømbane',
    title: 'Fasiliteter på anlegget',
    subtitle: 'Anlegget kombinerer golf, trening og en rolig klubbopplevelse i særegne omgivelser.',
    cards: [
      {
        label: 'Bane',
        title: '9 hull ved havet',
        intro:
          'Banen er linksinspirert og gir en særpreget golfopplevelse i åpent kystlandskap med nærhet til både strand og fjell.',
        bullets: [
          '9 hull ved havet',
          'Links-inspirert bane',
          'Naturnær spillopplevelse ved Bleikstranda',
        ],
        icon: 'clubhouse',
      },
      {
        label: 'Trening',
        title: 'Driving range og treningsområde',
        intro:
          'Driving range og treningsområde gjør det enkelt å varme opp, trene og bruke anlegget også uten å spille full runde.',
        bullets: [
          'Driving range',
          'Treningsområde',
          'Ca. 240 meter treningsområde',
        ],
        icon: 'range',
      },
      {
        label: 'Klubbmiljø',
        title: 'Klubbhus, utleie og servering',
        intro:
          'Klubbhuset og tilbudene rundt banen gjør besøket enklere både for gjester og medlemmer.',
        bullets: [
          'Klubbhus ved anlegget',
          'Utleie av utstyr',
          'Kafé / enkel servering',
        ],
        icon: 'access',
      },
    ],
  },
  news: {
    sectionLabel: 'Bleik Golfstrømbane',
    title: 'Siste nytt fra klubben',
    subtitle: 'Klubbnytt, sesonginformasjon og aktivitet fra Bleik Golfstrømbane.',
    items: [
      {
        badge: 'Sesongstart',
        dateLabel: 'Mai 2026',
        title: 'Banen er åpen',
        text:
          'Bleik Golfstrømbane meldte at banen åpnet for sesongen torsdag 7. mai, og ønsket både nye og gamle medlemmer og gjestespillere velkommen.',
        linkLabel: 'Se praktisk info',
        linkHref: '#practical',
        image: {
          src: '/images/Bleik/Bleik%20-%20course%203.png',
          alt: 'Banen på Bleik Golfstrømbane',
        },
      },
      {
        badge: 'Klubbnytt',
        dateLabel: 'April 2026',
        title: 'Driving rangen utvides',
        text:
          'Klubben utvider driving rangen i år. Lengden økes til ca. 240 meter, slik at treningsområdet blir enda bedre for både oppvarming og øving.',
        linkLabel: 'Se praktisk info',
        linkHref: '#practical',
        image: {
          src: '/images/Bleik/Bleik%20-%20course%204.png',
          alt: 'Driving range på Bleik Golfstrømbane',
        },
      },
      {
        badge: 'Kurs',
        dateLabel: 'Juni',
        title: 'Veien til golf-kurs',
        text:
          'Klubben arrangerer nybegynnerkurs gjennom Veien til golf for spillere som ønsker å komme i gang med golf.',
        linkLabel: 'Kontakt klubben',
        linkHref: '#contact',
        image: {
          src: '/images/Bleik/Bleik%20-%20course%202.png',
          alt: 'Golfmiljø på Bleik Golfstrømbane',
        },
      },
    ],
  },
  playOrTrain: {
    sectionLabel: 'Bleik Golfstrømbane',
    title: 'Praktisk info',
    subtitle: '',
    cards: [
      {
        eyebrow: 'Banen',
        title: 'Banen',
        status: 'open',
        statusLabel: 'Åpen nå',
        hours: '9-hulls linksbane ved Bleikstranda',
        greenkeeperComment: {
          title: 'Om banen',
          text:
            'Bleik Golfstrømbane er en links-inspirert bane i naturnære omgivelser med hav, strand og fjell som en tydelig del av opplevelsen.',
        },
        groups: [
          {
            title: 'Banefakta',
            points: [
              '9-hulls linksbane',
              'Par 35',
              'Links-inspirert bane ved Bleikstranda',
              'Naturnær bane med hav, strand og fjell rundt anlegget',
              'Spilletid ca. 2–3 timer',
              'Banen er normalt spillbar fra tidlig mai til oktober',
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
        eyebrow: 'Driving range og besøk',
        title: 'Driving range og besøk',
        status: 'open',
        statusLabel: 'Åpen nå',
        hours: 'Treningstilbud ved banen',
        greenkeeperComment: {
          title: 'Om besøket',
          text:
            'Anlegget har treningsmuligheter og fasiliteter som gjør det enkelt å kombinere en runde med oppvarming, trening og et rolig opphold på stedet.',
        },
        groups: [
          {
            title: 'På anlegget',
            points: [
              'Driving range på ca. 240 meter',
              'Treningsområde',
              'Klubbhus ved anlegget',
              'Utleie av golfutstyr',
              'Kafé / enkel servering der det er tilgjengelig',
              'Kontakt klubben for oppdatert informasjon før besøk',
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
    sectionLabel: 'Bleik Golfstrømbane',
    title: 'Priser og medlemskap',
    subtitle:
      'Prisene under er hentet fra tilgjengelig informasjon. Kontakt klubben ved spørsmål eller for oppdatert bekreftelse før besøk.',
    play: {
      title: 'Greenfee og betaling',
      items: [
        {
          label: 'Greenfee',
          sublabel: 'Greenfee per dag',
          price: '250 kr',
        },
        {
          label: 'Vipps',
          sublabel: 'Betaling til nummer',
          price: '13127',
        },
      ],
      note:
        'Betal med kortautomat dersom kaféen er åpen. Hvis du ikke har Vipps: ta en konvolutt i klubbhuset, fyll ut slippen, signer og legg greenfee i konvolutten.',
    },
    membership: {
      title: 'Medlemskap og spillerettigheter',
      items: [
        {
          label: 'Full spillerettigheter',
          sublabel: 'Ordinært medlemskap',
          price: '2 200 kr',
        },
        {
          label: 'Familiemedlem ektefelle/samboer',
          sublabel: 'Medlemskap',
          price: '1 200 kr',
        },
        {
          label: 'Junior 16–19 år',
          sublabel: 'Medlemskap',
          price: '800 kr',
        },
        {
          label: 'Barn 10–15 år',
          sublabel: 'Medlemskap',
          price: '200 kr',
        },
        {
          label: 'Pensjonist',
          sublabel: 'Medlemskap',
          price: '1 500 kr',
        },
        {
          label: 'Student',
          sublabel: 'Medlemskap',
          price: '1 500 kr',
        },
        {
          label: 'Støttemedlem',
          sublabel: 'Medlemskap',
          price: '500 kr',
        },
        {
          label: 'Medlemskap Høken obligatorisk',
          sublabel: 'Obligatorisk tillegg',
          price: '100 kr',
        },
      ],
      infoTitle: 'Praktisk betaling',
      infoLines: [
        'Vipps til 13127.',
        'Betal med kortautomat dersom kaféen er åpen.',
        'Hvis du ikke har Vipps: ta en konvolutt i klubbhuset, fyll ut slippen, signer og legg greenfee i konvolutten.',
      ],
    },
  },
  gallery: {
    sectionLabel: 'Bleik Golfstrømbane',
    title: 'Fra anlegget',
    subtitle: 'Glimt fra banen, landskapet og golfopplevelsen ved Bleikstranda.',
    featuredCaption: 'Se mer fra Bleik Golfstrømbane',
  },
  booking: {
    sectionLabel: 'Bleik Golfstrømbane',
    title: 'Slik fungerer det',
    subtitle:
      'Bleik Golfstrømbane kombinerer naturopplevelse, golf og et rolig klubbmiljø. Ta kontakt med klubben for oppdatert informasjon før besøket.',
    cta: {
      label: 'Kontakt klubben',
      href: '#contact',
    },
    steps: [
      {
        label: 'Vil du spille banen?',
        detail:
          'Ta kontakt med klubben for praktisk informasjon om spill, besøk og tilgjengelighet på banen gjennom sesongen.',
      },
      {
        label: 'Vil du trene eller leie utstyr?',
        detail:
          'Driving range, treningsområde og utleie av golfutstyr gjør det enkelt å bruke anlegget også for korte økter.',
      },
      {
        label: 'Vil du delta på kurs?',
        detail:
          'Klubben arrangerer Veien til golf-kurs for spillere som ønsker å komme i gang med golf.',
      },
    ],
    notes: [
      {
        title: 'Beliggenhet',
        text: 'Bleik Golfstrømbane ligger ved Bleikstranda på Andøya med kort vei mellom hav, strand og fjellandskap.',
      },
      {
        title: 'Klubbmiljø',
        text: 'Klubben er dugnadspreget og kjent for et vennlig og rolig miljø rundt banen.',
      },
      {
        title: 'Fasiliteter',
        text: 'Anlegget har driving range, treningsområde, klubbhus, utleie av utstyr og enkel servering når det er tilgjengelig.',
      },
    ],
  },
  partners: {
    sectionLabel: '',
    title: '',
    subtitle: '',
  },
  contact: {
    sectionLabel: 'Bleik Golfstrømbane',
    title: 'Kontakt og beliggenhet',
    subtitle:
      'Bleik Golfstrømbane ligger ved Bleikstranda på Andøya og byr på en golfopplevelse i åpne landskap med hav, strand og fjell som nærmeste naboer.',
    area: {
      label: 'Adresse',
      value: 'Golfstrømbanen, Bleik, Norway, 8481',
    },
    phone: {
      label: 'Telefon',
      value: '97 43 03 12',
    },
    email: {
      label: 'E-post',
      value: 'bleikgolf@gmail.com',
    },
    mapCard: {
      eyebrow: 'Bleik / Andøya',
      title: 'Finn veien til banen',
      description:
        'Kontakt klubben direkte eller følg Bleik Golfstrømbane på Facebook for mer informasjon om banen og besøket.',
      cta: {
        label: 'Finn veien til banen',
        href: 'https://www.google.com/maps/search/?api=1&query=Golfstr%C3%B8mbanen%2C+Bleik%2C+8481%2C+Norway',
      },
    },
  },
  footer: {
    cta: {
      label: 'Kontakt klubben',
      href: '#contact',
    },
    copyright: '© 2026 Bleik Golfstrømbane',
    description: '9-hulls linksbane ved Bleikstranda på Andøya med driving range, klubbhus og golf mellom hav og fjell.',
  },
};
