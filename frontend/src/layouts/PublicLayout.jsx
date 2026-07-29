import { Outlet } from "react-router-dom";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/navigation/Navbar";

export default function PublicLayout() {
  return <div className="app-shell"><Navbar /><main className="page-content"><Outlet /></main><Footer /></div>;
}
