import { MultiPromoTabsProps } from './multi-promo-tabs.props';

export const defaultMockData: MultiPromoTabsProps = {
  params: {},
  fields: {
    data: {
      datasource: {
        title: { jsonValue: { value: 'Multi-promo Tabs Title' } },
        droplistLabel: { jsonValue: { value: 'Select a value' } },
        children: {
          results: [
            {
              title: { jsonValue: { value: 'Lorem Ipsum' } },
              link1: { jsonValue: { value: { href: '/', text: 'Explore derivitives' } } },
              link2: { jsonValue: { value: { href: '/', text: 'Explore more derivitives' } } },
              image1: {
                jsonValue: {
                  value: {
                    src: 'https://picsum.photos/560/356',
                    alt: 'Sample Feature 1 Image',
                    width: 560,
                    height: 356,
                  },
                },
              },
              image2: {
                jsonValue: {
                  value: {
                    src: 'https://picsum.photos/900/600',
                    alt: 'Sample Feature 2 Image',
                    width: 900,
                    height: 600,
                  },
                },
              },
            },
            {
              title: { jsonValue: { value: 'Dolar Sit' } },
              link1: { jsonValue: { value: { href: '/', text: 'Donec quam felis' } } },
              link2: { jsonValue: { value: { href: '/', text: 'Praesent porttitor nulla' } } },
              image1: {
                jsonValue: {
                  value: {
                    src: 'https://picsum.photos/560/356',
                    alt: 'Sample Feature 1 Image',
                    width: 560,
                    height: 356,
                  },
                },
              },
              image2: {
                jsonValue: {
                  value: {
                    src: 'https://picsum.photos/900/600',
                    alt: 'Sample Feature 2 Image',
                    width: 900,
                    height: 600,
                  },
                },
              },
            },
            {
              title: { jsonValue: { value: 'Maecenas Nec' } },
              link1: { jsonValue: { value: { href: '/', text: 'Morbi nec' } } },
              link2: { jsonValue: { value: { href: '/', text: 'Sed hendrerit' } } },
              image1: {
                jsonValue: {
                  value: {
                    src: 'https://picsum.photos/560/356',
                    alt: 'Sample Feature 1 Image',
                    width: 560,
                    height: 356,
                  },
                },
              },
              image2: {
                jsonValue: {
                  value: {
                    src: 'https://picsum.photos/900/600',
                    alt: 'Sample Feature 2 Image',
                    width: 900,
                    height: 600,
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
    uid: '1234',
    componentName: 'MultiPromoTabs',
    dataSource: 'multi-promo-tabs',
  },
};
