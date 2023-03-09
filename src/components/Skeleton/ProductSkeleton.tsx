function ProductSkeleton() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
      {[1, 2, 4].map((item) => (
        <div
          className="p-5 rounded-lg bg-slate-100 animate-pulse space-y-4"
          key={item}
        >
          <div className="bg-slate-200 h-20 rounded-lg"></div>
          <div className="bg-slate-200 h-5 rounded-lg"></div>
          <div className="bg-slate-200 h-5 w-[50%] rounded-lg"></div>
        </div>
      ))}
    </div>
  );
}

export default ProductSkeleton;
