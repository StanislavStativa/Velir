import { Field, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from '@/lib/component-props';
import { PlaceholderProps } from '@/types/Placeholder.props';

export type GlobalFooterProps = ComponentProps &
  PlaceholderProps &
  GlobalFooterFields & {
    callout?: JSX.Element;
  };

export type GlobalFooterFields = {
  fields: {
    footerLogo?: ImageField;
    footerPromoTitle?: Field<string>;
    footerPromoDescription?: Field<string>;
    footerPromoLink?: LinkField;
    footerSocialLinks?: FooterSocialLink[];
    footerCopyright?: Field<string>;
  };
};

export type FooterNavigationColumnProps = ComponentProps & {
  fields: {
    data: {
      datasource: {
        header: {
          jsonValue: Field<string>;
        };
        items?: {
          results: FooterNavigationLink[];
        };
      };
    };
  };
};

export type FooterSocialLink = {
  fields: {
    link: LinkField;
    socialIcon: Field<string>;
  };
};

export type FooterNavigationLink = {
  link: {
    jsonValue: LinkField;
  };
};
