import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import StarBackground from "../components/StarBackground/StarBackground";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";

const Root = () => {
  return (
    <div>
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effect */}
      <StarBackground />

      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Root;
