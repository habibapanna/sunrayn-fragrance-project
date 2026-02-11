import { useEffect, useState } from "react";
import { X } from "lucide-react";

const LivePurchasePopup = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(true);
      setProgress(0);

      let start = Date.now();

      const progressInterval = setInterval(() => {
        const elapsed = Date.now() - start;
        const percent = (elapsed / 5000) * 100;

        if (percent >= 100) {
          clearInterval(progressInterval);
          setVisible(false);
        } else {
          setProgress(percent);
        }
      }, 50);

      setTimeout(() => {
        clearInterval(progressInterval);
        setVisible(false);
      }, 5000);
    }, 10000); // show every 10 seconds

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[9999] animate-slideUp">
      <div className="bg-white w-[320px] lg:w-[420px] rounded-lg shadow-xl p-4 relative border border-gray-200">

        {/* Close */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-3 text-black cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="flex gap-4">
          <img
            src="https://i.postimg.cc/W4V5k4wv/Whats-App-Image-2026-02-03-at-6-06-48-PM.jpg"
            alt="product"
            className="w-[60px] h-fll rounded-[12px] object-cover"
          />

          <div className="flex-1">
            <p className="text-[12px] text-gray-500">
              Someone in Berlin, Germany just bought
            </p>
            <h3 className="font-semibold text-[16px]">
              Eden Spark
            </h3>
            <p className="text-[12px] text-gray-400 mt-1">
              ⏱ 3 mins ago • <span className="text-red-500">Verify</span>
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 h-[4px] bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#A0174A] transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LivePurchasePopup;
