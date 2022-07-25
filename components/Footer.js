import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer aria-hidden="true" className={styles.footer}>
      <a href="https://github.com/VaselineCoveredCat/untitled-project-5">
        <img alt="" focusable="false" src="/github.svg" />
      </a>
    </footer>
  );
}
