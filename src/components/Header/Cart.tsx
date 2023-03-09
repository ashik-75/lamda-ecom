import { Dialog, Transition } from "@headlessui/react";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";

function Cart() {
  let [isOpen, setIsOpen] = useState(false);
  const {
    cartItems,
    removeFromCart,
    totalPrice,
    totalItems,
    increaseCartItem,
    decreaseCartItem,
  } = useCart();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button className="outline-none relative" onClick={handleOpen}>
        <span className="absolute bg-black text-white w-5 h-5 flex justify-center items-center -right-3 rounded-full -top-3">
          {totalItems}
        </span>
        <ShoppingBag className="h-5 w-5" />
      </button>
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={handleClose} className="relative z-50">
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>

          {/* Full-screen container to center the panel */}
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="fixed inset-0 flex justify-end">
              {/* The actual dialog panel  */}
              <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    {/* title & close icon */}
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        Shopping cart
                      </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => setIsOpen(false)}
                        >
                          <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    {/* products */}
                    {cartItems.length > 0 ? (
                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cartItems.map((product) => (
                              <li key={product._id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={`product.href`}>
                                          {product.title}
                                        </a>
                                      </h3>
                                      <p className="ml-4">
                                        {formatPrice(product.price)}
                                      </p>
                                    </div>
                                    <div className="flex mt-1">
                                      <button
                                        onClick={() =>
                                          decreaseCartItem(product._id)
                                        }
                                        className="border px-1"
                                      >
                                        <Minus className="h-3 w-3" />
                                      </button>
                                      <span className="border-y px-2">
                                        {product.qty}
                                      </span>
                                      <button
                                        onClick={() =>
                                          increaseCartItem(product._id)
                                        }
                                        className="border px-1"
                                      >
                                        <Plus className="h-3 w-3" />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      Qty {product.qty}
                                    </p>

                                    <div className="flex">
                                      <button
                                        onClick={() =>
                                          removeFromCart(product._id)
                                        }
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div className="p-5 flex flex-col items-center">
                        <h1 className="font-medium">Your cart is empty</h1>
                        <Link
                          to={"/collections/all"}
                          onClick={() => setIsOpen(false)}
                          className="underline underline-offset-2"
                        >
                          Continue shipping
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* subtotal and checkout */}
                  {cartItems.length > 0 && (
                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{formatPrice(totalPrice)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <Link
                          to="/checkout"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-center rounded-md border border-transparent bg-black text-white px-6 py-3 text-base font-medium shadow-sm"
                        >
                          Checkout
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-black"
                            onClick={() => setIsOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

export default Cart;
