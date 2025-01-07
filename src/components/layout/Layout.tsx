import React from "react";
import "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { LayoutProps } from "antd";

const Layout: React.FC<LayoutProps> = ({}) => {
  return (
    <>
      {/* Background Image */}
      <div className="bg-image"></div>

      {/* Content Container */}
      <div className="layout-container">
        {/* Left Section: Text */}
        <div className="text-section">
          <p>Buy, Sell, Rent,</p>
          <p>Property Securely!</p>
        </div>

        {/* Right Section: Login Box */}
        <div className="image-section">
          <div className="placeholder-box">
            {/* Overlapping Title Box */}
            <div className="title-box">Login</div>
            {/* Render children here for nested routes */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
