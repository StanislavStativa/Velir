import { Meta, StoryObj } from '@storybook/react';
import { Default as GlobalFooter } from './GlobalFooter';
import { defaultMockData } from './global-footer.mock';

import { Default as FooterNavigationColumn } from '@/components/global-footer/FooterNavigationColumn';
import {
  defaultMockDataColumn1,
  defaultMockDataColumn2,
  defaultMockDataColumn3,
} from './footer-navigation-column.mock';
import { defaultMockData as mockFooterNavigationCalloutData } from '@/components/footer-navigation-callout/footer-navigation-callout.mock';
import { Default as FooterNavigationCallout } from '@/components/footer-navigation-callout/FooterNavigationCallout.dev';
export default {
  title: 'Components/Global Footer',
  component: GlobalFooter,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  args: defaultMockData,
} as Meta<typeof GlobalFooter>;

type Story = StoryObj<typeof GlobalFooter>;

export const Default: Story = {
  render: (args) => (
    <>
      <GlobalFooter
        {...args}
        callout={<FooterNavigationCallout {...mockFooterNavigationCalloutData} />}
      >
        <FooterNavigationColumn {...defaultMockDataColumn1} />
        <FooterNavigationColumn {...defaultMockDataColumn2} />
        <FooterNavigationColumn {...defaultMockDataColumn3} />
      </GlobalFooter>
    </>
  ),
};
