import { PageHeaderProps } from './page-header.props';
export const mockPageHeaderData: PageHeaderProps = {
  params: {
    colorScheme: 'default',
    darkPlayIcon: '0',
  },
  fields: {
    data: {
      externalFields: {
        pageHeaderTitle: {
          jsonValue: { value: 'The Face of Green Energy' },
        },
        pageSubtitle: {
          jsonValue: {
            value:
              'Our commitment to green energy is paving the way for a cleaner, healthier planet. Join us on our journey towards a future where clean, renewable energy transform the way we power our lives.',
          },
        },
        pageTitle: { jsonValue: { value: 'The Face of Green Energy 2' } },
      },
      datasource: {
        imageRequired: {
          jsonValue: {
            value: {
              src: 'https://picsum.photos/600/600',
              alt: 'Sample Image',
              width: 600,
              height: 600,
            },
          },
        },
        videoOptional: {
          jsonValue: {
            value: {
              href: 'https://www.youtube.com/embed/Ttl8Gg-P-Ao?si=ifuGJpwak_eW9xdw',
            },
          },
        },
        logoText: {
          jsonValue: { value: 'Global partners that trusted us' },
        },
        children: {
          results: [
            {
              image: {
                jsonValue: {
                  value: {
                    src: 'https://picsum.photos/150/16',
                    alt: 'Sample Image',
                    width: 150,
                    height: 16,
                  },
                },
              },
            },
            {
              image: {
                jsonValue: {
                  value: {
                    src: 'https://picsum.photos/160/16',
                    alt: 'Sample Image',
                    width: 160,
                    height: 16,
                  },
                },
              },
            },
            {
              image: {
                jsonValue: {
                  value: {
                    src: 'https://picsum.photos/150/16',
                    alt: 'Sample Image',
                    width: 150,
                    height: 16,
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
    componentName: 'PageHeader',
    dataSource: '/',
  },
};
