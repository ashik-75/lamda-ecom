import { ProductType } from "../../types/product.types";
import Product from "./Product";

function Products({ products }: { products: ProductType[] }) {
  return (
    <div>
      <div className="grid gird-cols-1 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
