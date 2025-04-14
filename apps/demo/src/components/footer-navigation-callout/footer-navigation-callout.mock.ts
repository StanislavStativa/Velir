import { FooterNavigationCalloutProps } from './footer-navigation-callout.props';
export const defaultMockData: FooterNavigationCalloutProps = {
  fields: {
    title: {
      value: 'Your Source for Green Energy Updates',
    },
    description: {
      value:
        'Stay in the loop with our Green Horizon newsletter, where we deliver bite-sized insights into the latest green energy solutions.',
    },
    linkOptional: { value: { href: '/', text: 'Schedule a Consultation' } },
  },
};
