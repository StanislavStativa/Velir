import { PlaceholderProps } from 'types/Placeholder.props';
import { ComponentProps } from '@/lib/component-props';

/**
 * Model used for Sitecore Component integration
 */
export type Container3070Props = ComponentProps &
  PlaceholderProps & {
    left?: JSX.Element;
    right?: JSX.Element;
  };
