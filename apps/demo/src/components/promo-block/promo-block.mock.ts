import { PromoBlockProps } from './promo-block.props';
export const defaultMockData: PromoBlockProps = {
  params: {},
  fields: {
    heading: { value: 'Latest Products' },
    image: {
      value: {
        src: 'https://picsum.photos/1600/900',
        alt: 'Placeholder Image',
        width: 1600,
        height: 900,
      },
    },
    description: {
      value:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
    },
    link: { value: { text: 'Learn More', href: '/' } },
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'PromoBlock',
    dataSource: '/',
  },
};
