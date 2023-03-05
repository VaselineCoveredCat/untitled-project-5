import React from "react";
import Head from "next/head";

export default function Lost() {
  return (
    <React.Fragment>
      <Head>
        <title>404 - The Shop</title>
      </Head>

      <main className="p-m-2xl">
        <article>
          <h1 className="mb-xl text-center">404</h1>
          <p className="mx-auto max-w-80ch">
            I'm afraid you've found a page that doesn't exist. That can happen
            when you follow a link to something that has since been deleted, or
            the link was incorrect.
          </p>
        </article>
      </main>
    </React.Fragment>
  );
}
