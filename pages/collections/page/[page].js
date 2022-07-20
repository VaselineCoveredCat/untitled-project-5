import React from "react";
import Head from "next/head";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function getStaticPaths() {
  const res = await supabase
    .from("dress")
    .select("*", { count: "exact", head: true });

  const totalPages = Math.ceil(res.count / 20);
  const pages = [];

  for (let i = 2; i <= totalPages; i++) {
    pages.push({ params: { page: i } });
  }

  return { fallback: false, paths: pages };
}

export default function Page() {
  return (
    <React.Fragment>
      <Head>
        <title>Collections - Untitled Project 5</title>
      </Head>

      <main>
        <article>
          <h1>The Collections</h1>
        </article>
      </main>
    </React.Fragment>
  );
}
