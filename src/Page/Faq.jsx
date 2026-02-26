
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    title: "Our Offer",
    questions: [
      {
        q: "Are Sanrayn perfumes halal and alcohol-free?",
        a: "Yes. All Sanrayn fragrances are halal-certified and alcohol-free, crafted with purity and care.",
      },
      {
        q: "How long do Sanrayn fragrances last?",
        a: "Our fragrances typically last 6–10 hours depending on skin type and environment.",
      },
      {
        q: "Are your fragrances unisex?",
        a: "Yes, our fragrances are designed to complement both men and women.",
      },
      {
        q: "Are these fragrances long lasting?",
        a: "They are designed to be very long lasting, just like designer fragrances, in some cases even longer, depending on the composition.",
      },
      {
        q: "How long will the fragrance bottle last?",
        a: "This depends only on your usage habits. On average a 50ml bottle, used one time a day, lasts about 2 to 3 months.",
      },
      {
        q: "Do you also provide a sample with the 50ml bottle?",
        a: "In order to reduce our use of plastic, we no longer include a sample with our perfumes. Rest assured, all Dossier orders are always risk-free. Simply test out the full-size bottle and if you don’t love it, send it back and we’ll refund you just as we’ve always done.",
      },
      {
        q: "When do I get charged?",
        a: "You pay for your perfume upfront. You also get free shipping for two products or more. You are welcome to test and return the full-size bottle if you don’t love the scent. Returns are always free. You can return any perfume you don’t like within 30 days of delivery, and we will refund the full price",
      },
      {
        q: "I purchased perfumes on pre-order, what now?",
        a: "If your order contains a pre-order product, please note that we will hold the ENTIRE ORDER until the pre-order item is available to ship. Payments for orders containing a pre-order item will be charged at the time of placement. Unfortunately during this time we cannot split or combine any orders. If you have any questions, please contact our customer service team",
      },
    ],
  },
  {
    title: "Returns",
    questions: [
      {
        q: "Are Sanrayn perfumes halal and alcohol-free?",
        a: "Yes. All Sanrayn fragrances are halal-certified and alcohol-free, crafted with purity and care.",
      },
      {
        q: "How long do Sanrayn fragrances last?",
        a: "Our fragrances typically last 6–10 hours depending on skin type and environment.",
      },
      {
        q: "Are your fragrances unisex?",
        a: "Yes, our fragrances are designed to complement both men and women.",
      },
      {
        q: "Are these fragrances long lasting?",
        a: "They are designed to be very long lasting, just like designer fragrances, in some cases even longer, depending on the composition.",
      },
      {
        q: "How long will the fragrance bottle last?",
        a: "This depends only on your usage habits. On average a 50ml bottle, used one time a day, lasts about 2 to 3 months.",
      },
      {
        q: "Do you also provide a sample with the 50ml bottle?",
        a: "In order to reduce our use of plastic, we no longer include a sample with our perfumes. Rest assured, all Dossier orders are always risk-free. Simply test out the full-size bottle and if you don’t love it, send it back and we’ll refund you just as we’ve always done.",
      },
      {
        q: "When do I get charged?",
        a: "You pay for your perfume upfront. You also get free shipping for two products or more. You are welcome to test and return the full-size bottle if you don’t love the scent. Returns are always free. You can return any perfume you don’t like within 30 days of delivery, and we will refund the full price",
      },
      {
        q: "I purchased perfumes on pre-order, what now?",
        a: "If your order contains a pre-order product, please note that we will hold the ENTIRE ORDER until the pre-order item is available to ship. Payments for orders containing a pre-order item will be charged at the time of placement. Unfortunately during this time we cannot split or combine any orders. If you have any questions, please contact our customer service team",
      },
    ],
  },
  {
    title: "Perfumes",
    questions: [
      {
        q: "What is layering and how is it done?",
        a: "Layering fragrances means wearing more than one fragrance at a time to create a unique personalized scent. You can experiment any way you want with your favorite scents, for more information and tips regarding this technique please refer to our Blog section.",
      },
      {
        q: "Where should I apply perfume?",
        a: "Apply on pulse points like wrists, neck, and behind ears.",
      },
      {
        q: "What does EDT and EDP mean?",
        a: "Apply on pulse points like wrists, neck, and behind ears.",
      },
      {
        q: "What does EDT and EDP mean?",
        a: "Perfume types reflect the concentration of aromatic compounds in a solvent, which in fine fragrance is typically ethanol or a mix of water and ethanol. Various sources differ considerably in the definitions of perfume types.",
      },
      {
        q: "What is the diffusion of a perfume?",
        a: "Diffusion refers to the way a perfume applied on your skin reaches the ones around you. A good perfume diffusion is neither distracting or overwhelming, for more information check out the related articles on our Blog section.",
      },
      {
        q: "Why can’t I smell my fragrance after a while?",
        a: "It’s a normal phenomena called nose fatigue, where the nose desensitizes itself when it gets used to the scent. Even though you can’t feel it, others around you still can, so go easy on reapplying the scent.",
      },
      {
        q: "I have a question about fragrances, can I talk to you about it?",
        a: "We’ve got people who love chatting about all things fragrance related, email us at help@dossier.co to get a quick, personal reply. Don’t worry—we check it constantly.",
      },
    ],
  },
  {
    title: "Home",
    questions: [
      {
        q: "What is layering and how is it done?",
        a: "Layering fragrances means wearing more than one fragrance at a time to create a unique personalized scent. You can experiment any way you want with your favorite scents, for more information and tips regarding this technique please refer to our Blog section.",
      },
      {
        q: "Where should I apply perfume?",
        a: "Apply on pulse points like wrists, neck, and behind ears.",
      },
      {
        q: "What does EDT and EDP mean?",
        a: "Apply on pulse points like wrists, neck, and behind ears.",
      },
      {
        q: "What does EDT and EDP mean?",
        a: "Perfume types reflect the concentration of aromatic compounds in a solvent, which in fine fragrance is typically ethanol or a mix of water and ethanol. Various sources differ considerably in the definitions of perfume types.",
      },
      {
        q: "What is the diffusion of a perfume?",
        a: "Diffusion refers to the way a perfume applied on your skin reaches the ones around you. A good perfume diffusion is neither distracting or overwhelming, for more information check out the related articles on our Blog section.",
      },
      {
        q: "Why can’t I smell my fragrance after a while?",
        a: "It’s a normal phenomena called nose fatigue, where the nose desensitizes itself when it gets used to the scent. Even though you can’t feel it, others around you still can, so go easy on reapplying the scent.",
      },
      {
        q: "I have a question about fragrances, can I talk to you about it?",
        a: "We’ve got people who love chatting about all things fragrance related, email us at help@dossier.co to get a quick, personal reply. Don’t worry—we check it constantly.",
      },
    ],
  },
  {
    title: "Shipping",
    questions: [
      {
        q: "Where do you ship?",
        a: "We currently ship nationwide with reliable courier partners.",
      },
      {
        q: "What should I do if my order is lost, damaged, or stolen?",
        a: "We have great news for you! We’ve integrated Shipping Protection —a package protection solution—to give our customers the best possible delivery experience.",
      },
      {
        q: "Can I change my shipping address?",
        a: "Once an order is placed, we won't be able to make any changes to it. So, please double-check all your order details, including your shipping address, before hitting the submit button. We are unable to make any changes due to the automated nature of our fulfillment process. Dossier is not responsible for misdelivered packages if the shipping address is wrong. As noted above, it is your responsibility to provide us with the correct information––as we're unable to make changes on our end.",
      },
      {
        q: "How much does shipping cost?",
        a: "Shipping costs $3.95 if you order 1 item.",
      },
      {
        q: "When will my order ship?",
        a: "Here’s how it works: you order, we process, then we ship.",
      },
      {
        q: "Can I cancel my order?",
        a: "Once an order is placed, we won’t be able to make any changes to it or cancel it. Our system is designed to process orders quickly to ensure fast shipping, so please double-check all your order details — including your shipping address — before hitting the submit button.",
      },
      {
        q: "What should I do if I have problems with the tracking ?",
        a: "In a few cases, the carrier takes 1-2 business",
      },
      {
        q: "What should I do if I have issues with my order ?",
        a: "While we are not responsible for lost, held, or damaged packages, we still want you to have the best experience with us. If you have concerns, please contact us at help@dossier.co to explain your situation and we’ll do our best to resolve any issues.",
      },
    ],
  },
    {
    title: "Sanrayn+ membership",
    questions: [
      {
        q: "Are Sanrayn perfumes halal and alcohol-free?",
        a: "Yes. All Sanrayn fragrances are halal-certified and alcohol-free, crafted with purity and care.",
      },
      {
        q: "How long do Sanrayn fragrances last?",
        a: "Our fragrances typically last 6–10 hours depending on skin type and environment.",
      },
      {
        q: "Are your fragrances unisex?",
        a: "Yes, our fragrances are designed to complement both men and women.",
      },
      {
        q: "Are these fragrances long lasting?",
        a: "They are designed to be very long lasting, just like designer fragrances, in some cases even longer, depending on the composition.",
      },
      {
        q: "How long will the fragrance bottle last?",
        a: "This depends only on your usage habits. On average a 50ml bottle, used one time a day, lasts about 2 to 3 months.",
      },
      {
        q: "Do you also provide a sample with the 50ml bottle?",
        a: "In order to reduce our use of plastic, we no longer include a sample with our perfumes. Rest assured, all Dossier orders are always risk-free. Simply test out the full-size bottle and if you don’t love it, send it back and we’ll refund you just as we’ve always done.",
      },
      {
        q: "When do I get charged?",
        a: "You pay for your perfume upfront. You also get free shipping for two products or more. You are welcome to test and return the full-size bottle if you don’t love the scent. Returns are always free. You can return any perfume you don’t like within 30 days of delivery, and we will refund the full price",
      },
      {
        q: "I purchased perfumes on pre-order, what now?",
        a: "If your order contains a pre-order product, please note that we will hold the ENTIRE ORDER until the pre-order item is available to ship. Payments for orders containing a pre-order item will be charged at the time of placement. Unfortunately during this time we cannot split or combine any orders. If you have any questions, please contact our customer service team",
      },
    ],
  },
    {
    title: "Shipping Protection - protect your order. ",
    questions: [
      {
        q: "Are Sanrayn perfumes halal and alcohol-free?",
        a: "Yes. All Sanrayn fragrances are halal-certified and alcohol-free, crafted with purity and care.",
      },
      {
        q: "How long do Sanrayn fragrances last?",
        a: "Our fragrances typically last 6–10 hours depending on skin type and environment.",
      },
      {
        q: "Are your fragrances unisex?",
        a: "Yes, our fragrances are designed to complement both men and women.",
      },
      {
        q: "Are these fragrances long lasting?",
        a: "They are designed to be very long lasting, just like designer fragrances, in some cases even longer, depending on the composition.",
      },
      {
        q: "How long will the fragrance bottle last?",
        a: "This depends only on your usage habits. On average a 50ml bottle, used one time a day, lasts about 2 to 3 months.",
      },
      {
        q: "Do you also provide a sample with the 50ml bottle?",
        a: "In order to reduce our use of plastic, we no longer include a sample with our perfumes. Rest assured, all Dossier orders are always risk-free. Simply test out the full-size bottle and if you don’t love it, send it back and we’ll refund you just as we’ve always done.",
      },
      {
        q: "When do I get charged?",
        a: "You pay for your perfume upfront. You also get free shipping for two products or more. You are welcome to test and return the full-size bottle if you don’t love the scent. Returns are always free. You can return any perfume you don’t like within 30 days of delivery, and we will refund the full price",
      },
      {
        q: "I purchased perfumes on pre-order, what now?",
        a: "If your order contains a pre-order product, please note that we will hold the ENTIRE ORDER until the pre-order item is available to ship. Payments for orders containing a pre-order item will be charged at the time of placement. Unfortunately during this time we cannot split or combine any orders. If you have any questions, please contact our customer service team",
      },
    ],
  },
    {
    title: "General shipping, tracking, and issues questions.",
    questions: [
      {
        q: "Are Sanrayn perfumes halal and alcohol-free?",
        a: "Yes. All Sanrayn fragrances are halal-certified and alcohol-free, crafted with purity and care.",
      },
      {
        q: "How long do Sanrayn fragrances last?",
        a: "Our fragrances typically last 6–10 hours depending on skin type and environment.",
      },
      {
        q: "Are your fragrances unisex?",
        a: "Yes, our fragrances are designed to complement both men and women.",
      },
      {
        q: "Are these fragrances long lasting?",
        a: "They are designed to be very long lasting, just like designer fragrances, in some cases even longer, depending on the composition.",
      },
      {
        q: "How long will the fragrance bottle last?",
        a: "This depends only on your usage habits. On average a 50ml bottle, used one time a day, lasts about 2 to 3 months.",
      },
      {
        q: "Do you also provide a sample with the 50ml bottle?",
        a: "In order to reduce our use of plastic, we no longer include a sample with our perfumes. Rest assured, all Dossier orders are always risk-free. Simply test out the full-size bottle and if you don’t love it, send it back and we’ll refund you just as we’ve always done.",
      },
      {
        q: "When do I get charged?",
        a: "You pay for your perfume upfront. You also get free shipping for two products or more. You are welcome to test and return the full-size bottle if you don’t love the scent. Returns are always free. You can return any perfume you don’t like within 30 days of delivery, and we will refund the full price",
      },
      {
        q: "I purchased perfumes on pre-order, what now?",
        a: "If your order contains a pre-order product, please note that we will hold the ENTIRE ORDER until the pre-order item is available to ship. Payments for orders containing a pre-order item will be charged at the time of placement. Unfortunately during this time we cannot split or combine any orders. If you have any questions, please contact our customer service team",
      },
    ],
  },
];

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left group"
      >
        <span className="text-[17px] lg:text-[18px] font-medium text-[#1f1f1f] group-hover:text-black transition">
          {question}
        </span>

        <ChevronDown
          size={20}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[15px] text-gray-600 leading-relaxed pr-6">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
  
<div className="bg-[#FAFAFA] px-6 lg:px-16 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-[35px] lg:text-[50px] font-medium text-[#1a1a1a] mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-[18px] lg:text-[20px] max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Sanrayn, our fragrances,
            and your shopping experience.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          {faqData.map((section, index) => (
            <div key={index}>
              {/* Section Title */}
              <h2 className="text-[22px] lg:text-[25px] font-semibold text-[#111] mb-8 border-b border-black/20 pb-3">
                {section.title}
              </h2>

              {/* Questions */}
              <div>
                {section.questions.map((item, i) => (
                  <FaqItem
                    key={i}
                    question={item.q}
                    answer={item.a}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
 

  );
};

export default Faq;