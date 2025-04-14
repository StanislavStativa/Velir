import React from 'react';
import { VideoProvider } from '@/contexts/VideoContext';

export const WithVideoProvider = (Story) => (
  <VideoProvider>
    <Story />
  </VideoProvider>
);
