import { TopicListingProps } from './topic-listing.props';

export const defaultMockData: TopicListingProps = {
  params: {
    backgroundTheme: {
      value: 'dark',
    },
  },
  fields: {
    data: {
      datasource: {
        title: {
          jsonValue: {
            value: 'Our areas of impact. Making people a priority.',
          },
        },
        children: {
          results: [
            {
              link: {
                jsonValue: {
                  value: {
                    href: '/diversity',
                    text: 'Diversity @ SC',
                  },
                },
              },
            },
            {
              link: {
                jsonValue: {
                  value: {
                    href: '/communities',
                    text: 'Communities',
                  },
                },
              },
            },
            {
              link: {
                jsonValue: {
                  value: {
                    href: '/foundation',
                    text: 'SC Foundation',
                  },
                },
              },
            },
            {
              link: {
                jsonValue: {
                  value: {
                    href: '/partners',
                    text: 'Partners',
                  },
                },
              },
            },
          ],
        },
      },
    },
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'TopicListing',
    dataSource: '/',
  },
};
