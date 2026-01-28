import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import ScrollToTop from "../ScrollToTop";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const Main = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // ✅ Lenis Smooth Scroll Setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0, // 🔥 slow + peaceful scroll
      smooth: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // ✅ Cleanup when component unmounts
    return () => {
      lenis.destroy();
    };
  }, []);

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
