import { ArticleHeaderProps } from './article-header.props';
export const mockArticleHeaderData: ArticleHeaderProps = {
  params: {},
  fields: {
    data: {
      datasource: {
        imageRequired: {
          jsonValue: {
            value: {
              src: 'https://picsum.photos/900/900',
              alt: '',
              width: 900,
              height: 900,
            },
          },
        },
        eyebrowOptional: {
          jsonValue: {
            value: 'This is the eyebrow',
          },
        },
      },
      externalFields: {
        pageHeaderTitle: {
          jsonValue: {
            value: 'Article Header',
          },
        },
        pageReadTime: {
          jsonValue: {
            value: '3 mins',
          },
        },
        pageDisplayDate: {
          jsonValue: {
            value: '2025-03-27T00:00:00Z',
          },
        },
        pageAuthor: {
          jsonValue: {
            id: '321f0377-72f9-4ea5-a03d-094fdbb4d7e0',
            url: '/Data/Taxonomy/People/a/Ana-Wintour',
            name: 'Ana Wintour',
            displayName: 'Ana Wintour',
            fields: {
              personProfileImage: {
                value: {
                  src: 'https://picsum.photos/900/900',
                  alt: '',
                  width: 900,
                  height: 900,
                },
              },
              personJobTitle: {
                value: 'Head Chief',
              },
              personFirstName: {
                value: 'Anna',
              },
              personLastName: {
                value: 'Wintour',
              },
              personBio: {
                value: 'Blah Blah',
              },
            },
          },
        },
      },
    },
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'ArticleHeader',
    dataSource: '/',
  },
};
