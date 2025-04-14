import { kebabCase } from 'change-case';

/**
 * Generates prop types boilerplate for a UI component under `src/components/${componentName}`
 * @param componentName - the component name
 * @returns ui component mock data boilerplate as a string
 */
function generateComponentMockData(componentName: string): string {
  return `import { ${componentName}Props } from './${kebabCase(componentName)}.props';

export const defaultMockData: ${componentName}Props = {
  params: {},
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: '${componentName}',
    dataSource: '/',
  },
  fields: {
    titleOptional: { value: 'Mock Data Title' },
    descriptionRequired: { value: 'Mock data description' },
    primaryLinkOptional: { value: {text: 'Mock data description', href: '/'} },
  },
};
`;
}

export default generateComponentMockData;
