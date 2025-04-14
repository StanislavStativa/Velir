import { TestimonialCarouselProps } from './testimonial-carousel.props';
export const defaultMockData: TestimonialCarouselProps = {
  params: {
    numColumns: '3',
  },
  sitecoreContext: {},
  name: 'Testimonial Carousel',
  Testimonials: [],
  fields: {
    data: {
      datasource: {
        children: {
          results: [
            {
              testimonialAttribution: { jsonValue: { value: 'Lumea Renewables' } },
              testimonialQuote: {
                jsonValue: {
                  value:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
              },
            },
            {
              testimonialAttribution: { jsonValue: { value: 'Evergen Power' } },
              testimonialQuote: {
                jsonValue: {
                  value:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
              },
            },
            {
              testimonialAttribution: { jsonValue: { value: 'Lumea Renewables' } },
              testimonialQuote: {
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
    componentName: 'MultiPromo',
    dataSource: '/',
  },
};
