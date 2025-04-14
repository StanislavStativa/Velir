import { LogoTabsProps } from './logo-tabs.props';

export const defaultMockData: LogoTabsProps = {
  params: {
    colorScheme: 'primary',
  },
  fields: {
    data: {
      datasource: {
        title: {
          jsonValue: {
            value: 'Spotlight On',
          },
        },
        backgroundImage: {
          jsonValue: {
            value: {
              src: 'https://picsum.photos/1920/1080',
              alt: 'Background Image',
              width: 1920,
              height: 1080,
            },
          },
        },
        logos: {
          results: [
            {
              title: {
                jsonValue: {
                  value: 'stryve athletics',
                },
              },
              logo: {
                jsonValue: {
                  value: {
                    src: '/img/LOGO-placeholder.png',
                    alt: 'Stryve Athletics Logo',
                    width: 200,
                    height: 100,
                  },
                },
              },
            },
            {
              title: {
                jsonValue: {
                  value: 'Fleur & Ember',
                },
              },
              logo: {
                jsonValue: {
                  value: {
                    src: '/img/LOGO-placeholder.png',
                    alt: 'Fleur & Ember Logo',
                    width: 200,
                    height: 100,
                  },
                },
              },
            },
            {
              title: {
                jsonValue: {
                  value: 'Celesié',
                },
              },
              logo: {
                jsonValue: {
                  value: {
                    src: '/img/LOGO-placeholder.png',
                    alt: 'Celesié Logo',
                    width: 200,
                    height: 100,
                  },
                },
              },
            },
            {
              title: {
                jsonValue: {
                  value: 'Verda Wellness',
                },
              },
              logo: {
                jsonValue: {
                  value: {
                    src: '/img/LOGO-placeholder.png',
                    alt: 'Verda Wellness Logo',
                    width: 200,
                    height: 100,
                  },
                },
              },
            },
          ],
        },
        logoTabContent: {
          results: [
            {
              heading: {
                jsonValue: {
                  value:
                    "Unleash Your Power with Stryve Athletics' 2025 Spring Collection: Performance Meets Precision.",
                },
              },
              cta: {
                jsonValue: {
                  value: {
                    href: '/stryve-athletics',
                    text: 'Explore Stryve',
                    linktype: 'internal',
                    url: '/stryve-athletics',
                    anchor: '',
                    target: '',
                  },
                },
              },
            },
            {
              heading: {
                jsonValue: {
                  value: "Discover Fleur & Ember's Latest Collection: Where Elegance Meets Nature.",
                },
              },
              cta: {
                jsonValue: {
                  value: {
                    href: '/fleur-and-ember',
                    text: 'View Collection',
                    linktype: 'internal',
                    url: '/fleur-and-ember',
                    anchor: '',
                    target: '',
                  },
                },
              },
            },
            {
              heading: {
                jsonValue: {
                  value: "Experience Celesié's Luxury Skincare: Your Path to Radiant Beauty.",
                },
              },
              cta: {
                jsonValue: {
                  value: {
                    href: '/celesie',
                    text: 'Shop Skincare',
                    linktype: 'internal',
                    url: '/celesie',
                    anchor: '',
                    target: '',
                  },
                },
              },
            },
            {
              heading: {
                jsonValue: {
                  value: "Transform Your Wellness Journey with Verda's Organic Solutions.",
                },
              },
              cta: {
                jsonValue: {
                  value: {
                    href: '/verda-wellness',
                    text: 'Explore Products',
                    linktype: 'internal',
                    url: '/verda-wellness',
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
    componentName: 'LogoTabs',
    dataSource: '/',
  },
};
