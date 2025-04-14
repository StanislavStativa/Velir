import { GlobalHeaderProps } from './global-header.props';

export const defaultMockData: GlobalHeaderProps = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'GlobalHeader',
    dataSource: '/',
  },
  fields: {
    data: {
      item: {
        headerContact: {
          jsonValue: {
            value: { href: '/', text: 'Contact Us' },
          },
        },
        children: {
          results: [
            {
              link: {
                jsonValue: {
                  value: { href: '/', text: 'Home' },
                },
              },
            },
          ],
        },
        logo: {
          jsonValue: {
            value: {
              src: 'https://www.velir.com/-/media/logos/horizontal-dark.svg',
              // src: 'https://placehold.co/200X100',
              // src: '/img/LOGO-placeholder.png',
              alt: 'Placeholder image',
              width: 200,
              height: 100,
            },
          },
        },
      },
    },
  },
};
