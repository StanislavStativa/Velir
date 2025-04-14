import React from 'react';
import InContextHelper from '../components/story-helpers/InContextHelper.jsx';
import { StoryFn } from '@storybook/react';

export default {};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WithInContext = (Story: StoryFn, context: any) =>
  context.parameters.withInContext ? (
    <InContextHelper {...context}>
      <Story />
    </InContextHelper>
  ) : (
    <Story />
  );