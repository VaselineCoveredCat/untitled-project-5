import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
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
