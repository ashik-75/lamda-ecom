import { Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import useCart, { ItemType } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";

function Item({ image, title, qty, price, _id }: ItemType) {
  const { increaseCartItem, decreaseCartItem } = useCart();
  return (
    <div className="flex gap-5">
      <div className="h-20 w-32 border overflow-hidden rounded border-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="grid grid-cols-4 flex-1 items-center">
        <div className="col-span-2">
          <h1 className="font-bold text-lg">{title}</h1>
          <p>Quantity: {qty}</p>
        </div>

        <div className="flex mt-1">
          <button onClick={() => decreaseCartItem(_id)} className="border px-1">
            <Minus className="h-3 w-3" />
          </button>
          <span className="border-y px-2">{qty}</span>
          <button onClick={() => increaseCartItem(_id)} className="border px-1">
            <Plus className="h-3 w-3" />
          </button>
        </div>

        <p>{formatPrice(price)}</p>
      </div>
    </div>
  );
}

function CartPage() {
  const { cartItems, totalPrice } = useCart();
  return (
    <div>
      <div className="max-w-6xl mx-auto space-y-10">
        {cartItems.length > 0 ? (
          <>
            {/* header */}
            <div className="flex flex-col items-center">
              <h1 className="font-extrabold text-3xl ">Cart</h1>
              <Link
                to={"/collections/all"}
                className="underline underline-offset-4"
              >
                Continue Shopping
              </Link>
            </div>
            {/* cart products */}
            <div className="space-y-10">
              {cartItems.map((item) => (
                <Item key={item._id} {...item} />
              ))}
            </div>

            {/* subtotal and note */}
            <div className="grid grid-cols-2 gap-10">
              <div>
                <label
                  htmlFor="note"
                  className="block  mb-2 text-sm font-bold uppercase"
                >
                  Order note
                </label>
                <textarea
                  className="border w-full md:w-[80%] h-24 outline-none"
                  name="note"
                  id=""
                ></textarea>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <h1 className="font-bold uppercase">subtotal</h1>
                  <p>{formatPrice(totalPrice)}</p>
                </div>
                <p className="text-sm text-right">
                  Shipping, taxes, and discount codes calculated at checkout.
                </p>
                <Link
                  to={"/checkout"}
                  className="py-3 bg-black  flex items-center justify-center w-full text-white font-bold "
                >
                  Check out
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div>
            <h1 className="font-medium">Cart is emtry</h1>
            <Link className="underline underline-offset-2" to={"/"}>
              Continue shipping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
