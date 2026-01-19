
import { Link } from "react-router-dom";
import Logo2 from "../assets/Logo (2).png";
import { FaPaypal, FaCcVisa, FaCcMastercard } from "react-icons/fa";

const Checkout = () => {
  return (
    <section className="min-h-screen bg-[#FAFAF5] py-10">
      {/* Logo */}
      <div className="flex justify-center mb-10 ">
       <Link to="/" className="cursor-pointer"> <img src={Logo2} alt="Sanrayn" className="h-12" /></Link>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          {/* Express Checkout */}
          <div className="bg-white rounded-2xl p-6">
            <p className="text-sm font-medium mb-4">Express checkout</p>
            <div className="flex gap-3">
              <button className="flex-1 bg-[#5A31F4] text-white py-3 rounded-xl font-semibold">Shop Pay</button>
              <button className="flex-1 bg-[#FFC439] text-black py-3 rounded-xl font-semibold">PayPal</button>
              <button className="flex-1 bg-black text-white py-3 rounded-xl font-semibold">G Pay</button>
            </div>
            <p className="text-[11px] text-gray-500 text-center mt-3">By continuing with your payment, you agree to future charges and cancellation policy.</p>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-2xl p-6 space-y-4">
            <div className="flex justify-between text-sm font-medium">
              <span>Contact Information</span>
              <span className="text-gray-400">Already have an account? <span className="underline">Log in</span></span>
            </div>
            <input className="w-full bg-[#F6F7F2] rounded-xl px-4 py-3 text-sm" placeholder="Email" />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> Subscribe for new and daily update
            </label>
          </div>

          {/* Delivery */}
          <div className="bg-white rounded-2xl p-6 space-y-4">
            <p className="font-medium text-sm">Delivery Information</p>
            <select className="w-full bg-[#F6F7F2] rounded-xl px-4 py-3 text-sm">
              <option>United State</option>
            </select>
            <div className="grid grid-cols-2 gap-4">
              <input className="bg-[#F6F7F2] rounded-xl px-4 py-3 text-sm" placeholder="First Name" />
              <input className="bg-[#F6F7F2] rounded-xl px-4 py-3 text-sm" placeholder="Last Name" />
            </div>
            <input className="w-full bg-[#F6F7F2] rounded-xl px-4 py-3 text-sm" placeholder="Address" />
            <div className="grid grid-cols-3 gap-4">
              <select className="bg-[#F6F7F2] rounded-xl px-4 py-3 text-sm"><option>City</option></select>
              <select className="bg-[#F6F7F2] rounded-xl px-4 py-3 text-sm"><option>State</option></select>
              <input className="bg-[#F6F7F2] rounded-xl px-4 py-3 text-sm" placeholder="Zip Code" />
            </div>
            <input className="w-full bg-[#F6F7F2] rounded-xl px-4 py-3 text-sm" placeholder="Phone Number" />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> Save my information for faster checkout
            </label>
          </div>

          {/* Payment */}
          <div className="bg-white rounded-2xl p-6 space-y-4">
            <p className="font-medium text-sm">Payment</p>
            <label className="flex items-center justify-between bg-[#F6F7F2] px-4 py-3 rounded-xl">
              <span className="flex items-center gap-2"><input type="radio" /> PayPal</span>
              <FaPaypal />
            </label>
            <label className="flex items-center justify-between bg-[#F6F7F2] px-4 py-3 rounded-xl">
              <span className="flex items-center gap-2"><input type="radio" defaultChecked /> Credit Card</span>
              <div className="flex gap-2"><FaCcVisa /><FaCcMastercard /></div>
            </label>
            <input className="w-full bg-[#F6F7F2] rounded-xl px-4 py-3 text-sm" placeholder="Cardholder Name" />
            <input className="w-full bg-[#F6F7F2] rounded-xl px-4 py-3 text-sm" placeholder="Card Number" />
            <div className="grid grid-cols-2 gap-4">
              <input className="bg-[#F6F7F2] rounded-xl px-4 py-3 text-sm" placeholder="Expiry" />
              <input className="bg-[#F6F7F2] rounded-xl px-4 py-3 text-sm" placeholder="CVC" />
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> Save this card for faster checkout
            </label>
          </div>

          <button className="w-full bg-[#E0B24B] py-4 rounded-full font-semibold">Continue to Payment</button>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-2xl p-6 h-fit">
          <p className="font-medium mb-4">Product Details</p>
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-3 items-center">
              <img src="https://i.postimg.cc/j2mHq3nM/perfume.png" className="w-12 h-12 rounded-lg" />
              <div>
                <p className="text-sm font-medium">Cerisa Aura</p>
                <p className="text-xs text-gray-500">15ML / 1oz</p>
              </div>
            </div>
            <p className="font-semibold">$28.80</p>
          </div>
          <div className="flex gap-2 mb-4">
            <input className="flex-1 bg-[#F6F7F2] rounded-xl px-3 py-2 text-sm" placeholder="Discount code or gift card" />
            <button className="bg-[#FD4929] text-white px-4 rounded-xl">Apply</button>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>$32</span></div>
            <div className="flex justify-between"><span>Discount</span><span>$2</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>$4</span></div>
            <div className="flex justify-between"><span>VAT (5%)</span><span>$1.75</span></div>
            <hr />
            <div className="flex justify-between font-semibold"><span>Total</span><span>$32</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
