import { ImageField } from '@sitecore-jss/sitecore-jss-react';

export interface MediaSectionProps {
  video?: string;
  image?: ImageField;
  priority?: boolean;
  className?: string;
  height?: number;
  width?: number;
  pause: boolean;
  reducedMotion: boolean;
}
