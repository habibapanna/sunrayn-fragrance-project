import React from "react";

const Terms = () => {
  return (
    <div className="bg-white px-[32px] py-[64px]">
      <div className="max-w-4xl mx-auto  text-[#1D0B01]">

        {/* Title */}
        <h1 className="text-center text-[28px] 2xl:text-[40px] font-semibold mb-10">
          Terms of Service
        </h1>

        {/* Intro */}
        <p className="mb-8 text-[18px] 2xl:text-[20px] leading-relaxed">
          Welcome to Sanrayn. By accessing or using our website, products, or
          services, you agree to be bound by the following Terms of Service.
          Please read them carefully before using our site.
        </p>

        {/* Section 1 */}
        <h2 className="text-[20px] 2xl:text-[25px] mb-2">
          1. Acceptance of Terms
        </h2>
        <p className="mb-8 text-[16px] 2xl:text-[20px] leading-relaxed">
          By visiting, browsing, or making a purchase from Sanrayn, you agree to
          comply with and be bound by these Terms of Service, along with our
          Privacy Policy and any additional policies referenced herein. If you
          do not agree with these terms, please do not use our website.
        </p>

        {/* Section 2 */}
        <h2 className="text-[20px] 2xl:text-[25px] mb-2">
          2. Eligibility
        </h2>
        <p className="mb-8 text-[16px] 2xl:text-[20px] leading-relaxed">
          You must be at least 18 years old or have permission from a parent or
          legal guardian to use this website and make purchases.
        </p>

        {/* Section 3 */}
        <h2 className="text-[20px] 2xl:text-[25px] mb-2">
          3. Products & Services
        </h2>
        <p className="mb-8 text-[16px] 2xl:text-[20px] leading-relaxed">
          Sanrayn offers halal, alcohol-free perfumes and related products. All
          product descriptions, pricing, and availability are subject to change
          at any time without notice. We strive for accuracy, but we do not
          guarantee that all product details, images, or descriptions are
          error-free.
        </p>

        {/* Section 4 */}
        <h2 className="text-[20px] 2xl:text-[25px] mb-2">
          4. Orders & Payments
        </h2>
        <p className="mb-8 text-[16px] 2xl:text-[20px] leading-relaxed">
          All prices are listed in USD unless otherwise stated. Payments must be
          completed at checkout using accepted payment methods. We reserve the
          right to refuse or cancel any order for any reason, including suspected
          fraud or unauthorized transactions.
        </p>

        {/* Section 5 */}
        <h2 className="text-[20px] 2xl:text-[25px] mb-2">
          5. Shipping & Delivery
        </h2>
        <p className="mb-8 text-[16px] 2xl:text-[20px] leading-relaxed">
          Shipping times and costs are displayed at checkout. While we aim to
          deliver orders promptly, delivery times may vary due to external
          factors beyond our control. Sanrayn is not responsible for delays
          caused by carriers or customs processing.
        </p>

        {/* Section 6 */}
        <h2 className="text-[20px] 2xl:text-[25px] mb-2">
          6. Returns & Refunds
        </h2>
        <p className="mb-8 text-[16px] 2xl:text-[20px] leading-relaxed">
          Returns and exchanges are accepted in accordance with our Return
          Policy. Products must be unused and in original packaging to qualify
          for a return. Please review our Return Policy for full details.
        </p>

        {/* Section 7 */}
        <h2 className="text-[20px] 2xl:text-[25px] mb-2">
          7. Contact Information
        </h2>
        <p className="mb-8 text-[16px] 2xl:text-[20px] leading-relaxed">
          If you have any questions regarding these Terms of Service, please
          contact us at:
        </p>

        <div className="mt-4 text-sm md:text-base">
          <p>Email: support@sanrayn.com</p>
          <p>Phone: +1 (555) 247-8936</p>
        </div>

      </div>
    </div>
  );
};

export default Terms;
