import { client } from "../utils/client";

export async function getCategories() {
  const query = `*[_type == "category"]`;
  const data = await client.fetch(query);

  return data;
}
