import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

export type PageTitles = {
  pageTitle: Field<string>;
  pageSubtitle?: Field<string>;
  pageShortTitle?: Field<string>;
  pageHeaderTitle: Field<string>;
  dynamicListingTitle?: Field<string>;
};
