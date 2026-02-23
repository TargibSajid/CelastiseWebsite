import React, { useEffect,useState } from 'react';

function MainDashboard() {
  return (
    <main className="flex-1 p-8 space-y-14 overflow-y-auto">
      <StatsSection />
      <GraphsSection />
      <ProductSection />
      <OrderSection />
      <UserSection />
    </main>
  );
}

export default MainDashboard;

function StatsSection() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {[
        "Total Revenue",
        "Total Orders",
        "Total Products",
        "Total Users",
      ].map(title => (
        <div
          key={title}
          className="bg-[#111] border border-[#b76e79]/30 rounded-xl p-6"
        >
          <p className="text-gray-400">{title}</p>
          <h3 className="text-2xl text-[#b76e79] font-bold">—</h3>
        </div>
      ))}
    </div>
  );
}
function GraphsSection() {
  return (
    <div className="grid grid-cols-2 gap-8">
      {["Sales Over Time", "Revenue & Profit"].map(graph => (
        <div
          key={graph}
          className="bg-[#111] border border-[#b76e79]/30 rounded-xl p-6 h-72"
        >
          <h3 className="text-[#b76e79] mb-4">{graph}</h3>
          <div className="h-full flex items-center justify-center text-gray-500">
            Graph will be rendered here
          </div>
        </div>
      ))}
    </div>
  );
}
function ProductSection() {
  return (
    <section>
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl text-[#b76e79]">Product Management</h2>
        <button className="bg-[#b76e79] text-black px-5 py-2 rounded">
          + Add Product
        </button>
      </div>

      <table className="w-full border border-[#b76e79]/30">
        <thead>
          <tr>
            {["Name", "Price", "Stock", "Discount", "Image Path", "Action"].map(h => (
              <th key={h} className="p-3 border-b border-[#b76e79]/30">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-[#b76e79]/10">
            <td className="p-3">Rolex Submariner</td>
            <td className="p-3">$15,000</td>
            <td className="p-3">10</td>
            <td className="p-3">5%</td>
            <td className="p-3">/uploads/rolex.jpg</td>
            <td className="p-3 space-x-2">
              <button className="text-[#b76e79]">Edit</button>
              <button className="text-red-500">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
function OrderSection() {
  return (
    <section>
      <h2 className="text-2xl text-[#b76e79] mb-4">Orders</h2>

      <table className="w-full border border-[#b76e79]/30">
        <thead>
          <tr>
            {["Order ID", "User", "Total", "Status"].map(h => (
              <th key={h} className="p-3 border-b border-[#b76e79]/30">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3">#1021</td>
            <td className="p-3">Sajid</td>
            <td className="p-3">$15,000</td>
            <td className="p-3">
              <select className="bg-black border border-[#b76e79] p-1">
                <option>Pending</option>
                <option>Shipped</option>
                <option>Delivered</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
function UserSection() {
  return (
    <section>
      <h2 className="text-2xl text-[#b76e79] mb-4">Users</h2>

      <table className="w-full border border-[#b76e79]/30">
        <thead>
          <tr>
            {["Name", "Email", "Role", "Action"].map(h => (
              <th key={h} className="p-3 border-b border-[#b76e79]/30">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3">Sajid</td>
            <td className="p-3">sajid@gmail.com</td>
            <td className="p-3">User</td>
            <td className="p-3">
              <button className="text-red-500">Block</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
