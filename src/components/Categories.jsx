
const items = [
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
const Categories = () => {
    return (
        <div>
              {/* categories */}
           <div className=" flex justify-center gap-[16px] 2xl:gap-[32px] py-[16px] 2xl:pb-[32px]">
  {items.map((item, i) => (
    <div
      key={i}
      className="bg-[#F6F7F2] rounded-[24px] flex flex-col 2xl:flex-row items-center gap-[16px] p-[16px] 2xl:gap-[32px] 2xl:p-[24px] w-full"
    >
      <h3 className="text-[20px] lg:text-[35px] font-semibold text-[#1D0B01]">
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
        </div>
    );
};

export default Categories;