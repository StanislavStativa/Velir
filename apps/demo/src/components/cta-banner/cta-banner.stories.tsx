import { deepmerge } from 'deepmerge-ts';
import type { Meta, StoryObj } from '@storybook/react';
import { Default as CtaBanner } from './CtaBanner';
import { Default as ContainerFullBleed } from '@/components/container/container-full-bleed/ContainerFullBleed';
import { BackgroundColor } from '@/enumerations/BackgroundColor.enum';
import {
  ContainerFullBleedParams,
  ContainerFullBleedProps,
} from '@/components/container/container-full-bleed/container-full-bleed.props';
import {
  ContainerFullWidthParams,
  ContainerFullWidthProps,
} from '@/components/container/container-full-width/container-full-width.props';
import { Default as ContainerFullWidth } from '@/components/container/container-full-width/ContainerFullWidth';
import { CtaBannerParams, CtaBannerProps } from './cta-banner.props';
import { defaultMockData } from './cta-banner.mock';
import { defaultMockData as containerFullWidthMockData } from '@/components/container/container-full-width/container-full-width.mock';
import { defaultMockData as containerFullBleedMockData } from '@/components/container/container-full-bleed/container-full-bleed.mock';

const meta: Meta<typeof CtaBanner> = {
  title: 'Components/CtaBanner',
  component: CtaBanner,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: defaultMockData,
};
export default meta;

const fullBleedParams: ContainerFullBleedParams = {
  params: {
    excludeTopMargin: '1',
  },
};
const fullBleedPrimaryColorParams: ContainerFullBleedParams = {
  params: {
    backgroundColor: BackgroundColor.PRIMARY,
    excludeTopMargin: '0',
  },
};
const fullBleedSecondaryColorParams: ContainerFullBleedParams = {
  params: {
    backgroundColor: BackgroundColor.SECONDARY,
    excludeTopMargin: '0',
  },
};
const insetParams: ContainerFullBleedParams = {
  params: {
    inset: '1',
  },
};
const defaultFullbleedParams: ContainerFullBleedProps = deepmerge(
  containerFullBleedMockData,
  fullBleedParams
);
const insetFullbleedPrimaryColorParams: ContainerFullBleedProps = deepmerge(
  containerFullBleedMockData,
  fullBleedParams,
  fullBleedPrimaryColorParams,
  insetParams
);
const insetFullbleedSecondaryColorParams: ContainerFullBleedProps = deepmerge(
  containerFullBleedMockData,
  fullBleedParams,
  fullBleedSecondaryColorParams,
  insetParams
);
const fullWidthNestedParams: ContainerFullWidthParams = {
  params: {
    excludeTopMargin: '1',
  },
};
const primaryColorScheme: CtaBannerParams = {
  params: {
    colorScheme: 'primary',
  },
};
const secondaryColorScheme: CtaBannerParams = {
  params: {
    colorScheme: 'secondary',
  },
};

const primaryColorMockData: CtaBannerProps = deepmerge(defaultMockData, primaryColorScheme);
const secondaryColorMockData: CtaBannerProps = deepmerge(defaultMockData, secondaryColorScheme);
const fullWidthNestedMockData: ContainerFullWidthProps = deepmerge(
  containerFullWidthMockData,
  fullWidthNestedParams
);

type Story = StoryObj<typeof CtaBanner>;

export const Default: Story = {};

export const PrimaryColorScheme: Story = {
  args: primaryColorMockData,
};

export const SecondaryColorScheme: Story = {
  args: secondaryColorMockData,
};

export const DefaultColorInDefaultFullBleed: Story = {
  parameters: { layout: 'fullscreen' },
  args: defaultMockData,
  render: (args: typeof defaultMockData) => (
    <>
      <ContainerFullBleed {...defaultFullbleedParams}>
        <ContainerFullWidth {...fullWidthNestedMockData}>
          <CtaBanner {...args} />
        </ContainerFullWidth>
      </ContainerFullBleed>
    </>
  ),
};

export const PrimaryColorInPrimaryFullBleedInset: Story = {
  parameters: { layout: 'fullscreen' },
  args: primaryColorMockData,
  render: (args: typeof defaultMockData) => (
    <>
      <ContainerFullBleed {...insetFullbleedPrimaryColorParams}>
        <ContainerFullWidth {...fullWidthNestedMockData}>
          <CtaBanner {...args} />
        </ContainerFullWidth>
      </ContainerFullBleed>
    </>
  ),
};

export const SecondaryColorInSecondaryFullBleedInset: Story = {
  parameters: { layout: 'fullscreen' },
  args: secondaryColorMockData,
  render: (args: typeof defaultMockData) => (
    <>
      <ContainerFullBleed {...insetFullbleedSecondaryColorParams}>
        <ContainerFullWidth {...fullWidthNestedMockData}>
          <CtaBanner {...args} />
        </ContainerFullWidth>
      </ContainerFullBleed>
    </>
  ),
};

export const InContext: StoryObj = {
  parameters: {
    layout: 'fullscreen',
    withInContext: true,
  },
};
