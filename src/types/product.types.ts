export type ProductType = {
  _id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
  slug: {
    current: string;
  };
};
