import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getCategories } from "../services/category";
import { CategoryType } from "../types/category.types";
import CategorySkeleton from "./Skeleton/CategorySkeleton";

function Category({ image, slug, title }: CategoryType) {
  return (
    <div className="relative ">
      <div className="h-32">
        <img
          src={image}
          className="h-full w-full object-cover object-center"
          alt=""
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
      <motion.div className="absolute inset-0 z-10 group">
        <Link to={`collections/${slug.current}`}>
          <motion.h1 className="text-xl tracking-wide font-bold hover:underline hover:underline-offset-4 transition-all text-gray-200 hover:text-white absolute bottom-5 left-5">
            {title}
          </motion.h1>
        </Link>
      </motion.div>
    </div>
  );
}

function Categories() {
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery<CategoryType[]>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <div>
      {isLoading ? (
        <CategorySkeleton />
      ) : isError ? (
        <div>Wrong</div>
      ) : !categories.length ? (
        <div>Empty</div>
      ) : (
        <div className="grid grid-cols-3">
          {categories.map((category) => (
            <Category key={category._id} {...category} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories;
