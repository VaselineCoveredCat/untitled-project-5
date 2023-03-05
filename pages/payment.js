import React from "react";
import Head from "next/head";

export default function Shipping() {
  return (
    <React.Fragment>
      <Head>
        <title>Payments and Refunds - The Shop</title>
      </Head>

      <main className="p-m-2xl">
        <article>
          <h1 className="mb-xl text-center">Payments & Refunds</h1>

          <div className="mx-auto max-w-80ch">
            <h2 className="mb-m">Payment</h2>

            <p>
              We accepts Visa, Mastercard, Visa Electron, PayPal. We also offers
              a fast purchase service, which allows you to save your credit card
              details for future purchases. Payment details are collected
              through the most advanced technological coding system,{" "}
              <a
                href="https://www.cloudflare.com/learning/ssl/what-is-ssl/"
                rel="noopener noreferrer"
                target="_blank"
              >
                SSL
              </a>
              , and our online store uses a secure certified server to guarantee
              maximum protection.
            </p>

            <h2 className="mt-l mb-m">Refunds</h2>

            <p>
              Once we have received your return at our warehouse and checked
              that it is eligible for a refund, you will receive a confirmation
              e-mail. Your refund will be issued on the same day as
              confirmation, the refund will be issued through our payment
              gateway upon receiving the return confirmation e-mail and will
              take up to 7 working days to process. How long it takes for the
              credit to show on your account will depend on your credit card
              issuer.
            </p>
          </div>
        </article>
      </main>
    </React.Fragment>
  );
}
