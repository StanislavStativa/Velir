import type { Meta, StoryObj } from '@storybook/react';
import { Default as FooterNavigationCallout } from './FooterNavigationCallout.dev';
import { defaultMockData } from './footer-navigation-callout.mock';

const meta: Meta<typeof FooterNavigationCallout> = {
  title: 'Components/FooterNavigationCallout',
  component: FooterNavigationCallout,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: defaultMockData,
};

export default meta;
type Story = StoryObj<typeof FooterNavigationCallout>;

export const Default: Story = {};
