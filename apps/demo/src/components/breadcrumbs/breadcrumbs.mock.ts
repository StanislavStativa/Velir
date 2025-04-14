import { BreadcrumbsProps } from './breadcrumbs.props';

export const defaultMockData: BreadcrumbsProps = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'Breadcrumbs',
    dataSource: '/',
  },
  fields: {
    data: {
      datasource: {
        name: 'Director of Demo Development',
        ancestors: [
          {
            title: {
              jsonValue: {
                value: 'Title',
              },
            },
            navigationTitle: {
              jsonValue: {
                value: 'Navigation Title',
              },
            },
            name: 'Open Positions',
            url: {
              href: 'https://demo.velir.com/about/careers/open-positions',
            },
          },
          {
            title: {
              jsonValue: {
                value: 'Careers',
              },
            },
            navigationTitle: {
              jsonValue: {
                value: 'Careers',
              },
            },
            name: 'Careers',
            url: {
              href: 'https://demo.velir.com/about/careers',
            },
          },
          {
            title: {
              jsonValue: {
                value: 'About',
              },
            },
            navigationTitle: {
              jsonValue: {
                value: 'About',
              },
            },
            name: 'About',
            url: {
              href: 'https://demo.velir.com/about',
            },
          },
          {
            title: {
              jsonValue: {
                value: 'name',
              },
            },
            navigationTitle: {
              jsonValue: {
                value: 'Home',
              },
            },
            name: 'home',
            url: {
              href: 'https://demo.velir.com/',
            },
          },
        ],
      },
    },
  },
};
