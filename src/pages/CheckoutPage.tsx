import { useMutation } from "@tanstack/react-query";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useCart, { ItemType } from "../hooks/useCart";
import { addOrder } from "../services/order";
import { formatPrice } from "../utils/formatPrice";

function Item({ _id, image, price, qty, title }: ItemType) {
  const { removeFromCart, increaseCartItem, decreaseCartItem } = useCart();

  return (
    <div className="flex justify-between">
      <div className="flex gap-5">
        <div className="h-32 w-20 rounded overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1>{title}</h1>
            <p className="text-gray-600 text-sm font-medium">Quantity: {qty}</p>
          </div>

          <p className="font-medium">{formatPrice(price)}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end">
        <button onClick={() => removeFromCart(_id)}>
          <Trash2 className="w-6 h-6" />
        </button>

        <div className="flex mt-1">
          <button onClick={() => decreaseCartItem(_id)} className="border px-1">
            <Minus className="h-3 w-3" />
          </button>
          <span className="border-y px-2">{qty}</span>
          <button onClick={() => increaseCartItem(_id)} className="border px-1">
            <Plus className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

function CheckoutPage() {
  const navigate = useNavigate();
  const { cartItems, clearLocalStorage, totalPrice } = useCart();
  const [email, setEmail] = useState("");

  const { isLoading, isError, error, mutate, isSuccess } = useMutation({
    mutationFn: addOrder,
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("order added");
      clearLocalStorage();
      navigate("/success");
    }
  }, [isSuccess]);

  const handleCheckout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const orderedProducts = cartItems
      .map((item) => `${item.title}-Q: ${item.qty}-P: ${item.price}`)
      .join(" X ");

    const info = {
      email,
      amount: Math.round((totalPrice + 12 + 120) * 100) / 100,
      address: orderedProducts,
    };

    mutate(info);
  };

  return (
    <div className="px-5">
      <div className="max-w-7xl mx-auto ">
        {cartItems.length > 0 ? (
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            onSubmit={handleCheckout}
          >
            {/* checkout form && payment */}
            <div>
              <div className="space-y-5">
                {/* contact information */}
                <div className="space-y-2">
                  <h1 className="text-lg font-medium">Contact Information</h1>
                  <div className="space-y-1">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="outline-none rounded border w-full py-1 px-3"
                    />
                  </div>
                </div>

                {/* shipping information */}
                <div className="space-y-4">
                  <h1 className="font-medium text-lg">Shipping Information</h1>

                  {/* name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="outline-none rounded border w-full py-1 px-3"
                      />
                    </div>
                    <div className="space-y-1">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="outline-none rounded border w-full py-1 px-3"
                      />
                    </div>
                  </div>
                  {/* city & postal code */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        className="outline-none rounded border w-full py-1 px-3"
                      />
                    </div>
                    <div className="space-y-1">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Postal Code
                      </label>
                      <input
                        type="text"
                        className="outline-none rounded border w-full py-1 px-3"
                      />
                    </div>
                  </div>

                  {/* Phone */}

                  <div className="space-y-1">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      className="outline-none rounded border w-full py-1 px-3"
                    />
                  </div>

                  {/* address */}
                  <div className="space-y-1">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <textarea className="outline-none h-24 rounded border w-full py-1 px-3" />
                  </div>
                </div>

                {/* payment */}

                <div className="space-y-5">
                  <h1 className="text-lg font-medium">Payment</h1>
                  {/* payment method */}
                  <div className="flex space-x-5">
                    <div className="space-x-1">
                      <input type="radio" id="credit" name="method" />
                      <label className="text-sm font-medium" htmlFor="credit">
                        Credit Card
                      </label>
                    </div>
                    <div className="space-x-1">
                      <input type="radio" id="paypal" name="method" />
                      <label className="text-sm font-medium" htmlFor="paypal">
                        Paypal
                      </label>
                    </div>
                    <div className="space-x-1">
                      <input type="radio" name="method" id="etransfer" />
                      <label
                        className="text-sm font-medium"
                        htmlFor="etransfer"
                      >
                        eTransfer
                      </label>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      className="outline-none rounded border w-full py-1 px-3"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Name on Card
                    </label>
                    <input
                      type="text"
                      className="outline-none rounded border w-full py-1 px-3"
                    />
                  </div>

                  <div className="grid grid-cols-4 gap-5">
                    <div className="space-y-1 col-span-3">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Expiration date (MM/YY)
                      </label>
                      <input
                        type="text"
                        className="outline-none rounded border w-full py-1 px-3"
                      />
                    </div>
                    <div className="space-y-1">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        CVC
                      </label>
                      <input
                        type="text"
                        className="outline-none rounded border w-full py-1 px-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* order summary */}
            <div>
              <h1 className="text-lg font-medium mb-5">Order summary</h1>

              {/* cart products */}
              <div className="space-y-10">
                {cartItems.map((item) => (
                  <Item key={item._id} {...item} />
                ))}
              </div>

              {/* subtotal and note */}
              <div className="mt-5 border-t pt-2">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <h1 className="">Subtotal</h1>
                    <p>{formatPrice(totalPrice)}</p>
                  </div>
                  <div className="flex justify-between">
                    <h1 className="">Tax</h1>
                    <p>{formatPrice(15)}</p>
                  </div>
                  <div className="flex justify-between">
                    <h1 className="">Shipping</h1>
                    <p>{formatPrice(120)}</p>
                  </div>
                  <div className="flex justify-between border-y py-5">
                    <h1 className="font-bold">Total</h1>
                    <p className="font-bold">
                      {formatPrice(totalPrice + 15 + 120)}
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="py-3 bg-black  flex items-center justify-center w-full text-white font-bold "
                  >
                    {isLoading ? "processing ...." : "Confirm Order"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <div className="">
            <h1 className="font-medium">No Items is available for checkout</h1>
            <Link to={"/"} className="underline underline-offset-2">
              Continue Shipping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutPage;
