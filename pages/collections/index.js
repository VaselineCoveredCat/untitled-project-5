import React from "react";
import Head from "next/head";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

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
              <ul className="gap-6 sm-gap-2 grid grid-col-2 md-grid-col-4 mt-6">
                {props.items.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link href="/">
                        <a className="overflow-hidden text-ellipsis w-100 whitespace-nowrap">
                          <div className="overflow-hidden">
                            <picture>
                              <source
                                srcSet={`/images/${item.name}.avif`}
                                type="image/avif"
                              />
                              <source
                                srcSet={`/images/${item.name}.webp`}
                                type="image/webp"
                              />
                              <img
                                alt=""
                                aria-hidden="true"
                                className="aspect-9-16"
                                encoding="async"
                                src={`/images/${item.name}.jpg`}
                              />
                            </picture>
                          </div>
                          <span className="capitalize">
                            {item.name.replaceAll("-", " ")}
                          </span>
                          <br />
                          <span className="sr-only">Price</span>
                          <b>Rp {item.price}</b>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </React.Fragment>
          ) : (
            <p className="text-center">Error occured</p>
          )}
        </article>
      </main>
    </React.Fragment>
  );
}
