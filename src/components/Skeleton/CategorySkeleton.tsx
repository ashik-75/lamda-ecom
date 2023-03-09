function CategorySkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 px-5">
      <div className="bg-gray-100 rounded-lg space-y-3 p-5">
        <p className="h-5 bg-gray-200 rounded-lg w-[50%]"></p>
        <p className="h-5 bg-gray-200 rounded-lg"></p>
      </div>
      <div className="bg-gray-100 rounded-lg space-y-3 hidden sm:block p-5">
        <p className="h-5 bg-gray-200 rounded-lg w-[50%]"></p>
        <p className="h-5 bg-gray-200 rounded-lg"></p>
      </div>
      <div className="bg-gray-100 rounded-lg space-y-3 hidden sm:block p-5">
        <p className="h-5 bg-gray-200 rounded-lg w-[50%]"></p>
        <p className="h-5 bg-gray-200 rounded-lg"></p>
      </div>
    </div>
  );
}

export default CategorySkeleton;
