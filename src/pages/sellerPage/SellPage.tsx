import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Radio, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

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
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Seller Page (Omshree)</h1>
      <Form
        layout="vertical"
        onFinish={(values) => console.log("Form Values:", values)}
      >
        {/* Role Selection */}
        <Form.Item label="You are the:" name="role" rules={[{ required: true, message: "Please select your role!" }]}>
          <Radio.Group onChange={onRoleChange} value={role}>
            <Radio value="Owner">Owner</Radio>
            <Radio value="Agent">Agent</Radio>
            <Radio value="Builder">Builder</Radio>
          </Radio.Group>
        </Form.Item>

        {/* Owner/Builder Details */}
        {(role === "Owner" || role === "Builder") && (
          <>
            <h2>Owner/Builder Details</h2>
            <Form.Item
              label="Full Name (as per property papers)"
              name="fullName"
              rules={[{ required: true, message: "Full Name is required!" }]}
            >
              <Input placeholder="Enter your full name" />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                { required: true, message: "Phone number is required!" },
                { pattern: /^[0-9]{10}$/, message: "Enter a valid 10-digit phone number!" },
              ]}
            >
              <Input placeholder="Enter your phone number" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ type: "email", message: "Enter a valid email!" }]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
              label="Date of Birth"
              name="dob"
              rules={[{ required: true, message: "Date of Birth is required!" }]}
            >
              <Input type="date" />
            </Form.Item>
          </>
        )}

        {/* Agent Details */}
        {role === "Agent" && (
          <>
            <h2>Agent Details</h2>
            <Form.Item
              label="Full Name"
              name="agentName"
              rules={[{ required: true, message: "Full Name is required!" }]}
            >
              <Input placeholder="Enter your full name" />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="agentPhone"
              rules={[
                { required: true, message: "Phone number is required!" },
                { pattern: /^[0-9]{10}$/, message: "Enter a valid 10-digit phone number!" },
              ]}
            >
              <Input placeholder="Enter your phone number" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="agentEmail"
              rules={[{ type: "email", message: "Enter a valid email!" }]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
              label="Name of the Agency"
              name="agencyName"
              rules={[{ required: true, message: "Agency name is required!" }]}
            >
              <Input placeholder="Enter agency name" />
            </Form.Item>
            <Form.Item
              label="Agency Registration No."
              name="agencyRegNo"
              rules={[{ required: true, message: "Registration number is required!" }]}
            >
              <Input placeholder="Enter agency registration number" />
            </Form.Item>
          </>
        )}

        {/* Property Details */}
        <h2>Property Details</h2>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Address is required!" }]}
        >
          <Input.TextArea rows={2} placeholder="Enter property address" />
        </Form.Item>
        <Form.Item
          label="Carpet Area (in sq. ft.)"
          name="carpetArea"
          rules={[{ required: true, message: "Carpet area is required!" }]}
        >
          <InputNumber style={{ width: "100%" }} placeholder="Enter carpet area" />
        </Form.Item>
        <Form.Item label="Type" name="propertyType" rules={[{ required: true, message: "Property type is required!" }]}>
          <Radio.Group>
            <Radio value="Apartment">Apartment</Radio>
            <Radio value="Row House">Row House</Radio>
            <Radio value="Commercial">Commercial</Radio>
            <Radio value="Shop">Shop</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Price is required!" }]}
        >
          <InputNumber style={{ width: "100%" }} placeholder="Enter price in INR" />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Description is required!" }]}
        >
          <Input.TextArea rows={4} placeholder="Enter property description" />
        </Form.Item>
        <Form.Item
          label="Add Images"
          name="images"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

        {/* Save and Reset Buttons */}
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginRight: "10px" }}>
            Save
          </Button>
          <Button htmlType="reset">Reset</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SellerPage;
