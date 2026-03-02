import { useEffect, useState, useRef } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = document.querySelector("footer"); // Make sure your footer tag exists
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting); // Show button only when footer is visible
      },
      { root: null, threshold: 0.1 } // Trigger when 10% of footer is visible
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 
      bg-[#A0174A] text-white p-[11px] 2xl:p-3 rounded-full 
      shadow-lg hover:scale-105 transition-all cursor-pointer"
      aria-label="Scroll to top"
    >
      <MdOutlineKeyboardDoubleArrowUp className="h-[20px] w-[20px] 2xl:h-[25px] 2xl:w-[25px]" />
    </button>
  );
};

export default ScrollToTopButton;
