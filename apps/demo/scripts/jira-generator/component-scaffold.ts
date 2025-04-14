import { kebabCase } from 'change-case';
import { JiraFeatureData, ComponentField } from './types';
import {
  TYPE_GENERAL_LINK,
  TYPE_IMAGE,
  TYPE_LIMITED_RTE,
  TYPE_SINGLE_LINE_TEXT,
  TYPE_RTE,
  parseComponentParams,
  parseComponentFields,
  parseJssUiImports,
  parseComponentImports,
} from './utils';

// Generates the React component scaffold based on the fields
export function generateComponentScaffold(
  componentName: string,
  fields: ComponentField[],
  jiraData: JiraFeatureData
): string {
  const jssUiImports = parseJssUiImports(fields);
  const componentImports = parseComponentImports(fields);
  const componentParams = parseComponentParams(fields);
  const componentFields = parseComponentFields(fields);

  const importChunk = `
  import React from 'react';
  import { cn } from '@/lib/utils';
  import {
  ${jssUiImports ? `${jssUiImports}, ` : ' '} useSitecoreContext} from '@sitecore-jss/sitecore-jss-nextjs';
  import { NoDataFallback } from '@/utils/NoDataFallback';
  ${componentImports && componentImports}
  
  import { ${componentName}Props } from './${kebabCase(componentName)}.props';

  // These components can be replaced, they are only to display
  // the initial scaffolded fields nicely
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
  import { Badge } from "@/components/ui/badge";
  
  `.trim();

  const componentContent = fields
    .map((field) => {
      if (field.type === 'param') return '';
      switch (field.fieldType.toLowerCase()) {
        case TYPE_SINGLE_LINE_TEXT:
          return `{ ${field.machineName} && (
            <>
              <Badge variant="secondary">${field.name}</Badge>
              <Text
                tag="${field.machineName === 'titleRequired' ? 'h2' : 'p'}"
                className="${field.machineName === 'titleRequired' ? 'font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl' : 'font-heading text-sm font-semibold tracking-wide'}"
                field={${field.machineName}}
              />
            </>
          )}`;
        case TYPE_IMAGE:
          return `
          { ${field.machineName} && (
            <>
              <Badge variant="secondary">${field.name}</Badge>
              <div className="mt-8 md:mt-0">
                <ImageWrapper image={${field.machineName}} className="w-full rounded-lg md:max-w-md" />
              </div>
            </>
          )}`;
        case TYPE_RTE:
        case TYPE_LIMITED_RTE:
          return `
          { ${field.machineName} && (
            <>
              <Badge variant="secondary">${field.name}</Badge>
              <RichText className="text-body text-lg text-neutral-900" field={${field.machineName}} />
            </>
          )}`;
        case TYPE_GENERAL_LINK:
          return `
          { ${field.machineName}?.value?.href && (
           <>
            <Badge variant="secondary">${field.name}</Badge>
            <Button buttonLink={${field.machineName}} ${field.machineName === 'secondaryLinkOptional' ? 'variant="link"' : ''} />
           </>
          )}`;
        default:
          return `{/* Field "${field.name}" not handled */}`;
      }
    })
    .join('\n');

  const jiraComment = `
  {/* 
    Jira Ticket Information:
    - Key: ${jiraData.key}
    - Summary: ${jiraData.fields.summary}
    - URL: https://${jiraData.fields.domain}/browse/${jiraData.key}
  */}`;

  return `
  ${importChunk}

  ${jiraComment}

  // Default display of the component

  export const Default: React.FC<${componentName}Props> = ({ fields, params }) => {
  ${componentFields && `const { ${componentFields} } = fields;`}
  ${componentParams && `const { ${componentParams} } = params;`}
  const { sitecoreContext } = useSitecoreContext();
  const isPageEditing = sitecoreContext?.pageEditing ?? false;

  if (fields) {
  
    // The Card component + its contents below are only for initial
    // display of the scaffolded fields; please replace as needed.
    // The initial two should be kept (though they don't have to be divs)
  
    const containerClasses = cn('flex flex-col md:grid md:gap-8 md:items-center');

    return (
      <div data-component=${componentName} className="@container">
        <div data-class-change className={cn({[props?.params?.styles]: props?.params?.styles})}> 
          <Card className="mx-auto w-full max-w-5xl">
            {isPageEditing && '<!-- ${componentName}: Edit Mode -->'}
            <CardHeader className="flex flex-row justify-between">
              <CardTitle className="text-2xl font-bold">${jiraData.fields.summary}</CardTitle>
            <Badge variant="secondary"><a href="https://${jiraData.fields.domain}/browse/${jiraData.key}" target="_blank">${jiraData.key}</a></Badge>
            </CardHeader>
            <CardContent>
              <div className={containerClasses}>
                <div className={\`space-y-4\`}>
                  ${componentContent}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return <NoDataFallback componentName="${componentName}" />
  };
    `.trim();
}
