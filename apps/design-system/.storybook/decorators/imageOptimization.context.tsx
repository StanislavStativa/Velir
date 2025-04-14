import { createContext } from 'react';
import React from 'react';

interface ImageOptions {
  unoptimized: boolean;
}

export const ImageOptimizationContext = createContext({ unoptimized: false });

interface ProviderProps extends ImageOptions {
  children: React.ReactNode;
}

// This provider is useful for allowing storybook to use a unoptimized: true
export const ImageOptimizationProvider = ({ children, unoptimized }: ProviderProps) => {
  return (
    <ImageOptimizationContext.Provider value={{ unoptimized }}>
      {children}
    </ImageOptimizationContext.Provider>
  );
};
