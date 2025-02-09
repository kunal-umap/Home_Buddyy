
import React from "react";
import styles from "./LoginSignup.module.css";
import { Outlet } from "react-router-dom";
import { LayoutProps } from "antd";

const LoginSignup: React.FC<LayoutProps> = ({}) => {
  return (
    <>
      <div className={styles["layout-container"]}>
        <div className={styles["text-section"]}>
          <p>Buy, Sell, Rent,</p>
          <p>Property Securely!</p>
        </div>
        <div className={styles["image-section"]}>
          <div className={styles["placeholder-box"]}>
            <div className={styles["title-box"]}>Login</div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;

