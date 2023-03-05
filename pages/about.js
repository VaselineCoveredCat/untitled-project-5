import React from "react";
import Head from "next/head";

export default function About() {
  return (
    <React.Fragment>
      <Head>
        <title>About Us - The Shop</title>
      </Head>

      <main className="p-m-2xl">
        <article>
          <h1 className="mb-xl text-center">About Us</h1>

          <p className="my-s mx-auto max-w-80ch">
            The Shop name is synonymous with cutting edge style, vibrant hues
            and slick tailoring. The Shop encapsulates a chic and sexy design
            signature adored by celebrities, socialites and sophisticated career
            women alike. The Shop can be seen in the pages of Vogue, Harpers
            Bazaar, L&apos;Officiel, Elle, Numero, Marie Claire and regularly
            found on Oscars, Golden Globe, Cannes and AACTA Award red carpet.
          </p>

          <p className="mx-auto max-w-80ch">
            From runway to the real world, The Shop DNA reflects the impeccable
            style of the label&apos;s founder and creative director. With a
            strong love of all things sartorial and a rich family history
            immersed deep within the fashion world. Inspired by global travel,
            exotic locations, unique characters and cosmopolitan adventures, we
            collections are full of feminine, fun, flamboyant and flattering
            silhouettes that reflect a worldly woman who is the ideal blend of
            strength, confidence and trend.
          </p>
        </article>
      </main>
    </React.Fragment>
  );
}
