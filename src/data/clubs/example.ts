import heroImage from '../../assets/images/Hero.jpg';
import clubLogo from '../../assets/images/Smola logo.png';
import courseMapImage from '../../assets/images/Banekart smola.png';
import mapImage from '../../assets/images/Map.png';
import courseImageOne from '../../assets/images/Course-1.png';
import courseImageTwo from '../../assets/images/Course-2.png';
import courseImageThree from '../../assets/images/Course-3.png';
import courseImageFour from '../../assets/images/Course-4.png';
import courseImageFive from '../../assets/images/Course-5.png';
import sparebankLogo from '../../assets/images/Skjermbilde 2026-04-23 kl. 20.58.00.png';
import statkraftLogo from '../../assets/images/Skjermbilde 2026-04-23 kl. 20.58.06.png';
import holbergLogo from '../../assets/images/Skjermbilde 2026-04-23 kl. 20.58.10.png';
import type { GolfClubData } from './types';

// Copy this file if you want a clearly fake starting point for a new golf club demo.
export const exampleClubData: GolfClubData = {
  club: {
    name: 'Example Golf Club',
    location: 'Demo Bay, Placeholder County',
    socialHref: 'https://example.com/example-golf-club',
    logo: {
      src: clubLogo,
      alt: 'Example Golf Club',
    },
  },
  seo: {
    title: 'Example Golf Club',
    description: 'Example Golf Club demo content for the golf template.',
  },
  media: {
    heroImage,
    mapImage,
    aboutImage: {
      src: courseImageThree,
      alt: 'Example Golf Club demo image',
    },
    gallery: [
      {
        src: courseImageOne,
        alt: 'Example gallery image 1',
      },
      {
        src: courseImageTwo,
        alt: 'Example gallery image 2',
      },
      {
        src: courseImageThree,
        alt: 'Example gallery image 3',
      },
      {
        src: courseImageFour,
        alt: 'Example gallery image 4',
      },
      {
        src: courseImageFive,
        alt: 'Example gallery image 5',
      },
      {
        src: courseMapImage,
        alt: 'Example course map image',
      },
    ],
    partners: [
      { name: 'Example Partner One', logo: sparebankLogo },
      { name: 'Example Partner Two', logo: statkraftLogo },
      { name: 'Example Partner Three', logo: holbergLogo },
    ],
  },
  hero: {
    eyebrow: 'Example Golf Club',
    title: 'Placeholder golf by the coast',
    subtitle: 'Fake demo text for showing how another club can reuse this template.',
    statusCards: [
      {
        title: 'Course status',
        status: 'open',
        statusLabel: 'Open today',
        detail: 'Demo schedule 08:00-20:00',
      },
    ],
    primaryCta: {
      label: 'See demo info',
      href: '#practical',
    },
    secondaryCta: {
      label: 'View demo pricing',
      href: '#pricing',
    },
  },
  reviews: {
    sectionLabel: 'Example Golf Club',
    title: 'What people say about Example Golf Club',
    subtitle: 'Fake placeholder reviews for the reusable template.',
    summaryLabel: 'Example Reviews',
    summaryScore: '4,9/5',
    linkLabel: 'View example reviews',
    linkHref: 'https://example.com/reviews',
    cards: [
      {
        name: 'Alex Example',
        rating: 5,
        quote: 'This is placeholder review text for demo purposes only.',
        sourceLabel: 'Example',
      },
      {
        name: 'Casey Sample',
        rating: 5,
        quote: 'Another fake testimonial showing the same structure as the Smola file.',
        sourceLabel: 'Example',
      },
    ],
  },
  aboutCourse: {
    sectionLabel: 'Example Golf Club',
    title: 'About the course',
    subtitle: 'Use this block to describe another club without touching the layout.',
    body: [
      'Example Golf Club is fake content intended to help non-developers understand what to replace.',
      'Every text string here is safe to edit when creating a real club-specific version of the site.',
      'The structure matches the Smola data file, so you can swap content without changing components.',
    ],
    pills: ['Demo 9 holes', 'Placeholder location', 'Template-friendly copy', 'Replace me later'],
  },
  facilities: {
    sectionLabel: 'Example Golf Club',
    title: 'Facilities on site',
    subtitle: 'Example content for feature cards and facility highlights.',
    cards: [
      {
        label: 'Practice',
        title: 'Range and lessons',
        intro: 'Use this card for practice areas, coaching or beginner offers.',
        bullets: ['Example range info', 'Example lesson info', 'Example beginner note'],
        icon: 'range',
      },
      {
        label: 'Service',
        title: 'Clubhouse and reception',
        intro: 'Use this card for service points, food, check-in or pro shop details.',
        bullets: ['Example reception note', 'Example food offer', 'Example on-site info'],
        icon: 'clubhouse',
      },
      {
        label: 'Access',
        title: 'Rental gear and transport',
        intro: 'Use this card for rentals, accessibility, parking or local transport details.',
        bullets: ['Example rental clubs', 'Example buggy access', 'Example parking note'],
        icon: 'access',
      },
    ],
  },
  news: {
    sectionLabel: 'Example Golf Club',
    title: 'Latest updates',
    subtitle: 'Example items showing how club highlights or news cards can be filled in.',
    items: [
      {
        badge: 'Demo Event',
        dateLabel: 'Every Saturday',
        title: 'Example weekly tournament',
        text: 'Placeholder text for a recurring event, social round or member activity.',
        linkLabel: 'See demo details',
        linkHref: '#booking',
        image: {
          src: courseImageOne,
          alt: 'Example event image',
        },
      },
      {
        badge: 'Demo News',
        dateLabel: 'All season',
        title: 'Example clubhouse update',
        text: 'Placeholder text for a service update, course condition or seasonal announcement.',
        linkLabel: 'Read demo note',
        linkHref: '#practical',
        image: {
          src: courseImageTwo,
          alt: 'Example news image',
        },
      },
      {
        badge: 'Demo Offer',
        dateLabel: 'For new players',
        title: 'Example beginner sessions',
        text: 'Placeholder text for training, try-golf sessions or intro packages.',
        linkLabel: 'See demo offer',
        linkHref: '#pricing',
        image: {
          src: courseImageFour,
          alt: 'Example beginner image',
        },
      },
    ],
  },
  playOrTrain: {
    sectionLabel: 'Example Golf Club',
    title: 'Play and activities',
    subtitle: '',
    cards: [
      {
        eyebrow: 'For players',
        title: 'The course',
        status: 'open',
        statusLabel: 'Open',
        hours: 'Example opening hours every day',
        greenkeeperComment: {
          title: 'Example play info',
          text: 'Use this text area for practical course status, local advice or seasonal notes.',
        },
        groups: [
          {
            title: 'Round details',
            points: ['Example hole count', 'Example local challenge', 'Example practice note'],
          },
          {
            title: 'On-course info',
            points: ['Example tee details', 'Example pace note', 'Example scenery note'],
          },
        ],
        cta: {
          label: 'See demo course info',
          href: '#booking',
        },
        variant: 'course',
      },
      {
        eyebrow: 'For members',
        title: 'Club activity',
        status: 'open',
        statusLabel: 'Active community',
        hours: 'Example events, training and member offers',
        greenkeeperComment: {
          title: 'Example activity info',
          text: 'Use this block for club life, weekly events or special programs.',
        },
        groups: [
          {
            title: 'Regular activity',
            points: ['Example social round', 'Example monthly tournament', 'Example senior golf'],
          },
          {
            title: 'Member offers',
            points: ['Example intro course', 'Example rental offer', 'Example magazine benefit'],
          },
        ],
        cta: {
          label: 'See demo activities',
          href: '#booking',
        },
        variant: 'range',
      },
    ],
  },
  pricing: {
    sectionLabel: 'Example Golf Club',
    title: 'Pricing and membership',
    subtitle: 'Example pricing content using the same layout as the live Smola page.',
    play: {
      title: 'Green fee and play',
      items: [
        { label: 'Adult', sublabel: 'Demo day rate', price: '450,-' },
        { label: 'Junior', sublabel: 'Demo day rate', price: '150,-' },
      ],
      note: 'Placeholder prices only. Replace with real prices for a real club.',
    },
    membership: {
      title: 'Membership',
      items: [
        { label: 'Adult member', sublabel: 'Example yearly fee', price: '2.500,-' },
        { label: 'Junior member', sublabel: 'Example yearly fee', price: '900,-' },
      ],
      infoTitle: 'About example membership',
      infoLines: [
        'Replace this with real membership notes.',
        'Replace this with real eligibility or fee information.',
      ],
    },
  },
  gallery: {
    sectionLabel: 'Example Golf Club',
    title: 'From the facility',
    subtitle: 'Example gallery copy for another club profile.',
    featuredCaption: 'See example images',
  },
  booking: {
    sectionLabel: 'Example Golf Club',
    title: 'How it works',
    subtitle: 'Example onboarding text for a fake club version of the same landing page.',
    cta: {
      label: 'Contact the demo club',
      href: '#contact',
    },
    steps: [
      {
        label: 'Want to play a round?',
        detail: 'Replace this with real guidance on booking, green fee or arrival.',
      },
      {
        label: 'Want to practice?',
        detail: 'Replace this with real practice, lesson or range details.',
      },
      {
        label: 'Want to join the club?',
        detail: 'Replace this with real membership and club-life information.',
      },
    ],
    notes: [
      {
        title: 'Before you arrive',
        text: 'Example pre-visit note for directions, weather or arrival planning.',
      },
      {
        title: 'On-site info',
        text: 'Example note for lockers, check-in, code access, facilities or signage.',
      },
      {
        title: 'Equipment and extras',
        text: 'Example note for rentals, trolleys, buggies or coaching.',
      },
    ],
  },
  partners: {
    sectionLabel: 'Example Golf Club',
    title: 'Our partners',
    subtitle: 'Example sponsor text for a fake club data file.',
  },
  contact: {
    sectionLabel: 'Example Golf Club',
    title: 'Contact and location',
    subtitle: 'Example contact details showing what should be replaced for a real club.',
    area: {
      label: 'Area',
      value: 'Demo Bay, Placeholder County',
    },
    phone: {
      label: 'Phone',
      value: '+47 000 00 000',
    },
    email: {
      label: 'Email',
      value: 'hello@example-golf-club.test',
    },
    mapCard: {
      eyebrow: 'Example / Demo Bay',
      title: 'Find the course',
      description: 'Replace this map description with the real location and access text.',
      cta: {
        label: 'Open example map',
        href: 'https://example.com/map',
      },
    },
  },
  footer: {
    cta: {
      label: 'See example pricing',
      href: '#pricing',
    },
    copyright: '© 2026 Example Golf Club',
    description: 'Fake club description for demo and template setup only.',
  },
};
