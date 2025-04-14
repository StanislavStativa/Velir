import { TextBannerProps } from './text-banner.props';

export const defaultMockData: TextBannerProps = {
  params: {
    excludeTopMargin: '0',
    theme: 'dark',
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'TextBanner',
    dataSource: '/',
  },
  fields: {
    heading: { value: 'Check It Out!' },
    description: {
      value: 'View our full library of sterilization and testing services TechTips',
    },
    link: {
      value: {
        href: 'https://velir.com',
        linktype: 'external',
        anchor: '',
        target: '',
        text: 'SEE MORE',
      },
    },
    link2: {
      value: {
        href: 'https://velir.com',
        linktype: 'external',
        anchor: '',
        target: '',
        text: 'READ MORE',
      },
    },
    image: {
      value: {
        src: 'https://picsum.photos/1600/900',
        alt: 'Placeholder image',
        width: 1600,
        height: 900,
      },
    },
  },
};
