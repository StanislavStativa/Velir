import { Meta, StoryObj } from '@storybook/react';
import { Default as PromoBlock } from './PromoBlock';
import { Default as ContainerFullWidth } from '@/components/container/container-full-width/ContainerFullWidth';
import { defaultMockData } from './promo-block.mock';
import { defaultMockData as containerFullWidthMockData } from '@/components/container/container-full-width/container-full-width.mock';

export default {
  title: 'Components/PromoBlock',
  component: PromoBlock,
  tags: ['autodocs'],
} as Meta<typeof PromoBlock>;

type Story = StoryObj<typeof PromoBlock>;

export const Default: Story = {
  args: defaultMockData,
  render: (
    args: any // eslint-disable-line @typescript-eslint/no-explicit-any
  ) => (
    <ContainerFullWidth {...containerFullWidthMockData}>
      <PromoBlock {...args} />
    </ContainerFullWidth>
  ),
};

export const InContext: StoryObj = {
  parameters: {
    layout: 'fullscreen',
    withInContext: true,
  },
  args: defaultMockData,
};
