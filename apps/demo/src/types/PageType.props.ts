import { PageTitles } from './PageTitles.props';
import { PageImages } from './PageImages.props';
import { PageTexts } from './PageTexts.props';

import { RouteData } from '@sitecore-jss/sitecore-jss-react';

export type PageType = {
  fields: PageTitles & PageTexts & PageImages;
};

export type PageRouteData = RouteData & PageType;
