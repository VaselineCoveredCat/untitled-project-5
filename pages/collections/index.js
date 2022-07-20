import React from "react";
import Head from "next/head";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import Catalogue from "../../components/Catalogue";
import styles from "../../styles/collections.module.css";

export async function getStaticProps() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const res = await supabase
    .from("dress")
    .select("*", { count: "exact" })
    .order("name", { ascending: true })
    .limit(20);

  const totalPages = Math.ceil(res.count / 20);

  return { props: { items: res.data, pages: totalPages } };
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

              <section>
                <nav aria-label="pagination">
                  <ul className={styles.page}>
                    <li>
                      <Link href="/collections">
                        <a aria-disabled="true">Prev</a>
                      </Link>
                    </li>

                    <li>{`Page 1 of ${props.pages}`}</li>

                    <li>
                      <Link href="/collections/page/2">
                        <a>Next</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </section>
            </React.Fragment>
          ) : (
            <p className={styles.error}>Error occured</p>
          )}
        </article>
      </main>
    </React.Fragment>
  );
}
