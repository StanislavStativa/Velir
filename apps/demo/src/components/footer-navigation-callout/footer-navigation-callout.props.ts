import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

interface FooterNavigationCalloutFields {
  title?: Field<string>;
  description?: Field<string>;
  linkOptional?: LinkField;
}

export interface FooterNavigationCalloutProps {
  fields: FooterNavigationCalloutFields;
}
