import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark"> {/* Apply dark class by default if forced */}
      <Head>
        {/* Meta tags from old index.html - common ones */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Page-specific title and description should be in individual pages or _app.tsx via Head */}
        {/* These are fallbacks or general site info */}
        <meta name="author" content="Azim Baji Krishna" />
        
        <meta property="og:type" content="website" />
        {/* Update OG image if desired, ensure it's in /public or an absolute URL */}
        <meta property="og:image" content="/placeholder.svg" /> 
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:site" content="@yourtwitterhandle" /> */}
        <meta name="twitter:image" content="/placeholder.svg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}