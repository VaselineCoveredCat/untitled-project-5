import React from "react";
import Head from "next/head";

export default function Shipping() {
  return (
    <React.Fragment>
      <Head>
        <title>Delivery and Return - The Shop</title>
      </Head>

      <main className="p-m-2xl">
        <article>
          <h1 className="mb-xl text-center">Delivery & Return</h1>

          <div className="mx-auto max-w-80ch">
            <h2 className="mb-m">Delivery</h2>

            <p className="my-s">
              You will recieve a tracking number as soon as your parcel has
              shipped. Deliveries will be completed during business hours from
              Monday to Friday, excluding holidays. If the parcel is not
              deliverable on the first attempt, the courier will attempt to
              deliver it another two times. All orders are processed
              automatically and associated to the selected shipping method. If
              you would like to receive more information regarding your
              shipment, you can contact us{" "}
              <a className="text-indigo-4" href="tel:+123-456-789">
                +123-456-789
              </a>
              , or via e-mail{" "}
              <a className="text-indigo-4" href="mailto:customer@care.com">
                customer@care.com
              </a>{" "}
              by completing the contact form.
            </p>

            <p>
              We are available from 8 AM to 5 PM, from Monday to Friday,
              excluding bank holidays. It is not possible to place orders with a
              shipping country that is different from the country you have
              chosen for navigating the website. Shipping is{" "}
              <a
                className="text-indigo-4"
                href="https://www.investopedia.com/terms/d/delivereddutyunpaid.asp"
                rel="noopener noreferrer"
                target="_blank"
              >
                delivered duty unpaid
              </a>{" "}
              for all countries requiring custom taxes, except for United
              Kingdom, United States, Canada, Japan, Malaysia, Vietnam,
              Thailand, Singapore and UAE for which shipping is{" "}
              <a
                className="text-indigo-4"
                href="https://www.investopedia.com/terms/d/delivery-duty-paid.asp"
                rel="noopener noreferrer"
                target="_blank"
              >
                delivered duty paid
              </a>
              .
            </p>

            <h2 className="mt-l mb-m">Returns</h2>

            <p>
              You can request a return or exchange for one or more products by
              contacting our{" "}
              <a className="text-indigo-4" href="mailto:customer@care.com">
                customer@care.com
              </a>{" "}
              within 7 days of the date you received your parcel. Make sure that
              the items are in the same condition in which you have received
              them with the identification tag and seal intact. Once we have
              received your return and checked that all the requirements have
              been met, you will receive a confirmation email. We reserves the
              right not to accept returns that have not been communicated or
              shipped within the returns time limit, or if they are not in the
              same condition in which they were delivered to you.
            </p>
          </div>
        </article>
      </main>
    </React.Fragment>
  );
}
