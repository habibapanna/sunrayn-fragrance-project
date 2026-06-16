import SecureIcon from "../assets/secureIcon.png";
import SecureIcon2 from "../assets/secureIcon2.png";
import SSLIcon from "../assets/sslIcon.png";
import LockIcon from "../assets/lockIcon.png";
import SupportIcon from "../assets/supportIcon.png";
import Visa from "../assets/Visa logo.svg";
import MasterCard from "../assets/MasterCard logo.svg";
import Paypal from "../assets/Paypal Logo.svg";
import AmericanExpress from "../assets/american-express.png";
import Discover from "../assets/discover.png";

const paymentMethods = [
  { src: Visa, alt: "Visa", className: "h-4 md:h-4 lg:h-5" },
  { src: MasterCard, alt: "Mastercard", className: "h-4 md:h-3 lg:h-5" },
  { src: AmericanExpress, alt: "American Express", className: "h-6 md:h-6 lg:h-7" },
  { src: Discover, alt: "Discover", className: "h-6 md:h-6 lg:h-7" },
  { src: Paypal, alt: "PayPal", className: "h-4 md:h-4 lg:h-6" },
];

const trustBadges = [
  { icon: SSLIcon, title: "SSL", subtitle: "PROTECTED" },
  { icon: LockIcon, title: "100%", subtitle: "SECURE PAYMENT" },
  { icon: SupportIcon, title: "24/7", subtitle: "CUSTOMER SUPPORT" },
];

const CheckoutSecurity = () => {
  return (
    <div
      className="
        bg-white
        border
        border-gray-300
        rounded-[20px]
        md:rounded-none
        shadow-sm
        px-4
        md:px-6
        py-5
        lg:py-6
        mt-4
        lg:mt-6
      "
    >
      <div className="overflow-x-auto">
        {/* secure badge + payment logos + trust badges + security statement */}
        <div className="flex items-center w-max mx-auto gap-4 md:gap-6 lg:gap-10">
          {/* Secure & Encrypted Checkout */}
          <div className="flex items-center gap-3 shrink-0">
            <img src={SecureIcon} alt="Secure checkout" className="h-9 sm:h-10 shrink-0" />
            <p className="text-[#9C7A2F] font-semibold text-[10px] sm:text-[11px] lg:text-xs tracking-[1.5px] sm:tracking-[2px] leading-[1.5] whitespace-nowrap">
              SECURE &<br />ENCRYPTED<br />CHECKOUT
            </p>
          </div>

          <span className="w-px h-9 sm:h-10 bg-[#D8CFC0] shrink-0" />

          {/* Payment method logos */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 shrink-0">
            {paymentMethods.map((method) => (
              <img
                key={method.alt}
                src={method.src}
                alt={method.alt}
                className={`${method.className} w-auto object-contain shrink-0`}
              />
            ))}
          </div>

          <span className="w-px h-9 sm:h-10 bg-[#D8CFC0] shrink-0" />

          {/* Trust badges */}
          <div className="flex items-center gap-4 sm:gap-5 lg:gap-6 shrink-0">
            {trustBadges.map((badge) => (
              <div key={badge.title} className="flex items-center gap-2 shrink-0">
                <img src={badge.icon} alt="" className="h-7 sm:h-8 lg:h-9 shrink-0" />
                <div className="leading-tight whitespace-nowrap">
                  <p className="text-[#9C7A2F] font-semibold text-[11px] sm:text-xs lg:text-sm">
                    {badge.title}
                  </p>
                  <p className="text-[9px] sm:text-[10px] lg:text-[11px] text-[#5A5A5A]">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <span className="w-px h-9 sm:h-10 bg-[#D8CFC0] shrink-0" />

          {/* Security statement */}
          <div className="shrink-0 max-w-[230px] lg:max-w-[260px] md:pr-5">
            <div className="flex items-center gap-2">
              <img src={SecureIcon2} alt="Security badge" className="h-8 w-8 shrink-0" />
              <p className="text-[#9C7A2F] font-semibold text-[12px] sm:text-[13px] lg:text-[14px] leading-snug whitespace-nowrap">
                YOUR SECURITY IS<br />OUR PRIORITY
              </p>
            </div>
            <p className="text-[11px] sm:text-[12px] text-[#282828] ml-3 leading-snug">
              Secure encrypted payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSecurity;