import { deepmerge } from 'deepmerge-ts';
import { StoryObj } from '@storybook/react';

import { Default as ContainerFullBleed } from '@/components/container/container-full-bleed/ContainerFullBleed';
import { Default as ContainerFullWidth } from '@/components/container/container-full-width/ContainerFullWidth';
import { Default as Container70 } from '@/components/container/container-70/Container70';
import { Default as Container5050 } from '@/components/container/container-5050/Container5050';
import { Default as Container6040 } from '@/components/container/container-6040/Container6040';
import { Default as Container4060 } from '@/components/container/container-4060/Container4060';
import { Default as Container7030 } from '@/components/container/container-7030/Container7030';
import { Default as Container3070 } from '@/components/container/container-3070/Container3070';
import { Default as Container303030 } from '@/components/container/container-303030/Container303030';

import { defaultMockData as ContainerFullBleedMockData } from '@/components/container/container-full-bleed/container-full-bleed.mock';
import { defaultMockData as ContainerFullWidthMockData } from '@/components/container/container-full-width/container-full-width.mock';
import { defaultMockData as Container70MockData } from '@/components/container/container-70/container-70.mock';
import { defaultMockData as container5050MockData } from '@/components/container/container-5050/container-5050.mock';
import { defaultMockData as container6040MockData } from '@/components/container/container-6040/container-6040.mock';
import { defaultMockData as container4060MockData } from '@/components/container/container-4060/container-4060.mock';
import { defaultMockData as container7030MockData } from '@/components/container/container-7030/container-7030.mock';
import { defaultMockData as container3070MockData } from '@/components/container/container-3070/container-3070.mock';
import { defaultMockData as container303030MockData } from '@/components/container/container-303030/container-303030.mock';

import { ContainerFullBleedParams } from '@/components/container/container-full-bleed/container-full-bleed.props';
import { BackgroundColor } from '@/enumerations/BackgroundColor.enum';

const containerStories = {
  title: 'Components/Container',
  tags: ['autodocs'],
};

export default containerStories;

const contentClasses =
  'flex items-center justify-center rounded bg-primary py-6 text-primary-foreground';

export const containerFullBleed: StoryObj<typeof ContainerFullBleed> = {
  parameters: { layout: 'fullscreen' },
  args: ContainerFullBleedMockData,
  render: (args: typeof ContainerFullBleedMockData) => (
    <ContainerFullBleed {...args}>
      <div className="flex items-center justify-center py-6">Container Full Bleed</div>
    </ContainerFullBleed>
  ),
};

const primaryBgParams: ContainerFullBleedParams = {
  params: { backgroundColor: BackgroundColor.PRIMARY },
};
const insetParams: ContainerFullBleedParams = { params: { inset: '1', excludeTopMargin: '0' } };

const fullbleedColorParams: ContainerFullBleedParams = deepmerge(
  ContainerFullBleedMockData,
  primaryBgParams
);

const fullbleedInsetParams: ContainerFullBleedParams = deepmerge(
  ContainerFullBleedMockData,
  primaryBgParams,
  insetParams
);

export const containerFullBleedWithColor: StoryObj<typeof ContainerFullBleed> = {
  parameters: { layout: 'fullscreen' },
  args: { ...fullbleedColorParams },
  render: (args: typeof ContainerFullBleedMockData) => (
    <ContainerFullBleed {...args}>
      <div className={contentClasses}>Container Full Bleed, colorscheme Primary</div>
    </ContainerFullBleed>
  ),
};

export const containerFullBleedWithInset: StoryObj<typeof ContainerFullBleed> = {
  parameters: { layout: 'fullscreen' },
  args: { ...fullbleedInsetParams },
  render: (args: typeof ContainerFullBleedMockData) => (
    <ContainerFullBleed {...args}>
      <div className={contentClasses}>Container Full Bleed, Inset</div>
    </ContainerFullBleed>
  ),
};

export const containerFullWidth: StoryObj<typeof ContainerFullWidth> = {
  args: ContainerFullWidthMockData,
  render: (args: typeof ContainerFullWidthMockData) => (
    <ContainerFullWidth {...args}>
      <div className={contentClasses}>Container Full Width</div>
    </ContainerFullWidth>
  ),
};

export const container70: StoryObj<typeof Container70> = {
  args: Container70MockData,
  render: (args) => (
    <Container70 {...args}>
      <div className={contentClasses}>Container 70 Centered</div>
    </Container70>
  ),
};

export const container5050: StoryObj<typeof Container5050> = {
  args: container5050MockData,
  render: (args: typeof container5050MockData) => (
    <Container5050
      {...args}
      left={<div className={contentClasses}>50 Left</div>}
      right={<div className={contentClasses}>50 Right</div>}
    />
  ),
};

export const container7030: StoryObj<typeof Container7030> = {
  args: container7030MockData,
  render: (args: typeof container7030MockData) => (
    <Container7030
      {...args}
      left={<div className={contentClasses}>70 Left</div>}
      right={<div className={contentClasses}>30 Right</div>}
    />
  ),
};

export const container3070: StoryObj<typeof Container3070> = {
  args: container3070MockData,
  render: (args: typeof container3070MockData) => (
    <Container3070
      {...args}
      left={<div className={contentClasses}>30 Left</div>}
      right={<div className={contentClasses}>70 Right</div>}
    />
  ),
};

export const container6040: StoryObj<typeof Container6040> = {
  args: container6040MockData,
  render: (args: typeof container6040MockData) => (
    <Container6040
      {...args}
      left={<div className={contentClasses}>60 Left</div>}
      right={<div className={contentClasses}>40 Right</div>}
    />
  ),
};

export const container4060: StoryObj<typeof Container4060> = {
  args: container4060MockData,
  render: (args: typeof container4060MockData) => (
    <Container4060
      {...args}
      left={<div className={contentClasses}>40 Left</div>}
      right={<div className={contentClasses}>60 Right</div>}
    />
  ),
};

export const container303030: StoryObj<typeof Container303030> = {
  args: container303030MockData,
  render: (args: typeof container303030MockData) => (
    <Container303030
      {...args}
      left={<div className={contentClasses}>30 Left</div>}
      center={<div className={contentClasses}>30 Center</div>}
      right={<div className={contentClasses}>30 Right</div>}
    />
  ),
};

export const inContext: StoryObj<typeof ContainerFullBleed> = {
  args: container5050MockData,
  render: (args: typeof container5050MockData) => (
    <>
      <ContainerFullWidth {...args}>
        <div className={contentClasses}>Container Full Width</div>
      </ContainerFullWidth>

      <Container70 {...args}>
        <div className={contentClasses}>Container 70</div>
      </Container70>

      <Container5050
        {...args}
        left={<div className={contentClasses}>50 Left</div>}
        right={<div className={contentClasses}>50 Right</div>}
      />
      <Container7030
        {...args}
        left={<div className={contentClasses}>70 Left</div>}
        right={<div className={contentClasses}>30 Right</div>}
      />
      <Container4060
        {...args}
        left={<div className={contentClasses}>40 Left</div>}
        right={<div className={contentClasses}>60 Right</div>}
      />
      <Container303030
        {...args}
        left={<div className={contentClasses}>30 Left</div>}
        center={<div className={contentClasses}>30 Center</div>}
        right={<div className={contentClasses}>30 Right</div>}
      />
    </>
  ),
};
