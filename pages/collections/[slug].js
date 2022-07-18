import React from "react";
import Head from "next/head";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function getStaticPaths() {
  const res = await supabase.from("dress").select("slug");

  const slugs = res.data.map((item) => {
    return { params: { slug: item.slug } };
  });

  return { paths: slugs, fallback: false };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const res = await supabase.from("dress").select("*").match({ slug: slug });

  return { props: { items: res.data } };
}

export default function Product(props) {
  return (
    <React.Fragment>
      <Head>
        <title>{`${props.items[0].name} - Untitled Project 5`}</title>
      </Head>

      <main>
        <article className="gap-6 sm-gap-2 grid grid-col-1 sm-grid-col-2 mx-6">
          <picture>
            <source
              srcSet={`/images/${props.items[0].slug}.avif`}
              type="image/avif"
            />
            <source
              srcSet={`/images/${props.items[0].slug}.webp`}
              type="image/webp"
            />
            <img
              alt=""
              aria-hidden="true"
              className="aspect-9-16"
              encoding="async"
              src={`/images/${props.items[0].slug}.jpg`}
            />
          </picture>

          <div>
            <h1 className="text-h3">{props.items[0].name}</h1>
            <p>
              <span className="sr-only">Price</span>
              {`Rp ${props.items[0].price}`}
            </p>
          </div>
        </article>
      </main>
    </React.Fragment>
  );
}
