import { ComponentField } from './types';
import {
  parseJssTypeImports,
  parseParamImports,
  parseTypeDefinitions,
  parseFieldTypeDefinitions,
} from './utils';

// Generates TypeScript type definitions for the component props
export function generateTypes(componentName: string, fields: ComponentField[]): string {
  const jssTypeImports = parseJssTypeImports(fields);
  const paramImports = parseParamImports(fields);
  const paramTypeDefinitions = parseTypeDefinitions(fields);
  const fieldTypeDefinitions = parseFieldTypeDefinitions(fields);

  return `
import { ${jssTypeImports} } from '@sitecore-jss/sitecore-jss-nextjs';
${paramImports && paramImports}
import { ComponentProps } from '@/lib/component-props';

interface ${componentName}Params {
${paramTypeDefinitions}
  [key: string]: any; // eslint-disable-line
}

interface ${componentName}Fields {
${fieldTypeDefinitions}
}

export interface ${componentName}Props extends ComponentProps {
  params: ${componentName}Params;
  fields: ${componentName}Fields;
}
  `.trim();
}
