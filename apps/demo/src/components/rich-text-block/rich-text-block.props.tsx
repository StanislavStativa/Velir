import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@/lib/component-props';

/**
 * Model used for Sitecore Component integration
 */
export type RichTextBlockProps = ComponentProps & RichTextFields;

export interface RichTextFields {
  fields: {
    text: Field<string>;
  };
}
