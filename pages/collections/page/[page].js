import React from "react";
import Head from "next/head";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import Catalogue from "../../../components/Catalogue";
import styles from "../../../styles/collections.module.css";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
const limit = 20;

export async function getStaticPaths() {
  const res = await supabase.from("dress").select("*", { count: "exact", head: true });

  const totalPages = Math.ceil(+res.count / limit);
  const pages = [];

  for (let i = 2; i <= totalPages; i++) {
    pages.push({ params: { page: i.toString() } });
  }

  return { fallback: false, paths: pages };
}

export async function getStaticProps(context) {
  const start = (+context.params.page - 1) * limit;
  const end = +context.params.page * limit - 1;

  const res = await supabase
    .from("dress")
    .select("*", { count: "exact" })
    .order("price", { ascending: false })
    .range(start, end);
  const totalPages = Math.ceil(+res.count / limit);

  return {
    props: { currentPage: context.params.page, items: res.data, totalPages },
  };
}

export default function Page(props) {
  return (
    <React.Fragment>
      <Head>
        <title>{`Collections Page ${props.currentPage} - Untitled Project 5`}</title>
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
                      <Link
                        href={
                          +props.currentPage <= 2 ? "/collections" : `${+props.currentPage - 1}`
                        }
                      >
                        <a>Prev</a>
                      </Link>
                    </li>

                    <li>{`Page ${props.currentPage} of ${props.totalPages}`}</li>

                    {+props.currentPage >= +props.totalPages ? (
                      <li>
                        <a aria-disabled="true" role="link">
                          Next
                        </a>
                      </li>
                    ) : (
                      <li>
                        <Link href={`${+props.currentPage + 1}`}>
                          <a>Next</a>
                        </Link>
                      </li>
                    )}
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
