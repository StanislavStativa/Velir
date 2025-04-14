import { Meta, StoryObj } from '@storybook/react';
import { Default as Card } from './Card.dev';
import { defaultMockData } from './card.mock';

export default {
  title: 'Elements/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: defaultMockData,
};
