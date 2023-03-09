function ProductDetailSkeleton() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-5">
        <div className="md:w-[50%] space-y-2 animate-pulse">
          <div className="w-full h-52 bg-gray-200 rounded-lg"></div>
          <h1 className="bg-gray-300 h-4 w-[50%] rounded-lg"></h1>
          <h1 className="bg-gray-300 h-4 rounded-lg"></h1>
          <h1 className="bg-gray-300 h-4 w-[50%] rounded-lg"></h1>
          <h1 className="bg-gray-300 h-4 rounded-lg"></h1>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailSkeleton;
