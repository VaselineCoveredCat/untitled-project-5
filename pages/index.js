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
        <header className="grid grid-col-1">
          <picture className="area-1-1">
            <source
              srcSet="/images/pexels-pixabay-413885.avif"
              type="image/avif"
            />
            <source
              srcSet="/images/pexels-pixabay-413885.webp"
              type="image/webp"
            />
            <img
              alt=""
              aria-hidden="true"
              className="aspect-1-1 sm-aspect-21-9 lg-aspect-16-9"
              encoding="async"
              src="/images/pexels-pixabay-413885.jpg"
            />
          </picture>

          <div className="align-self-center area-1-1 m-6 text-upper">
            <h1 className="max-w-50">Grand Sale</h1>

            <a
              className="md-hover-bb"
              href="https://www.youtube.com/watch?v=CPrf_8jiTKw"
              rel="noopener noreferrer"
              target="_blank"
            >
              Watch trailer
            </a>
          </div>
        </header>

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
