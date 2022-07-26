import React from "react";
import Head from "next/head";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import Banner from "../components/Banner";
import Catalogue from "../components/Catalogue";
import styles from "../styles/home.module.css";

export async function getStaticProps() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const res = await supabase
    .from("dress")
    .select("*")
    .order("price", { ascending: false })
    .limit(4);

  return { props: { items: res.data } };
}

export default function Home(props) {
  return (
    <React.Fragment>
      <Head>
        <title>Untitled Project 5</title>
      </Head>

      <main className={styles.main}>
        <Banner />

        <div className={styles.div}>
          <p>
            Fashion is what you're offered four times a year by designers. Style is what you choose.
          </p>
        </div>

        <article className={styles.article}>
          <h2>Dress Collections</h2>

          {props.items ? (
            <React.Fragment>
              <Catalogue items={props.items} />

              <div className={styles.link}>
                <Link href="/collections">
                  <a>See All Collections</a>
                </Link>
              </div>
            </React.Fragment>
          ) : (
            <p className={styles.error}>Error occured</p>
          )}
        </article>
      </main>
    </React.Fragment>
  );
}
