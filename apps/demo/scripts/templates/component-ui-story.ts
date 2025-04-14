import { kebabCase, capitalCase } from 'change-case';

/**
 * Generates Storybook boilerplate for a component under `src/components/${componentName}`
 * @param componentName - the component name
 * @returns component story boilerplate as a string
 */
function generateComponentUiStory(componentName: string): string {
  return `import { Meta, StoryObj } from '@storybook/react';

import ${componentName} from './${componentName}';

import { defaultMockData } from './${kebabCase(componentName)}.mock';

export default {
  title: 'Components/${capitalCase(componentName)}',
  component: ${componentName},
  tags: ['autodocs'],
} as Meta<typeof ${componentName}>;

type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  args: defaultMockData,
};
`;
}

export default generateComponentUiStory;
