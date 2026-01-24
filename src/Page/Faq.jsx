import React from "react";

const Faq = () => {
  return (
    <div className="bg-white px-[32px] py-[64px]">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-[32px] lg:text-[50px] font-semibold mb-3 text-[#282828]">
          Frequently Asked Questions
        </h1>
        <p className="text-[#282828] max-w-xl mx-auto text-[18px] lg:text-[20px] ">
          Everything you need to know about Sanrayn, our fragrances, and your
          shopping experience.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Item 1 (Open by default) */}
        <div className="collapse collapse-plus bg-[#F6F7F2] rounded-[24px]">
          <input type="checkbox" defaultChecked />
          <div className="collapse-title text-lg font-medium flex justify-between items-center text-[#282828] text-[18px]">
            Are Sanrayn perfumes halal and alcohol-free?
          </div>
          <div className="collapse-content ">
            <p className="text-[#3A3F42] text-[16px]">
              Yes. All Sanrayn fragrances are halal-certified and alcohol-free,
              crafted with purity, care, and respect for faith-inspired values.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="collapse collapse-plus bg-[#FAFAF7] text-black rounded-2xl">
          <input type="checkbox" />
          <div className="collapse-title text-[#282828] text-[18px] font-medium">
            How long do Sanrayn fragrances last?
          </div>
          <div className="collapse-content">
            <p className="text-[#3A3F42] text-[16px]">
              Our fragrances are designed to be long-lasting, typically staying
              noticeable for 6–10 hours depending on skin type and environment.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="collapse collapse-plus bg-[#FAFAF7] text-black rounded-2xl">
          <input type="checkbox" />
          <div className="collapse-title text-[#282828] text-[18px] font-medium">
            Are your fragrances suitable for both men and women?
          </div>
          <div className="collapse-content">
            <p className="text-[#3A3F42] text-[16px]">
              Yes. Sanrayn fragrances are unisex and crafted to complement all
              genders beautifully.
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="collapse collapse-plus bg-[#FAFAF7] text-black rounded-2xl">
          <input type="checkbox" />
          <div className="collapse-title text-[#282828] text-[18px] font-medium">
            Can I return or exchange a product?
          </div>
          <div className="collapse-content ">
            <p className="text-[#3A3F42] text-[16px]">
              We accept returns and exchanges within our policy period, provided
              the product is unused and in original condition.
            </p>
          </div>
        </div>

        {/* Item 5 */}
        <div className="collapse collapse-plus bg-[#FAFAF7] text-black rounded-2xl">
          <input type="checkbox" />
          <div className="collapse-title font-medium text-[#282828] text-[18px]">
            What makes Sanrayn different from other perfume brands?
          </div>
          <div className="collapse-content ">
            <p className="text-[#3A3F42] text-[16px]">
              Sanrayn focuses on halal-certified, alcohol-free fragrances made
              with premium ingredients and timeless craftsmanship.
            </p>
          </div>
        </div>

        {/* Item 6 */}
        <div className="collapse collapse-plus bg-[#FAFAF7] text-black rounded-2xl">
          <input type="checkbox" />
          <div className="collapse-title font-medium text-[#282828] text-[18px]">
            How should I store my perfume for best results?
          </div>
          <div className="collapse-content">
            <p className="text-[#3A3F42] text-[16px]">
              Store your perfume in a cool, dry place away from direct sunlight
              to maintain its quality and longevity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
