import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="m-6 sm-my-2">
        <button
          className={`${isOpen ? "mb-6" : ""} md-hidden`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Menu</span>
          <img alt="" aria-hidden="true" src="/menu.svg" />
        </button>

        <ul
          className={`gap-6 grid md-grid grid-col-1 md-grid-col-4-auto ${
            isOpen ? "" : "hidden"
          } md-justify`}
        >
          <li className="bb-2 md-bb-0">
            <Link href="/">
              <a className="md-hover-bb" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </Link>
          </li>

          <li className="bb-2 md-bb-0">
            <Link href="/collections">
              <a className="md-hover-bb" onClick={() => setIsOpen(false)}>
                Collections
              </a>
            </Link>
          </li>

          <li className="bb-2 md-bb-0">
            <Link href="/">
              <a className="md-hover-bb" onClick={() => setIsOpen(false)}>
                About
              </a>
            </Link>
          </li>

          <li className="bb-2 md-bb-0">
            <Link href="/">
              <a className="md-hover-bb" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
