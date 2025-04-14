import fetch from 'node-fetch';
import { URL } from 'url';
import chalk from 'chalk';
import { kebabCase, pascalCase } from 'change-case';
import { Theme } from '@/enumerations/Theme.enum';
import { Orientation } from '@/enumerations/Orientation.enum';
import { TextOrientation } from '@/enumerations/TextOrientation.enum';
import { ButtonVariants } from '@/enumerations/ButtonStyle.enum';
import { BannerHeight } from '@/enumerations/BannerHeight.enum';
import {
  normalizeForSearch,
  scaffoldFile,
  getJiraCredentials,
  rl,
  getRenderType,
  JIRA_API_TOKEN,
  JIRA_DOMAIN,
  JIRA_EMAIL,
  TYPE_SINGLE_LINE_TEXT,
  TYPE_IMAGE,
  TYPE_RTE,
  TYPE_LIMITED_RTE,
  TYPE_GENERAL_LINK,
} from './jira-generator/utils';
import { generateComponentScaffold } from './jira-generator/component-scaffold';
import { generateStorybookStory } from './jira-generator/storybook-scaffold';
import { generateTypes } from './jira-generator/props-scaffold';
import { ComponentField, JiraFeatureData, TicketInfo } from './jira-generator/types';

// Parses the input to extract Jira ticket information
function parseInput(input: string): TicketInfo {
  if (input.startsWith('http://') || input.startsWith('https://')) {
    try {
      const parsedUrl = new URL(input);
      const pathParts = parsedUrl.pathname.split('/');
      const ticketKey = pathParts[pathParts.length - 1];
      const domain = parsedUrl.hostname;
      return { ticketKey, domain };
    } catch (error) {
      throw new Error('Invalid URL provided. Please check the URL and try again.');
    }
  } else {
    if (!/^[A-Z]+-\d+$/.test(input)) {
      throw new Error('Invalid ticket number format. Expected format: PROJ-123');
    }
    return { ticketKey: input, domain: JIRA_DOMAIN || '' };
  }
}

// Fetches Jira feature data from the API
async function fetchJiraFeature(input: string): Promise<JiraFeatureData> {
  const { ticketKey, domain } = parseInput(input);
  const apiUrl = `https://${domain}/rest/api/3/issue/${ticketKey}`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${JIRA_EMAIL}:${JIRA_API_TOKEN}`).toString('base64')}`,
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as JiraFeatureData;

    // Extract Component Data Source fields from the description
    const componentDataSourceFields = extractComponentDataSourceFields(data.fields.description);

    return {
      id: data.id,
      key: data.key,
      fields: {
        summary: data.fields.summary,
        description: data.fields.description,
        componentDataSourceFields,
        domain: domain,
      },
    };
  } catch (error) {
    console.error('Error fetching Jira feature:', error);
    throw error;
  }
}

// Extracts component data source fields from the Jira description
function extractComponentDataSourceFields(description: any): ComponentField[] {
  const fields: ComponentField[] = [];

  if (description && description.content) {
    for (const content of description.content) {
      if (content.type === 'table') {
        for (const row of content.content.slice(1)) {
          // Skip header row
          // Add null checks and provide default values
          const rowData = row.content.map((cell: any) => {
            // Check if cell structure exists before accessing
            return cell?.content?.[0]?.content?.[0]?.text || null;
          });
          
          const [name, machineName, fieldType, required, type, defaultValue] = rowData;
          
          // Skip rows with missing essential data
          if (!name || !machineName) continue;

          const normalizedType = normalizeForSearch(type || '');
          const normalizedFieldType = normalizeForSearch(fieldType || '');
          const normalizedRequired = normalizeForSearch(required || '');

          fields.push({
            name,
            machineName,
            fieldType: normalizedFieldType,
            required:
              normalizedRequired === 'y' ||
              normalizedRequired === 'true' ||
              normalizedRequired === 'required' ||
              normalizedRequired === 'yes',
            defaultValue:
              normalizedType === 'field' // only use default types for params
                ? null
                : defaultValue === undefined ||
                    defaultValue === null ||
                    defaultValue.trim() === 'NULL' ||
                    defaultValue.trim() === ''
                  ? null
                  : defaultValue,
            type: normalizedType,
            renderType: getRenderType(normalizedFieldType, machineName),
          });
        }
        break; // Assume only one table in the description
      }
    }
  }
  return fields;
}

// Generates mock data for the component based on the fields
function generateMockData(componentName: string, fields: ComponentField[]): string {
  const params: Record<string, any> = {};
  const fieldsData: Record<string, any> = {};

  fields.forEach((field) => {
    if (field.type === 'param') {
      params[field.machineName] = generateParamValue(field);
    } else {
      fieldsData[field.machineName] = {
        value: generateFieldValue(field),
      };
    }
  });

  const mockData = {
    params,
    fields: fieldsData,
    rendering: {
      uid: '{00000000-0000-0000-0000-000000000000}',
      componentName: componentName,
      dataSource: '/',
    },
  };

  return `
import { ${componentName}Props } from './${kebabCase(componentName)}.props';
export const defaultMockData: ${componentName}Props = ${JSON.stringify(mockData, null, 2)};
  `.trim();
}

// Generate default values for param mockData
function generateParamValue(field: ComponentField): any {
  switch (field.machineName) {
    case 'buttonStyle':
    case 'buttonColor':
      return field.defaultValue ? normalizeForSearch(field.defaultValue) : ButtonVariants.DEFAULT;
    case 'darkPlayIcon':
      return field.defaultValue || 'true';
    case 'bannerHeight':
      return field.defaultValue
        ? normalizeForSearch(field.defaultValue).includes('tall')
          ? BannerHeight.TALL
          : BannerHeight.SHORT
        : BannerHeight.DEFAULT;
    case 'numberOfColumns':
      return field.defaultValue || 3;
    case 'colorScheme':
    case 'theme':
      return Theme.LIGHT;
    case 'imageOrientation':
      return field.defaultValue
        ? normalizeForSearch(field.defaultValue).includes('left')
          ? Orientation.IMAGE_LEFT
          : Orientation.IMAGE_RIGHT
        : Orientation.IMAGE_RIGHT;
    case 'textOrientation':
      return field.defaultValue
        ? normalizeForSearch(field.defaultValue).includes('left')
          ? TextOrientation.LEFT
          : TextOrientation.RIGHT
        : TextOrientation.RIGHT;
    default:
      return field.defaultValue || `Sample ${field.name}`;
  }
}

// Generates a default value for a field based on its type
function generateFieldValue(field: ComponentField): string | object {
  // console.log('Generating field value for:', field?.fieldType);
  switch (normalizeForSearch(field.fieldType)) {
    case TYPE_SINGLE_LINE_TEXT:
      return field.defaultValue || `Example ${field.name} field value`;
    case TYPE_IMAGE:
      return {
        src: 'https://picsum.photos/600/600',
        alt: `Sample ${field.name}`,
        width: 600,
        height: 600,
      };
    case TYPE_RTE:
    case TYPE_LIMITED_RTE:
      return (
        field.defaultValue ||
        `<p>Example ${field.name} content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`
      );
    case TYPE_GENERAL_LINK:
      return (
        field.defaultValue || {
          href: '/sample-link',
          text: `${field.name} link text`,
        }
      );
    default:
      return field.defaultValue || `Example ${field.name} field value`;
  }
}

// Main function that orchestrates the entire scaffolding process
async function main(): Promise<void> {
  try {
    if (process.argv.length < 4) {
      console.error(
        'Please provide a Jira ticket number or URL and a component name as arguments.'
      );
      console.error(
        'Usage: ts-node jira-feature-scaffolder.ts <Jira Ticket Number or URL> <Component Name> [Custom Path]'
      );
      process.exit(1);
    }

    await getJiraCredentials();

    if (!JIRA_EMAIL || !JIRA_API_TOKEN || !JIRA_DOMAIN) {
      console.error(
        'Error: Missing required Jira credentials. Please provide all required information.'
      );
      process.exit(1);
    }

    const input = process.argv[2];
    const componentName = pascalCase(process.argv[3]);
    const customPath = process.argv[4] || '';

    console.log(`Fetching Jira feature ticket: ${input}`);
    const featureData = await fetchJiraFeature(input);

    console.log('Generating mock data...');
    const mockData = generateMockData(componentName, featureData.fields.componentDataSourceFields);

    console.log(`Scaffolding component: ${componentName}`);
    const componentScaffold = generateComponentScaffold(
      componentName,
      featureData.fields.componentDataSourceFields,
      featureData
    );

    // Create Storybook story file
    const storyContent = generateStorybookStory(componentName);

    // Create types file
    const typesContent = generateTypes(componentName, featureData.fields.componentDataSourceFields);

    // Create mockData file
    await scaffoldFile(mockData, `${kebabCase(componentName)}.mock.ts`, componentName, customPath);

    // Create component file
    await scaffoldFile(componentScaffold, `${componentName}.tsx`, componentName, customPath);

    await scaffoldFile(
      storyContent,
      `${kebabCase(componentName)}.stories.tsx`,
      componentName,
      customPath
    );

    await scaffoldFile(
      typesContent,
      `${kebabCase(componentName)}.props.ts`,
      componentName,
      customPath
    );

    console.log(chalk.green('Component scaffolding completed successfully.'));
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  } finally {
    rl.close();
  }
}

main();
