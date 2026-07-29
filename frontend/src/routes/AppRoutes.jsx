import { BrowserRouter, Route, Routes } from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout";
import PublicLayout from "@/layouts/PublicLayout";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import CitizenDashboard from "@/pages/citizen/CitizenDashboard";
import OfficerDashboard from "@/pages/officer/OfficerDashboard";
import About from "@/pages/public/About";
import Contact from "@/pages/public/Contact";
import Features from "@/pages/public/Features";
import Home from "@/pages/public/Home";
import SupervisorDashboard from "@/pages/supervisor/SupervisorDashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/citizen" element={<CitizenDashboard />} />
          <Route path="/officer" element={<OfficerDashboard />} />
          <Route path="/supervisor" element={<SupervisorDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
