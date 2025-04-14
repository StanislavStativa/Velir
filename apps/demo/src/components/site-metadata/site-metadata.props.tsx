import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@/lib/component-props';

/**
 * Model used for Sitecore Component integration
 */
export type SiteMetadataProps = ComponentProps & SiteMetadataFields;

export type SiteMetadataFields = {
  fields: {
    title?: Field<string>;
    metadataTitle?: Field<string>;
    metadataKeywords?: Field<string>;
    metadataDescription?: Field<string>;
  };
};
