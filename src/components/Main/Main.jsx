import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import TopAnnouncementBar from "../TopAnnouncementBar";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import RouteLoader from "../RouteLoader";

const Main = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // always jump to top instantly
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    // show loader on route change
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* ✅ TOP ANNOUNCEMENT BAR */}
      <TopAnnouncementBar />

      {/* ✅ NAVBAR */}
      <Navbar />

      {/* ✅ PAGE LOADER (content only) */}
      {loading && <RouteLoader />}

      {/* ✅ PAGE CONTENT */}
      <section
        className={`flex-grow ${
          isHome ? "" : "pt-[134px] md:pt-[154px]"
        }`}
      >
        <Outlet />
      </section>

      <Footer />
    </div>
  );
};

export default Main;
