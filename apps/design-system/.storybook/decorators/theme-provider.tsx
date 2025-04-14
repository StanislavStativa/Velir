// components/ThemeProvider.js
import React from 'react';
import { createContext, useState, useContext } from 'react';
import { StoryFn } from '@storybook/react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

export const WithTheme = (Story: StoryFn) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);
