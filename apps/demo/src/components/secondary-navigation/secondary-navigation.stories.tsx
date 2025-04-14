import { Meta, StoryObj } from '@storybook/react';
import { Default as SecondaryNavigation } from '@/components/secondary-navigation/SecondaryNavigation';
import { Default as ContainerFullWidth } from '@/components/container/container-full-width/ContainerFullWidth';
import { Default as Container3070 } from '@/components/container/container-3070/Container3070';

import { defaultMockData } from '@/components/secondary-navigation/secondary-navigation.mock';
import { defaultMockData as ContainerFullWidthMockData } from '@/components/container/container-full-width/container-full-width.mock';
import { defaultMockData as container3070MockData } from '@/components/container/container-3070/container-3070.mock';
import { sampleText } from '@/variables/global';

export default {
  title: 'Components/Secondary Navigation',
  component: SecondaryNavigation,
  tags: ['autodocs'],
} as Meta<typeof SecondaryNavigation>;

type Story = StoryObj<typeof SecondaryNavigation>;

export const Default: Story = {
  args: defaultMockData,
};

export const InContext: Story = {
  args: defaultMockData,
  render: (args: typeof defaultMockData) => (
    <>
      <ContainerFullWidth {...ContainerFullWidthMockData}>
        <p>{sampleText}</p>
      </ContainerFullWidth>
      <Container3070
        {...container3070MockData}
        left={<SecondaryNavigation {...args} />}
        right={<p>{sampleText}</p>}
      />
      <ContainerFullWidth {...ContainerFullWidthMockData}>
        <p>{sampleText}</p>
      </ContainerFullWidth>
    </>
  ),
};
