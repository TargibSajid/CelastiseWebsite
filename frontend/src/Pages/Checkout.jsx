import React, { useState } from "react";

export default function Checkout() {

  const DELIVERY_FEE = 60;

  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Sajid",
    phone: "01558156964",
    address: "Kuril, Dhaka - North",
  });

  const cartItems = [
    {
      id: 1,
      name: "Hublot Classic Watch",
      price: 299,
      quantity: 1,
      image: "./Collection/Hublot/Hublot automatic.jpeg",
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const total = subtotal + DELIVERY_FEE;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#0f0f0f] min-h-screen py-14 px-4 text-gray-200">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 flex flex-col gap-12">

          {/* SHIPPING CARD */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800">

            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-sans tracking-wide">
                Shipping Information
              </h2>

              <button
                onClick={() => setEditing(!editing)}
                className="text-lg font-bold font-sans text-[rgb(225,129,84)] hover:opacity-80"
              >
                {editing ? "Save" : "Edit"}
              </button>
            </div>

            {!editing ? (
              <div className="space-y-3 text-gray-300">

                <p className="text-lg font-sans text-white">
                  <span className="text-[rgb(225,129,84)]"> Name : </span>{user.name}
                </p>
                <p className="text-lg font-sans text-white"><span className="text-[rgb(225,129,84)]"> Phone : </span>{user.phone}</p>
                <p className="text-lg font-sans text-white leading-relaxed">
              <span className="text-[rgb(225,129,84)]"> Address : </span>{user.address}
                </p>
              </div>
            ) : (
              <div className="grid gap-6">

                {/* NAME */}
                <div>
                  <label className="block text-sm mb-2 text-gray-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    className="w-full text-xl bg-[#111] border-b border-[rgb(225,129,84)]  px-4 py-3 focus:border-[rgb(225,129,84)]  focus:ring-1 focus:ring-[rgb(225,129,84)] outline-none text-white"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="block text-sm mb-2 text-gray-400">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    className="w-full bg-[#111] text-xl border-b border-[rgb(225,129,84)]  px-4 py-3 focus:border-[rgb(225,129,84)] focus:ring-1 focus:ring-[rgb(225,129,84)]  outline-none text-white"
                  />
                </div>

                {/* ADDRESS */}
                <div>
                  <label className="block text-sm mb-2 text-gray-400">
                    Full Address
                  </label>
                  <textarea
                    name="address"
                    rows="3"
                    value={user.address}
                    onChange={handleChange}
                    className="w-full bg-[#111] text-xl border-b border-[rgb(225,129,84)]  px-4 py-3 focus:border-[rgb(225,129,84)] focus:ring-1 focus:ring-[rgb(225,129,84)]  outline-none text-white resize-none"
                  />
                </div>

              </div>
            )}

          </div>

          {/* ORDER ITEMS */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800">

            <h2 className="text-2xl font-sans mb-10">
              Order Items
            </h2>

            <div className="flex flex-col gap-10">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center flex-wrap gap-6"
                >
                  <div className="flex items-center gap-6 min-w-62.5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-30 h-35 rounded-xl object-cover border border-gray-700"
                    />
                    <div>
                      <p className="font-sans text-xl text-white">
                        {item.name}
                      </p>
                      <p className="text-xl mt-5 text-white">
                        <span className="text-[rgb(225,129,84)]">Quantity:</span> {item.quantity}
                      </p>
                    </div>
                  </div>

                  <p className="text-xl font-semibold text-green-400">
                    {item.price * item.quantity}৳
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* RIGHT SIDE SUMMARY */}
        <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 h-fit lg:sticky lg:top-10">

          <h2 className="text-2xl font-sans mb-10">
            Order Summary
          </h2>

          <div className="space-y-5 text-xl font-sans text-gray-300">

            <div className="flex justify-between">
              <span>Items Total</span>
              <span className = "text-yellow-400">{subtotal}৳</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className = "text-yellow-400">{DELIVERY_FEE}৳</span>
            </div>

          </div>

          <div className="border-t border-gray-800 my-10"></div>

          <div className="flex justify-between text-3xl font-sans text-white">
            <span>Total</span>
            <span className="text-green-400">{total}৳</span>
          </div>

          <button className="mt-10 w-full bg-[#B76E79] text-black py-4 text-xl font-sans rounded font-semibold hover:opacity-90 transition">
            Proceed to Confirm
          </button>

        </div>

      </div>

    </div>
  );
}
