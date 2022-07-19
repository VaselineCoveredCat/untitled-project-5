import React from "react";
import Head from "next/head";
import styles from "../styles/lost.module.css";

export default function Lost() {
  return (
    <React.Fragment>
      <Head>
        <title>404 - Untitled Project 5</title>
      </Head>

      <main>
        <article className={styles.lost}>
          <h1>404</h1>
          <p>
            I'm afraid you've found a page that doesn't exist. That can happen
            when you follow a link to something that has since been deleted, or
            the link was incorrect.
          </p>
        </article>
      </main>
    </React.Fragment>
  );
}
