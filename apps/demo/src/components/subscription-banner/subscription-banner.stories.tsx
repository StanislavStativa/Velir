import type { Meta, StoryObj } from '@storybook/react';
import { Default as SubscriptionBanner } from './SubscriptionBanner';
import { mockSubscriptionBannerData } from './subscription-banner.mock';

const meta: Meta<typeof SubscriptionBanner> = {
  title: 'Components/Subscription Banner',
  component: SubscriptionBanner,
  parameters: {
    layout: 'padded', // "padded", "centered", or "fullscreen"
  },
  tags: ['autodocs'],
  args: mockSubscriptionBannerData,
};
export default meta;

type Story = StoryObj<typeof SubscriptionBanner>;

export const Default: Story = {};

// For Rendering Variants:

// Replace the component import at the top with this one:
// import {
//   Default as SubscriptionBanner,
//   VariantNameHere as SubscriptionBannerVariantNameHere,
// } from './SubscriptionBanner';

// export const NameOfVariant: Story = {
// render: (args: typeof mockSubscriptionBannerData) => <SubscriptionBannerVariantNameHere {...args} />,

export const ContainerSizes: StoryObj = {
  args: {
    excludeTopMargin: false,
  },
  parameters: { withContainerSizes: true },
};
