import { OrderType } from "../types/order.types";
import { client } from "../utils/client";

export async function addOrder(payload: OrderType) {
  console.log({ payload });
  const query = {
    _type: "order",
    ...payload,
  };
  const response = await client.create(query);

  return response;
}
