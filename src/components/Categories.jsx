
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
<div className="flex justify-center items-center gap-4 py-8 overflow-x-scroll 2xl:overflow-x-hidden ">
        {items.map((item, i) => {
          const isActive = sortBy === item.key;

          return (
            <div
              key={i}
              onClick={() => setSortBy(item.key)}
              className='flex flex-col 2xl:flex-row items-center p-2 2xl:p-6 gap-2 2xl:gap-4 text-center cursor-pointer rounded-[24px] bg-[#F6F7F2]
              '
            >
             
               <h3 className="text-lg 2xl:text-[35px] font-semibold text-left">
                {item.title}
              </h3>
              <img className="h-[108px] w-[108px]" src={item.product} alt="" />
            </div>
          );
        })}
      </div>
        </div>
    );
};

export default Categories;