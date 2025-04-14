import { Meta, StoryObj } from '@storybook/react';

import { Default as GlobalHeader } from '@/components/global-header/GlobalHeader';
import { Default as Hero } from '@/components/hero/Hero';
import { Default as ContainerFullBleed } from '@/components/container/container-full-bleed/ContainerFullBleed';
import { Default as ContainerFullWidth } from '@/components/container/container-full-width/ContainerFullWidth';

import { defaultMockData } from './global-header.mock';
import { defaultMockData as mockHeroData } from '@/components/hero/hero.mock';
import { defaultMockData as ContainerFullBleedMockData } from '@/components/container/container-full-bleed/container-full-bleed.mock';
import { defaultMockData as ContainerFullWidthMockData } from '@/components/container/container-full-width/container-full-width.mock';
import { sampleText } from '@/variables/global';

export default {
  title: 'Components/Global Header',
  component: GlobalHeader,
  parameters: { jest: ['GlobalHeader.test.tsx'] },
  tags: ['autodocs'],
} as Meta<typeof GlobalHeader>;

type Story = StoryObj<typeof GlobalHeader>;

export const Default: Story = {
  args: defaultMockData,
  render: (args: typeof defaultMockData) => (
    <>
      <GlobalHeader {...args} />
    </>
  ),
};

export const WithHero: Story = {
  args: defaultMockData,
  render: (args: typeof defaultMockData) => (
    <>
      <GlobalHeader {...args} />
      <ContainerFullBleed {...ContainerFullBleedMockData}>
        <Hero {...mockHeroData} />
      </ContainerFullBleed>
      <ContainerFullWidth {...ContainerFullWidthMockData}>
        <p>{sampleText}</p>
      </ContainerFullWidth>
    </>
  ),
};
