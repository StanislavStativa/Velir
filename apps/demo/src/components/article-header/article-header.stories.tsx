import type { Meta, StoryObj } from '@storybook/react';
import { Default as ArticleHeader } from './ArticleHeader';
import { mockArticleHeaderData } from './article-header.mock';
import { Default as ContainerFullBleed } from '@/components/container/container-full-bleed/ContainerFullBleed';
import { Default as ContainerFullWidth } from '@/components/container/container-full-width/ContainerFullWidth';
import { defaultMockData as ContainerFullBleedMockData } from '@/components/container/container-full-bleed/container-full-bleed.mock';
import { defaultMockData as ContainerFullWidthMockData } from '@/components/container/container-full-width/container-full-width.mock';
import { sampleText } from '@/variables/global';

const meta: Meta<typeof ArticleHeader> = {
  title: 'Components/ArticleHeader',
  component: ArticleHeader,
  parameters: {
    layout: 'padded', // "padded", "centered", or "fullscreen"
  },
  tags: ['autodocs'],
  args: mockArticleHeaderData,
};
export default meta;

type Story = StoryObj<typeof ArticleHeader>;

export const Default: Story = {
  parameters: { layout: 'fullscreen' },
};

export const ContainerSizes: StoryObj = {
  args: {
    excludeTopMargin: false,
  },
  parameters: { withContainerSizes: true, layout: 'fullscreen' },
};

interface InContextArgs {
  params: any;
  fields: any;
  externalFields: any;
  rendering: any;
}

export const inContext: StoryObj<InContextArgs> = {
  parameters: { layout: 'fullscreen' },
  render: (args) => (
    <>
      <ContainerFullBleed {...ContainerFullBleedMockData}>
        <ArticleHeader {...args} />
      </ContainerFullBleed>
      <ContainerFullBleed {...ContainerFullBleedMockData}>
        <ContainerFullWidth {...ContainerFullWidthMockData}>
          <div style={{ maxWidth: '800px' }} className="@mb:w-1/2 mx-auto">
            <h2>{sampleText}</h2>
            <p>{sampleText}</p>
          </div>
        </ContainerFullWidth>
      </ContainerFullBleed>
    </>
  ),
};
