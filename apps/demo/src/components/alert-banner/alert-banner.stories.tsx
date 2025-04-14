import { Meta, StoryObj } from '@storybook/react';
import { Default as AlertBanner } from './AlertBanner.dev';
import { defaultMockData } from './alert-banner.mock';

export default {
  title: 'Components/Alert Banner',
  component: AlertBanner,
  tags: ['autodocs'],
} as Meta<typeof AlertBanner>;

type Story = StoryObj<typeof AlertBanner>;

export const Default: Story = {
  args: defaultMockData,
};
