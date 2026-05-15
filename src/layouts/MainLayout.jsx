import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import RightSidebar from "../components/layout/RightSidebar";

function MainLayout() {
  return (
    <div className="h-screen bg-slate-950 text-white flex overflow-hidden">

      {/* LEFT SIDEBAR */}
      <div className="h-screen sticky top-0">
        <Sidebar />
      </div>

      {/* CENTER CONTENT */}
      <div className="flex flex-col flex-1 h-screen">

        {/* FIXED NAVBAR */}
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        {/* SCROLLABLE FEED */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>

      </div>

      {/* RIGHT SIDEBAR */}
      <div className="h-screen sticky top-0">
        <RightSidebar />
      </div>

    </div>
  );
}

export default MainLayout;