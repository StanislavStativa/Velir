import { Meta, StoryObj } from '@storybook/react';

import { Default as RichTextBlock } from '@/components/rich-text-block/RichTextBlock';
import { Default as ContainerFullWidth } from '@/components/container/container-full-width/ContainerFullWidth';

import { defaultMockData } from './rich-text-block.mock';
import { defaultMockData as containerFullWidthMockData } from '@/components/container/container-full-width/container-full-width.mock';

const meta = {
  title: 'Components/Rich Text',
  component: RichTextBlock,
  tags: ['autodocs'],
} satisfies Meta<typeof RichTextBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: defaultMockData,
  render: (args) => (
    <ContainerFullWidth {...containerFullWidthMockData}>
      <RichTextBlock {...args} />
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
