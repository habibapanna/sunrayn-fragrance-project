
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
          flex items-center gap-[8px] 2xl:gap-[32px] pb-[16px]
           2xl:py-[32px]
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
    group
    flex flex-col lg:flex-row
    items-center justify-between
    cursor-pointer
    rounded-[8px] 2xl:rounded-[24px]
    bg-[#F6F7F2]
    w-[126px] h-[96px] p-[4px]
    md:w-full md:h-full md:p-6 md:gap-[12px]
    border
    transition-all duration-500 ease-out
    will-change-transform
    ${
      isActive
        ? "border-[#1D0B01] scale-[1.03] shadow-lg"
        : "border-transparent hover:border-[#BA9948] hover:scale-[1.01] hover:shadow-xl"
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
                  h-[40px] w-[40px]
                  2xl:h-[108px] 2xl:w-[108px]
                  object-cover
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