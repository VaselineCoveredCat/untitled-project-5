import React from "react";
import Head from "next/head";
import Link from "next/link";
import Catalogue from "@/components/Catalogue";

export async function getStaticPaths() {
  const responseCount = await fetch(
    `https://21iq5utf.directus.app/items/dress?aggregate[count]=*`
  );
  const count = await responseCount.json();

  const totalPages = Math.ceil(+count.data[0].count / 12);
  const pages = [];

  for (let i = 2; i <= totalPages; i++) {
    pages.push({ params: { page: i.toString() } });
  }

  return { fallback: false, paths: pages };
}

export async function getStaticProps(context) {
  const responseItems = await fetch(
    `https://21iq5utf.directus.app/items/dress?fields=id,name,price,slug,image640,image1280&sort=-id&limit=12&page=${context.params.page}`
  );
  const responseCount = await fetch(
    `https://21iq5utf.directus.app/items/dress?aggregate[count]=*`
  );

  const items = await responseItems.json();
  const count = await responseCount.json();

  const totalPages = Math.ceil(+count.data[0].count / 12);

  return { props: { currentPage: context.params.page, items, totalPages } };
}

export default function Page(props) {
  return (
    <React.Fragment>
      <Head>
        <title>{`All Collections - Page ${props.currentPage} of ${props.totalPages} - The Shop`}</title>
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
                      <Link
                        href={
                          +props.currentPage <= 2
                            ? "/shop"
                            : `/shop/page/${+props.currentPage - 1}`
                        }
                      >
                        Prev
                      </Link>
                    </li>

                    <li>
                      <p>{`Page ${props.currentPage} of ${props.totalPages}`}</p>
                    </li>

                    <li>
                      {+props.currentPage >= +props.totalPages ? (
                        <a aria-disabled className="text-teal-4" role="link">
                          Next
                        </a>
                      ) : (
                        <Link href={`/shop/page/${+props.currentPage + 1}`}>
                          Next
                        </Link>
                      )}
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
