export default function Banner() {
  return (
    <header className="grid grid-col-1">
      <picture className="area-1-1">
        <source srcSet="/images/pexels-pixabay-413885.avif" type="image/avif" />
        <source srcSet="/images/pexels-pixabay-413885.webp" type="image/webp" />
        <img
          alt=""
          aria-hidden="true"
          className="aspect-1-1 sm-aspect-21-9 lg-aspect-16-9"
          encoding="async"
          src="/images/pexels-pixabay-413885.jpg"
        />
      </picture>

      <div className="align-self-center area-1-1 m-6 text-upper">
        <h1 className="max-w-50">Grand Sale</h1>

        <a
          className="md-hover-bb"
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
