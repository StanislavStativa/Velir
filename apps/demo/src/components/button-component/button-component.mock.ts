import { IconName } from '@/enumerations/Icon.enum';
import { ButtonComponentProps } from './ButtonComponent';

export const defaultMockData: ButtonComponentProps[] = [
  {
    params: {
      size: 'default',
      iconPosition: 'trailing',
    },
    variant: 'default',
    rendering: {
      uid: '{00000000-0000-0000-0000-000000000000}',
      componentName: 'ButtonComponent',
      dataSource: '/',
    },
    fields: {
      buttonLink: { value: { href: 'https://velir.com', text: 'Learn More' } },
      icon: {
        value: 'internal',
      },
    },
  },
  {
    params: {
      size: 'default',
    },
    variant: 'secondary',
    rendering: {
      uid: '{00000000-0000-0000-0000-000000000000}',
      componentName: 'ButtonComponent',
      dataSource: '/',
    },
    fields: {
      buttonLink: { value: { href: 'https://velir.com', text: 'Learn More' } },
      icon: {
        value: IconName.INTERNAL,
      },
    },
  },
  {
    params: {
      size: 'default',
    },
    variant: 'destructive',
    rendering: {
      uid: '{00000000-0000-0000-0000-000000000000}',
      componentName: 'ButtonComponent',
      dataSource: '/',
    },
    fields: {
      buttonLink: { value: { href: 'https://velir.com', text: 'Learn More' } },
      icon: {
        value: IconName.INTERNAL,
      },
    },
  },
  {
    params: {
      size: 'default',
    },
    variant: 'outline',
    rendering: {
      uid: '{00000000-0000-0000-0000-000000000000}',
      componentName: 'ButtonComponent',
      dataSource: '/',
    },
    fields: {
      buttonLink: { value: { href: 'https://velir.com', text: 'Learn More' } },
      icon: {
        value: IconName.INTERNAL,
      },
    },
  },
  {
    params: {
      size: 'default',
    },
    variant: 'ghost',
    rendering: {
      uid: '{00000000-0000-0000-0000-000000000000}',
      componentName: 'ButtonComponent',
      dataSource: '/',
    },
    fields: {
      buttonLink: { value: { href: 'https://velir.com', text: 'Learn More' } },
      icon: {
        value: IconName.INTERNAL,
      },
    },
  },
  {
    params: {
      size: 'default',
    },
    variant: 'link',
    rendering: {
      uid: '{00000000-0000-0000-0000-000000000000}',
      componentName: 'ButtonComponent',
      dataSource: '/',
    },
    fields: {
      buttonLink: { value: { href: 'https://velir.com', text: 'Learn More' } },
      icon: {
        value: IconName.INTERNAL,
      },
    },
  },
  {
    params: {
      size: 'default',
      iconPosition: 'leading',
    },
    variant: 'default',
    rendering: {
      uid: '{00000000-0000-0000-0000-000000000000}',
      componentName: 'ButtonComponent',
      dataSource: '/',
    },
    fields: {
      buttonLink: { value: { href: 'https://velir.com', text: 'Learn More' } },
      icon: {
        value: IconName.FACEBOOK,
      },
    },
  },
  {
    params: {
      size: 'default',
    },
    variant: 'tertiary',
    rendering: {
      uid: '{00000000-0000-0000-0000-000000000000}',
      componentName: 'ButtonComponent',
      dataSource: '/',
    },
    fields: {
      buttonLink: { value: { href: 'https://velir.com', text: 'Learn More' } },
      icon: {
        value: IconName.INTERNAL,
      },
    },
  },
  {
    params: {
      size: 'default',
      iconPosition: 'leading',
    },
    variant: 'topic',
    rendering: {
      uid: '{00000000-0000-0000-0000-000000000000}',
      componentName: 'ButtonComponent',
      dataSource: '/',
    },
    fields: {
      buttonLink: { value: { href: '#', text: 'Technology' } },
      icon: {
        value: IconName.SIGNAL,
      },
    },
  },
  {
    params: {
      size: 'default',
    },
    variant: 'rounded-white',
    rendering: {
      uid: '{00000000-0000-0000-0000-000000000000}',
      componentName: 'ButtonComponent',
      dataSource: '/',
    },
    fields: {
      buttonLink: { value: { href: 'https://velir.com', text: 'Explore More' } },
      icon: {
        value: IconName.INTERNAL,
      },
    },
  },
];
