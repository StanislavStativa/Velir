import type { Meta, StoryObj } from '@storybook/react';
import {
  Default as PromoAnimated,
  ImageRight as PromoAnimatedImageRightVariant,
} from './PromoAnimated';
import { Default as ContainerFullWidth } from '@/components/container/container-full-width/ContainerFullWidth';
import { defaultMockData } from './promo-animated.mock';
import { defaultMockData as containerFullWidthMockData } from '@/components/container/container-full-width/container-full-width.mock';

const meta: Meta<typeof PromoAnimated> = {
  title: 'Components/PromoAnimated',
  component: PromoAnimated,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: defaultMockData,
};
export default meta;

type Story = StoryObj<typeof PromoAnimated>;

export const Default: Story = {
  render: (args: typeof defaultMockData) => (
    <ContainerFullWidth {...containerFullWidthMockData}>
      <PromoAnimated {...args} />
    </ContainerFullWidth>
  ),
};

export const ImageRightVariant: Story = {
  render: (args: typeof defaultMockData) => (
    <ContainerFullWidth {...containerFullWidthMockData}>
      <PromoAnimatedImageRightVariant {...args} />
    </ContainerFullWidth>
  ),
};

export const InContext: StoryObj = {
  parameters: {
    layout: 'fullscreen',
    withInContext: true,
  },
};

export const ContainerSizes: StoryObj = {
  args: {
    excludeTopMargin: false,
  },
  parameters: { withContainerSizes: true },
};
