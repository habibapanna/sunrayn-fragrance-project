import { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";

const LivePurchasePopup = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const progressRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    //  Check if user already closed it
    const closed = localStorage.getItem("livePopupClosed");
    if (closed === "true") return;

    intervalRef.current = setInterval(() => {
      setVisible(true);
      setProgress(0);

      let start = Date.now();

      progressRef.current = setInterval(() => {
        const elapsed = Date.now() - start;
        const percent = (elapsed / 5000) * 100;

        if (percent >= 100) {
          clearInterval(progressRef.current);
          setVisible(false);
        } else {
          setProgress(percent);
        }
      }, 50);

      setTimeout(() => {
        clearInterval(progressRef.current);
        setVisible(false);
      }, 5000);

    }, 10000);

    return () => {
      clearInterval(intervalRef.current);
      clearInterval(progressRef.current);
    };
  }, []);

  const handleClose = () => {
    setVisible(false);

    // ✅ Stop everything
    clearInterval(intervalRef.current);
    clearInterval(progressRef.current);

    // ✅ Save flag so it never shows again
    localStorage.setItem("livePopupClosed", "true");
  };

  return (
    <div
      className={`fixed bottom-[30px] left-[30px] z-[9999]
      transition-all duration-500 ease-out
      ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <div className="bg-white w-[300px] rounded-lg shadow-xl p-3 relative border border-gray-200">

        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-black cursor-pointer"
        >
          <X size={16} />
        </button>

        <div className="flex gap-3 items-center">
          <img
            src="https://i.postimg.cc/W4V5k4wv/Whats-App-Image-2026-02-03-at-6-06-48-PM.jpg"
            alt="product"
            className="w-[50px] h-[50px] rounded-[10px] object-cover"
          />

          <div className="flex-1">
            <p className="text-[11px] text-gray-500 leading-tight">
              Someone in Berlin just bought
            </p>

            <h3 className="font-semibold text-[14px] leading-tight">
              Eden Spark
            </h3>

            <p className="text-[11px] text-gray-400 mt-0.5">
              ⏱ 3 mins ago • <span className="text-red-500">Verify</span>
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-3 h-[3px] bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#A0174A]"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>
    </div>
  );
};

export default LivePurchasePopup;
