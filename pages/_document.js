import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <link
          as="font"
          crossOrigin="true"
          href="../public/fonts/playfair-display-v29-latin-700.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="true"
          href="../public/fonts/mukta-v13-latin-regular.woff2"
          rel="preload"
          type="font/woff2"
        />
        <meta content="Firas Hasnawan" name="author" />
        <meta
          content="Shop our variety of designs and styles to give your wardrobe fashionable flair. Free in-store shipping and returns."
          name="description"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
