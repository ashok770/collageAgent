import { Outlet } from "react-router-dom";

import Sidebar from "@/components/navigation/Sidebar";
import Topbar from "@/components/navigation/Topbar";

export default function DashboardLayout() {
  return <div className="dashboard"><Sidebar /><div className="dashboard-main"><Topbar /><main><Outlet /></main></div></div>;
}
