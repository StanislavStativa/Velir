import { PromoAnimatedProps } from './promo-animated.props';
export const defaultMockData: PromoAnimatedProps = {
  params: {
    colorScheme: 'primary',
    styles: 'position-left indent-top indent-bottom',
  },
  fields: {
    image: {
      value: {
        src: 'https://picsum.photos/452/452',
        alt: 'Sample Image',
        width: 452,
        height: 452,
      },
    },
    title: {
      value: 'Start your career at Solterra & Co.',
    },
    description: {
      value:
        '<p>Stay in the loop with our Green Horizon newsletter, where we deliver bite-sized insights into the latest green energy solutions.</p>',
    },
    primaryLink: {
      value: {
        href: '/sample-link',
        text: 'Explore Careers',
      },
    },
    secondaryLink: {
      value: {
        href: '/sample-link',
        text: 'Secondary Link',
      },
    },
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'PromoAnimated',
    dataSource: '/',
  },
};
