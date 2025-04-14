export const SizesHelperArgTypes = {
  excludeContainerPadding: {
    control: 'boolean',
  },
  excludeTopMargin: {
    control: 'boolean',
  },
  containerSizes: {
    control: 'inline-check',
    options: [
      'Container30',
      'Container40',
      'Container50',
      'Container60',
      'Container70',
      'Container30Left',
      'ContainerFullWidth',
      'ContainerFullWidthInFullBleed',
      'ContainerFullBleed',
    ],
  },
};
