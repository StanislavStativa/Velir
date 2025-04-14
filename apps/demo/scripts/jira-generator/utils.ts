import prettier from 'prettier';
import path from 'path';
import fs from 'fs';
import chalk from 'chalk';
import { kebabCase } from 'change-case';
import readline from 'readline';
import dotenv from 'dotenv';
import { RenderType } from './types';
import { ComponentField } from './types';
dotenv.config({ path: ['.env.local', '.env'] });

export const TYPE_GENERAL_LINK = 'general link';
export const TYPE_IMAGE = 'image';
export const TYPE_LIMITED_RTE = 'limited rte';
export const TYPE_SINGLE_LINE_TEXT = 'single line text';
export const TYPE_RTE = 'rte';

export let JIRA_EMAIL: string | undefined = process.env.JIRA_EMAIL;
export let JIRA_API_TOKEN: string | undefined = process.env.JIRA_API_TOKEN;
export let JIRA_DOMAIN: string | undefined = process.env.JIRA_DOMAIN;

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompts the user for input and returns the response
function askQuestion(query: string): Promise<string> {
  return new Promise((resolve) => rl.question(query, resolve));
}

// Retrieves Jira credentials from environment variables or prompts the user
export async function getJiraCredentials(): Promise<void> {
  try {
    if (!JIRA_EMAIL) {
      JIRA_EMAIL = await askQuestion('Enter your Jira email: ');
    }
    if (!JIRA_API_TOKEN) {
      JIRA_API_TOKEN = await askQuestion('Enter your Jira API token: ');
    }
    if (!JIRA_DOMAIN) {
      JIRA_DOMAIN = await askQuestion('Enter your Jira domain (e.g., your-domain.atlassian.net): ');
    }
  } catch (error) {
    console.error(chalk.red('Error retrieving Jira credentials:', error));
  }
}

//Normalizes the string values from Jira for easier search and lookup
export const normalizeForSearch = (str: string | undefined): string => {
  const stopWords = ['the', 'is', 'and', 'a'];
  if (!str) return '';
  return str
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^\w\s]/gi, '') // Remove special characters
    .replace(/\s+/g, ' ') // Remove extra spaces
    .split(' ') // Tokenize
    .filter((word: string) => !stopWords.includes(word)) // Remove stop words
    .join(' '); // Join back
};

// Helper function to determine the appropriate type based on machine name and field type
export function getFieldType(field: ComponentField) {
  if (field.type === 'field') {
    //Add types for fields
    switch (field.renderType) {
      case 'link': {
        return 'LinkField';
      }
      case 'eyebrow':
      case 'title':
      case 'subtitle':
      case 'text':
      case 'rich-text': {
        return 'Field<string>';
      }
      case 'image': {
        return 'ImageField';
      }
      default: {
        return 'Field<string>';
      }
    }
  } else {
    //add types for params
    if (
      field.machineName.includes('buttonStyle') ||
      field.machineName.includes('buttonColor') ||
      field.machineName.includes('darkPlayIcon')
    ) {
      return 'EnumValues<typeof ButtonVariants>';
    } else if (field.machineName.includes('bannerHeight')) {
      return 'EnumValues<typeof BannerHeight>';
    } else if (field.machineName.includes('numberOfColumns')) {
      //TODO CREATE ENUM
      return 'number | string';
    } else if (field.machineName.includes('colorScheme') || field.machineName.includes('theme')) {
      return 'EnumValues<typeof Theme>';
    } else if (field.machineName.includes('imageOrientation')) {
      return 'EnumValues<typeof Orientation>';
    } else if (field.machineName.includes('textOrientation')) {
      return 'EnumValues<typeof TextOrientation>';
    } else {
      return 'Field<string>';
    }
  }
}
// Helper function to determine the appropriate type based on machine name and field type
export function getComponentImports(renderType: RenderType): {
  sitecoreTypeImports: string[];
  sitecoreUiImports: string[];
  componentImports: string[];
} {
  //jss types
  const sitecoreTypeImports = [];
  //jss components
  const sitecoreUiImports = [];
  //accelerator components
  const componentImports = [];
  console.log('renderType', renderType);
  switch (renderType) {
    case 'link': {
      sitecoreTypeImports.push('LinkField');
      // sitecoreUiImports.push('Link');
      componentImports.push(
        "import { ButtonBase as Button } from '@/components/button-component/ButtonComponent';"
      );
      break;
    }
    case 'eyebrow':
    case 'title':
    case 'subtitle':
    case 'text': {
      sitecoreUiImports.push('Text');
      sitecoreTypeImports.push('Field');

      break;
    }
    case 'rich-text': {
      sitecoreUiImports.push('RichText');
      sitecoreTypeImports.push('Field');
      break;
    }
    case 'image': {
      sitecoreTypeImports.push('ImageField');
      // sitecoreUiImports.push('ImageWrapper');
      componentImports.push(
        "import { Default as ImageWrapper } from '@/components/image/ImageWrapper';"
      );
      break;
    }
  }
  return { sitecoreUiImports, sitecoreTypeImports, componentImports };
}

// Helper function to determine the appropriate type based on machine name and field type
export function getEnumImport(machineName: string): Array<string> {
  console.log('renderType', machineName);

  switch (machineName) {
    case 'buttonStyle':
    case 'buttonColor':
      return [
        "import { EnumValues } from '@/enumerations/generic.enum'",
        "import { ButtonVariants } from '@/enumerations/ButtonStyle.enum'",
      ];
    case 'bannerHeight':
      return [
        "import { EnumValues } from '@/enumerations/generic.enum'",
        "import { BannerHeight } from '@/enumerations/BannerHeight.enum'",
      ];
    case 'colorScheme':
    case 'theme':
      return [
        "import { EnumValues } from '@/enumerations/generic.enum'",
        "import { Theme } from '@/enumerations/Theme.enum'",
      ];
    case 'imageOrientation':
      return [
        "import { EnumValues } from '@/enumerations/generic.enum'",
        "import { Orientation } from '@/enumerations/Orientation.enum'",
      ];
    case 'textOrientation':
      return [
        "import { EnumValues } from '@/enumerations/generic.enum'",
        "import { TextOrientation } from '@/enumerations/TextOrientation.enum'",
      ];
    default:
      return ["import { EnumValues } from '@/enumerations/generic.enum'"];
  }
}

// Format the code using Prettier
export async function formatCode(code: string, parser: string): Promise<string> {
  try {
    return await prettier.format(code, {
      parser,
      semi: true,
      singleQuote: true,
      trailingComma: 'es5',
    });
  } catch (error) {
    console.error('Error formatting code:', error);
    return code; // Return original code if formatting fails
  }
}

// Normalizes line endings in the generated content
export function editLineEndings(content: string) {
  return content.replace(/\r|\n/gm, '\r\n');
}

// Creates a file for the component in the appropriate directory
export async function scaffoldFile(
  fileContent: string,
  filename: string,
  componentName: string,
  customPath = ''
): Promise<string | null> {
  const basePath = path.join('src', 'components');
  const componentPath = path.join(basePath, customPath, kebabCase(componentName));
  const outputFile = path.join(componentPath, filename);

  try {
    if (fs.existsSync(outputFile)) {
      console.log(chalk.red(`Skipping creating ${outputFile}; already exists.`));
      return null;
    }
    fs.mkdirSync(componentPath, { recursive: true });

    const parser = filename.endsWith('.ts') || filename.endsWith('.tsx') ? 'typescript' : 'babel';
    const formattedContent = await formatCode(fileContent, parser);

    fs.writeFileSync(outputFile, editLineEndings(formattedContent), 'utf8');
    console.log(chalk.green(`File ${outputFile} has been scaffolded and formatted.`));
    return outputFile;
  } catch (error) {
    console.error(chalk.red(`Error scaffolding file ${outputFile}:`, error));
    return null;
  }
}

export const getRenderType = (type: string, machineName: string): RenderType => {
  let renderType = 'text';

  if (
    machineName.toLocaleLowerCase().includes('link') &&
    type === normalizeForSearch(TYPE_GENERAL_LINK)
  ) {
    renderType = 'link';
  } else if (
    type.toLocaleLowerCase().includes('image') &&
    type === normalizeForSearch(TYPE_IMAGE)
  ) {
    renderType = 'image';
  } else if (
    type.toLocaleLowerCase().includes('video') &&
    type === normalizeForSearch(TYPE_GENERAL_LINK)
  ) {
    renderType = 'video';
  } else if (
    type.toLocaleLowerCase().includes('rte') &&
    type === normalizeForSearch(TYPE_LIMITED_RTE)
  ) {
    renderType = 'rich-text';
  } else if (
    type.toLocaleLowerCase().includes('eyebrow') &&
    type === normalizeForSearch(TYPE_SINGLE_LINE_TEXT)
  ) {
    renderType = 'eyebrow';
  } else if (
    type.toLocaleLowerCase().includes('title') &&
    type === normalizeForSearch(TYPE_SINGLE_LINE_TEXT)
  ) {
    renderType = 'title';
  } else if (
    type.toLocaleLowerCase().includes('subtitle') &&
    type === normalizeForSearch(TYPE_SINGLE_LINE_TEXT)
  ) {
    renderType = 'subtitle';
  } else if (
    type.toLocaleLowerCase().includes('description') &&
    (type === normalizeForSearch(TYPE_RTE) || type === normalizeForSearch(TYPE_LIMITED_RTE))
  ) {
    renderType = 'rich-text';
  }
  return renderType as RenderType;
};

export const parseJssTypeImports = (fields: ComponentField[]) =>
  [
    ...new Set(
      fields.reduce(
        (a, b) =>
          b.type === 'field'
            ? [...a, getComponentImports(b.renderType)?.sitecoreTypeImports].flat(1)
            : a,
        []
      )
    ),
  ].join(', ');

export const parseJssUiImports = (fields: ComponentField[]) =>
  [
    ...new Set(
      fields.reduce(
        (a, b) =>
          b.type === 'field'
            ? [...a, getComponentImports(b.renderType)?.sitecoreUiImports].flat(1)
            : a,
        []
      )
    ),
  ].join(', ');

export const parseComponentImports = (fields: ComponentField[]) =>
  [
    ...new Set(
      fields.reduce(
        (a, b) =>
          b.type === 'field'
            ? [...a, getComponentImports(b.renderType)?.componentImports].flat(1)
            : a,
        []
      )
    ),
  ].join('\n  ');

//convert filter map with reduce
export const parseComponentParams = (fields: ComponentField[]) =>
  [
    ...new Set(
      fields.reduce((a, b) => (b.type === 'param' ? [...a, b.machineName].flat(1) : a), [])
    ),
  ].join(', \n');

export const parseComponentFields = (fields: ComponentField[]) =>
  [
    ...new Set(
      fields.reduce((a, b) => (b.type === 'field' ? [...a, b.machineName].flat(1) : a), [])
    ),
  ].join(', \n');

export const parseParamImports = (fields: ComponentField[]) =>
  [
    ...fields.reduce((acc, field) => {
      if (field.type === 'param') {
        const enumImport = getEnumImport(field.machineName);
        if (enumImport) {
          enumImport.forEach((importString) => acc.add(importString));
        }
      }
      return acc;
    }, new Set<string>()),
  ].join('\n');

export const parseTypeDefinitions = (fields: ComponentField[]) =>
  [
    ...fields.reduce((acc, field) => {
      if (field.type === 'param') {
        const type = getFieldType(field);
        acc.add(`  ${field.machineName}?: ${type};`);
      }
      return acc;
    }, new Set<string>()),
  ].join('\n');

export const parseFieldTypeDefinitions = (fields: ComponentField[]) =>
  [
    ...fields.reduce((acc, field) => {
      if (field.type !== 'param') {
        const type = getFieldType(field);
        acc.add(`${field.machineName}${field.required ? '' : '?'}: ${type};`);
      }
      return acc;
    }, new Set<string>()),
  ].join('\n');
