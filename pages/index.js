import React from "react";
import Head from "next/head";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import Banner from "../components/Banner";
import Catalogue from "../components/Catalogue";

export async function getStaticProps() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  let res = await supabase
    .from("dress")
    .select("*")
    .order("id", { ascending: true })
    .limit(4);

  return { props: { items: res.data } };
}

export default function Home(props) {
  return (
    <React.Fragment>
      <Head>
        <title>Untitled Project 5</title>
      </Head>

      <main className="gap-6 grid grid-col-1">
        <Banner />

        <div className="mx-6">
          <p className="md-max-w-50 md-ml-auto text-h5 text-center md-text-right">
            Fashion is what you're offered four times a year by designers. Style
            is what you choose.
          </p>
        </div>

        <article className="mx-6">
          <div>
            <h2>Dress Collections</h2>
          </div>

          {props.items ? (
            <React.Fragment>
              <Catalogue items={props.items} />

              <div className="mt-6 text-center text-upper">
                <Link href="/collections">
                  <a className="md-hover-bb">See All Collections</a>
                </Link>
              </div>
            </React.Fragment>
          ) : (
            <p className="text-center">Error occured</p>
          )}
        </article>
      </main>
    </React.Fragment>
  );
}
