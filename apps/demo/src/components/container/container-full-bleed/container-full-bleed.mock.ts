import { ContainerFullBleedProps } from './container-full-bleed.props';
import { BackgroundColor } from '@/enumerations/BackgroundColor.enum';

export const defaultMockData: ContainerFullBleedProps = {
  params: {
    DynamicPlaceholderId: '1',
    backgroundColor: BackgroundColor.TRANSPARENT,
    backgroundImagePath: '',
    excludeTopMargin: '1',
  },
  rendering: {
    uid: '{00000000-0000-0000-0000-000000000000}',
    componentName: 'ContainerFullBleed',
    dataSource: '/',
  },
};
