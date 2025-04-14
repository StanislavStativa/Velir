import type { Meta, StoryObj } from '@storybook/react';
import { Default as PageHeader } from './PageHeader';
import { mockPageHeaderData } from './page-header.mock';

const meta: Meta<typeof PageHeader> = {
  title: 'Components/PageHeader',
  component: PageHeader,
  parameters: {
    layout: 'padded', // "padded", "centered", or "fullscreen"
  },
  tags: ['autodocs'],
  args: mockPageHeaderData,
};
export default meta;

type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {};

export const darkPlayIcon: StoryObj = {
  args: {
    params: { darkPlayIcon: '1' },
  },
};
export const ColorSchemePrimary: StoryObj = {
  args: {
    params: { colorScheme: 'primary' },
  },
};

export const ColorSchemeSecondary: StoryObj = {
  args: {
    params: { colorScheme: 'secondary' },
  },
};

export const ContainerSizes: StoryObj = {
  args: {
    excludeTopMargin: false,
  },
  parameters: { withContainerSizes: true },
};
