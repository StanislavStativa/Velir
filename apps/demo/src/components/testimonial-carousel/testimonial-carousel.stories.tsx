import { Meta, StoryObj } from '@storybook/react';
import { Default as TestimonialCarousel } from './TestimonialCarousel';
import { Default as ContainerFullWidth } from '@/components/container/container-full-width/ContainerFullWidth';
import { defaultMockData } from './testimonial-carousel.mock';
import { defaultMockData as containerFullWidthMockData } from '@/components/container/container-full-width/container-full-width.mock';

export default {
  title: 'Components/Testimonial Carousel',
  component: TestimonialCarousel,
  tags: ['autodocs'],
} as Meta<typeof TestimonialCarousel>;

type Story = StoryObj<typeof TestimonialCarousel>;

export const Default: Story = {
  args: defaultMockData,
  render: (args: typeof defaultMockData) => (
    <ContainerFullWidth {...containerFullWidthMockData}>
      <TestimonialCarousel {...args} />
    </ContainerFullWidth>
  ),
};

export const InContext: StoryObj = {
  parameters: {
    layout: 'fullscreen',
    withInContext: true,
  },
  args: defaultMockData,
};

export const ContainerSizes: StoryObj = {
  args: defaultMockData,
  parameters: { withContainerSizes: true },
};
