import Link from "next/link";

export default function Catalogue(props) {
  return (
    <ul className="gap-xl-s grid grid-col-1 m:grid-col-3 mb-xl" role="list">
      {props.items.data.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`/shop/${item.slug}`}>
              <div aria-hidden>
                <img
                  alt=""
                  className="mix-blend-multiply ratio-2-3"
                  decoding="async"
                  loading="lazy"
                  sizes="(min-width: 50em) 30vw, 90vw"
                  src={item.image640}
                  srcSet={`${item.image640} 640w, ${item.image1280} 1280w`}
                />
              </div>

              <p className="mt-s">{item.name}</p>
              <p>
                <span className="sr-only">Price</span> {item.price}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
