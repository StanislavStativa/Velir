import { CtaBannerProps } from './cta-banner.props';
export const defaultMockData: CtaBannerProps = {
  params: {},
  fields: {
    titleRequired: {
      value: ' Medium Length Headline',
    },
    descriptionOptional: {
      value: 'Lorem ipsum dolar sit.',
    },
    linkOptional: { value: { href: '/#', text: 'Become a Member' } },
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'CtaBanner',
    dataSource: '/',
  },
};
