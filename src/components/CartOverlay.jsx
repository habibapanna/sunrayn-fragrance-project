import { X, Minus, Plus, Truck } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const CartOverlay = ({ onClose }) => {

  const navigate = useNavigate();

    
  return (
    <aside className="fixed top-0 right-0 h-full w-full lg:w-[541px] bg-white z-50">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b">
        <h2 className="font-semibold text-[18px]">Your cart (1)</h2>
        <button onClick={onClose}>
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="overflow-y-auto h-[calc(100%-64px)]">
        {/* Discount */}
        <div className="m-4 bg-[#F3EED8] rounded-2xl p-4">
          <p className="text-[14px] font-medium mb-3">Special discount</p>
          <div className="grid grid-cols-4 gap-2 text-center text-[11px]">
            <div className="bg-white rounded-xl py-2">1-2 items<br /><span className="font-semibold">10% OFF</span></div>
            <div className="bg-white rounded-xl py-2">3 items<br /><span className="font-semibold">20% OFF</span></div>
            <div className="bg-white rounded-xl py-2">4 items<br /><span className="font-semibold">25% OFF</span></div>
            <div className="bg-white rounded-xl py-2">5 items<br /><span className="font-semibold">30% OFF</span></div>
          </div>
          <div className="flex items-center gap-2 text-[12px] mt-3">
            <Truck size={14} /> FREE shipping on 3+ items
          </div>
        </div>

        {/* Cart Item */}
        <div className="mx-4 bg-[#FBF7F2] rounded-2xl p-4 flex gap-3">
          <img
            src="https://i.postimg.cc/j2mHq3nM/perfume.png"
            className="w-[72px] h-[72px] rounded-xl object-cover"
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="font-semibold text-[14px]">Cerisa Aura</h3>
              <span className="text-[10px] bg-white px-2 py-1 rounded-full">Woman</span>
            </div>
            <p className="text-[11px] text-gray-500">Alluring cherry and almond fragrance</p>
            <p className="text-[11px] text-gray-500">Size: 15ML / 1oz</p>

            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-3 border rounded-full px-3 py-1">
                <Minus size={14} />
                <span className="text-[14px]">1</span>
                <Plus size={14} />
              </div>
              <div className="text-right">
                <p className="text-[11px] line-through text-gray-400">$40</p>
                <p className="font-semibold text-[15px]">$32</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="m-4 bg-[#F6F6F6] rounded-2xl p-4">
          <h3 className="font-semibold text-[14px] mb-3">Order Summary</h3>
          <div className="space-y-2 text-[13px]">
            <div className="flex justify-between"><span>Initial Price</span><span>$32</span></div>
            <div className="flex justify-between"><span>Discount</span><span>$2</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>$4</span></div>
            <div className="flex justify-between"><span>VAT (5%)</span><span>$1.75</span></div>
          </div>
        </div>

       {/* Recommended */}
<div className="px-4">
  <h3 className="font-semibold text-[14px] mb-3">
    Recommended Products
  </h3>

  <div
    className="
      flex gap-3
      overflow-x-auto
      scroll-smooth
      snap-x snap-mandatory
      pb-2
      [-webkit-overflow-scrolling:touch]
    "
  >
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="
          min-w-[150px]
          snap-start
          bg-[#FBF7F2]
          rounded-2xl
          p-3
          flex-shrink-0
        "
      >
        <img
          src="https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png"
          className="h-[120px] w-full rounded-xl object-cover"
        />

        {/* Rating */}
        <div className="flex gap-1 text-[#DBAB35] text-[12px] mt-2">
          {[1,2,3,4,5].map((s)=> (
            <FaStar key={s} />
          ))}
          <span className="text-gray-500">1239</span>
        </div>

        <p className="font-semibold text-[13px] mt-1">
          Ambery Saffron
        </p>
        <p className="text-[11px] text-gray-500">
          Sanrayn Originals
        </p>

        <button className="mt-2 bg-[#E0B24B] text-white text-[13px] py-1.5 rounded-full w-full">
          Add to cart · $29.40
        </button>
      </div>
    ))}
  </div>
</div>


        {/* Footer */}
        <div className="border-t p-4 mt-4">
          <div className="flex justify-between font-semibold mb-3">
            <span>Subtotal (1 items)</span>
            <span>$37.75</span>
          </div>
          <button
  onClick={() => {
    onClose();
    navigate("/checkout");
  }}
  className="w-full bg-[#E0B24B] text-black py-3 rounded-full font-semibold"
>
  Process to Checkout
</button>

          <p className="text-center text-[11px] text-gray-500 mt-2">Pay with Visa, Mastercard, Apple Pay and more</p>
        </div>
      </div>
    </aside>
  );
};

export default CartOverlay;