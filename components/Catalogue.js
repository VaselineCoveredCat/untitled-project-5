import Link from "next/link";

export default function Catalogue(props) {
  return (
    <ul className="gap-6 sm-gap-2 grid grid-col-2 md-grid-col-4 mt-6">
      {props.items.map((item) => {
        return (
          <li key={item.id}>
            <Link href="/">
              <a className="overflow-hidden text-ellipsis w-100 whitespace-nowrap">
                <div className="overflow-hidden">
                  <picture>
                    <source
                      srcSet={`/images/${item.name}.avif`}
                      type="image/avif"
                    />
                    <source
                      srcSet={`/images/${item.name}.webp`}
                      type="image/webp"
                    />
                    <img
                      alt=""
                      aria-hidden="true"
                      className="aspect-9-16"
                      encoding="async"
                      src={`/images/${item.name}.jpg`}
                    />
                  </picture>
                </div>
                <span className="capitalize">
                  {item.name.replaceAll("-", " ")}
                </span>
                <br />
                <span className="sr-only">Price</span>
                <b>Rp {item.price}</b>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
