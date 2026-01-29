import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import ScrollToTop from "../ScrollToTop";

const Main = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen mx-auto flex flex-col bg-white">
        <ScrollToTop />
      <Navbar />

      <section
        className={`flex-grow ${
          isHome ? "" : "pt-[90px] md:pt-[110px]"
        }`}
      >
        <Outlet />
      </section>

      <Footer />
    </div>
  );
};

export default Main;
