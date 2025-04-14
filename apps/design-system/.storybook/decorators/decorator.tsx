import React from 'react';
import { StoryFn } from '@storybook/react';
import { Figtree } from 'next/font/google';

const figTree = Figtree({
  weight: ['400', '500'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

const bodyFont = Figtree({
  weight: ['400', '500'],
  variable: '--font-body',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

const headingFont = Figtree({
  weight: ['400', '500'],
  variable: '--font-heading',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export const WithFonts = (Story: StoryFn) => {
  document.querySelector('html')?.classList.add(
    bodyFont.variable, 
    headingFont.variable, 
    "antialiased"
  );
  return <Story />;
};
