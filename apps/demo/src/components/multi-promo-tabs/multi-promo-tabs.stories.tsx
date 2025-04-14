import type { Meta, StoryObj } from '@storybook/react';
import { Default as MultiPromoTabs } from './MultiPromoTabs';
import { defaultMockData } from './multi-promo-tabs.mock';

const meta: Meta<typeof MultiPromoTabs> = {
  title: 'Components/MultiPromoTabs',
  component: MultiPromoTabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: defaultMockData,
};

export default meta;
type Story = StoryObj<typeof MultiPromoTabs>;

export const Default: Story = {};

export const InContext: StoryObj = {
  parameters: {
    layout: 'fullscreen',
    withInContext: true,
  },
};

export const ContainerSizes: StoryObj = {
  parameters: { withContainerSizes: true },
};

export const EditingMode: Story = {
  args: {
    ...defaultMockData,
    isPageEditing: true,
    fields: {
      ...defaultMockData.fields,
      data: {
        datasource: {
          ...defaultMockData.fields.data.datasource,
          children: {
            results: [
              {
                title: { jsonValue: { value: 'Lorem Ipsum' } },
                link1: { jsonValue: { value: { href: '', text: 'Add link' } } },
                link2: { jsonValue: { value: { href: '', text: 'Add link' } } },
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
                link1: { jsonValue: { value: { href: '', text: 'Add link' } } },
                link2: { jsonValue: { value: { href: '', text: 'Add link' } } },
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
  },
  parameters: { withEditMode: true },
};

