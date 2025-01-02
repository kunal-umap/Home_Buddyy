import stylef from "./MoreDetailsForm.module.css";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Layout,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export default function MoreDetailsForm() {
  return (
    <Form layout="vertical">
      <Form.Item
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload action="/upload.do" listType="picture-card">
          <button style={{ border: 0, background: "none" }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </button>
        </Upload>
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Select Preference">
        <Select placeholder="Select your preference">
          <Select.Option value="Buyer">Buyer</Select.Option>
          <Select.Option value="Seller">Seller</Select.Option>
          <Select.Option value="Agent">Agent</Select.Option>
          <Select.Option value="Don't know now">Don't know now</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Gender">
        <Select placeholder="Select your gender">
          <Select.Option value="Male">Male</Select.Option>
          <Select.Option value="Female">Female</Select.Option>
          <Select.Option value="Others">Others</Select.Option>
        </Select>
      </Form.Item>
      <Form className={stylef.location_form}>
        <Form.Item label="Address Line">
          <Input />
        </Form.Item>
          <Form.Item className={stylef.location_input} label="Village/Taluka">
            <Input placeholder="Enter your village name"/>
          </Form.Item>
          <Form.Item className={stylef.location_input} label="District">
            <Input placeholder="Enter your District name"/>
          </Form.Item>
          <Form.Item className={stylef.location_input} label="State">
            <Input placeholder="Enter your State name"/>
          </Form.Item>
          <Form.Item className={stylef.location_input} label="Pincode">
            <Input placeholder="Enter the pincode"/>
          </Form.Item>
      </Form>
      <div >
      <Form.Item >
        <Button className={stylef.submit}>Submit</Button>
      </Form.Item>
      <Form.Item >
        <Button >Do it later</Button>
      </Form.Item>
      </div>
      <Form.Item label="Radio">
        <Radio.Group>
          <Radio value="apple"> Apple </Radio>
          <Radio value="pear"> Pear </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Input">
        <Input />
      </Form.Item>
      <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            {
              title: "Light",
              value: "light",
              children: [{ title: "Bamboo", value: "bamboo" }],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Cascader">
        <Cascader
          options={[
            {
              value: "zhejiang",
              label: "Zhejiang",
              children: [
                {
                  value: "hangzhou",
                  label: "Hangzhou",
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="RangePicker">
        <RangePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item label="TextArea">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      
      <Form.Item label="Slider">
        <Slider />
      </Form.Item>
      <Form.Item label="ColorPicker">
        <ColorPicker />
      </Form.Item>
      <Form.Item label="Rate">
        <Rate />
      </Form.Item>

      <div></div>
    </Form>
  );
}

// import momentGenerateConfig from "rc-picker/es/generate/moment";
// import { UserOutlined, SearchOutlined } from "@ant-design/icons";
// import { Button, Form, Input, Select, Space, Flex, Typography } from "antd";

// const { Search } = Input;

// const preference_options = [
//   {
//     value: "Buyer",
//     label: "Buyer",
//   },
//   {
//     value: "Seller",
//     label: "Seller",
//   },
//   {
//     value: "Agent",
//     label: "Agent",
//   },
//   {
//     value: "Don't know now",
//     label: "Don't know now",
//   },
// ];

// const Gender_option = [
//   {
//     value: "Male",
//     label: "Male",
//   },
//   {
//     value: "Female",
//     label: "Female",
//   },
// ];
{
  /* <br />
      <Input placeholder="default size" prefix={<UserOutlined />} />
      <br />
      <br />
      <Select defaultValue="Select preference" options={preference_options} />
      <br />
      <br />
      <Select defaultValue="Gender" options={Gender_option} />

      <h3>Location Details</h3>


      


      <Typography color="White">Address Line</Typography>
      <Form.Item  required tooltip="This is a required field">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Input
        count={{
          show: true,
          max: 50,
        }}
        defaultValue="e.g.: Lane No 14...."
      />


      <Typography>Village / Taluka</Typography>
      
      <Input 
        count={{
          show: true,
          max: 50,
        }}
        defaultValue="e.g.: Kondhwa"
      />


      <Typography color="White">District</Typography>
      <Input
        count={{
          show: true,
          max: 50,
        }}
        defaultValue="e.g.: Pune"
      />
      <Typography color="White">State</Typography>
      <Input
        size="middle"
        count={{
          show: true,
          max: 50,
        }}
        defaultValue="e.g.: Maharashtra"
      />
      <br />
      <br />
      <Space direction="vertical" size="middle">
        <Space.Compact>
          <Input defaultValue="Enter your pin code" />
        </Space.Compact>
      </Space>

      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "5vh",
        }}
      >
        <Button
          type="primary"
          style={{ backgroundColor: "#1890ff", borderColor: "#1890ff", marginRight: "100px" }}
        >
          Do it later
        </Button>
        <Button
          type="primary"
          style={{ backgroundColor: "#1890ff", borderColor: "#1890ff" }}
        >
          Save
        </Button>
      </div> */
}
