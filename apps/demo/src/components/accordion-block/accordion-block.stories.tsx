import { Meta, StoryObj } from '@storybook/react';
import { Default as AccordionBlock } from './AccordionBlock';
import { defaultMockData } from './accordion-block.mock';

export default {
  title: 'Components/Accordion Block',
  component: AccordionBlock,
  tags: ['autodocs'],
  args: defaultMockData,
} as Meta<typeof AccordionBlock>;

type Story = StoryObj<typeof AccordionBlock>;

export const Default: Story = {};

export const InContext: StoryObj = {
  parameters: {
    layout: 'fullscreen',
    withInContext: true,
  },
};

export const ContainerSizes: StoryObj = {
  parameters: { withContainerSizes: true },
};

export const EditingMode = {
  parameters: { withEditMode: true },
};
