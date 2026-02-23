import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import MainDashboard from "../components/MainDashboard/MainDashboard.jsx";

export default function AdminPanel() {
  return (
    <div className="flex min-h-screen bg-[#0b0b0b] text-white">
      <Sidebar />
      <MainDashboard />
    </div>
  );
}
