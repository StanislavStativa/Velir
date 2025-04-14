import { SitecorePageProps } from 'lib/page-props';
import { HTMLLink } from '@sitecore-jss/sitecore-jss-nextjs';
import { Plugin } from '..';
import config from 'temp/config';

class SiteThemePlugin implements Plugin {
  order = 2;

  async exec(props: SitecorePageProps) {
    //Create theme href
    if (config.siteTheme) return props;

    const theme = (props.layoutData.sitecore.context.theme as string) || 'default';
    const href = `${config.publicUrl}/themes/${theme}.css`;

    //Create theme stylesheet link
    const themeLink = {
      rel: 'stylesheet',
      href: href,
    } as HTMLLink;

    if (themeLink) props.headLinks.push(themeLink);

    return props;
  }
}

export const siteThemePlugin = new SiteThemePlugin();
