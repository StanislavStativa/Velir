import { StoryObj } from '@storybook/react';

import { Default as ButtonComponent } from './ButtonComponent';

import { defaultMockData } from './button-component.mock';

export default {
  title: 'Components/Button Component',
  component: ButtonComponent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ButtonComponent>;

export const Default = {
  args: defaultMockData[0],
};

export const Secondary: Story = {
  args: defaultMockData[1],
};
export const Tertiary: Story = {
  args: defaultMockData[7],
};
export const Destructive: Story = {
  args: defaultMockData[2],
};
export const outline: Story = {
  args: defaultMockData[3],
};
export const ghost: Story = {
  args: defaultMockData[4],
};
export const link: Story = {
  args: defaultMockData[5],
};
export const LeadingIcon: Story = {
  args: defaultMockData[6],
};
export const Topic: Story = {
  args: defaultMockData[8],
};
export const RoundedWhite: Story = {
  args: defaultMockData[8],
};
