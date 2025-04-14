/**
 * Generates prop types boilerplate for a UI component under `src/components/${componentName}`
 * @param componentName - the component name
 * @returns ui component prop types boilerplate as a string
 */
function generateComponentUiProps(componentName: string): string {
  return `import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

/**
 * Model used for Sitecore Component integration
 */
export type ${componentName}Props = ComponentProps &
  ${componentName}Params &
  ${componentName}Fields &
  ${componentName}Data;

// Component Rendering Parameter fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type ${componentName}Params = {
  params: {
    mock_param?: string;
  };
};

// Non-component data source fields
// TODO_SCAFFOLD_BE: Populate if needed, remove if not
export type ${componentName}Data = {
  titleOptional?: Field<string>;
  descriptionRequired: Field<string>;
  primaryLinkOptional?: LinkField; // Sitecore editable link field
  externalFields?: {
    mock_external_data: Field<string>;
  };
};

export type ${componentName}Fields = {
  fields: {
    titleOptional?: Field<string>; // Sitecore editable text field
    descriptionRequired: Field<string>; // Sitecore editable text field
    image?: ImageField; // Sitecore editable image field
    primaryLinkOptional?: LinkField; // Sitecore editable link field
  };
};
`;
}

export default generateComponentUiProps;
