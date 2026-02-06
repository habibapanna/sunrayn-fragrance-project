import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LearnMorePopup from "./LearnMorePopup";

const messages = [
  {
    id: 1,
    content: "Free 3ml samples Sanrayn+",
  },
  {
    id: 2,
    content: "Sanrayn+ Member: Up to 30% OFF + FREE shipping",
  },
];

const TopAnnouncementBar = () => {
  const [index, setIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? messages.length - 1 : prev - 1));
  const next = () =>
    setIndex((prev) => (prev === messages.length - 1 ? 0 : prev + 1));

  return (
    <div className="fixed top-0 left-0 w-full z-[60] bg-[#1C1C1C] text-white lg:rounded-full ">
      <div className="max-w-[1600px] mx-auto px-4 h-[44px] flex items-center justify-between rounded-b-[24px]">

        {/* DESKTOP */}
        <div className="hidden md:flex w-full items-center text-[14px] relative">
          {/* First content - left */}
          <div className="opacity-90 flex items-center gap-1">
            {messages[0].content}{" "}
            <button
              onClick={() => setIsPopupOpen(true)}
              className="underline text-[#BA9948] cursor-pointer"
            >
              Learn more
            </button>
          </div>

          {/* Second content - center */}
          <div className="opacity-90 absolute left-1/2 transform -translate-x-1/2">
            {messages[1].content}
          </div>
        </div>

        {/* MOBILE SLIDER */}
        <div className="flex md:hidden items-center w-full justify-between">
          <button onClick={prev}>
            <ChevronLeft className="h-5 w-5 opacity-80" />
          </button>

          <div className="text-[13px] text-center px-3 truncate flex items-center gap-1">
            {messages[index].content}
            {/* Only show Learn More for first message */}
            {messages[index].id === 1 && (
              <button
                onClick={() => setIsPopupOpen(true)}
                className="underline text-[#BA9948]"
              >
                Learn more
              </button>
            )}
          </div>

          <button onClick={next}>
            <ChevronRight className="h-5 w-5 opacity-80" />
          </button>
        </div>
      </div>

      {/* Popup rendered outside to work on all screens */}
      <LearnMorePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
};

export default TopAnnouncementBar;
