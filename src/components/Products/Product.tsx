import { Link } from "react-router-dom";
import { ProductType } from "../../types/product.types";
import { formatPrice } from "../../utils/formatPrice";

function Product({ images, price, title, slug }: ProductType) {
  return (
    <div className=" space-y-4">
      <Link to={`/products/${slug.current}`}>
        <div className="h-60 rounded-lg overflow-hidden">
          <img
            src={images?.[0]}
            className="h-full w-full hover:scale-110 transition-all object-cover object-center "
            alt=""
          />
        </div>
      </Link>

      <div>
        <Link to={`products/${slug.current}`}>
          <h1 className="hover:underline underline-offset-2 hover:font-medium">
            {title}
          </h1>
        </Link>
        <p className="font-bold text-gray-800">{formatPrice(price)}</p>
      </div>
    </div>
  );
}

export default Product;
