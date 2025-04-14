import { AlertBannerProps } from './alert-banner.props';

export const defaultMockData: AlertBannerProps = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'AlertBanner',
    dataSource: '/',
  },
  fields: {
    title: { value: 'Time to upgrade. Short headline for this banner' },
    description: {
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    link: { value: { href: '/', text: 'Learn More' } },
  },
  externalFields: {
    mock_external_data: { value: 'MOCK_EXTERNAL_DATA' },
  },
};
