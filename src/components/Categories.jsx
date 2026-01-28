
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
        className="flex items-center gap-4 py-8 overflow-x-auto
                   justify-start lg:justify-center
                   px-4 lg:px-0
                   lg:overflow-x-hidden"
      >
        {items.map((item, i) => {
          const isActive = sortBy === item.key;

          return (
            <div
              key={i}
              onClick={() => setSortBy(item.key)}
              className={`
                flex flex-col lg:flex-row items-center
                p-2 lg:p-6 gap-2 2xl:gap-4
                text-center cursor-pointer rounded-[12px] 2xl:rounded-[24px]
                bg-[#F6F7F2]
                border-2
                ${isActive ? "border-black" : "border-transparent"}
              `}
            >
              <h3 className="text-lg 2xl:text-[35px] font-semibold text-left">
                {item.title}
              </h3>

              <img
                className="h-[50px] w-[50px] 2xl:h-[108px] 2xl:w-[108px] object-cover"
                src={item.product}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};



export default Categories;