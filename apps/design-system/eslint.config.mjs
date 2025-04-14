import onlyWarn from 'eslint-plugin-only-warn';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = [
  {
    ignores: [
      'build',
      'node_modules',
      'storybook-static',
      '.generated/**/*',
      '**/*.d.ts',
      '**/*.js',
      '**/*.enum.ts',
    ],
  },
  ...compat.extends(
    'next',
    'next/core-web-vitals',
    'plugin:storybook/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ),
  {
    plugins: {
      'only-warn': onlyWarn,
      '@typescript-eslint': typescriptEslint,
      prettier,
      react,
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        React: true,
        JSX: true,
      },
    },
    rules: {
      'jsx-quotes': ['warn', 'prefer-double'],
      'jsx-a11y/alt-text': [
        'warn',
        {
          elements: ['img'],
        },
      ],
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'jsx-quotes': ['warn', 'prefer-double'],
      'import/no-default-export': 'off',
      'react-hooks/rules-of-hooks': 'warn',
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
        },
      ],
    },
  },
];
export default config;
