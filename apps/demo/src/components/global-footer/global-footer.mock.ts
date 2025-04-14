import { GlobalFooterProps } from './global-footer.props';

export const defaultMockData: GlobalFooterProps = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'GlobalFooter',
    dataSource: '/',
    placeholders: {
      'container-footer-column': [],
    },
  },
  fields: {
    footerLogo: {
      value: {
        src: 'https://www.velir.com/-/media/logos/horizontal-white.svg',
        alt: 'Logo',
        width: '50',
        height: '50',
      },
    },
    footerPromoTitle: { value: 'Subscribe to our newsletter' },
    footerPromoDescription: {
      value: 'Get the latest news and updates from our team.',
    },
    footerPromoLink: {
      value: {
        href: '#',
        text: 'Subscribe',
      },
    },
    footerSocialLinks: [
      {
        fields: {
          link: {
            value: {
              href: '/',
              title: 'Facebook',
            },
          },
          socialIcon: {
            value: 'facebook',
          },
        },
      },
      {
        fields: {
          link: {
            value: {
              href: '/',
              title: 'Instagram',
            },
          },
          socialIcon: {
            value: 'instagram',
          },
        },
      },
      {
        fields: {
          link: {
            value: {
              href: '/',
              title: 'Youtube',
            },
          },
          socialIcon: {
            value: 'youtube',
          },
        },
      },
      {
        fields: {
          link: {
            value: {
              href: '/',
              title: 'Twitter',
            },
          },
          socialIcon: {
            value: 'twitter',
          },
        },
      },
      {
        fields: {
          link: {
            value: {
              href: '/',
              title: 'Linkedin',
            },
          },
          socialIcon: {
            value: 'linkedin',
          },
        },
      },
    ],
    footerCopyright: { value: '© 2025 All rights reserved' },
  },
};
