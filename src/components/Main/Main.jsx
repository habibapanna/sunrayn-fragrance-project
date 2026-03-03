import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import TopAnnouncementBar from "../TopAnnouncementBar";
import Footer from "../../shared/Footer/Footer";
import RouteLoader from "../RouteLoader";
import ScrollToTopButton from "../ScrollToTopButton";
import ChatWidget from "../ChatWidget";
import Navbar from "../../shared/Navbar/Navbar";
import CartOverlay from "../CartOverlay";
import SignupPopup from "../SignupPopup";
import LivePurchasePopup from "../LivePurchasePopup";

const Main = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [loading, setLoading] = useState(false);
  // New: Cart state lifted here
  const [cartOpen, setCartOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

useEffect(() => {
  const hasVisited = localStorage.getItem("hasVisited");

  if (!hasVisited) {
    setShowPopup(true);
    localStorage.setItem("hasVisited", "true");
  }
}, []);


// useEffect(() => {
//   setShowPopup(true);
// }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* Hide top bar on Home */}
      {!isHome && <TopAnnouncementBar />}

      <Navbar  cartOpen={cartOpen} setCartOpen={setCartOpen} wishlist={wishlist} cart={cart} />

      {loading && <RouteLoader />}

      <section
        className={`flex-grow ${
          isHome ? "" : "pt-[110px] md:pt-[130px] lg:pt-[147px] 2xl:pt-[130px]"
        }`}
      >
        <Outlet context={{ setCartOpen, wishlist, setWishlist, cart, setCart }} />
      </section>
{showPopup && (
  <SignupPopup onClose={() => setShowPopup(false)} />
)}

      <Footer />
      <ChatWidget />
      <ScrollToTopButton />
      <LivePurchasePopup />

      {/* CartOverlay always rendered at top-level */}
      {cartOpen && (
        <>
          <div
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black/10 z-50"
          />
           <CartOverlay
      onClose={() => setCartOpen(false)}
      cart={cart}
      setCart={setCart}
    />
        </>
      )}
    </div>
  );
};


export default Main;
