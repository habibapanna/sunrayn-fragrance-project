import { FaStar } from "react-icons/fa";
import MarqueeFlavour from "../components/MarqueeFlavour";
import MarqueeSection from "../components/MarqueeSection";
import NewsLetter from "../components/NewsLetter";
import Premium from "../components/Premium";

const items = [
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: 'Bestseller',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/WpSytKqM/c082e350-40e9-4486-acfd-e19a5713042c-1-(1).png",
    off: '',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: 'New',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: '',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: 'New',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: '',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: 'Discount',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: '',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: '',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: '',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: '',
  },
  {
    title: "Ambery Saffron",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    off: 'Discount',
  },
  
];
const products = [
  {
    title: "All Perfumes",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
  },
  {
    title: "New Arrivals",
    product: "https://i.postimg.cc/WpSytKqM/c082e350-40e9-4486-acfd-e19a5713042c-1-(1).png",
  },
  {
    title: "Best Sellers",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
  },
  {
    title: "Combo Sales",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
  },
  {
    title: "Holiday Sale",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
  },
];

const ProductList = () => {
    return (
        <div className="py-[16px] 2xl:py-[32px] 2xl:px-[32px] px-[16px]">
           <div className=" flex gap-[16px] 2xl:gap-[32px] py-[16px] 2xl:pb-[32px]">
  {products.map((item, i) => (
    <div
      key={i}
      className="bg-[#F6F7F2] rounded-[24px] flex items-center gap-[16px] p-[16px] 2xl:gap-[32px] 2xl:p-[24px]"
    >
      <h3 className="text-[20px] md:text-[35px] font-semibold text-[#1D0B01]">
        {item.title}
      </h3>

      <img
        src={item.product}
        alt={item.title}
        className="object-cover h-[108px] w-[108px]"
      />
    </div>
  ))}
</div>

 <section className="relative overflow-hidden pb-[16px] md:pb-[32px]">
            <div
              className="transition-transform duration-500 ease-in-out grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] 2xl:gap-[32px]"
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  className=""
                >
                    {/* CARD */}
                    <div className="relative rounded-[24px] md:rounded-[48px] overflow-hidden bg-[#EDE8E0] h-[344px] md:h-[700px]">
                       {item.off && (
  <div className="mt-[40px] ml-[40px]">
    <button
      className="bg-[#FFFFE3] px-[12px] lg:px-[16px]
                 rounded-full font-semibold cursor-pointer
                 hover:bg-[#DBAB35]
                 h-[35px]
                 flex items-center justify-center"
    >
      {item.off}
    </button>
  </div>
)}


                      <img
                        src={item.product}
                        alt={item.title}
                        className="absolute inset-0 object-cover mx-auto h-[220px] md:h-[501px]"
                      />
    
                      <div className="absolute bottom-0 left-0 w-full z-20 p-[16px] md:p-[40px]">
                        <div className="flex items-center gap-2 text-[#FF9100]">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="h-[12px] md:h-[15px]" />
                          ))}
                          <span className="text-[#0D0C09] text-[12px] md:text-[14px]">
                            1239
                          </span>
                        </div>
    
                        <h3 className="text-[20px] md:text-[35px] font-semibold text-[#571313]">
                          {item.title}
                        </h3>
    
                        <p className="text-[12px] md:text-[18px] text-[#0D0C09] mb-[12px] md:mb-[26px]">
                          Sanrayn Original
                        </p>
    
                        <div className="flex items-center justify-between gap-3">
                          <button className="bg-white px-[16px] md:px-[24px] py-[6px] md:py-[10px] rounded-full font-semibold hover:bg-[#DBAB35] cursor-pointer 2xl:h-[45px] 2xl:w-[167px]">
                            Add to Cart
                          </button>
    
                          <div className="flex gap-[12px] md:gap-[20px]">
                            <div>
                                <button className="text-[#FC2525] text-[16px] bg-[#FFFFFF80]/50 py-[10px] px-[20px] rounded-[100px] line-through">$20</button>
                            </div>
                           <div className="relative w-[105px] h-[45px]">
  {/* Discount badge */}
  <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 
  bg-[#1D0B01] text-white text-[8px] font-bold z-10 
  h-[14px] w-[44px] 
  flex items-center justify-center">
  -40% Off
</div>


  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="105"
    height="45"
    viewBox="0 0 105 45"
    fill="none"
  >
    <path
      d="M95 11V0H10V11C4.47715 11 0 15.4772 0 21V24C0 29.5228 4.47715 34 10 34V45H95V34C100.523 34 105 29.5228 105 24V21C105 15.4772 100.523 11 95 11Z"
      fill="#BA9948"
    />

    {/* Price text */}
    <text
      x="52.5"
      y="30"
      textAnchor="middle"
      fontSize="16"
      fontWeight="700"
      fill="#FFFFFF"
      fontFamily="sans-serif"
    >
      $29.40
    </text>
  </svg>
</div>

                           
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </section>


<Premium></Premium>

           <NewsLetter></NewsLetter>
           <MarqueeFlavour></MarqueeFlavour>
           <MarqueeSection></MarqueeSection> 
        </div>
    );
};

export default ProductList;