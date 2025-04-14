import React from 'react';
import WithContainerHelper from '../components/story-helpers/WithContainerHelper';
import { StoryFn } from '@storybook/react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default {};

export const WithContainer = (Story: StoryFn, context: any) =>
  context.parameters.withContainer ? (
    <WithContainerHelper {...context}>
      <Story />
    </WithContainerHelper>
  ) : (
    <Story />
  );
