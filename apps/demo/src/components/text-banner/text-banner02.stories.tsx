import { Meta, StoryObj } from '@storybook/react';
import { Default as TextBanner } from '@/components/text-banner/TextBanner02.dev';
import { Default as ContainerFullWidth } from '@/components/container/container-full-width/ContainerFullWidth';
import { defaultMockData } from './text-banner.mock';
import { defaultMockData as containerFullWidthMockData } from '@/components/container/container-full-width/container-full-width.mock';

export default {
  title: 'Components/TextBanner/02',
  component: TextBanner,
  tags: ['autodocs'],
} as Meta<typeof TextBanner>;

type Story = StoryObj<typeof TextBanner>;

export const Default: Story = {
  args: defaultMockData,
  render: (args: typeof defaultMockData) => (
    <ContainerFullWidth {...containerFullWidthMockData}>
      <TextBanner {...args} />
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
