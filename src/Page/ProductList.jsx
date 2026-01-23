

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

const ProductList = () => {
    return (
        <div>
           <div className="py-[32px] px-[32px] flex gap-[32px]">
  {items.map((item, i) => (
    <div
      key={i}
      className="bg-[#F6F7F2] rounded-[24px] flex items-center gap-[32px] p-[16px]"
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

            
        </div>
    );
};

export default ProductList;