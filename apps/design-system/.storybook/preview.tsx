import React from 'react';
import { I18nProvider } from 'next-localization';
import { dictionaryKeys, mockDictionary } from '../../demo/src/variables/dictionary';
import { Preview } from '@storybook/react';
import { WithFonts } from './decorators/decorator';
import { ImageOptimizationProvider } from './decorators/imageOptimization.context';
import { WithTheme } from './decorators/theme-provider';
import { loadStylesheet } from './src/utils/loadStylesheet';
import themeList from '../../demo/tailwind-config/themes/config';
import { WithWebSocket } from './decorators/web-socket';
import { WithContainerSizes } from './decorators/withContainerSizes';
import { WithEditingMode } from './decorators/withEditingMode';
import { WithVideoProvider } from './decorators/withVideoProvider';
import { WithInContext } from './decorators/withInContext';
import { WithViewportBreakpoint } from './decorators/viewport-breakpoint';
import { WithContainer } from './decorators/withContainer';

// Import some SB-specific stylesheet fixes
import './sb-container-query-fixes.css';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Switch between themes',
    defaultValue: 'brand-d', // Default theme
    toolbar: {
      icon: 'paintbrush',
      items: themeList, // List of themes
      showName: true,
    },
  },
};

const WithI18n = (Story) => (
  <I18nProvider lngDict={mockDictionary(dictionaryKeys)} locale="en">
    <Story />
  </I18nProvider>
);

const WithImageOptimization = (Story: React.FC) => (
  <ImageOptimizationProvider unoptimized={true}>
    <Story />
  </ImageOptimizationProvider>
);

// Some of our base styles require a <main> element
const WithMain = (Story) => (
  <main>
    <Story />
  </main>
);

const preview: Preview = {
  parameters: {
    options: {},
  },

  tags: ['autodocs'],
};

export const decorators = [
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (Story: React.FC, context: any) => {
    const { theme } = context.globals;
    // Load the selected stylesheet
    loadStylesheet(theme);
    return <Story />;
  },
  WithWebSocket,
  WithImageOptimization,
  WithFonts,
  WithTheme,
  WithVideoProvider,
  WithInContext,
  WithContainerSizes,
  WithContainer,
  WithEditingMode,
  WithInContext,
  WithI18n,
  WithMain,
  WithViewportBreakpoint,
];

export default preview;
