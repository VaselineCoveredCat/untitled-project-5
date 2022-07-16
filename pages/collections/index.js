import React from "react";
import Head from "next/head";
import { createClient } from "@supabase/supabase-js";
import Catalogue from "../../components/Catalogue";

export async function getStaticProps() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  let res = await supabase
    .from("dress")
    .select("*")
    .order("id", { ascending: true })
    .limit(40);

  return { props: { items: res.data } };
}

export default function Collections(props) {
  return (
    <React.Fragment>
      <Head>
        <title>Collections - Untitled Project 5</title>
      </Head>

      <main>
        <article className="mx-6">
          <h1>The Collections</h1>
          {props.items ? (
            <React.Fragment>
              <Catalogue items={props.items} />
            </React.Fragment>
          ) : (
            <p className="text-center">Error occured</p>
          )}
        </article>
      </main>
    </React.Fragment>
  );
}
