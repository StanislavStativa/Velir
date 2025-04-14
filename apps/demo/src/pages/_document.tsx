import { Html, Head, Main, NextScript } from 'next/document';
import config from 'temp/config';

const theme = config.siteTheme;
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {theme && (
          <>
            <link rel="preload" href={`${config.publicUrl}/themes/${theme}.css`} as="style" />
            <link
              rel="stylesheet"
              id="dynamic-tailwind-theme"
              href={`${config.publicUrl}/themes/${theme}.css`}
            />
          </>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
