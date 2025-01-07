import React from "react";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { LayoutProps } from "antd";

const Layout: React.FC<LayoutProps> = ({}) => {
  return (
    <>
      {/* Content Container */}
      <div className={styles["layout-container"]}>
        {/* Left Section: Text */}
        <div className={styles["text-section"]}>
          <p>Buy, Sell, Rent,</p>
          <p>Property Securely!</p>
        </div>

        {/* Right Section: Login Box */}
        <div className={styles["image-section"]}>
          <div className={styles["placeholder-box"]}>
            {/* Overlapping Title Box */}
            <div className={styles["title-box"]}>Login</div>
            {/* Render children here for nested routes */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
