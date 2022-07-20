import React from "react";
import Head from "next/head";
import { createClient } from "@supabase/supabase-js";
import styles from "../../styles/slug.module.css";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function getStaticPaths() {
  const res = await supabase.from("dress").select("slug");

  const slugs = res.data.map((item) => {
    return { params: { slug: item.slug } };
  });

  return { fallback: false, paths: slugs };
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
        <article className={styles.article}>
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
              encoding="async"
              src={`/images/${props.items[0].slug}.jpg`}
            />
          </picture>

          <div className={styles.div}>
            <h1>{props.items[0].name}</h1>

            <p>
              <span className="sr-only">Price</span>
              {`Rp ${props.items[0].price}`}
            </p>

            <p>{props.items[0].desc}</p>

            <form className={styles.form}>
              <p>Size</p>

              <div>
                <div>
                  <input
                    aria-label="small size"
                    className={styles.one}
                    defaultChecked
                    id="small"
                    name="sizes"
                    type="radio"
                    value="small"
                  />
                  <label className="sr-only" htmlFor="small">
                    S
                  </label>
                </div>

                <div>
                  <input
                    aria-label="medium size"
                    className={styles.two}
                    id="medium"
                    name="sizes"
                    type="radio"
                    value="medium"
                  />
                  <label className="sr-only" htmlFor="medium">
                    M
                  </label>
                </div>

                <div>
                  <input
                    aria-label="large size"
                    className={styles.three}
                    id="large"
                    name="sizes"
                    type="radio"
                    value="large"
                  />
                  <label className="sr-only" htmlFor="large">
                    L
                  </label>
                </div>
              </div>
            </form>

            <details>
              <summary>Shipping</summary>
              <p>
                Please note estimated shipping times include processing time at
                the warehouse and are calculated from the date the order is
                placed.
              </p>
            </details>

            <details>
              <summary>Returns</summary>
              <p>
                All orders (subject to our returns policy) can be returned up to
                28 days after the date of purchase. Please note, we cannot offer
                refunds on beauty, pierced jewellery or on swimwear if the
                hygiene seal is not in place or has been broken.
              </p>
            </details>
          </div>
        </article>
      </main>
    </React.Fragment>
  );
}
