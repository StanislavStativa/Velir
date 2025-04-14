import { kebabCase } from 'change-case'; // Generates a Storybook story for the component
export function generateStorybookStory(componentName: string): string {
  return `
  import type { Meta, StoryObj } from '@storybook/react';
  import { Default as ${componentName}} from './${componentName}';
  import { defaultMockData } from './${kebabCase(componentName)}.mock';
  
  const meta: Meta<typeof ${componentName}> = {
    title: 'Components/${componentName}',
    component: ${componentName},
    parameters: {
      layout: 'padded', // "padded", "centered", or "fullscreen"
    },
    tags: ['autodocs'],
    args: defaultMockData,
  };
  export default meta;

  type Story = StoryObj<typeof ${componentName}>;
  
  export const Default: Story = {};

  // expected values for withInContext: true || 'both', 'above', 'below'
  // other options: noContainer (boolean), bleedContainer (boolean)
  export const InContext: StoryObj = {
    parameters: {
      layout: 'fullscreen',
      withInContext: true,
    },
    args: defaultMockData,
  };
  
  export const ContainerSizes: StoryObj = {
    parameters: { withContainerSizes: true },
    args: defaultMockData,
  };
`.trim();
}
