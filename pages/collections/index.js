import React from "react";
import Head from "next/head";
import { createClient } from "@supabase/supabase-js";
import Catalogue from "../../components/Catalogue";
import styles from "../../styles/collections.module.css";

export async function getStaticProps() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  let res = await supabase
    .from("dress")
    .select("*")
    .order("name", { ascending: true })
    .limit(20);

  return { props: { items: res.data } };
}

export default function Collections(props) {
  return (
    <React.Fragment>
      <Head>
        <title>Collections - Untitled Project 5</title>
      </Head>

      <main>
        <article className={styles.article}>
          <h1>The Collections</h1>

          {props.items ? (
            <React.Fragment>
              <Catalogue items={props.items} />
            </React.Fragment>
          ) : (
            <p className={styles.error}>Error occured</p>
          )}
        </article>
      </main>
    </React.Fragment>
  );
}
