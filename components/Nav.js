import { useState } from "react";
import Link from "next/link";
import styles from "../styles/nav.module.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className={styles.nav}>
        <button
          aria-controls="menu"
          aria-expanded={isOpen}
          aria-haspopup="true"
          className={isOpen ? styles.open : undefined}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">{isOpen ? "Close Menu" : "Open Menu"}</span>
          <img alt="" aria-hidden="true" src="/menu.svg" />
        </button>

        <ul
          className={isOpen ? styles.ul : styles.hidden}
          id="menu"
          role="list"
        >
          <li>
            <Link href="/">
              <a onClick={() => setIsOpen(false)}>Home</a>
            </Link>
          </li>

          <li>
            <Link href="/collections">
              <a onClick={() => setIsOpen(false)}>Collections</a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a onClick={() => setIsOpen(false)}>About</a>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <a onClick={() => setIsOpen(false)}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
