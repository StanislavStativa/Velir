import { Field, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@/lib/component-props';

export interface TopicListingParams {
  backgroundTheme: Field<string>;
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface TopicListingFields {
  data: {
    datasource: {
      title: { jsonValue: Field<string> };
      children?: {
        results: TopicItemProps[];
      };
    };
  };
}

export interface TopicListingProps extends ComponentProps {
  params: TopicListingParams;
  fields: TopicListingFields;
}

export type TopicItemProps = {
  link?: {
    jsonValue?: LinkField;
  };
};
