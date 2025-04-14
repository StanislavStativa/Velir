import type { Meta, StoryObj } from '@storybook/react';
import { Default as ArticleListing } from './ArticleListing';
import { defaultMockData } from './article-listing.mock';

const meta: Meta<typeof ArticleListing> = {
  title: 'Components/Article Listing',
  component: ArticleListing,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: defaultMockData,
};
export default meta;

type Story = StoryObj<typeof ArticleListing>;

export const Default: Story = {};

export const NoDescription: Story = {
  args: {
    ...defaultMockData,
    fields: {
      ...defaultMockData.fields,
      descriptionOptional: undefined,
    },
  },
};

export const NoTitle: Story = {
  args: {
    ...defaultMockData,
    fields: {
      ...defaultMockData.fields,
      titleOptional: undefined,
    },
  },
};

export const NoButton: Story = {
  args: {
    ...defaultMockData,
    fields: {
      ...defaultMockData.fields,
      linkOptional: undefined,
    },
  },
};

export const EditingMode: Story = {
  args: {
    ...defaultMockData,
    params: { ...defaultMockData.params },
    fields: { ...defaultMockData.fields },
    isPageEditing: true
  },
  parameters: { withEditMode: true },
};

// expected values for withInContext: true || 'both', 'above', 'below'
// other options: noContainer (boolean), bleedContainer (boolean)
export const InContext: StoryObj = {
  parameters: {
    layout: 'fullscreen',
    withInContext: true,
  },
  args: defaultMockData,
};

export const ContainerSizes: StoryObj = {
  parameters: { withContainerSizes: true },
  args: defaultMockData,
};
