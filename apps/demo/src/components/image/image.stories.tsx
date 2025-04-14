import { Meta, StoryObj } from '@storybook/react';
import { Default as Image } from '@/components/image/ImageBlock';
import { Default as ContainerFullWidth } from '@/components/container/container-full-width/ContainerFullWidth';
import { defaultMockData } from './image.mock';
import { defaultMockData as ContainerFullWidthMockData } from '@/components/container/container-full-width/container-full-width.mock';

export default {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
} as Meta<typeof Image>;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: defaultMockData,
  render: (args: typeof defaultMockData) => (
    <ContainerFullWidth {...ContainerFullWidthMockData}>
      <Image {...args} />
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
