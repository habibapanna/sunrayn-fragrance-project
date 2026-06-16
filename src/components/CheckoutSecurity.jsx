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
        shadow-sm
        px-2
        py-6
        md:py-7
        lg:px-8
        mt-4
        lg:mt-6
        space-y-6
        sm:space-y-7
      "
    >
      {/* Secure + payment method logos */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src={SecureIcon}
            alt="Secure checkout"
            className="h-10 sm:h-12 shrink-0"
          />
          <p className="text-[#9C7A2F] font-semibold text-sm sm:text-[16px] tracking-[1.5px] sm:tracking-[2px]">
            SECURE & ENCRYPTED CHECKOUT
          </p>
        </div>

        <div className="flex items-center px-4 justify-center sm:justify-end gap-4">
          {paymentMethods.map((method) => (
            <img
              key={method.alt}
              src={method.src}
              alt={method.alt}
              className={`${method.className} w-auto object-contain shrink-0`}
            />
          ))}
        </div>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-3 gap- px-2 sm:gap-6 pt-2 border-t border-[#D8CFC0]/40">
        {trustBadges.map((badge) => (
          <div
            key={badge.title}
            className="flex flex-col sm:flex-row items-start gap-1.5 sm:gap-3 text-left sm:text-left"
          >
            <img src={badge.icon} alt="" className="h-8 sm:h-10 shrink-0" />
            <div>
              <p className="text-[#9C7A2F] font-semibold text-[12px] lg:text-base leading-tight">
                {badge.title}
              </p>
              <p className="text-[10px] lg:text-[13px] text-[#282828] leading-tight">
                {badge.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Security statement */}
      <div className="flex items-center gap-3 pt-2 border-t border-[#D8CFC0]/40">
        <img
          src={SecureIcon2}
          alt="Security badge"
          className="h-10 w-10 shrink-0"
        />
        <div>
          <p className="text-[#9C7A2F] font-semibold text-[15px] sm:text-[16px]">
            YOUR SECURITY IS OUR PRIORITY
          </p>
          <p className="text-[12px] sm:text-[13px] text-[#282828]">
            All transactions are encrypted and processed securely.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSecurity;