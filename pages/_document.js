import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <meta content="noimageindex" name="robots" />
        <meta content="Firas Hasnawan" name="author" />
        <meta
          content="Shop our variety of designs and styles to give your wardrobe fashionable flair."
          name="description"
        />

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
