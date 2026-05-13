import type { GolfClubData } from './types';

// Copy this file when you want to create another real golf club demo with local wording and images.
export const vanylvenClubData: GolfClubData = {
  club: {
    name: 'Vanylven Golfklubb',
    location: 'Eidså, Vanylven',
    socialHref: 'https://www.facebook.com/profile.php?id=61575556493216',
    logo: {
      src: '/images/vanylven/Logo.png',
      alt: 'Vanylven Golfklubb',
    },
  },
  seo: {
    title: 'Vanylven Golfklubb',
    description:
      'Vanylven Golfklubb i Eidså med 9-hulls bane, driving range, klubbhus og lokalt golfmiljø.',
  },
  media: {
    heroImage: '/images/vanylven/Herobilde.png',
    mapImage: '/images/vanylven/Map.png',
    aboutImage: {
      src: '/images/vanylven/Bane 2.png',
      alt: 'Baneområde hos Vanylven Golfklubb',
    },
    gallery: [
      {
        src: '/images/vanylven/Bane 1.png',
        alt: 'Golfbane hos Vanylven Golfklubb',
      },
      {
        src: '/images/vanylven/Bane 2.png',
        alt: 'Bane og omgivelser på Eidså',
      },
      {
        src: '/images/vanylven/Bane 3.png',
        alt: 'Golfanlegg i Vanylven',
      },
      {
        src: '/images/vanylven/Bane 4.png',
        alt: 'Grønne omgivelser rundt banen',
      },
      {
        src: '/images/vanylven/Bane 5.png',
        alt: 'Anlegget hos Vanylven Golfklubb',
      },
      {
        src: '/images/vanylven/Herobilde.png',
        alt: 'Oversiktsbilde fra Vanylven Golfklubb',
      },
    ],
    partners: [],
  },
  hero: {
    eyebrow: 'Vanylven Golfklubb',
    title: 'Golf i vakre omgivelser på Eidså',
    subtitle:
      'Vanylven Golfklubb kombinerer 9-hulls bane, driving range og et lokalt golfmiljø i grønne omgivelser ved fjordlandskapet i Vanylven.',
    statusCards: [
      {
        title: 'Golfbane',
        status: 'open',
        statusLabel: 'Åpen',
        detail: '9-hulls bane i Eidså',
      },
      {
        title: 'Driving range',
        status: 'open',
        statusLabel: 'Åpen',
        detail: 'Treningsområde ved banen',
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
    sectionLabel: 'Vanylven Golfklubb',
    title: 'Google-anmeldelser',
    subtitle: 'Noen inntrykk fra Google-anmeldelser av Vanylven Golfklubb.',
    summaryLabel: 'Google',
    summaryScore: '5,0/5',
    linkLabel: 'Les mer',
    linkHref: 'https://www.vangolf.no/',
    cards: [
      {
        name: 'mathais chrobok',
        rating: 5,
        quote: 'a good place to play golf and you can come in on mondays for golf training',
        sourceLabel: 'Google',
      },
      {
        name: 'Google-bruker',
        rating: 5,
        quote: '',
        sourceLabel: 'Google',
      },
    ],
  },
  aboutCourse: {
    sectionLabel: 'Vanylven Golfklubb',
    title: 'Om banen',
    subtitle:
      'Dagens bane sto ferdig i 2023 og er en godkjent og slopet 9-hulls bane som gir variasjon på et kompakt anlegg.',
    body: [
      'Vanylven Golfklubb holder til i Eidså og har utviklet seg fra en 6-hulls bane etter oppstarten i 1998 til dagens 9-hulls anlegg.',
      'Banen har 9 hull fordelt på 4 greener, med 1 par 5-hull, 3 par 4-hull og 5 par 3-hull.',
      'Oppsettet gjør banen kompakt, men variert, og den er både godkjent og slopet.',
    ],
    pills: [
      '9 hull på 4 greener',
      '1 par 5, 3 par 4, 5 par 3',
      'Godkjent og slopet',
      'Klar i 2023',
    ],
  },
  facilities: {
    sectionLabel: 'Vanylven Golfklubb',
    title: 'Fasiliteter på anlegget',
    subtitle: 'Anlegget samler bane, treningsområde, klubbhus og nødvendig informasjon på ett sted.',
    cards: [
      {
        label: 'Bane',
        title: '9-hulls bane',
        intro:
          'Banen gir en kompakt, men variert golfopplevelse og er utformet med både korte og lengre hull.',
        bullets: [
          '9 hull fordelt på 4 greener',
          '1 par 5-hull, 3 par 4-hull og 5 par 3-hull',
          'Godkjent og slopet bane',
        ],
        icon: 'clubhouse',
      },
      {
        label: 'Trening',
        title: 'Driving range og introduksjon',
        intro:
          'Driving range er en del av anlegget og kan gjøres tilgjengelig med en kort innføring i golf.',
        bullets: [
          'Driving range ved banen',
          'Kort introduksjon til golf ved behov',
          'Køller og utstyr kan lånes ved behov',
        ],
        icon: 'range',
      },
      {
        label: 'Klubbhus',
        title: 'Klubbhus og praktisk info',
        intro:
          'Klubbhuset samler scorekort og informasjon, og kan også lånes eller leies til arrangement.',
        bullets: [
          'Scorekort og informasjon i klubbhuset',
          'Klubben kan arrangere kurs og trening for nye golfere',
          'Klubbhuset kan lånes eller leies til arrangement',
        ],
        icon: 'access',
      },
    ],
  },
  news: {
    sectionLabel: 'Vanylven Golfklubb',
    title: 'Siste nytt fra klubben',
    subtitle: 'Nyheter, aktivitet og sesonginformasjon fra Vanylven Golfklubb.',
    items: [
      {
        badge: 'Klubbnytt',
        dateLabel: '14. april',
        title: 'Nytt overbygg på driving rangen',
        text:
          'Vanylven Golfklubb markerte åpningen av det nye overbygget på driving rangen med åpen dag og turnering. Klubben takket også sponsorer og frivillige for bidragene til prosjektet.',
        linkLabel: 'Les mer',
        linkHref: '#booking',
        image: {
          src: '/images/vanylven/Bane 4.png',
          alt: 'Driving range hos Vanylven Golfklubb',
        },
      },
      {
        badge: 'Aktivitet',
        dateLabel: 'Torsdager kl. 18.00',
        title: 'Torsdagsgolfen starter opp',
        text:
          'Klubben inviterer til torsdagsgolf og aktivitet på banen gjennom sesongen. Et lavterskel tilbud for spillere som vil komme i gang eller spille mer golf.',
        linkLabel: 'Se praktisk info',
        linkHref: '#booking',
        image: {
          src: '/images/vanylven/Bane 1.png',
          alt: 'Baneaktivitet hos Vanylven Golfklubb',
        },
      },
      {
        badge: 'Sesonginfo',
        dateLabel: '29. oktober 2025',
        title: 'Sesongen går mot slutten',
        text:
          'Klubben informerte om at driving rangen og banen stenges for sesongen fra 1. november, og takket medlemmer, gjester og frivillige for et flott golfår i Vanylven.',
        linkLabel: 'Kontakt klubben',
        linkHref: '#contact',
        image: {
          src: '/images/vanylven/Bane 2.png',
          alt: 'Baneområde hos Vanylven Golfklubb',
        },
      },
    ],
  },
  playOrTrain: {
    sectionLabel: 'Vanylven Golfklubb',
    title: 'Praktisk info',
    subtitle: '',
    cards: [
      {
        eyebrow: 'Bane',
        title: '9-hulls banen',
        status: 'open',
        statusLabel: 'Åpen',
        hours: '9-hulls bane i Eidså',
        greenkeeperComment: {
          title: 'Om banen',
          text:
            'Banen sto ferdig i 2023 og er en godkjent og slopet 9-hulls bane med 4 greener og variert oppsett.',
        },
        groups: [
          {
            title: 'Banefakta',
            points: [
              '9 hull fordelt på 4 greener',
              '1 par 5-hull, 3 par 4-hull og 5 par 3-hull',
              'Kompakt bane med variasjon i spillet',
            ],
          },
          {
            title: 'Praktisk',
            points: [
              'Adresse: Syvdefjordvegen 24, 6140 Eidså',
              'Book starttid i GolfBox',
              'Betal med Vipps ved ankomst',
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
        eyebrow: 'Trening og klubbhus',
        title: 'Driving range og klubbtilbud',
        status: 'open',
        statusLabel: 'Åpen',
        hours: 'Treningsområde ved banen',
        greenkeeperComment: {
          title: 'Om tilbudet',
          text:
            'Klubben har driving range, klubbhus med scorekort og informasjon, og kan legge til rette for kurs og introduksjon til golf.',
        },
        groups: [
          {
            title: 'På anlegget',
            points: [
              'Driving range ved banen',
              'Scorekort og informasjon i klubbhuset',
              'Køller og utstyr kan lånes ved behov',
            ],
          },
          {
            title: 'Oppfølging og aktivitet',
            points: [
              'Klubben kan arrangere kurs og trening for nye golfere',
              'Driving range kan gjøres tilgjengelig med kort introduksjon',
              'Nyheter og oppdateringer deles i Gimmie',
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
    sectionLabel: 'Vanylven Golfklubb',
    title: 'Praktisk info og priser',
    subtitle:
      'Her finner du hovedpunktene for greenfee, medlemskap og spillerett. Sjekk vangolf.no for oppdatert informasjon og eventuelle endringer.',
    play: {
      title: 'Greenfee',
      items: [
        {
          label: 'Voksen',
          sublabel: 'Greenfee for én dag',
          price: '200 NOK',
        },
        {
          label: 'Junior',
          sublabel: 'Greenfee for én dag',
          price: '100 NOK',
        },
        {
          label: 'Barn t.o.m. 12 år',
          sublabel: 'Spill på banen',
          price: 'Gratis',
        },
      ],
      note: 'Sjekk vangolf.no for oppdatert informasjon om priser, besøk og bruk av anlegget.',
    },
    membership: {
      title: 'Medlemskap og spillerett',
      items: [
        {
          label: 'Voksne',
          sublabel: 'Medlemskap 1000 NOK + spillerett 1000 NOK',
          price: '2000 NOK',
        },
        {
          label: '13–19 år',
          sublabel: 'Medlemskap 500 NOK + spillerett 500 NOK',
          price: '1000 NOK',
        },
      ],
      infoTitle: 'Praktisk ved besøk',
      infoLines: [
        'Book starttid i GolfBox.',
        'Betal med Vipps når du kommer fram.',
        'Scorekort og informasjon finner du i klubbhuset.',
        'Klubben bruker Gimmie for nyheter og oppdateringer.',
      ],
    },
  },
  gallery: {
    sectionLabel: 'Vanylven Golfklubb',
    title: 'Fra anlegget',
    subtitle: 'Glimt fra banen, området rundt og golfmiljøet i Eidså.',
    featuredCaption: 'Se mer fra Vanylven Golfklubb',
  },
  booking: {
    sectionLabel: 'Vanylven Golfklubb',
    title: 'Slik fungerer det',
    subtitle:
      'Klubben legger til rette for både vanlige besøk, trening og nye golfere som vil bli bedre kjent med anlegget.',
    cta: {
      label: 'Kontakt Vanylven Golfklubb',
      href: '#contact',
    },
    steps: [
      {
        label: 'Vil du spille banen?',
        detail:
          'Book starttid i GolfBox før besøket. Greenfee blir betalt med Vipps når du kommer fram til anlegget.',
      },
      {
        label: 'Vil du trene eller prøve golf?',
        detail:
          'Driving range kan gjøres tilgjengelig med en kort introduksjon, og køller og utstyr kan lånes ved behov.',
      },
      {
        label: 'Vil du holde deg oppdatert?',
        detail:
          'Nyheter og oppdateringer fra klubben deles i Gimmie, og mer informasjon finner du også på vangolf.no.',
      },
    ],
    notes: [
      {
        title: 'Ved ankomst',
        text: 'Scorekort og praktisk informasjon er tilgjengelig i klubbhuset på anlegget.',
      },
      {
        title: 'Nye golfere',
        text: 'Klubben kan arrangere kurs og trening for nye golfere og hjelpe i gang med en kort innføring.',
      },
      {
        title: 'Arrangement',
        text: 'Klubbhuset kan lånes eller leies til arrangement etter nærmere avtale med klubben.',
      },
    ],
  },
  partners: {
    sectionLabel: '',
    title: '',
    subtitle: '',
  },
  contact: {
    sectionLabel: 'Vanylven Golfklubb',
    title: 'Kontakt og beliggenhet',
    subtitle:
      'Syvdefjordvegen 24 i Eidså, med anlegg i grønne omgivelser og kort vei til golfmiljøet i Vanylven.',
    area: {
      label: 'Adresse',
      value: 'Syvdefjordvegen 24, 6140 Eidså',
    },
    phone: {
      label: 'Telefon',
      value: '90473370',
    },
    email: {
      label: 'E-post',
      value: 'post@vangolf.no',
    },
    mapCard: {
      eyebrow: 'Vanylven / Eidså',
      title: 'Finn veien til banen',
      description:
        'Anlegget ligger på Eidså i Vanylven. På vangolf.no finner du kontaktinformasjon, klubbinformasjon og flere detaljer om besøket.',
      cta: {
        label: 'Les mer',
        href: 'https://www.vangolf.no/',
      },
    },
  },
  footer: {
    cta: {
      label: 'Kontakt klubben',
      href: 'https://www.vangolf.no/',
    },
    copyright: '© 2026 Vanylven Golfklubb',
    description: '9-hulls bane, driving range og klubbhus i Eidså, Vanylven.',
  },
};
