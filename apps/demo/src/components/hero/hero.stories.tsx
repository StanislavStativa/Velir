import type { Meta, StoryObj } from '@storybook/react';
import { Default as Hero } from './Hero';
import { defaultMockData } from './hero.mock';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: defaultMockData,
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {};

// expected values for withInContext: true || 'both', 'above', 'below'
export const InContextNoContainer: StoryObj = {
  parameters: {
    layout: 'fullscreen',
    withInContext: 'below',
    noContainer: true,
  },
};

export const InContextFullBleed: StoryObj = {
  parameters: {
    layout: 'fullscreen',
    withInContext: 'below',
    bleedContainer: true,
  },
};

export const ContainerSizes: StoryObj = {
  parameters: { withContainerSizes: true },
};

export const EditingMode = {
  parameters: { withEditMode: true },
};

export const ColorSchemes: Story = {
  render: () => (
    <div className="space-y-8">
      <Hero {...defaultMockData} params={{ ...defaultMockData.params, colorScheme: 'primary' }} />
      <Hero {...defaultMockData} params={{ ...defaultMockData.params, colorScheme: 'secondary' }} />
      <Hero {...defaultMockData} params={{ ...defaultMockData.params, colorScheme: 'tertiary' }} />
      <Hero {...defaultMockData} params={{ ...defaultMockData.params, colorScheme: 'dark' }} />
      <Hero {...defaultMockData} params={{ ...defaultMockData.params, colorScheme: 'light' }} />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
