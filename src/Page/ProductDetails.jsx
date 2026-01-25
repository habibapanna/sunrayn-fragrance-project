import { useParams } from "react-router-dom";
import { products } from "../data/productsData";
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="px-[16px] 2xl:px-[32px] py-[32px]">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">

        {/* LEFT – IMAGES */}
        <div className="grid grid-cols-2 gap-[16px]">
          <div className="col-span-2 bg-[#F6F2ED] rounded-[32px] p-[40px]">
            <img
              src={product.images[0]}
              alt={product.title}
              className="mx-auto h-[400px] object-contain"
            />
          </div>

          {product.images.slice(1).map((img, i) => (
            <div key={i} className="bg-[#F6F2ED] rounded-[24px] p-[24px]">
              <img src={img} className="mx-auto h-[200px] object-contain" />
            </div>
          ))}
        </div>

        {/* RIGHT – INFO */}
        <div className="bg-[#F9F7F2] rounded-[32px] p-[32px]">

          <span className="text-[12px] font-semibold">{product.category}</span>

          <h1 className="text-[32px] font-bold mt-2">
            {product.title} – {product.subtitle}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-[#FF9100]" />
            ))}
            <span className="text-sm">
              {product.rating} ({product.reviews})
            </span>
          </div>

          <p className="mt-4 text-[#555]">{product.description}</p>

          {/* Volume */}
          <div className="mt-6">
            <p className="font-semibold mb-2">Volume</p>
            <div className="flex gap-3">
              {product.volume.map((v) => (
                <button
                  key={v}
                  className="border px-4 py-2 rounded-full hover:bg-black hover:text-white"
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mt-6">
            <span className="text-[28px] font-bold">${product.price}</span>
            <span className="line-through text-gray-400">
              ${product.oldPrice}
            </span>
          </div>

          {/* CTA */}
          <button className="mt-6 bg-[#DBAB35] w-full py-3 rounded-full font-semibold">
            Add to cart
          </button>

          {/* Notes */}
          <div className="mt-8">
            <h3 className="font-semibold mb-2">Notes & Ingredients</h3>
            <p><strong>Top:</strong> {product.notes.top}</p>
            <p><strong>Middle:</strong> {product.notes.middle}</p>
            <p><strong>Base:</strong> {product.notes.base}</p>
          </div>

          {/* Icons */}
          <div className="flex gap-4 mt-4">
            {product.ingredients.map((i) => (
              <div key={i.name} className="text-center">
                <div className="text-2xl">{i.icon}</div>
                <p className="text-xs">{i.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
