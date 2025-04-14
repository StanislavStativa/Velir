import { CardProps } from './card.props';

export const defaultMockData: CardProps = {
  heading: { value: 'Heading' },
  image: {
    value: {
      src: 'https://picsum.photos/1600/900',
      alt: 'Placeholder image',
      width: 1600,
      height: 900,
    },
  },
  description: {
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  link: { value: { href: '/', text: 'Become a Member' } },
};
