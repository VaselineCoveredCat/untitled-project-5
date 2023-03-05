import React from "react";
import Head from "next/head";
import Link from "next/link";
import Catalogue from "@/components/Catalogue";

export async function getStaticProps() {
  const responseItems = await fetch(
    `https://21iq5utf.directus.app/items/dress?fields=id,name,price,slug,image640,image1280&sort=-id&limit=12`
  );
  const responseCount = await fetch(
    `https://21iq5utf.directus.app/items/dress?aggregate[count]=*`
  );

  const items = await responseItems.json();
  const count = await responseCount.json();

  const totalPages = Math.ceil(+count.data[0].count / 12);

  return { props: { items, totalPages } };
}

export default function Shop(props) {
  return (
    <React.Fragment>
      <Head>
        <title>All Collections - The Shop</title>
      </Head>

      <main className="p-m-2xl">
        <article>
          <h1 className="mb-xl">Dresses</h1>

          {props.items && (
            <article>
              <Catalogue items={props.items} />

              <section>
                <nav aria-label="pagination">
                  <ul className="flex gap-m justify-center" role="list">
                    <li>
                      <a aria-disabled className="text-teal-4" role="link">
                        Prev
                      </a>
                    </li>

                    <li>
                      <p>{`Page 1 of ${props.totalPages}`}</p>
                    </li>

                    <li>
                      <Link href="/shop/page/2">Next</Link>
                    </li>
                  </ul>
                </nav>
              </section>
            </article>
          )}
        </article>
      </main>
    </React.Fragment>
  );
}
