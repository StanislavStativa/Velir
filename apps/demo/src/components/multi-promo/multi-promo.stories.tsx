import { Meta, StoryObj } from '@storybook/react';
import { Default as MultiPromo } from '@/components/multi-promo/MultiPromo';
import { BackgroundColor } from '@/enumerations/BackgroundColor.enum';
import { Default as ContainerFullWidth } from '@/components/container/container-full-width/ContainerFullWidth';
import { defaultMockData } from './multi-promo.mock';
import { defaultMockData as containerFullWidthMockData } from '@/components/container/container-full-width/container-full-width.mock';

export default {
  title: 'Components/Multi Promo',
  component: MultiPromo,
  tags: ['autodocs'],
} as Meta<typeof MultiPromo>;

type Story = StoryObj<typeof MultiPromo>;

export const Default: Story = {
  parameters: { layout: 'fullscreen' },
  args: defaultMockData,
  render: (args: typeof defaultMockData) => (
    <ContainerFullWidth {...containerFullWidthMockData}>
      <MultiPromo {...args} />
    </ContainerFullWidth>
  ),
};

export const InFullWidth: StoryObj = {
  parameters: {
    layout: 'fullscreen',
    withInContext: true,
  },
  args: defaultMockData,
};

export const InFullBleed: Story = {
  parameters: {
    layout: 'fullscreen',
    withInContext: true,
    bleedContainer: true,
    excludeTopMargin: true,
  },
  args: defaultMockData,
};

export const InFullBleedColor: Story = {
  parameters: {
    layout: 'fullscreen',
    withInContext: true,
    bleedContainer: true,
    backgroundColor: BackgroundColor.PRIMARY,
  },
  args: defaultMockData,
};

export const InFullBleedInset: Story = {
  parameters: {
    layout: 'fullscreen',
    withInContext: true,
    bleedContainer: true,
    backgroundColor: BackgroundColor.PRIMARY,
    inset: true,
  },
  args: defaultMockData,
};
