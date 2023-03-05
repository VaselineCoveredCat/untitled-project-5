import React from "react";
import Head from "next/head";

export async function getStaticPaths() {
  const response = await fetch(
    `https://21iq5utf.directus.app/items/dress?fields=slug`
  );
  const data = await response.json();

  const slugs = data.data.map((item) => {
    return { params: { slug: item.slug } };
  });

  return { fallback: false, paths: slugs };
}

export async function getStaticProps(context) {
  const response = await fetch(
    `https://21iq5utf.directus.app/items/dress?filter[slug][_eq]=${context.params.slug}`
  );
  const data = await response.json();

  return { props: { items: data } };
}

export default function Product(props) {
  return (
    <React.Fragment>
      <Head>
        <title>{`${props.items.data[0].name} - The Shop`}</title>
      </Head>

      <main className="p-m-2xl">
        <article className="gap-s grid grid-col-1 m:grid-col-2">
          <div>
            <img
              alt=""
              className="mix-blend-multiply ratio-2-3"
              decoding="async"
              sizes="(min-width: 62.5em) 45vw, 90vw"
              src={props.items.data[0].image640}
              srcSet={`${props.items.data[0].image640} 640w, ${props.items.data[0].image1280} 1280w`}
            />
          </div>

          <div>
            <h1 className="mb-xl">{`${props.items.data[0].name}`}</h1>
            <p className="my-s">Price {`${props.items.data[0].price}`}</p>
            <div
              className="my-s"
              dangerouslySetInnerHTML={{
                __html: props.items.data[0].composition,
              }}
            ></div>

            <form>
              <p>Size</p>
              <div className="gap-s grid grid-col-3 justify-start">
                <div>
                  <input
                    className="flat one"
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
                    className="flat two"
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
                    className="flat three"
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

              <p className="mt-s">Color</p>
              <div className="gap-s grid grid-col-5 justify-start">
                <div>
                  <input
                    className="flat flat-black"
                    id="black"
                    name="color"
                    title="black"
                    type="radio"
                    value="black"
                  />
                  <label className="sr-only" htmlFor="black">
                    Black
                  </label>
                </div>

                <div>
                  <input
                    className="flat flat-blue"
                    id="blue"
                    name="color"
                    title="blue"
                    type="radio"
                    value="blue"
                  />
                  <label className="sr-only" htmlFor="blue">
                    Blue
                  </label>
                </div>

                <div>
                  <input
                    className="flat flat-green"
                    id="green"
                    name="color"
                    title="green"
                    type="radio"
                    value="green"
                  />
                  <label className="sr-only" htmlFor="green">
                    Green
                  </label>
                </div>

                <div>
                  <input
                    className="flat flat-red"
                    id="red"
                    name="color"
                    title="red"
                    type="radio"
                    value="red"
                  />
                  <label className="sr-only" htmlFor="red">
                    Red
                  </label>
                </div>

                <div>
                  <input
                    className="flat flat-pink"
                    id="pink"
                    name="color"
                    title="pink"
                    type="radio"
                    value="pink"
                  />
                  <label className="sr-only" htmlFor="pink">
                    Pink
                  </label>
                </div>
              </div>
            </form>
          </div>
        </article>
      </main>
    </React.Fragment>
  );
}
