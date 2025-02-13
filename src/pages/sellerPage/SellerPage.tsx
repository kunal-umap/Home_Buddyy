import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Radio,
  Upload,
  DatePicker,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./SellerPage.module.css";

const SellerPage: React.FC = () => {
  const [role, setRole] = useState<string>("Owner");

  const onRoleChange = (e: any) => {
    setRole(e.target.value);
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Seller-Property Registration</h1>
      <Form onFinish={(values) => console.log("Form Values:", values)}>
        <Form.Item
          label="You are the:"
          name="role"
          rules={[{ required: true, message: "Please select your role!" }]}
        >
          <Radio.Group
            onChange={onRoleChange}
            value={role}
            className={styles.radioGroup}
          >
            <Radio value="Owner">Owner</Radio>
            <Radio value="Agent">Agent</Radio>
            <Radio value="Builder">Builder</Radio>
          </Radio.Group>
        </Form.Item>

        {(role === "Owner" || role === "Builder") && (
          <>
            <h2 className={styles.subHeading}>{role} Details</h2>
            <Form.Item
              label="Full Name (as per property papers)"
              name="fullName"
              rules={[{ required: true, message: "Full Name is required!" }]}
            >
              <Input
                className={styles.inputField}
                placeholder="Enter your full name"
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Email is required!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                className={styles.inputField}
                placeholder="Enter your email"
              />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              rules={[{ required: true, message: "Phone Number is required!" }]}
            >
              <Input
                className={styles.inputField}
                placeholder="Enter your phone number"
              />
            </Form.Item>
            <Form.Item
              label="Date of Birth"
              name="dob"
              rules={[
                { required: true, message: "Date of Birth is required!" },
              ]}
            >
              <DatePicker
                className={styles.inputField}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </>
        )}

        {role === "Agent" && (
          <>
            <h2 className={styles.subHeading}>Agent Details</h2>
            <Form.Item
              label="Full Name"
              name="agentName"
              rules={[{ required: true, message: "Full Name is required!" }]}
            >
              <Input
                className={styles.inputField}
                placeholder="Enter your full name"
              />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="agentPhoneNumber"
              rules={[{ required: true, message: "Phone Number is required!" }]}
            >
              <Input
                className={styles.inputField}
                placeholder="Enter your phone number"
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="agentEmail"
              rules={[
                { required: true, message: "Email is required!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                className={styles.inputField}
                placeholder="Enter your email"
              />
            </Form.Item>
            <Form.Item
              label="Date of Birth"
              name="agentDob"
              rules={[
                { required: true, message: "Date of Birth is required!" },
              ]}
            >
              <DatePicker
                className={styles.inputField}
                style={{ width: "100%" }}
              />
            </Form.Item>
            <Form.Item
              label="Name of the Agency"
              name="agencyName"
              rules={[{ required: true, message: "Agency Name is required!" }]}
            >
              <Input
                className={styles.inputField}
                placeholder="Enter agency name"
              />
            </Form.Item>
            <Form.Item
              label="Agency Registration Number"
              name="agencyRegNumber"
              rules={[
                {
                  required: true,
                  message: "Agency Registration Number is required!",
                },
              ]}
            >
              <Input
                className={styles.inputField}
                placeholder="Enter agency registration number"
              />
            </Form.Item>
          </>
        )}

        <h2 className={styles.subHeading}>Property Details</h2>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Address is required!" }]}
        >
          <Input.TextArea
            rows={2}
            className={styles.textArea}
            placeholder="Enter property address"
          />
        </Form.Item>
        <Form.Item
          label="Carpet Area (in sq. ft.)"
          name="carpetArea"
          rules={[{ required: true, message: "Carpet area is required!" }]}
        >
          <InputNumber
            style={{ width: "100%" }}
            className={styles.inputField}
            placeholder="Enter carpet area"
          />
        </Form.Item>
        <Form.Item
          label="Type"
          name="type"
          rules={[{ required: true, message: "Property type is required!" }]}
        >
          <Radio.Group className={styles.radioGroup}>
            <Radio value="Apartment">Apartment</Radio>
            <Radio value="Row house">Row house</Radio>
            <Radio value="Commercial">Commercial</Radio>
            <Radio value="Shop">Shop</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Price is required!" }]}
        >
          <InputNumber
            style={{ width: "100%" }}
            className={styles.inputField}
            placeholder="Enter price in INR"
          />
        </Form.Item>
        <Form.Item
          label="Registration Number"
          name="registrationNumber"
          rules={[
            { required: true, message: "Registration Number is required!" },
          ]}
        >
          <Input
            className={styles.inputField}
            placeholder="Enter registration number"
          />
        </Form.Item>
        <Form.Item label="Amenities" name="amenities">
          <Input.TextArea
            rows={2}
            className={styles.textArea}
            placeholder="Enter amenities"
          />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input.TextArea
            rows={4}
            className={styles.textArea}
            placeholder="Enter property description"
          />
        </Form.Item>
        <Form.Item label="Preferred Tenant" name="preferredTenant">
          <Input
            className={styles.inputField}
            placeholder="Enter preferred tenant details"
          />
        </Form.Item>
        <Form.Item
          label="Availability"
          name="availability"
          rules={[
            { required: true, message: "Availability status is required!" },
          ]}
        >
          <Radio.Group className={styles.radioGroup}>
            <Radio value="Ready to move">Ready to move</Radio>
            <Radio value="Under construction">Under construction</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Add Images"
          name="images"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div className={styles.uploadButton}>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <div className={styles.buttonGroup}>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.primaryButton}
          >
            Save
          </Button>
          <Button htmlType="reset" className={styles.resetButton}>
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SellerPage;
