import { kebabCase } from 'change-case';

/**
 * Generates utility script boilerplate for a component under `src/components/${componentName}`
 * @param componentName - the component name
 * @returns component utility script boilerplate as a string
 */
function generateComponentUtils(componentName: string): string {
  return `import { ComponentRendering, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { ${componentName}Props, ${componentName}BaseProps, ${componentName}Data } from './${kebabCase(componentName)}.props';

export const getStaticPropsFor${componentName} = async (
  rendering: ComponentRendering,
  layoutData: LayoutServiceData
): Promise<${componentName}Data> => {
  // "data" developer does this
  console.log(rendering);
  console.log(layoutData);

  const model: ${componentName}Data = {
    titleOptional: { value: 'Hardcoded for scaffolding' },
    descriptionRequired: { value: 'Hardcoded for scaffolding' },
    primaryLinkOptional: { value: {text:'Hardcoded for scaffolding', href: '/'} },
  };

  return model;
};

export const get${componentName}UiProps = (props: ${componentName}Props): ${componentName}BaseProps => {
  const model: ${componentName}BaseProps = {
    fields: {
      titleOptional: props.fields.titleOptional,
    },
  };

  return model;
};
`;
}

export default generateComponentUtils;
