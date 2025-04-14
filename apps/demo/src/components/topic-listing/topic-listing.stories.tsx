import type { Meta, StoryObj } from '@storybook/react';
import { Default as TopicListing } from './TopicListing';
import { defaultMockData } from './topic-listing.mock';

const meta: Meta<typeof TopicListing> = {
  title: 'Components/Topic Listing',
  component: TopicListing,
  parameters: {
    layout: 'fullscreen', // "padded", "centered", or "fullscreen"
  },
  tags: ['autodocs'],
  args: defaultMockData,
};

export default meta;

type Story = StoryObj<typeof TopicListing>;

export const Default: Story = {};

export const InContext: StoryObj = {
  parameters: {
    layout: 'fullscreen',
    withInContext: true,
  },
  args: defaultMockData,
};

export const ContainerSizes: StoryObj = {
  args: {
    excludeTopMargin: false,
  },
  parameters: { withContainerSizes: true },
};

// For Rendering Variants:

// Replace the component import at the top with this one:
// import {
//   Default as TopicListing,
//   VariantNameHere as TopicListingVariantNameHere,
// } from './TopicListing';

// export const NameOfVariant: Story = {
// render: (args: typeof defaultMockData) => <TopicListingVariantNameHere {...args} />,
