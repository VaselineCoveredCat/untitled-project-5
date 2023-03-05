import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();

  return (
    <header>
      <nav className="py-m px-m-2xl">
        <ul
          className="flex gap-s justify-end overflow-x-scroll snap-x-mandatory"
          role="list"
        >
          <li>
            <Link
              aria-current={router.asPath === "/about" ? "page" : undefined}
              href="/about"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              aria-current={router.asPath === "/contact" ? "page" : undefined}
              href="/contact"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              aria-current={router.asPath === "/shop" ? "page" : undefined}
              href="/shop"
            >
              Shop
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
