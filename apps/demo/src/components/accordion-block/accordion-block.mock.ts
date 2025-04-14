import { AccordionProps } from './accordion-block.props';
export const defaultMockData: AccordionProps = {
  params: {},
  fields: {
    data: {
      datasource: {
        heading: { jsonValue: { value: 'Medium Length Headline' } },
        description: {
          jsonValue: {
            value:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
        },
        link: { jsonValue: { value: { text: 'Call to Action', href: '/#' } } },
        children: {
          results: [
            {
              heading: {
                jsonValue: {
                  value:
                    'Really long headline to test wrapping, duis vel nibh at velit Duis vel nibh at velit',
                },
              },
              description: {
                jsonValue: {
                  value:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
              },
            },
            {
              heading: {
                jsonValue: { value: 'Medium Length Headline' },
              },
              description: {
                jsonValue: {
                  value:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
              },
            },
            {
              heading: {
                jsonValue: { value: 'Medium Length Headline' },
              },
              description: {
                jsonValue: {
                  value:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
    componentName: 'AccordionBlock',
    dataSource: '/',
  },
};
