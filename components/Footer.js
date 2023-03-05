import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal-6 text-teal-2 p-m-2xl text-center">
      <div className="mb-xl">
        <ul
          className="flex flex-wrap gap-xl-s justify-evenly text-s"
          role="list"
        >
          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>

          <li>
            <Link href="/payment">Payment</Link>
          </li>

          <li>
            <Link href="/shipping">Shipping</Link>
          </li>
        </ul>
      </div>

      <a
        aria-hidden
        className="mb-s mx-xs"
        href="https://www.facebook.com/login.php/"
        rel="noopener noreferrer"
        target="_blank"
        title="facebook"
      >
        <img alt="" decoding="async" loading="lazy" src="/facebook.svg" />
      </a>
      <a
        aria-hidden
        className="mb-s mx-xs"
        href="https://www.secure.instagram.com/"
        rel="noopener noreferrer"
        target="_blank"
        title="instagram"
      >
        <img alt="" decoding="async" loading="lazy" src="/instagram.svg" />
      </a>
      <a
        aria-hidden
        className="mb-s mx-xs"
        href="https://www.linkedin.com/uas/login"
        rel="noopener noreferrer"
        target="_blank"
        title="linkedin"
      >
        <img alt="" decoding="async" loading="lazy" src="/linkedin.svg" />
      </a>
      <a
        aria-hidden
        className="mb-s mx-xs"
        href="https://www.tiktok.com/login/"
        rel="noopener noreferrer"
        target="_blank"
        title="tiktok"
      >
        <img alt="" decoding="async" loading="lazy" src="/tiktok.svg" />
      </a>
      <a
        aria-hidden
        className="mb-s mx-xs"
        href="https://twitter.com/i/flow/login"
        rel="noopener noreferrer"
        target="_blank"
        title="twitter"
      >
        <img alt="" decoding="async" loading="lazy" src="/twitter.svg" />
      </a>

      <p className="text-s">&copy; {currentYear} by Firas</p>
    </footer>
  );
}
