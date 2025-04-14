import { MultiPromoProps } from './multi-promo.props';
export const defaultMockData: MultiPromoProps = {
  params: {
    numColumns: '3',
  },
  name: 'Multi Promo',
  promos: [],
  fields: {
    data: {
      datasource: {
        title: { jsonValue: { value: 'Multi Promo Carousel starts with Solterra' } },
        description: {
          jsonValue: {
            value:
              'Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels capture the energy from the sun and convert it into electrical power.',
          },
        },
        children: {
          results: [
            {
              heading: {
                jsonValue: {
                  value: 'Listed Derivatives lorem ipsum dolor sit amet consequer prose',
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://picsum.photos/id/100/384/357',
                    alt: '',
                    width: 384,
                    height: 357,
                  },
                },
              },
              link: {
                jsonValue: {
                  value: { href: '/', text: 'Explore derivatives' },
                },
              },
            },
            {
              heading: {
                jsonValue: {
                  value: 'Securities',
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://picsum.photos/id/200/584/757',
                    alt: '',
                    width: 584,
                    height: 757,
                  },
                },
              },
              link: {
                jsonValue: {
                  value: { href: '/', text: 'Explore securities' },
                },
              },
            },
            {
              heading: {
                jsonValue: {
                  value: 'Commodities',
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://picsum.photos/id/350/384/357',
                    alt: '',
                    width: 384,
                    height: 357,
                  },
                },
              },
              link: {
                jsonValue: {
                  value: { href: '/', text: 'Explore commodities' },
                },
              },
            },
            {
              heading: {
                jsonValue: {
                  value: 'Forex',
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://picsum.photos/id/400/384/357',
                    alt: '',
                    width: 384,
                    height: 357,
                  },
                },
              },
              link: {
                jsonValue: {
                  value: { href: '/', text: 'Explore forex' },
                },
              },
            },
            {
              heading: {
                jsonValue: {
                  value: 'Cryptocurrencies',
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://picsum.photos/id/500/184/157',
                    alt: '',
                    width: 184,
                    height: 157,
                  },
                },
              },
              link: {
                jsonValue: {
                  value: { href: '/', text: 'Explore cryptocurrencies' },
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
    componentName: 'MultiPromo',
    dataSource: '/',
  },
};
