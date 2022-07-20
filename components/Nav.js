import { useState } from "react";
import Link from "next/link";
import styles from "../styles/nav.module.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <button
          aria-controls="menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "close menu" : "open menu"}
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img alt="" aria-hidden="true" src="/menu.svg" />
        </button>

        <ul
          className={isOpen ? styles.mobile : styles.desktop}
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
