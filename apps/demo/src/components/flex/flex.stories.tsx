import { Meta, StoryObj } from '@storybook/react';
import { Flex, XMFlex, XMComponent } from './Flex.dev';
import { mockData, xmMockData } from './flex.mock';
type Story = StoryObj;

export default {
  title: 'Components/Flex',
  component: Flex,
  tags: ['autodocs'],
  args: mockData,
} as Meta<typeof Flex | typeof XMFlex>;

export const Default: Story = {
  args: mockData,
};

export const XMCloud = {
  args: xmMockData,
  render: (args: XMComponent) => <XMFlex {...args} />,
};
