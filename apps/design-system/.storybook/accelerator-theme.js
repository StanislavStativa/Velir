import { create } from '@storybook/theming/create';
export const theme = {
  light: create({
    base: 'light',
    brandTitle: 'Velir Accelerator',
    brandUrl: 'https://www.velir.com',
    brandImage: '/img/logos/Velir-Horizontal-Black.png',
    brandTarget: '_blank',
  }),
  dark: create({
    base: 'dark',
    brandTitle: 'Velir Accelerator',
    brandUrl: 'https://www.velir.com',
    brandImage: '/img/logos/Velir-Horizontal-Gray.png',
    brandTarget: '_blank',
  }),
};
