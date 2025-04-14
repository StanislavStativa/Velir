import { SubscriptionBannerProps } from './subscription-banner.props';

export const mockSubscriptionBannerData: SubscriptionBannerProps = {
  params: {},
  fields: {
    titleRequired: {
      value: 'Subscribe to Sunguide, your source for company updates.',
    },
    descriptionOptional: {
      value: 'Be a part of the confidence revolution with Solterra & Co.',
    },
    buttonLink: {
      value: {
        text: 'Subscribe',
        href: '#',
        linktype: 'internal'
      }
    }
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'SubscriptionBanner',
    dataSource: '/',
  },
};
