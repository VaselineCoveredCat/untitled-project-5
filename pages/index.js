import React from "react";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Untitled Project 5</title>
      </Head>

      <main className="gap-6 grid grid-1">
        <div className="grid grid-1">
          <picture className="area-1-1">
            <source
              media="(min-resolution: 144dpi) and (min-width: 1920px), (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1920px)"
              srcSet="https://images.pexels.com/photos/413885/pexels-photo-413885.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920"
            />
            <source
              media="(min-resolution: 144dpi) and (min-width: 1280px), (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
              srcSet="https://images.pexels.com/photos/413885/pexels-photo-413885.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1280"
            />
            <source
              media="(min-resolution: 144dpi) and (min-width: 640px), (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 640px)"
              srcSet="https://images.pexels.com/photos/413885/pexels-photo-413885.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=640"
            />
            <source
              media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
              srcSet="https://images.pexels.com/photos/413885/pexels-photo-413885.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=300"
            />

            <source
              media="(min-width: 1920px)"
              srcSet="https://images.pexels.com/photos/413885/pexels-photo-413885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1920"
            />
            <source
              media="(min-width: 1280px)"
              srcSet="https://images.pexels.com/photos/413885/pexels-photo-413885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1280"
            />
            <source
              media="(min-width: 640px)"
              srcSet="https://images.pexels.com/photos/413885/pexels-photo-413885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=640"
            />

            <img
              alt=""
              aria-hidden="true"
              className="aspect-1-1 sm-aspect-21-9 lg-aspect-16-9"
              encoding="async"
              src="https://images.pexels.com/photos/413885/pexels-photo-413885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"
            />
          </picture>

          <div className="align-self-center area-1-1 m-6 text-upper">
            <h1 className="max-w-50">Grand Sale</h1>

            <a
              className="hover-link"
              href="https://www.youtube.com/watch?v=CPrf_8jiTKw"
              rel="noopener noreferrer"
              target="_blank"
            >
              Watch trailer
            </a>
          </div>
        </div>

        <div className="mx-6">
          <p className="md-max-w-50 md-ml-auto text-h5 text-center md-text-right">
            Fashion is what you're offered four times a year by designers. Style
            is what you choose.
          </p>
        </div>

        <article className="mx-6">
          <div>
            <h2>Dress Collections</h2>
          </div>

          <ul className="gap-6 sm-gap-2 grid grid-2 md-grid-4 mt-6">
            <li>
              <Link href="/">
                <a className="overflow-hidden text-ellipsis w-100 whitespace-nowrap">
                  <div className="overflow-hidden">
                    <picture>
                      <source
                        media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
                        srcSet="/Floral Pleated Midi Dress 577778.png"
                      />
                      <img
                        alt=""
                        aria-hidden="true"
                        className="aspect-9-16 hover-scale"
                        encoding="async"
                        src="/Floral Pleated Midi Dress 577778.png"
                      />
                    </picture>
                  </div>
                  Floral Pleated Midi Dress
                  <br />
                  <span className="sr-only">Price</span><b>Rp 577.778</b>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a className="overflow-hidden text-ellipsis w-100 whitespace-nowrap">
                  <div className="overflow-hidden">
                    <picture>
                      <source
                        media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
                        srcSet="/Floral Print Open Back Pleated Midi Dress 577778.png"
                      />
                      <img
                        alt=""
                        aria-hidden="true"
                        className="aspect-9-16 hover-scale"
                        encoding="async"
                        src="/Floral Print Open Back Pleated Midi Dress 577778.png"
                      />
                    </picture>
                  </div>
                  Floral Print Open Back Pleated Midi Dress
                  <br />
                  <span className="sr-only">Price</span><b>Rp 577.778</b>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a className="overflow-hidden text-ellipsis w-100 whitespace-nowrap">
                  <div className="overflow-hidden">
                    <picture>
                      <source
                        media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
                        srcSet="/Porcelain Print Long Sleeve Pleated Midi Dress 577778.png"
                      />
                      <img
                        alt=""
                        aria-hidden="true"
                        className="aspect-9-16 hover-scale"
                        encoding="async"
                        src="/Porcelain Print Long Sleeve Pleated Midi Dress 577778.png"
                      />
                    </picture>
                  </div>
                  Porcelain Print Long Sleeve Pleated Midi Dress
                  <br />
                  <span className="sr-only">Price</span><b>Rp 577.778</b>
                </a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a className="overflow-hidden text-ellipsis w-100 whitespace-nowrap">
                  <div className="overflow-hidden">
                    <picture>
                      <source
                        media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
                        srcSet="/Satin Pleated Midi Dress 486550.png"
                      />
                      <img
                        alt=""
                        aria-hidden="true"
                        className="aspect-9-16 hover-scale"
                        encoding="async"
                        src="/Satin Pleated Midi Dress 486550.png"
                      />
                    </picture>
                  </div>
                  Satin Pleated Midi Dress
                  <br />
                  <span className="sr-only">Price</span><b>Rp 486.550</b>
                </a>
              </Link>
            </li>
          </ul>

          <div className="mt-6 text-center text-upper">
            <Link href="/">
              <a className="hover-link">See All Collections</a>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </React.Fragment>
  );
}
