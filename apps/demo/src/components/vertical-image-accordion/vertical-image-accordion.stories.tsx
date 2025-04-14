import type { Meta, StoryObj } from '@storybook/react';
import { Default as VerticalImageAccordion } from './VerticalImageAccordion';
import { mockVerticalImageAccordionData } from './vertical-image-accordion.mock';

const meta: Meta<typeof VerticalImageAccordion> = {
  title: 'Components/Vertical Image Accordion',
  component: VerticalImageAccordion,
  parameters: {
    layout: 'fullscreen', // "padded", "centered", or "fullscreen"
  },
  tags: ['autodocs'],
  args: mockVerticalImageAccordionData,
};
export default meta;

type Story = StoryObj<typeof VerticalImageAccordion>;

export const Default: Story = {};

export const EditingMode: Story = {
  args: {
    ...mockVerticalImageAccordionData,
    isPageEditing: true,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Editing mode variant that displays all content stacked without animations',
      },
    },
  },
};

export const ContainerSizes: StoryObj = {
  args: {
    excludeTopMargin: false,
  },
  parameters: { withContainerSizes: true },
};
