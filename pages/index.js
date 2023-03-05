import React from "react";
import Head from "next/head";
import Link from "next/link";
import Catalogue from "@/components/Catalogue";

export async function getStaticProps() {
  const response = await fetch(
    `https://21iq5utf.directus.app/items/dress?fields=id,name,price,slug,image640,image1280&sort=-id&limit=3`
  );
  const data = await response.json();

  return { props: { items: data } };
}

export default function Home(props) {
  return (
    <React.Fragment>
      <Head>
        <title>The Shop</title>
      </Head>

      <main>
        <article>
          <div>
            <div aria-hidden>
              <picture>
                <source
                  sizes="100vw"
                  srcSet="/images/gown-with-pearl-embellishments-640-grain.avif 640w, /images/gown-with-pearl-embellishments-1280-grain.avif 1280w, /images/gown-with-pearl-embellishments-1920-grain.avif 1920w"
                  type="image/avif"
                />
                <source
                  sizes="100vw"
                  srcSet="/images/gown-with-pearl-embellishments-640-grain.webp 640w, /images/gown-with-pearl-embellishments-1280-grain.webp 1280w, /images/gown-with-pearl-embellishments-1920-grain.webp 1920w"
                  type="image/webp"
                />
                <img
                  alt=""
                  className="mix-blend-multiply ratio-2-3 s:ratio-3-2"
                  decoding="async"
                  sizes="100vw"
                  src="/images/gown-with-pearl-embellishments-640-grain.jpg"
                  srcSet="/images/gown-with-pearl-embellishments-640-grain.jpg 640w, /images/gown-with-pearl-embellishments-1280-grain.jpg 1280w, /images/gown-with-pearl-embellishments-1920-grain.jpg 1920w"
                />
              </picture>
            </div>

            {/* <h1 className="sr-only">
              The Signature
              <br />
              Collection
            </h1> */}
          </div>

          <article className="m:items-end m:gap-m-2xl grid grid-col-1 m:grid-col-2 my-xl p-m-2xl">
            <h1 className="m:mb-initial mb-xl">Sustainably Crafted Goods</h1>

            {/* <p>
              At The Shop, our goal is to improve the quality of every goods that we make. We
              believe that manufacturing is a magical process. We focus on making every day
              essentials out of luxury materials.
            </p> */}

            <p>
              Functional products that we manufacture by hand from genuine
              organic cotton. We buy cotton directly from small organic farms
              and have them vegetable tanned. Each item is manufactured from the
              first to the last step in our workshop. There is no certificate
              for organic cotton. That is why we have set up a consistent
              production chain ourselves. This is how sustainable products are
              created that will accompany you for a lifetime.
            </p>

            {/* <p>
              We believe that jewelry is more than just something a pretty accessory, it's a means
              of self-expression. That's why we create pieces that empower and are designed to last.
            </p> */}
          </article>

          <article className="my-xl p-m-2xl">
            <h2 className="mb-l text-center">What's New</h2>

            {props.items && (
              <React.Fragment>
                <Catalogue items={props.items} />

                <div className="text-center">
                  <Link href="/shop">View All</Link>
                </div>
              </React.Fragment>
            )}

            {/* <ul role="list">
              <li>
                <div aria-hidden>
                  <picture>
                    <source srcSet="" type="image/avif" />
                    <source srcSet="" type="image/webp" />
                    <img
                      alt=""
                      decoding="async"
                      loading="lazy"
                      src="/images/one-shoulder-draped-cut-out-dress.jpg"
                    />
                  </picture>
                </div>
              </li>

              <li>
                <div aria-hidden>
                  <picture>
                    <source srcSet="" type="image/avif" />
                    <source srcSet="" type="image/webp" />
                    <img
                      alt=""
                      decoding="async"
                      loading="lazy"
                      src="/images/one-shoulder-draped-cut-out-dress.jpg"
                    />
                  </picture>
                </div>
              </li>

              <li>
                <div aria-hidden>
                  <picture>
                    <source srcSet="" type="image/avif" />
                    <source srcSet="" type="image/webp" />
                    <img
                      alt=""
                      decoding="async"
                      loading="lazy"
                      src="/images/one-shoulder-draped-cut-out-dress.jpg"
                    />
                  </picture>
                </div>
              </li>
            </ul> */}

            {/* <div>
              <a href="/">View All</a>
            </div> */}
          </article>

          <article className="my-xl p-m-2xl text-center">
            <h2 className="mb-l">Ethical & Esthetical</h2>

            <div className="gap-s grid grid-col-1 m:grid-col-3">
              <div>
                <div aria-hidden>
                  <img
                    alt=""
                    className="mx-auto max-w-100px ratio-1-1"
                    decoding="async"
                    loading="lazy"
                    src="/images/flower.svg"
                  />
                </div>

                <h3 className="my-m">Fabrics</h3>
                <p>
                  We strive to include natural fibers, such as organic cotton or
                  hemp, and using eco friendly dyes and process. Good for the
                  environment and for business.
                </p>
              </div>

              <div>
                <div aria-hidden>
                  <img
                    alt=""
                    className="mx-auto max-w-100px ratio-1-1"
                    decoding="async"
                    loading="lazy"
                    src="/images/industry.svg"
                  />
                </div>

                <h3 className="my-m">Process</h3>
                <p>
                  We are a cut and sew company. The term cut and sew is a
                  manufacturing process used in the making of custom garments
                  within the fashion industry.
                </p>
              </div>

              <div>
                <div aria-hidden>
                  <img
                    alt=""
                    className="mx-auto max-w-100px ratio-1-1"
                    decoding="async"
                    loading="lazy"
                    src="/images/leaf.svg"
                  />
                </div>

                <h3 className="my-m">Sustainability</h3>
                <p>
                  The clothing industry has long been plagued by unsustainable
                  practices, from the overuse of resources to the production of
                  waste. We aim to change that.
                </p>
              </div>
            </div>
          </article>

          <article className="my-xl p-m-2xl">
            <h2 className="mb-l text-center">Follow Us</h2>

            <p className="mb-s text-center">
              Our journey has just begun and we still has a lot to do. Follow us
              for news and promotions on instagram.
            </p>

            <div
              aria-hidden
              className="gap-s grid grid-col-1 s:grid-col-2 l:grid-col-4"
            >
              <div>
                <picture>
                  <source
                    sizes="(min-width: 62.5em) 25vw, (min-width: 37.5em) 45vw, 85vw"
                    srcSet="/images/insta-1-640.avif 640w, /images/insta-1-1280.avif 1280w"
                    type="image/avif"
                  />
                  <source
                    sizes="(min-width: 62.5em) 25vw, (min-width: 37.5em) 45vw, 85vw"
                    srcSet="/images/insta-1-640.webp 640w, /images/insta-1-1280.webp 1280w"
                    type="image/webp"
                  />
                  <img
                    alt=""
                    className="mix-blend-multiply ratio-1-1"
                    decoding="async"
                    loading="lazy"
                    sizes="(min-width: 62.5em) 25vw, (min-width: 37.5em) 45vw, 85vw"
                    src="/images/insta-1-640.jpg"
                    srcSet="/images/insta-1-640.jpg 640w, /images/insta-1-1280.jpg 1280w"
                  />
                </picture>
              </div>

              <div>
                <picture>
                  <source
                    sizes="(min-width: 62.5em) 25vw, (min-width: 37.5em) 45vw, 85vw"
                    srcSet="/images/insta-2-640.avif 640w, /images/insta-2-1280.avif 1280w"
                    type="image/avif"
                  />
                  <source
                    sizes="(min-width: 62.5em) 25vw, (min-width: 37.5em) 45vw, 85vw"
                    srcSet="/images/insta-2-640.webp 640w, /images/insta-2-1280.webp 1280w"
                    type="image/webp"
                  />
                  <img
                    alt=""
                    className="mix-blend-multiply ratio-1-1"
                    decoding="async"
                    loading="lazy"
                    sizes="(min-width: 62.5em) 25vw, (min-width: 37.5em) 45vw, 85vw"
                    src="/images/insta-2-640.jpg"
                    srcSet="/images/insta-2-640.jpg 640w, /images/insta-2-1280.jpg 1280w"
                  />
                </picture>
              </div>

              <div>
                <picture>
                  <source
                    sizes="(min-width: 62.5em) 25vw, (min-width: 37.5em) 45vw, 85vw"
                    srcSet="/images/insta-3-640.avif 640w, /images/insta-3-1280.avif 1280w"
                    type="image/avif"
                  />
                  <source
                    sizes="(min-width: 62.5em) 25vw, (min-width: 37.5em) 45vw, 85vw"
                    srcSet="/images/insta-3-640.webp 640w, /images/insta-3-1280.webp 1280w"
                    type="image/webp"
                  />
                  <img
                    alt=""
                    className="mix-blend-multiply ratio-1-1"
                    decoding="async"
                    loading="lazy"
                    sizes="(min-width: 62.5em) 25vw, (min-width: 37.5em) 45vw, 85vw"
                    src="/images/insta-3-640.jpg"
                    srcSet="/images/insta-3-640.jpg 640w, /images/insta-3-1280.jpg 1280w"
                  />
                </picture>
              </div>

              <div>
                <picture>
                  <source
                    sizes="(min-width: 62.5em) 25vw, (min-width: 37.5em) 45vw, 85vw"
                    srcSet="/images/insta-4-640.avif 640w, /images/insta-4-1280.avif 1280w"
                    type="image/avif"
                  />
                  <source
                    sizes="(min-width: 62.5em) 25vw, (min-width: 37.5em) 45vw, 85vw"
                    srcSet="/images/insta-4-640.webp 640w, /images/insta-4-1280.webp 1280w"
                    type="image/webp"
                  />
                  <img
                    alt=""
                    className="mix-blend-multiply ratio-1-1"
                    decoding="async"
                    loading="lazy"
                    sizes="(min-width: 62.5em) 25vw, (min-width: 37.5em) 45vw, 85vw"
                    src="/images/insta-4-640.jpg"
                    srcSet="/images/insta-4-640.jpg 640w, /images/insta-4-1280.jpg 1280w"
                  />
                </picture>
              </div>
            </div>
          </article>
        </article>
      </main>
    </React.Fragment>
  );
}
