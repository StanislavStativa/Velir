import { FlexProps, FlexItem, XMComponent } from './Flex.dev';
import {
  FlexDirection,
  FlexJustify,
  FlexAlign,
  FlexGap,
  FlexWrap,
  FlexGrow,
  FlexBasis,
  FlexAlignSelf,
} from '@/lib/enum'; // Import the cn utility
export const mockData: FlexProps = {
  direction: FlexDirection.ROW,
  justify: FlexJustify.START,
  align: FlexAlign.START,
  gap: FlexGap.GAP_4,
  wrap: FlexWrap.NO_WRAP,
  className: '',
  children: (
    <>
      <FlexItem
        grow={FlexGrow.GROW_1}
        alignSelf={FlexAlignSelf.CENTER}
        basis={FlexBasis.AUTO}
        className="items-center justify-center rounded-lg bg-fuchsia-500 p-4"
      >
        01
      </FlexItem>
      <FlexItem
        grow={FlexGrow.GROW_1}
        alignSelf={FlexAlignSelf.CENTER}
        basis={FlexBasis.BASIS_2_4}
        className="items-center justify-center rounded-lg bg-fuchsia-500 p-4"
      >
        01
      </FlexItem>
      <FlexItem
        grow={FlexGrow.GROW_1}
        alignSelf={FlexAlignSelf.CENTER}
        basis={FlexBasis.BASIS_1_4}
        className="items-center justify-center rounded-lg bg-fuchsia-500 p-4"
      >
        01
      </FlexItem>
      <FlexItem
        grow={FlexGrow.GROW_1}
        alignSelf={FlexAlignSelf.CENTER}
        basis={FlexBasis.AUTO}
        className="items-center justify-center rounded-lg bg-fuchsia-500 p-4"
      >
        01
      </FlexItem>
    </>
  ),
  as: 'section',
  asChild: false,
};

export const xmMockData: XMComponent = {
  params: {},
  rendering: {
    params: {},
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'Flex',
    dataSource: '/',
  },
  fields: {
    title: { value: 'American College' },
    titleHighlight: { value: 'of Radiology' },
    subtitle: {
      value:
        'ACR ensures radiologists are integral to the future of healthcare so you can feel confident about tomorrow.',
    },
    link: { value: { href: '/', text: 'Learn about ACR' } },
    image: {
      value: {
        src: 'https://picsum.photos/1290/726',
        alt: '',
        width: '1290',
        height: '726',
      },
    },
    video: {
      value: {
        href: 'https://youtu.be/Z38JJpQ5mVE?si=hXWS_GMrtR_puriI',
        text: 'Funny Cat',
        linktype: 'external',
        url: 'https://youtu.be/Z38JJpQ5mVE?si=hXWS_GMrtR_puriI',
        anchor: '',
        target: '',
      },
    },
    transcript: {
      value: {
        src: '/-/media/Feature/ACR/Multimedia/image-thumbnail.png',
        name: 'Transcript',
        displayName: 'Transcript',
        title: '',
        keywords: '',
        description: '',
        extension: 'png',
        mimeType: 'image/png',
        size: '1356218',
        linktype: 'download',
      },
    },
    backgroundImage: {
      value: {
        src: 'https://picsum.photos/1960/726',
        alt: '',
        width: '1960',
        height: '726',
      },
    },
  },
};
