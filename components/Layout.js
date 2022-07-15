import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="grid grid-row-3 min-h-screen">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
