import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from '@/lib/component-props';

interface VerticalImageAccordionParams {
  [key: string]: any; // eslint-disable-line
}

export interface AccordionItem {
  title: { jsonValue: Field<string> };
  description: { jsonValue: Field<string> };
  image: { jsonValue: ImageField };
  cta?: { jsonValue: LinkField };
}

interface VerticalImageAccordionFields {
  data: {
    datasource: {
      title?: { jsonValue: Field<string> };
      items?: {
        results: AccordionItem[];
      };
    };
  };
}

export interface VerticalImageAccordionProps extends ComponentProps {
  params: VerticalImageAccordionParams;
  fields: VerticalImageAccordionFields;
  isPageEditing?: boolean;
}
