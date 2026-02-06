import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import TopAnnouncementBar from "../TopAnnouncementBar";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import RouteLoader from "../RouteLoader";
import ScrollToTopButton from "../ScrollToTopButton";
import ChatWidget from "../ChatWidget";

const Main = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* ❌ Hide top bar on Home */}
      {!isHome && <TopAnnouncementBar />}

      <Navbar />

      {loading && <RouteLoader />}

      <section
        className={`flex-grow ${
          isHome ? "" : "pt-[120px] md:pt-[140px]"
        }`}
      >
        <Outlet />
      </section>

      <Footer />
      <ChatWidget />
      <ScrollToTopButton />
    </div>
  );
};


export default Main;
