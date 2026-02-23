import React, { useEffect,useState } from 'react';

function Sidebar() {
  return (
    <aside className="w-64 bg-black border-r border-[#b76e79]/30 p-6">
      <h1 className="text-2xl font-bold text-[#b76e79] mb-10">
        Sellastice Admin
      </h1>

      {["Settings", "Categories", "Brands", "Logout"].map(item => (
        <button
          key={item}
          className="block w-full text-left px-4 py-3 mb-2 rounded hover:bg-[#b76e79]/20"
        >
          {item}
        </button>
      ))}
    </aside>
  );
}

export default Sidebar;