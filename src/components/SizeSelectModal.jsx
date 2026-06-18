// SizeSelectModal.jsx
import { X } from "lucide-react";




const SIZE_OPTIONS = [
  { label: "15ML", key: "15ml" },
  { label: "30ML", key: "30ml" },
  { label: "60ML", key: "60ml" },
];


export const getSizePrice = (product, sizeKey) => {
  if (product.sizes && product.sizes[sizeKey]) {
    return product.sizes[sizeKey];
  }
  return { price: product.price, oldPrice: product.oldPrice };
};



const SizeSelectModal = ({ product, onClose, onSelectSize }) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 px-4"
      onClick={onClose}
    >
      <div
        className="bg-[#FBF9F4] rounded-[20px] w-full max-w-[420px] p-6 lg:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#282828] hover:text-black cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <img
            src={product.images}
            alt={product.title}
            className="w-[64px] h-[64px] rounded-[12px] object-cover"
          />
          <div>
            <p className="text-[18px] font-semibold text-[#282828]">{product.title}</p>
            <p className="text-[13px] text-[#6B6B6B]">Choose a size</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
  {SIZE_OPTIONS.map((opt) => {
    const { price } = getSizePrice(product, opt.key);

    return (
      <div key={opt.key} className="relative">
        {/* Badge only for 30ML */}
        {opt.key === "30ml" && (
         <span className="absolute -top-[8px] right-[6px] text-[10px] lg:text-[12px] 
              bg-[#A0174A] text-white px-[6px] py-[2px] rounded-full z-10">
              Best Value
            </span>
        )}

        <button
          onClick={() => onSelectSize(opt.key, opt.label)}
          className={`w-full flex items-center justify-between border rounded-full px-5 py-3 transition-all duration-300 cursor-pointer
            ${
              opt.key === "30ml"
                ? "border-[#BA9948]"
                : "border-[#D8CFC0]"
            }
            hover:border-[#BA9948] hover:bg-[#BA9948]/10`}
        >
          <span className="font-semibold text-[#282828]">
            {opt.label}
          </span>

          <span className="text-[#9C7A2F] font-semibold">
            ${price?.toFixed(2)}
          </span>
        </button>
      </div>
    );
  })}
</div>
      </div>
    </div>
  );
};

export default SizeSelectModal;