import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Products from "../components/Products";
import ProductSkeleton from "../components/Skeleton/ProductSkeleton";
import { getCategoryProducts } from "../services/product";

function CollectionsPage() {
  const { collection } = useParams();
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["collections", collection],
    queryFn: () => getCategoryProducts(collection!),
  });

  return (
    <div>
      <div className="max-w-7xl mx-auto space-y-4 px-5">
        <h1>
          Category : <span className="font-bold">{collection}</span>
        </h1>
        {isLoading ? (
          <ProductSkeleton />
        ) : isError ? (
          <div>Wrong Happened</div>
        ) : !products.length ? (
          <div>Products Not found</div>
        ) : (
          <>
            <Products products={products} />
          </>
        )}
      </div>
    </div>
  );
}

export default CollectionsPage;
