import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import Products from "../components/Products";
import ProductSkeleton from "../components/Skeleton/ProductSkeleton";
import { getSearchProducts } from "../services/product";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get("q");
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["search", queryParam],
    queryFn: () => getSearchProducts(queryParam!),
  });

  return (
    <div className="px-5">
      <div className="max-w-7xl mx-auto space-y-4">
        <h1>
          Search For : <span className="font-bold">{queryParam}</span>
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

export default SearchPage;
