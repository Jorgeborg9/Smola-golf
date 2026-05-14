import type { GolfClubData } from './types';

export const strandaClubData: GolfClubData = {
  club: {
    name: 'Stranda Golfklubb',
    location: 'Stranda, Sunnmøre',
    socialHref: 'https://www.facebook.com/Strandagolfklubb/',
    logo: {
      src: '/images/Stranda/Stranda%20logo.jpg',
      alt: 'Stranda Golfklubb',
    },
  },
  seo: {
    title: 'Stranda Golfklubb',
    description:
      'Stranda Golfklubb byr på 9-hulls bane, ukentlige turneringer, golfsimulator og sosialt golfmiljø i naturskjønne omgivelser.',
  },
  media: {
    heroImage: '/images/Stranda/Stranda%20hero.png',
    mapImage: '/images/Stranda/Map.png',
    aboutImage: {
      src: '/images/Stranda/course-1.png',
      alt: 'Stranda Golfklubb i vestnorsk natur',
    },
    gallery: [
      {
        src: '/images/Stranda/course-1.png',
        alt: 'Baneutsikt hos Stranda Golfklubb',
      },
      {
        src: '/images/Stranda/course-2.png',
        alt: 'Stranda Golfklubb i grønne omgivelser',
      },
      {
        src: '/images/Stranda/course-3.png',
        alt: 'Golfspill på Stranda',
      },
      {
        src: '/images/Stranda/course-4.png',
        alt: 'Banen og landskapet hos Stranda Golfklubb',
      },
      {
        src: '/images/Stranda/course-2.png',
        alt: 'Golf og natur hos Stranda Golfklubb',
      },
      {
        src: '/images/Stranda/Stranda%20hero.png',
        alt: 'Oversiktsbilde fra Stranda Golfklubb',
      },
    ],
    partners: [
      {
        name: 'Holmberg Gartneri',
        logo: '/images/Stranda/Partner%201.png',
      },
      {
        name: 'Stranda Stålindustri AS',
        logo: '/images/Stranda/Partner%202.png',
      },
      {
        name: 'Stranda Anleggsservice',
        logo: '/images/Stranda/Partner%203.png',
      },
      {
        name: 'Sparebanken Møre',
        logo: '/images/Stranda/Partner%204.png',
      },
    ],
  },
  hero: {
    eyebrow: 'STRANDA GOLFKLUBB',
    title: 'Golf i vestnorsk natur',
    subtitle:
      'Stranda Golfklubb kombinerer en 9-hulls bane, sosialt klubbmiljø og aktivitet året rundt i et landskap med fjell, fjord og åpne daldrag.',
    statusCards: [
      {
        title: 'Stranda Golfklubb',
        status: 'open',
        statusLabel: 'Åpen',
        detail: '14 km fra Stranda sentrum',
      },
      {
        title: 'Golfsimulator',
        status: 'closed',
        statusLabel: 'Stengt',
        detail: 'Trackman og trening innendørs',
      },
    ],
    primaryCta: {
      label: '',
      href: '',
    },
    secondaryCta: {
      label: '',
      href: '',
    },
  },
  reviews: {
    sectionLabel: 'Stranda Golfklubb',
    title: 'Tilbakemeldinger',
    subtitle: 'Et lite utvalg tilbakemeldinger fra spillere og besøkende i Stranda Golfklubb.',
    summaryLabel: 'Google',
    summaryScore: '4,8/5',
    linkLabel: '13 anmeldelser',
    linkHref: 'https://www.google.com/maps/search/?api=1&query=Stranda%20Golfklubb',
    cards: [
      {
        name: 'Knut Aa.',
        rating: 5,
        quote: 'Igjen tusen takk for utrolig god service.',
        sourceLabel: 'Referanse fra nettsiden',
      },
      {
        name: 'Morten B.',
        rating: 5,
        quote: 'Takker for rask og hyggelig service.',
        sourceLabel: 'Referanse fra nettsiden',
      },
      {
        name: 'Wenche Ø.',
        rating: 5,
        quote: 'Takk igjen. Også i år kjempeservice!!',
        sourceLabel: 'Referanse fra nettsiden',
      },
    ],
  },
  aboutCourse: {
    sectionLabel: 'Om klubben',
    title: 'Om klubben',
    subtitle:
      'Stranda Golfklubb ble startet 18. september 1991 og har i dag hjemmebane i naturskjønne omgivelser utenfor Stranda sentrum.',
    body: [
      'Golfbanen ligger rundt 14 kilometer fra Stranda sentrum i retning Hellesylt og Stryn, og kombinerer 9 hull med utsikt mot vestnorsk landskap og rolige omgivelser rundt anlegget.',
      'Klubben legger stor vekt på det sosiale miljøet og har aktivitet gjennom hele sesongen med turneringer, spill, trening og felles klubbopplevelser.',
      'I vinterhalvåret fortsetter aktiviteten på golfsimulator, og klubben viser også til overnattingsmuligheter ved banen for dem som vil kombinere golf og opphold.',
    ],
    pills: [
      'Stiftet i 1991',
      '9 hull hos Stranda Golfklubb',
      'Sosialt klubbmiljø',
      'Simulator om vinteren',
    ],
  },
  facilities: {
    sectionLabel: 'Stranda Golfklubb',
    title: 'Bane, trening og klubbtilbud',
    subtitle: 'Klubben samler spill, turneringer, trening og vinteraktivitet i én og samme golfhverdag.',
    cards: [
      {
        label: 'Bane',
        title: '9 hull i naturskjønne omgivelser',
        intro:
          'Stranda Golfklubb sin hjemmebane gir en variert 9-hullsrunde i vestnorsk natur med nærhet til både fjell og fjordlandskap.',
        bullets: [
          '9-hulls golfbane',
          'Hjemmebane: Stranda Golfklubb',
          'Par 63 på herrenes slopetabell',
        ],
        icon: 'clubhouse',
      },
      {
        label: 'Aktivitet',
        title: 'Turneringer og simulator',
        intro:
          'Klubben har ukentlige tirsdagsturneringer i utesesongen og golfsimulator med Trackman gjennom vinterhalvåret.',
        bullets: [
          'Ukentlig tirsdagsturnering',
          'Golfsimulator med Trackman',
          'Trening og spill året rundt',
        ],
        icon: 'range',
      },
      {
        label: 'Miljø',
        title: 'Sosialt og lokalt golfmiljø',
        intro:
          'Stranda Golfklubb profilerer seg på trivsel, aktivitet og et inkluderende miljø for både lokale medlemmer og fjernmedlemmer.',
        bullets: [
          'Sosialt klubbmiljø',
          'Turneringer og klubbspill',
          'Overnatting ved banen',
        ],
        icon: 'access',
      },
    ],
  },
  news: {
    sectionLabel: 'Stranda Golfklubb',
    title: 'Siste nytt fra klubben',
    subtitle: 'Aktivitet, sesongoppdateringer og tilbud fra Stranda Golfklubb.',
    items: [
      {
        badge: 'Klubbaktivitet',
        dateLabel: 'Utesesongen',
        title: 'Tirsdagsturnering hver uke',
        text:
          'Klubben arrangerer ukentlig tirsdagsturnering gjennom utesesongen. Offisiell turneringsinfo oppgir shotgun-start klokken 17:00.',
        linkLabel: 'Les mer',
        linkHref: '#practical',
        image: {
          src: '/images/Stranda/course-2.png',
          alt: 'Turneringsdag hos Stranda Golfklubb',
        },
      },
      {
        badge: 'Vintertilbud',
        dateLabel: '2025 / 2026',
        title: 'Golfsimulator gjennom vinteren',
        text:
          'Stranda Golfklubb holder aktiviteten i gang også i vinterhalvåret med simulator, sesongkort og trening for både seniorer, juniorer og familier.',
        linkLabel: 'Les mer',
        linkHref: '#priser',
        image: {
          src: '/images/Stranda/simulator.png',
          alt: 'Klubbmiljø og aktivitet hos Stranda Golfklubb',
        },
      },
      {
        badge: 'Ny i golf',
        dateLabel: 'Veien til golf',
        title: 'Lav terskel for å komme i gang',
        text:
          'Klubben tilbyr Veien til golf-kurs med medlemskap og sesongkort på simulator inkludert i første året for nye spillere.',
        linkLabel: 'Les mer',
        linkHref: '#contact',
        image: {
          src: '/images/Stranda/course-3.png',
          alt: 'Golfopplevelse hos Stranda Golfklubb',
        },
      },
    ],
  },
  playOrTrain: {
    sectionLabel: 'Stranda Golfklubb',
    title: 'Praktisk info',
    subtitle: '',
    cards: [
      {
        eyebrow: 'Banen',
        title: 'Spill hos Stranda Golfklubb',
        status: 'open',
        statusLabel: 'Åpen',
        hours: 'Ca. 14 km fra Stranda sentrum mot Hellesylt og Stryn',
        greenkeeperComment: {
          title: 'Om besøket',
          text:
            'Golfbanen har normalt ikke behov for bestillingssystem. Greenfee gjelder for hele dagen, men tirsdager kan bli travlere under klubbturneringen.',
        },
        groups: [
          {
            title: 'Banefakta',
            points: [
              '9-hulls bane i vestnorsk natur',
              'Greenfee gjelder for en hel dag',
              'Minst én i flighten må ha fullført Veien til golf',
              'Medlemmer har fortrinnsrett under tirsdagsturnering',
            ],
          },
          {
            title: 'Veibeskrivelse',
            points: [
              'Omtrent et kvarters kjøring fra Stranda sentrum',
              'Kjør mot Hellesylt / Stryn',
              'Mange GPS-er finner best fram ved å søke på Stranda Golfklubb eller Dalevegen 1214',
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
        eyebrow: 'Trening og vinterspill',
        title: 'Turneringer, simulator og nye spillere',
        status: 'closed',
        statusLabel: 'Stengt nå',
        hours: 'Ukentlig aktivitet ute og inne',
        greenkeeperComment: {
          title: 'Om aktiviteten',
          text:
            'Klubben kombinerer ukentlig turneringsspill med simulatortrening om vinteren, og har lav terskel for nye medlemmer som vil i gang med golf. Simulatoraktiviteten er et vintersesongtilbud og vises derfor som inaktiv utenfor den delen av året.',
        },
        groups: [
          {
            title: 'Gjennom sesongen',
            points: [
              'Tirsdagsturnering hver uke i utesesongen',
              'Shotgun-start kl. 17:00 ifølge turneringsinfo',
              'Turneringen er åpen for alle',
            ],
          },
          {
            title: 'Vinter og nybegynnere',
            points: [
              'Golfsimulator med Trackman',
              'Veien til golf-kurs på simulator i vinterhalvåret',
              'Klubben tilbyr medlemskap for både lokale og fjernmedlemmer',
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
    sectionLabel: 'Stranda Golfklubb',
    title: 'Priser og medlemskap',
    subtitle:
      'Prisene under er satt opp fra klubbens publiserte medlems- og prisinformasjon for 2025 og 2026, med tydelig skille mellom bane, medlemskap og simulator.',
    play: {
      title: 'Greenfee og simulator',
      items: [
        {
          label: 'Greenfee senior',
          sublabel: 'Dagskort 2025',
          price: '300 kr',
        },
        {
          label: 'Greenfee barn / junior',
          sublabel: 'Dagskort 2025',
          price: '200 kr',
        },
        {
          label: 'Senior sesongkort bane',
          sublabel: '2025',
          price: '2400 kr',
        },
        {
          label: 'Junior sesongkort bane',
          sublabel: '2025',
          price: '1500 kr',
        },
        {
          label: 'Simulator senior',
          sublabel: '3 timer / sesongkort',
          price: '310 kr / 2500 kr',
        },
        {
          label: 'Simulator junior / student',
          sublabel: '3 timer / sesongkort',
          price: '190 kr / 1500 kr',
        },
      ],
      note:
        'Fra 1. august er greenfee-sesongkort til banen oppgitt til halv pris: 1200 kr for senior og 750 kr for barn/junior. Simulatoren har også familiepris på 3600 kr for 1 voksen + 1 junior og 7100 kr for 2 voksne + 2 juniorer.',
    },
    membership: {
      title: 'Medlemskap 2026',
      items: [
        {
          label: 'Barn / junior',
          sublabel: 'Lokal eller fjernmedlem',
          price: '390 kr',
        },
        {
          label: 'Senior',
          sublabel: 'Lokal eller fjernmedlem',
          price: '790 kr',
        },
        {
          label: 'Par',
          sublabel: 'Lokal eller fjernmedlem',
          price: '1390 kr',
        },
        {
          label: 'Familie',
          sublabel: 'Lokal eller fjernmedlem',
          price: '1990 kr',
        },
      ],
      infoTitle: 'Praktisk om medlemskap',
      infoLines: [
        'Lokalmedlemskap og fjernmedlemskap er publisert med samme prisnivå for 2026.',
        'Klubben opplyser at medlemmer får tilgang til turneringer, miljø og aktivitet både ute og på simulator i vinterhalvåret.',
        'For spørsmål om medlemskap, bane eller GolfBox brukes klubbkontoret på telefon 951 42 520 eller e-post klubbkontor@strandagolf.no.',
      ],
    },
  },
  gallery: {
    sectionLabel: 'Stranda Golfklubb',
    title: 'Fra banen',
    subtitle: 'Glimt fra Stranda Golfklubb og landskapet rundt Stranda.',
    featuredCaption: 'Se mer fra Stranda Golfklubb',
  },
  booking: {
    sectionLabel: 'Stranda Golfklubb',
    title: 'Spill, bli medlem eller kom i gang',
    subtitle:
      'Klubben kombinerer sosialt miljø, enkel tilgang til banen og aktivitet gjennom hele året for både faste medlemmer og nye spillere.',
    cta: {
      label: 'Kontakt klubben',
      href: '#contact',
    },
    steps: [
      {
        label: 'Vil du spille banen?',
        detail:
          'Stranda Golfklubb ligger 14 kilometer fra Stranda sentrum og greenfee gjelder for en hel dag. På tirsdager kan det være mer aktivitet på grunn av klubbturnering.',
      },
      {
        label: 'Vil du bli medlem?',
        detail:
          'Klubben tilbyr både lokalmedlemskap og fjernmedlemskap. Prisene er holdt enkle og lave, med egne satser for barn, junior, par og familie.',
      },
      {
        label: 'Vil du starte med golf eller spille om vinteren?',
        detail:
          'Veien til golf-kurs og golfsimulator med Trackman gjør det mulig å komme i gang eller holde spillet ved like også utenfor utesesongen.',
      },
    ],
    notes: [
      {
        title: 'Turneringer',
        text: 'Tirsdagsturneringen går gjennom hele utesesongen og er en sentral del av klubbmiljøet hos Stranda Golfklubb.',
      },
      {
        title: 'Overnatting',
        text: 'Klubben viser til overnattingsmuligheter ved banen for dem som ønsker et lengre opphold.',
      },
      {
        title: 'Betaling på banen',
        text: 'Klubben opplyser at banen stort sett er ubetjent, og at innbetaling for greenfee skjer til publisert kontonummer ved besøk.',
      },
    ],
  },
  partners: {
    sectionLabel: 'Stranda Golfklubb',
    title: 'Samarbeidspartnere',
    subtitle: 'Klubben er bygget rundt et lokalt miljø, og samarbeidspartnerne er en stille, men viktig del av hverdagen i Stranda Golfklubb.',
  },
  contact: {
    sectionLabel: 'Stranda Golfklubb',
    title: 'Kontakt og beliggenhet',
    subtitle:
      'Klubbkontoret holder til i Stranda, mens hjemmebanen ligger cirka 14 kilometer fra sentrum i retning Hellesylt og Stryn.',
    area: {
      label: 'Adresse',
      value: 'Stranda Golfklubb, Haslevegen 26, 6200 Stranda',
    },
    phone: {
      label: 'Telefon',
      value: '951 42 520',
    },
    email: {
      label: 'E-post',
      value: 'klubbkontor@strandagolf.no',
    },
    mapCard: {
      eyebrow: 'Stranda Golfklubb',
      title: 'Finn veien til banen',
      description:
        'Klubbens veibeskrivelse anbefaler søk på Stranda Golfklubb eller Dalevegen 1214 dersom GPS-en ikke finner fram til banen direkte.',
      cta: {
        label: 'Finn veien til banen',
        href: 'https://www.google.com/maps/search/?api=1&query=Stranda%20Golfklubb%2C%20Haslevegen%2026%2C%206200%20Stranda',
      },
    },
  },
  footer: {
    cta: {
      label: 'Kontakt klubben',
      href: '#contact',
    },
    copyright: '© 2026 Stranda Golfklubb',
    description: '9-hulls bane, ukentlige turneringer og golfsimulator i naturskjønne omgivelser hos Stranda Golfklubb.',
  },
};
