import type { Meta, StoryObj } from '@storybook/react';
import { Default as LogoTabs } from './LogoTabs';
import { defaultMockData } from './logo-tabs.mock';

const meta: Meta<typeof LogoTabs> = {
  title: 'Components/Logo Tabs',
  component: LogoTabs,
  parameters: {
    layout: 'padded', // "padded", "centered", or "fullscreen"
  },
  tags: ['autodocs'],
  args: defaultMockData,
};
export default meta;

type Story = StoryObj<typeof LogoTabs>;

export const Default: Story = {};

// Shows placeholder content when datasource exists but is empty
export const EmptyState: Story = {
  args: {
    params: defaultMockData.params,
    fields: {
      data: {
        datasource: {
          title: { jsonValue: { value: '' } },
          backgroundImage: { jsonValue: { value: { src: '', alt: '', width: 0, height: 0 } } },
          logos: { results: [] },
          logoTabContent: { results: [] },
        },
      },
    },
    rendering: defaultMockData.rendering,
  },
};

export const ContainerSizes: StoryObj = {
  args: {
    excludeTopMargin: false,
  },
  parameters: { withContainerSizes: true },
};

// Shows all tabs in a stacked format when in Sitecore Experience Editor mode
export const EditingMode: Story = {
  args: {
    ...defaultMockData,
    isPageEditing: true,
  },
  parameters: { withEditMode: true },
};

// Shows empty state message when in Sitecore Experience Editor mode with no data
export const EditingModeEmptyState: Story = {
  args: {
    params: defaultMockData.params,
    fields: {
      data: {
        datasource: {
          title: { jsonValue: { value: '' } },
          backgroundImage: { jsonValue: { value: { src: '', alt: '', width: 0, height: 0 } } },
          logos: { results: [] },
          logoTabContent: { results: [] },
        },
      },
    },
    rendering: defaultMockData.rendering,
    isPageEditing: true,
  },
  parameters: { withEditMode: true },
};
