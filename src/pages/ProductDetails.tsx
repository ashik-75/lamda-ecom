import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ProductDetailComp from "../components/ProductDetailComp";
import ProductDetailSkeleton from "../components/Skeleton/ProductDetailSkeleton";
import { getProduct } from "../services/product";

function ProductDetails() {
  const { slug } = useParams();
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["slug", slug],
    queryFn: () => getProduct(slug!),
  });

  return (
    <div>
      <div className="max-w-7xl mx-auto space-y-4 px-5">
        {isLoading ? (
          <ProductDetailSkeleton />
        ) : isError ? (
          <div>Wrong Happened</div>
        ) : !product ? (
          <div>Products Not found</div>
        ) : (
          <>
            <ProductDetailComp {...product} />
          </>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
