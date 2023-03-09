import { useEffect, useState } from "react";
import { ItemType } from "./useCart";

function useLocalStorage<T>(key: string, value: T) {
  const [cartItems, setCartItems] = useState(() => {
    const items = localStorage.getItem(key);

    if (items) {
      return JSON.parse(items);
    } else {
      return value;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(cartItems));
  }, [key, cartItems]);
  return [cartItems, setCartItems] as [ItemType[], typeof setCartItems];
}

export default useLocalStorage;
