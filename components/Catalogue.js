import Link from "next/link";
import styles from "../styles/catalogue.module.css";

export default function Catalogue(props) {
  return (
    <ul className={styles.ul} role="list">
      {props.items.map((item) => {
        return (
          <li key={item.id}>
            <Link href={`/collections/${item.slug}`}>
              <a>
                <div>
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
