import React, { useState } from "react";

function CartItem({
  item,
  increaseQty,
  decreaseQty,
  toggleSelect,
  removeItem,
}) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-[rgb(31,31,31)] p-5 rounded-xl shadow-lg font-sans">
      <input
        type="checkbox"
        checked={item.selected}
        onChange={() => toggleSelect(item.id)}
        className="w-5 h-5 accent-[rgb(225,129,84)] mr-4"
      />

      <img
        src={item.image}
        alt={item.name}
        className="w-36 h-36 max-sm:w-2/3 max-sm:h-1/3 mt-5 object-cover rounded-lg"
      />

      <div className="flex-1 md:ml-6 mt-4 md:mt-0 w-full">
        <h2 className="text-3xl font-semibold text-white">{item.name}</h2>
        <p className="text-yellow-300 text-2xl mt-2">{item.price}৳</p>

        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={() => decreaseQty(item.id)}
            className="px-3 py-1 bg-transparent text-5xl rounded hover:text-[rgb(225,129,84)] transition"
          >
            -
          </button>

          <span className="text-4xl">{item.quantity}</span>

          <button
            onClick={() => increaseQty(item.id)}
            className="px-3 py-1 bg-transparent text-5xl rounded hover:text-[rgb(225,129,84)] transition"
          >
            +
          </button>
        </div>

        <button
          onClick={() => removeItem(item.id)}
          className="mt-7 text-2xl text-red-400 hover:text-red-600 transition"
        >
          Remove
        </button>
      </div>

      <div className="mt-4 md:mt-0 md:text-right text-green-500 text-3xl font-semibold">
        <p>{item.price * item.quantity}৳</p>
      </div>
    </div>
  );
}

export default function Cart({ setActive }) {
  const COD_CHARGE = 60;

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Hublot Classic Watch",
      price: 200,
      image: "./Collection/Hublot/Hublot automatic.jpeg",
      quantity: 1,
      selected: true,
    },
    {
      id: 2,
      name: "Rolex Premium Watch",
      price: 350,
      image: "./Collection/Rolex/rolex.jpeg",
      quantity: 1,
      selected: false,
    },
  ]);

  const [confirmedOrders, setConfirmedOrders] = useState([]);

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const toggleSelect = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems
    .filter((item) => item.selected)
    .reduce((total, item) => total + item.price * item.quantity, 0);

  const finalTotal = subtotal > 0 ? subtotal + COD_CHARGE : 0;

  // 🔥 FIXED: Now it DOES NOT remove cart items
  const handleCheckout = () => {
    const selectedItems = cartItems.filter((item) => item.selected);

    const newOrders = selectedItems.map((item) => ({
      ...item,
      orderTime: Date.now(),
    }));

    setConfirmedOrders([...confirmedOrders, ...newOrders]);
  };

  return (
    <div className="min-h-screen bg-[rgb(20,20,20)] text-white p-6">
      <h1 className="text-3xl font-bold mb-8">Cart</h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT SIDE - CART */}
        <div className="flex-1">
          <div className="flex flex-col gap-6">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                toggleSelect={toggleSelect}
                removeItem={removeItem}
              />
            ))}
          </div>

          {/* Summary */}
          <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between max-sm:text-center items-center gap-6">
            <div>
              <p className="text-xl">
                Subtotal:
                <span className="text-yellow-300 px-5">{subtotal}৳</span>
              </p>

              <p className="text-xl mt-2">
                Cash on Delivery:
                <span className="text-yellow-300 px-5">
                  {subtotal > 0 ? COD_CHARGE : 0}৳
                </span>
              </p>

              <h2 className="text-4xl text-[rgb(225,129,84)] font-bold mt-2">
                Total:
                <span className="text-green-500 px-5">{finalTotal}৳</span>
              </h2>
            </div>

            <button
              disabled={subtotal === 0}
              className={`px-8 py-3 rounded-lg text-xl transition-all duration-500 ${
                subtotal === 0
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-[rgb(225,129,84)] text-black hover:bg-white"
              }`}
              onClick={() => handleCheckout()}
            >
              Confirm Order
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - ONGOING ORDERS */}
        <div className="flex-1">
          {confirmedOrders.length > 0 && (
            <div className="bg-[rgb(31,31,31)] p-6 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-[rgb(225,129,84)]">
                Ongoing Orders
              </h2>

              {confirmedOrders.map((order) => {
                const hoursPassed =
                  (Date.now() - order.orderTime) /
                  (1000 * 60 * 60);

                const canCancel = hoursPassed < 24;

                return (
                  <div
                    key={order.id}
                    className="border-b border-gray-600 pb-4 mb-4 font-sans "
                  >
                    <h3 className="text-2xl mt-2 font-semibold">
                      {order.name}
                    </h3>

                    <p className="text-yellow-300 mt-3 text-2xl ">
                      {order.price * order.quantity}৳
                    </p>

                    {canCancel ? (
                      <p className="text-xl text-red-500 mt-2">
                        You have 24 hours to cancel this order.
                      </p>
                    ) : (
                      <p className="text-xl text-red-500 mt-2">
                        Cancellation period expired.
                      </p>
                    )}

                    <button
                      disabled={!canCancel}
                      onClick={() =>
                        setConfirmedOrders(
                          confirmedOrders.filter(
                            (item) => item.id !== order.id
                          )
                        )
                      }
                      className={`mt-4 px-6 py-2 rounded-lg text-xl transition ${
                        canCancel
                          ? "bg-red-500 hover:bg-red-700"
                          : "bg-gray-600 cursor-not-allowed"
                      }`}
                    >
                      Cancel Order
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
