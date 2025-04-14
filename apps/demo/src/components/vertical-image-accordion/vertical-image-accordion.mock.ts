import { VerticalImageAccordionProps } from './vertical-image-accordion.props';

export const mockVerticalImageAccordionData: VerticalImageAccordionProps = {
  params: {},
  fields: {
    data: {
      datasource: {
        title: {
          jsonValue: {
            value: 'Our focus areas',
          },
        },
        items: {
          results: [
            {
              title: {
                jsonValue: {
                  value: 'Solterra Fragrance',
                },
              },
              description: {
                jsonValue: {
                  value:
                    'Experience our unique collection of fragrances inspired by nature and crafted with care.',
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://picsum.photos/seed/fragrance/1200/800',
                    alt: 'Solterra Fragrance',
                    width: 1200,
                    height: 800,
                  },
                },
              },
              cta: {
                jsonValue: {
                  value: {
                    href: '/fragrance',
                    text: 'Explore',
                    linktype: 'internal',
                    url: '/fragrance',
                    anchor: '',
                    target: '',
                  },
                },
              },
            },
            {
              title: {
                jsonValue: {
                  value: 'Solterra Move',
                },
              },
              description: {
                jsonValue: {
                  value:
                    'Driven by innovation and performance, our Move division is dedicated to redefining athletic excellence with cutting-edge gear designed for strength, speed, and endurance.',
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://picsum.photos/seed/move/1200/800',
                    alt: 'Solterra Move',
                    width: 1200,
                    height: 800,
                  },
                },
              },
              cta: {
                jsonValue: {
                  value: {
                    href: '/move',
                    text: 'Explore',
                    linktype: 'internal',
                    url: '/move',
                    anchor: '',
                    target: '',
                  },
                },
              },
            },
            {
              title: {
                jsonValue: {
                  value: 'Solterra Beauty',
                },
              },
              description: {
                jsonValue: {
                  value: 'Discover our natural beauty products that enhance your natural radiance.',
                },
              },
              image: {
                jsonValue: {
                  value: {
                    src: 'https://picsum.photos/seed/beauty/1200/800',
                    alt: 'Solterra Beauty',
                    width: 1200,
                    height: 800,
                  },
                },
              },
              cta: {
                jsonValue: {
                  value: {
                    href: '/beauty',
                    text: 'Explore',
                    linktype: 'internal',
                    url: '/beauty',
                    anchor: '',
                    target: '',
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
    componentName: 'VerticalImageAccordion',
    dataSource: '/',
  },
};
