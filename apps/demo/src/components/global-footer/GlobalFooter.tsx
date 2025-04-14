import { Link, Text } from '@sitecore-jss/sitecore-jss-react';
import { GlobalFooterProps } from '@/components/global-footer/global-footer.props';
import PlaceholderBase, { PlaceholderBaseProps } from '@/dataUiIntegration/PlaceholderBase';
import { Default as FooterCallout } from '@/components/footer-navigation-callout/FooterNavigationCallout.dev';
import { Default as Icon } from '@/components/icon/Icon';
import { Default as Logo } from '@/components/logo/Logo.dev';
import { IconName } from '@/enumerations/Icon.enum';
import { EnumValues } from '@/enumerations/generic.enum';
import { NoDataFallback } from '@/utils/NoDataFallback';

export const Default: React.FC<GlobalFooterProps> = (props) => {
  const { fields, rendering, componentFactory, children } = props;

  const {
    footerCopyright,
    footerLogo,
    footerPromoDescription,
    footerPromoLink,
    footerPromoTitle,
    footerSocialLinks,
  } = fields ?? {};

  // Placeholder properties for the main footer columns
  const placeholderProps: PlaceholderBaseProps = {
    placeholder: {
      name: 'container-footer-column',
      rendering,
      componentFactory,
    },
    children,
  };

  if (fields) {
    return (
      <footer className="@container bg-primary text-white">
        <div className="@md:grid-cols-2 @lg:grid-cols-12 @lg:gap-8 @xl:px-8 mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-8 px-4  py-12">
          {/* Logo section */}
          <div className="@lg:col-span-2">
            <div className="max-w-[121px]">
              <Logo logo={footerLogo} />
            </div>
          </div>
          {/* Main footer columns */}
          <div className="@md:grid-cols-3 @md:col-span-2 @lg:col-span-6 grid grid-cols-1 gap-8">
            <PlaceholderBase {...placeholderProps} />
          </div>
          {/* Callout section */}
          <div className="@md:col-span-2 @lg:col-span-4">
            <FooterCallout
              fields={{
                title: footerPromoTitle,
                description: footerPromoDescription,
                linkOptional: footerPromoLink,
              }}
            />
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="global-footer__bottom @md:flex-row @xl:px-8 mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-4 px-4 py-6">
            {/* Social links */}
            <div className="flex space-x-4">
              {footerSocialLinks?.map((socialLink, index) => (
                <Link
                  field={socialLink?.fields?.link}
                  key={`social-links-footer${socialLink?.fields?.socialIcon?.value}-${index}`}
                  className="hover:text-accent h-5 w-5"
                >
                  <Icon
                    iconName={socialLink?.fields?.socialIcon?.value as EnumValues<typeof IconName>}
                  />
                </Link>
              ))}
            </div>
            {/* Copyright text */}
            <Text className="text-sm text-white/80" field={footerCopyright} encode={false} />
          </div>
        </div>
      </footer>
    );
  }
  return <NoDataFallback componentName="Global Footer" />;
};
