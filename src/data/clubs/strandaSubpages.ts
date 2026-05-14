import type { ClubSubpageContent } from './subpageTypes';

export type StrandaSubpageSlug = 'bane' | 'golfsimulator';

export const strandaSubpages: Record<StrandaSubpageSlug, ClubSubpageContent> = {
  bane: {
    seoTitle: 'Stranda Golfklubb | Bane',
    seoDescription:
      'Stranda Golfklubb sin 9-hulls bane har banekart, lokale regler og praktisk informasjon for spill i vestnorsk natur.',
    hero: {
      eyebrow: 'STRANDA GOLFKLUBB',
      title: 'Stranda Golfklubb',
      subtitle:
        'En rolig 9-hulls bane i vestnorsk natur, cirka 14 kilometer fra Stranda sentrum.',
      image: '/images/Stranda/hero%202.png',
      statusCards: [],
      primaryCta: {
        label: '',
        href: '',
      },
      secondaryCta: {
        label: '',
        href: '',
      },
    },
    intro: {
      sectionLabel: 'Stranda Golfklubb',
      title: 'Banen mellom elv, skog og fjell',
      subtitle: 'Tre korte hovedpunkter om banen og spilleopplevelsen.',
      features: [
        {
          icon: 'course',
          eyebrow: 'Bane',
          title: '9-hulls hjemmebane',
          text: 'Stranda Golfklubb har en fast bane i rolige omgivelser utenfor Stranda.',
        },
        {
          icon: 'access',
          eyebrow: 'Spill',
          title: 'Greenfee uten bestillingspress',
          text: 'Greenfee gjelder hele dagen, og det er normalt ikke behov for bestillingssystem.',
        },
        {
          icon: 'community',
          eyebrow: 'Miljø',
          title: 'Tirsdagsaktivitet og klubbspill',
          text: 'Ukentlig klubbturnering gir banen fast aktivitet gjennom utesesongen.',
        },
      ],
    },
    narrative: {
      image: {
        src: '/images/Stranda/course-2.png',
        alt: 'Stranda Golfklubb i grønt landskap',
      },
      title: 'Et anlegg som føles lokalt og naturnært',
      body: [
        'Stranda Golfklubb ligger lett tilgjengelig fra Stranda sentrum, men oppleves rolig og skjermet ute i landskapet.',
        'Elv, skog og åpne gressflater gir banen rytme og en tydelig lokal karakter.',
      ],
      pills: [
        '14 km fra Stranda sentrum',
        'Driving range ved parkering',
        'Parkering og greenfee ved ankomst',
        'Overnatting ved banen',
      ],
    },
    detailSection: {
      sectionLabel: 'Lokale regler',
      title: 'Lokale regler og praktisk spill',
      subtitle: 'Kompakt oppsummert fra scorekort og publisert baneinformasjon.',
      cards: [
        {
          title: 'Banefakta',
          text: 'Nøkkelpunkter fra scorekortet.',
          bullets: [
            '9 hull hos Stranda Golfklubb',
            'Scorekortet viser 3318 meter fra gult og 2768 meter fra rødt',
            'Herrenes slopetabell er publisert med par 63, CR 61.0 og slope 114 fra gult',
            'Driving range, parkering og greenfeeområde ligger samlet ved ankomstsonen',
          ],
        },
        {
          title: 'Lokale regler',
          text: 'Reglene under er hentet fra scorekortet.',
          bullets: [
            'Veier, stier og komposthauger behandles som fritaksområder med fri dropp',
            'Uflyttbare hindringer som avstandsmerker, tee-skilt, skilt og benker gir fritak',
            'På hull 3/12, 4/13 og 9/18 regnes utslag som ikke når klipt område som straffeområde / droppesone',
            'Out of bounds-markering ved hull 8/17 gjelder også for hull 9/18',
            'Ved ringing av klokke på hull 9/18 skal utslag fra hull 8/17 avventes',
          ],
        },
        {
          title: 'Praktisk spill',
          text: 'Kort praktisk oversikt for gjestespillere.',
          bullets: [
            'Minst én i flighten må ha fullført Veien til golf',
            'Banen er stort sett ubetjent',
            'Betalingskasse henger på garasjeveggen ved oppkjørselen til parkeringsplassen',
            'Tirsdager mellom ca. 17:00 og 21:00 kan det være fullt under klubbturnering',
            'Medlemmer har fortrinnsrett under tirsdagsturneringen',
          ],
        },
      ],
    },
    mediaSection: {
      sectionLabel: 'Banekart og orientering',
      title: 'Scorekort og banekart',
      subtitle: 'Kartet samler hulloversikt, lokale regler og ankomstpunkt i ett bilde.',
      image: {
        src: '/images/Stranda/banekart.jpg',
        alt: 'Scorekort og banekart for Stranda Golfklubb',
      },
      caption: 'En samlet oversikt over banen og ankomstområdet hos Stranda Golfklubb.',
      facts: [
        'Utslag: gult og rødt er vist i scorekortet',
        'Veier og stier: inngår i lokale regler',
        'Elv og vann: påvirker flyt og sikkerhet',
        'Skog: markerer retning og avgrensning',
      ],
    },
    ctaSection: {
      sectionLabel: 'Neste steg',
      title: 'Vil du spille banen eller bli medlem?',
      text: 'Ta kontakt med klubbkontoret hvis du vil spille banen eller vite mer om medlemskap i Stranda Golfklubb.',
      links: [
        {
          label: 'Kontakt klubben',
          href: '/golf/stranda#kontakt',
        },
        {
          label: 'Se priser og medlemskap',
          href: '/golf/stranda#priser',
        },
      ],
    },
  },
  golfsimulator: {
    seoTitle: 'Golfsimulator',
    seoDescription:
      'Stranda Golfklubb sin golfsimulator bygger vinteraktivitet rundt Trackman, vintertrening, Veien til golf og fleksible priser for medlemmer og gjester.',
    hero: {
      eyebrow: 'GOLFSIMULATOR',
      title: 'Golfsimulator',
      subtitle:
        'Innendørs trening og spill gjennom vintersesongen, med Trackman og lav terskel for både medlemmer og nye golfere.',
      image: '/images/Stranda/simulator.png',
      statusCards: [],
      primaryCta: {
        label: 'Se priser',
        href: '#simulator-priser',
      },
      secondaryCta: {
        label: '',
        href: '',
      },
    },
    intro: {
      sectionLabel: 'Golfsimulator',
      title: 'Trackman, booking og vintertrening',
      subtitle:
        'Kort oversikt over hvordan simulatoren brukes, hvem tilbudet passer for og hvordan du kommer i gang.',
      cardTitle: 'Et vintertilbud for trening, spill og nye golfere',
      cardBody:
        'Simulatoren gjør det mulig å holde golfen i gang gjennom vinteren, enten du vil trene teknikk, spille simulatorrunde eller komme i gang med Veien til golf.',
      features: [
        {
          icon: 'course',
          eyebrow: 'Trackman',
          title: 'Trackman for trening og spill',
          text: '',
        },
        {
          icon: 'access',
          eyebrow: 'VTG',
          title: 'VTG-kurs gjennom vinteren',
          text: '',
        },
        {
          icon: 'community',
          eyebrow: 'Miljø',
          title: 'Sosial aktivitet når banen er stengt',
          text: '',
        },
      ],
      chips: ['Trackman', 'VTG', 'Vintertrening', 'Klubbmiljø'],
    },
    narrative: {
      image: {
        src: '/images/Stranda/simulator.png',
        alt: 'Trackman-simulator hos Stranda Golfklubb',
      },
      title: 'Et sosialt vintertilbud rundt golfen',
      body: [
        'Golfsimulatoren brukes både til trening, spill, VTG-kurs og sosial aktivitet gjennom vinterhalvåret.',
        'Trackman, sesongkort og tilgang via nøkkelbrikke gjør tilbudet enkelt å bruke også når banen er stengt.',
      ],
      pills: [
        'Trackman-simulator',
        'VTG om vinteren',
        'Sesongkort tilgjengelig',
        'Sosialt klubbmiljø',
      ],
    },
    detailSection: {
      sectionLabel: '',
      title: '',
      subtitle: '',
      cards: [
        {
          icon: 'course',
          title: 'Slik fungerer det',
          bullets: [],
          rows: [
            { label: 'Drop-in', value: '3 timer per person' },
            { label: 'Betaling', value: 'Vipps ved drop-in' },
            { label: 'Sesongkort', value: 'Tilgang med nøkkelbrikke' },
            { label: 'Utstyr', value: 'Kan lånes ved behov' },
          ],
          cta: {
            label: 'Se priser',
            href: '#simulator-priser',
          },
        },
      ],
    },
    mediaSection: {
      sectionLabel: '',
      title: '',
      subtitle: '',
      image: {
        src: '/images/Stranda/simulator.png',
        alt: 'Trackman-simulator og vintertrening hos Stranda Golfklubb',
      },
      caption: '',
      facts: [],
    },
    pricingSection: {
      sectionLabel: 'Priser',
      title: 'Simulatorpriser 2025 / 2026',
      subtitle:
        'Prisoppsettet er tydelig delt mellom 3-timers bruk, sesongkort og familieløsninger, slik at både enkeltspillere og familier har et realistisk vinteralternativ.',
      cards: [
        {
          title: 'Senior',
          intro: 'For voksne over 19 år.',
          items: [
            { label: '3 timer', value: '310 kr' },
            { label: 'Sesongkort', value: '2500 kr' },
          ],
        },
        {
          title: 'Junior og student',
          intro: 'For junior under 20 år og studenter.',
          items: [
            { label: '3 timer', value: '190 kr' },
            { label: 'Sesongkort', value: '1500 kr' },
          ],
        },
        {
          title: 'Familie',
          intro: 'Sesongkort for familier som vil bruke simulatoren sammen.',
          items: [
            { label: '1 voksen + 1 junior', value: '3600 kr' },
            { label: '2 voksne + 2 juniorer', value: '7100 kr' },
          ],
          note: 'Klubben oppgir i tillegg engangspris på 100 kroner for nøkkelbrikke ved sesongkort.',
        },
      ],
    },
    ctaSection: {
      sectionLabel: 'Neste steg',
      title: 'Vil du bruke simulatoren i vinter?',
      text:
        'Kontakt klubben for priser, booking og praktisk informasjon om vintersesongen.',
      links: [
        {
          label: 'Kontakt klubben',
          href: '/golf/stranda#kontakt',
        },
        {
          label: 'Se hovedsiden',
          href: '/golf/stranda',
        },
      ],
    },
  },
};
