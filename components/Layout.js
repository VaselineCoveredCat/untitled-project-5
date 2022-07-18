import Nav from "./Nav";
import Footer from "./Footer";
import styles from "../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.div}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
