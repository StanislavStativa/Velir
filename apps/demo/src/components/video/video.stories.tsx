import { Meta, StoryObj } from '@storybook/react';
import { Default as ContainerFullWidth } from '@/components/container/container-full-width/ContainerFullWidth';
import { defaultMockData as ContainerFullWidthMockData } from '@/components/container/container-full-width/container-full-width.mock';
import { VideoProvider } from '@/contexts/VideoContext';
import { Default as VideoComponent } from './Video';
import { inlineVideoProps, modalVideoProps } from './video.mock';

export default {
  title: 'Components/Video',
  component: VideoComponent,
  tags: ['autodocs'],
  args: modalVideoProps,
} as Meta<typeof VideoComponent>;

type Story = StoryObj<typeof VideoComponent>;

export const DarkIcon: Story = {
  args: modalVideoProps,
  render: (args) => (
    <VideoProvider>
      <ContainerFullWidth {...ContainerFullWidthMockData}>
        <VideoComponent {...args} />
      </ContainerFullWidth>
    </VideoProvider>
  ),
};

export const Inline: Story = {
  args: inlineVideoProps,
  render: (args) => (
    <VideoProvider>
      <ContainerFullWidth {...ContainerFullWidthMockData}>
        <VideoComponent {...args} />
      </ContainerFullWidth>
    </VideoProvider>
  ),
};

export const noImage: Story = {
  parameters: { withContainerSizes: true },
  args: {
    fields: {
      ...inlineVideoProps.fields,
      image: undefined,
    },
    params: {
      darkPlayIcon: '1',
      displayIcon: '1',
      useModal: '0',
    },
  },
  render: (args) => (
    <VideoProvider>
      <ContainerFullWidth {...ContainerFullWidthMockData}>
        <VideoComponent {...args} />
      </ContainerFullWidth>
    </VideoProvider>
  ),
};
