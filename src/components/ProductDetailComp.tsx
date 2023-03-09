import { useState } from "react";
import toast from "react-hot-toast";
import useCart from "../hooks/useCart";
import { ProductType } from "../types/product.types";
import { formatPrice } from "../utils/formatPrice";

function ProductDetailComp({
  images,
  price,
  title,
  description,
  _id,
}: ProductType) {
  const [activeImage, setActiveImage] = useState(images[0]);
  const { addToCart } = useCart();

  const handleAddCart = () => {
    const item = { image: images[0], price, title, _id, qty: 1 };

    addToCart(item);
    toast.success(`${title} added to cart`);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="space-y-4">
        <div className="h-[300px] sm:h-[400px] w-full rounded overflow-hidden">
          <img
            src={activeImage}
            alt={title}
            className=" h-full w-full object-cover object-center"
          />
        </div>

        <div className="flex gap-x-5 flex-wrap">
          {images.map((image) => (
            <div
              onClick={() => setActiveImage(image)}
              className="cursor-pointer"
            >
              <img
                src={image}
                className="h-20 rounded opacity-70 hover:opacity-100"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <h1 className="font-extrabold text-4xl sm:text-5xl">{title}</h1>
        <p className="text-xl px-2">{formatPrice(price)}</p>

        <p>{description}</p>

        <div className="space-y-3">
          <button
            onClick={handleAddCart}
            className="w-full border py-3 border-black text-black font-bold"
          >
            Add to cart
          </button>
          <button className="w-full border py-3 border-black text-white bg-black font-bold">
            Buy it now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailComp;
