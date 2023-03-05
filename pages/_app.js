import "@/styles/reset.css";
import "@/styles/main.css";
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}
