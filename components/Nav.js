import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/nav.module.css";

export default function Nav() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <button
          aria-controls="menu"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img alt="" aria-hidden="true" focusable="false" src="/menu.svg" title="Menu" />
          <span className="sr-only">Menu</span>
        </button>

        <ul className={isOpen ? styles.mobile : styles.desktop} id="menu" role="list">
          <li>
            <Link href="/">
              <a
                aria-current={router.asPath === "/" ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </Link>
          </li>

          <li>
            <Link href="/collections">
              <a
                aria-current={router.asPath === "/collections" ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                Collections
              </a>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <a
                aria-current={router.asPath === "/contact" ? "page" : undefined}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
