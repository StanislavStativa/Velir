import { HeroProps } from './hero.props';
export const defaultMockData: HeroProps = {
  params: {
    colorScheme: 'light',
  },
  fields: {
    titleRequired: {
      value: 'Example Title field value',
    },
    descriptionOptional: {
      value: 'Example Description field value',
    },
    linkOptional: {
      value: {
        href: '/sample-link',
        text: 'Link link text',
      },
    },
    heroVideoOptional1: {
      value: { href: 'fpo.mp4' },
    },
    heroImageOptional1: {
      value: {
        src: 'https://picsum.photos/560/356',
        alt: 'Sample Feature 1 Image',
        width: 560,
        height: 356,
      },
    },
    heroVideoOptional2: {
      value: { href: 'fpo.mp4' },
    },
    heroImageOptional2: {
      value: {
        src: 'https://picsum.photos/280/196',
        alt: 'Sample Feature 2 Image',
        width: 280,
        height: 196,
      },
    },
    heroVideoOptional3: {
      value: { href: 'fpo.mp4' },
    },
    heroImageOptional3: {
      value: {
        src: 'https://picsum.photos/280/356',
        alt: 'Sample Feature 3 Image',
        width: 280,
        height: 356,
      },
    },

    heroImageOptional4: {
      value: {
        src: 'https://picsum.photos/670/356',
        alt: 'Sample Feature 4 Image',
        width: 670,
        height: 356,
      },
    },
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'Hero2',
    dataSource: '/',
  },
};
