import React from 'react';
import EditingModeTemplate from '../components/story-helpers/EditingModeTemplate';
import { StoryFn } from '@storybook/react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WithEditingMode = (Story: StoryFn, context: any) =>
  context.parameters.withEditingMode ? (
    <EditingModeTemplate>
      <Story isPageEditing={true} />
    </EditingModeTemplate>
  ) : (
    <Story />
  );
