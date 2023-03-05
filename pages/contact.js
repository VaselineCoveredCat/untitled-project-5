import React from "react";
import Head from "next/head";

export default function Lost() {
  return (
    <React.Fragment>
      <Head>
        <title>Contact Us - The Shop</title>
      </Head>

      <main className="p-m-2xl">
        <article>
          <h1 className="mb-xl text-center">Contact Us</h1>

          <p className="my-s mx-auto max-w-80ch">
            For more information regarding online orders, we invite you to
            contact our customer care{" "}
            <a className="text-indigo-4" href="mailto:customer@care.com">
              customer@care.com
            </a>{" "}
            and our team will be happy to help you.
          </p>

          <p className="mx-auto max-w-80ch">
            You can also call us{" "}
            <a className="text-indigo-4" href="tel:+123-456-789">
              +123-456-789
            </a>{" "}
            where our native speaking customer care team is available to support
            you. You are very welcome to get in touch for styling and life
            advice or with any further questions on your order. You can also
            place your order with our team on the phone.
          </p>
        </article>
      </main>
    </React.Fragment>
  );
}
