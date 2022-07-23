import styles from "../styles/banner.module.css";

export default function Banner() {
  return (
    <header className={styles.header}>
      <picture>
        <source srcSet="/images/pexels-pixabay-413885.avif" type="image/avif" />
        <source srcSet="/images/pexels-pixabay-413885.webp" type="image/webp" />
        <img
          alt=""
          aria-hidden="true"
          decoding="async"
          height={1280}
          src="/images/pexels-pixabay-413885.jpg"
          width={1920}
        />
      </picture>

      <div>
        <h1>Grand Sale</h1>

        <a
          href="https://www.youtube.com/watch?v=CPrf_8jiTKw"
          rel="noopener noreferrer"
          target="_blank"
        >
          Watch trailer
        </a>
      </div>
    </header>
  );
}
