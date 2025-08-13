import { StrictMode } from "react";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import GuestLayout from "@/components/layouts/GuestLayout";
import Home from "@/pages/landing/Home";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Overview from "@/pages/dashboard/Overview";
import About from "@/pages/landing/About";
import Service from "@/pages/landing/Service";
import Contact from "@/pages/landing/Contact";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Profile from "./pages/dashboard/Profile";
import Settings from "./pages/dashboard/Settings";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Landing Routes */}
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
