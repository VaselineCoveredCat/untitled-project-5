import Link from "next/link";

export default function Catalogue(props) {
  return (
    <ul className="gap-6 sm-gap-2 grid grid-col-2 md-grid-col-4 mt-6">
      {props.items.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`/collections/${item.slug}`}>
              <a className="overflow-hidden text-ellipsis w-100 whitespace-nowrap">
                <div className="overflow-hidden">
                  <picture>
                    <source
                      srcSet={`/images/${item.slug}.avif`}
                      type="image/avif"
                    />
                    <source
                      srcSet={`/images/${item.slug}.webp`}
                      type="image/webp"
                    />
                    <img
                      alt=""
                      aria-hidden="true"
                      className="aspect-9-16"
                      encoding="async"
                      src={`/images/${item.slug}.jpg`}
                    />
                  </picture>
                </div>
                <span>{item.name}</span>
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
