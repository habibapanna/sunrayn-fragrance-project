import { Link } from "react-router-dom";

const LearnMorePopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
      />

      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="relative w-full max-w-[900px] bg-[#BA9948] rounded-[16px] shadow-lg overflow-hidden flex flex-col md:flex-row">
                        {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-[14px] underline cursor-pointer"
            >
              Close
            </button>

          {/* LEFT: IMAGE */}
          <div className="w-full md:w-3/5 flex items-center justify-center py-6 md:py-12 px-4 md:px-6">
            <img
              src="https://i.postimg.cc/50xyPDqJ/imgi-90-3ml-modal-desktop.webp"
              alt="Perfume sample"
              className="object-cover w-full h-auto md:h-full rounded-md"
            />
          </div>

          {/* RIGHT: TEXT + BUTTONS */}
          <div className="w-full md:w-2/5 flex flex-col justify-center gap-4 relative px-4 md:px-6 py-6 md:py-12">
            <h2 className="text-[18px] md:text-[24px] 2xl:text-[32px] font-semibold text-center md:text-left">
              Free 3ml sample for Sanrayn+ members
            </h2>
            <p className="text-[14px] md:text-[16px] bg-white p-3 md:p-4 rounded-2xl text-black text-center md:text-left">
              Free 3ml perfume sample with every Sanrayn+ order, select in your cart.
            </p>

            <Link to="/productList" className="flex justify-center md:justify-start">
              <button className="bg-white/60 backdrop-blur-md
                px-6 py-2 w-full md:px-6 md:py-3
                rounded-full font-semibold
                text-[14px] md:text-[16px]
                border border-[#BA9948]
                text-[#1D0B01]
                hover:bg-white hover:text-[#BA9948]
                transition-all duration-500 ease-out cursor-pointer
              ">
                SHOP NOW
              </button>
            </Link>

            <Link
              to="/learn-more"
              className="text-[14px] underline mt-2 text-center md:text-left"
            >
              Learn More about Sanrayn+
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnMorePopup;
