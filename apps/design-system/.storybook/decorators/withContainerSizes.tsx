import React from 'react';
import ContainerSizesHelper from '../components/story-helpers/ContainerSizesHelper';
import { StoryFn } from '@storybook/react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WithContainerSizes = (Story: StoryFn, context: any) =>
  context.parameters.withContainerSizes ? (
    <ContainerSizesHelper
    excludeTopMargin={context.parameters.excludeTopMargin ?? false}
    containerSizes={context.parameters.containerSizes ?? [
      'Container30',
      'Container40',
      'Container50',
      'Container60',
      'Container70',
      'Container30Left',
      'ContainerFullWidth',
      'ContainerFullWidthInFullBleed',
      'ContainerFullBleed',
    ]}
    >
      <Story />
    </ContainerSizesHelper>
  ) : (
    <Story />
  );
