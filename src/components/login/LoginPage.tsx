import styles from "./LoginPage.module.css";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
      <div className={styles.formContainer}> {/* Inner White Box */}
        <h2 className={styles.formTitle}>Login</h2>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            className={styles.formItem}
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            className={styles.formItem}
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <div className={styles.options}>
            <Checkbox>Remember me</Checkbox>
            <Link to="/forgot-password" className={styles.forgotPassword}>
              Forgot password?
            </Link>
          </div>

          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
              className={styles.submitButton}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>

        <div className={styles.registerLink}>
          Don't have an account? <Link to="/auth/signup">Register now!</Link>
        </div>
      </div>
  );
};

export default LoginPage;
