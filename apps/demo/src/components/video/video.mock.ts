export const modalVideoProps = {
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'VideoComponent',
    dataSource: '/',
  },
  params: {
    darkPlayIcon: '1',
    displayIcon: '1',
    useModal: '1',
  },
  fields: {
    video: {
      value: {
        href: 'https://www.youtube.com/embed/Ttl8Gg-P-Ao?si=ifuGJpwak_eW9xdw',
      },
    },
    image: {
      value: {
        src: 'https://picsum.photos/800/450',
        alt: '4k Video',
        width: 800,
        height: 450,
      },
    },
    title: {
      value: 'Modal Video Example',
    },
    caption: {
      value:
        "This video will play in a modal (theater mode) when you click the play button or 'Watch in Theater Mode'.",
    },
  },
};

export const inlineVideoProps = {
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'VideoComponent',
    dataSource: '/',
  },
  params: {
    darkPlayIcon: '0',
    displayIcon: '0',
    useModal: '0',
  },
  fields: {
    video: {
      value: {
        href: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
      },
    },
    image: {
      value: {
        src: 'https://picsum.photos/800/450',
        alt: '4k Video',
        width: 800,
        height: 450,
       },
    },
    title: {
      value: 'Inline Video Example',
    },
    caption: {
      value:
        'This video will play inline when you click the play button. It will expand to full screen within the page.',
    },
  },
};
