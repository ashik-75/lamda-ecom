import { createContext, ReactNode, useContext } from "react";
import useLocalStorage from "./useLocalStorage";

export type ItemType = {
  _id: string;
  title: string;
  image: string;
  price: number;
  qty: number;
};

type CartType = {
  totalPrice: number;
  totalItems: number;
  cartItems: ItemType[];
  addToCart: (item: ItemType) => void;
  removeFromCart: (itemId: string) => void;
  decreaseCartItem: (itemId: string) => void;
  increaseCartItem: (itemId: string) => void;
  clearLocalStorage: () => void;
};

const CartContext = createContext<CartType>({} as CartType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useLocalStorage<ItemType[]>(
    "cartItems",
    []
  );

  const addToCart = (item: ItemType) => {
    const isAlreadyExists = cartItems.find((i) => i._id === item._id);

    if (isAlreadyExists) {
      setCartItems((prevCartItems: ItemType[]) =>
        prevCartItems.map((i) =>
          i._id === item._id ? { ...i, qty: i.qty + 1 } : { ...i }
        )
      );
    } else {
      setCartItems((prevCartItems: ItemType[]) => [
        ...prevCartItems,
        { ...item, qty: 1 },
      ]);
    }
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prev: ItemType[]) => prev.filter((i) => i._id !== itemId));
  };

  const decreaseCartItem = (itemId: string) => {
    const isItemExists = cartItems.find((item) => item._id === itemId);
    if (isItemExists && isItemExists.qty > 1) {
      setCartItems((prev: ItemType[]) =>
        prev.map((item) =>
          item._id === itemId ? { ...item, qty: item.qty - 1 } : { ...item }
        )
      );
    } else {
      setCartItems((prev: ItemType[]) =>
        prev.filter((item) => item._id !== itemId)
      );
    }
  };

  const increaseCartItem = (itemId: string) => {
    const isItemExists = cartItems.find((item) => item._id === itemId);
    if (isItemExists) {
      setCartItems((prev: ItemType[]) =>
        prev.map((item) =>
          item._id === itemId ? { ...item, qty: item.qty + 1 } : { ...item }
        )
      );
    }
  };

  const totalPrice = cartItems.reduce(
    (prev, curr) => prev + curr.price * curr.qty,
    0
  );
  const totalItems = cartItems.reduce((prev, curr) => prev + curr.qty, 0);

  const clearLocalStorage = () => {
    localStorage.removeItem("cartItems");
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        decreaseCartItem,
        increaseCartItem,
        totalItems,
        totalPrice,
        clearLocalStorage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  return useContext(CartContext);
}

export default useCart;
