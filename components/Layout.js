import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <div className="grid grid-col-full grid-row-auto min-h-screen">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
