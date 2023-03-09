import { client } from "../utils/client";

export async function getProducts(page: number) {
  const product_perPage = 2;
  const query = `*[_type == "product"][${(page - 1) * product_perPage}...${
    page * product_perPage
  }]`;
  const results = await client.fetch(query);
  const total_results = await client.fetch(`count(*[_type == "product"])`);
  const total_pages = Math.ceil(total_results / product_perPage);

  return {
    results,
    total_results,
    page,
    total_pages,
  };
}

export async function getProduct(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);

  return data;
}

export async function getCategoryProducts(slug: string) {
  const query = `*[_type == "product" && category._ref in *[_type == "category" && slug.current == "${slug}"]._id]`;
  const data = await client.fetch(query);

  return data;
}

export async function getSearchProducts(value: string) {
  const query = `*[_type == "product" && title match "*${value}*"]`;
  const data = await client.fetch(query);

  return data;
}
