import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import yaml from 'eslint-plugin-yaml';
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
      '.next',
      '.generated/**/*',
      '**/*.d.ts',
      '**/*.js',
      '**/*.enum.ts',
    ],
  },
  ...compat.extends(
    'next',
    'next/core-web-vitals',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:yaml/recommended',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended'
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
      yaml,
      react,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2018,
      sourceType: 'module',
    },

    rules: {
      '@next/next/no-img-element': 'off',
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
