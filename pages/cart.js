import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/cart.module.css";

export default function Cart() {
  return (
    <React.Fragment>
      <Head>
        <title>Your Shopping Cart - Untitled Project 5</title>
      </Head>

      <main className={styles.main}>
        <article className={styles.article}>
          <h1>Your Bag</h1>
          <p>Your bag is empty</p>
          <p>
            <Link href="/collections">
              <a>SHOP NOW</a>
            </Link>
          </p>
        </article>
      </main>
    </React.Fragment>
  );
}
