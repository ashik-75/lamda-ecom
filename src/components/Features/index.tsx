import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/product";
import Loader from "../Loader";
import Products from "../Products";
import ProductSkeleton from "../Skeleton/ProductSkeleton";

function Featured() {
  const {
    data,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isError,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam = 1 }) => getProducts(pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
  });

  const products = data?.pages.flatMap((page) => page.results);

  return (
    <div className="px-5">
      <div className="uppercase flex gap-x-4 font-bold my-10 items-center justify-center italic text-2xl text-gray-700">
        <span>Featured</span>
        <span className="border-b-4 border-black">Products</span>
      </div>
      {isLoading ? (
        <ProductSkeleton />
      ) : isError ? (
        <div>Wrong Happened</div>
      ) : !products ? (
        <div>Products Not found</div>
      ) : (
        <>
          <Products products={products} />
          {hasNextPage && (
            <div className="flex items-center justify-center">
              <button
                onClick={() => fetchNextPage()}
                className="border py-1.5 px-3 rounded flex items-center space-x-2"
              >
                {isFetchingNextPage && <Loader />}
                <span>Load More</span>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Featured;
