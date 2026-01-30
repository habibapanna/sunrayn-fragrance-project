
const items = [
  {
    title: "All Perfumes",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    key: "relevance"
  },
  {
    title: "New Arrivals",
    product: "https://i.postimg.cc/WpSytKqM/c082e350-40e9-4486-acfd-e19a5713042c-1-(1).png",
    key: "new"
  },
  {
    title: "Best Sellers",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    key: "best-selling"
  },
  {
    title: "Combo Sales",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
    key: "combo-sales" 
  },
  {
    title: "Holiday Sale",
    product: "https://i.postimg.cc/x1BhnzNr/c082e350-40e9-4486-acfd-e19a5713042c-1-(2).png",
     key: "holiday-sale"
  },
];
const Categories = ({ sortBy, setSortBy }) => {
  return (
    <div>
      <div
        className="
          flex items-center gap-[8px] 2xl:gap-[32px]
          py-[16px] 2xl:py-[32px]
          justify-start lg:justify-center
        "
      >
        {items.map((item) => {
          const isActive = sortBy === item.key;

          return (
            <div
              key={item.key}
              onClick={() => setSortBy(item.key)}
              className={`
                flex flex-col lg:flex-row
                items-center justify-between
                cursor-pointer
                rounded-[12px] 2xl:rounded-[24px]
                bg-[#F6F7F2]

                /* MOBILE SIZE */
                w-[126px] h-[96px] p-[8px]

                lg:w-auto lg:h-auto lg:p-6 2xl:gap-[12px]

                transition-all duration-200

                ${
                  isActive
                    ? " outline-2 outline-black"
                    : " outline-1 outline-transparent hover:outline-[#282828]/40"
                }
                
              `}
            >
              <h3 className="text-[12px] lg:text-[20px] 2xl:text-[25px] font-semibold text-center lg:text-left leading-normal uppercase">
                {item.title}
              </h3>

              <img
                src={item.product}
                alt={item.title}
                className="
                  h-[36px] w-[36px]
                  2xl:h-[108px] 2xl:w-[108px]
                  object-contain
                "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};






export default Categories;