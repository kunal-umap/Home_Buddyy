import React, { useState } from "react";
import {
  Input,
  Space,
  Dropdown,
  Button,
  Drawer,
  Select,
  Tag,
  Menu,
} from "antd";
import { DownOutlined, FilterOutlined } from "@ant-design/icons";
import PropertyCard from "../../components/propertyCard/PropertyCard";
import styles from "./BuyPage.module.css";

const { Search } = Input;

const BuyPage: React.FC = () => {
  const onSearch = (value: string) => {
    console.log("Search Value: ", value);
  };

  const initialProperties = [
    { price: 30000000, area: 2000, address: "Yahodhan Society, Pune" },
    { price: 25000000, area: 1800, address: "XYZ Residency, Mumbai" },
    { price: 40000000, area: 2500, address: "Elite Towers, Bangalore" },
    { price: 20000000, area: 1500, address: "Sunrise Homes, Hyderabad" },
    { price: 60000000, area: 3000, address: "ABC Apartments, Kolkata" },
    { price: 35000000, area: 2200, address: "Petals Homes, Delhi" },
  ];

  const [properties, setProperties] = useState(initialProperties);
  const [selectedSort, setSelectedSort] = useState("Relevance");

  const handleSort = (key: string) => {
    let sortedProperties = [...properties];

    switch (key) {
      case "Price - Low to High":
        sortedProperties.sort((a, b) => a.price - b.price);
        break;
      case "Price - High to Low":
        sortedProperties.sort((a, b) => b.price - a.price);
        break;
      case "Area - Low to High":
        sortedProperties.sort((a, b) => a.area - b.area);
        break;
      case "Area - High to Low":
        sortedProperties.sort((a, b) => b.area - a.area);
        break;
      case "Most Recent":
        sortedProperties.reverse();
        break;
      default:
        sortedProperties = [...initialProperties];
    }

    setProperties(sortedProperties);
    setSelectedSort(key);
  };

  const menuItems = (
    <Menu onClick={(e) => handleSort(e.key)}>
      <Menu.Item key="Relevance">Relevance</Menu.Item>
      <Menu.Item key="Price - Low to High">Price - Low to High</Menu.Item>
      <Menu.Item key="Price - High to Low">Price - High to Low</Menu.Item>
      <Menu.Item key="Most Recent">Most Recent</Menu.Item>
      <Menu.Item key="Area - Low to High">Area - Low to High</Menu.Item>
      <Menu.Item key="Area - High to Low">Area - High to Low</Menu.Item>
    </Menu>
  );

  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<{ [key: string]: string[] }>({});

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const handleFilterChange = (key: string, values: string[]) => {
    setFilters({ ...filters, [key]: values });
  };

  const clearFilters = () => {
    setFilters({
      propertyType: [],
      saleType: [],
      postedSince: [],
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <Space direction="vertical" className={styles.searchSpace}>
          <Search
            placeholder="Search your Dream Home"
            onSearch={onSearch}
            enterButton
            size="large"
          />
        </Space>
      </div>

      <div className={styles.heading}>BUY PROPERTIES</div>

      <div className={styles.sortFilterContainer}>
        <Dropdown overlay={menuItems} trigger={["click"]}>
          <Button>
            Sort by: {selectedSort} <DownOutlined />
          </Button>
        </Dropdown>

        <Button icon={<FilterOutlined />} onClick={showDrawer}>
          Filters
        </Button>
      </div>

      <Drawer
        title="Filter Properties"
        placement="right"
        onClose={onClose}
        open={open}
        width={350}
      >
        <div className={styles.filterSection}>
          <h4>Sub Property Type</h4>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Select Property Type"
            onChange={(values) => handleFilterChange("propertyType", values)}
            value={filters.propertyType}
          >
            <Select.Option value="multistorey">
              Multistorey Apartment
            </Select.Option>
            <Select.Option value="builder">
              Builder Floor Apartment
            </Select.Option>
            <Select.Option value="penthouse">Penthouse</Select.Option>
            <Select.Option value="studio">Studio Apartment</Select.Option>
          </Select>
        </div>

        <div className={styles.filterSection}>
          <h4>Sale Type</h4>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Select Sale Type"
            onChange={(values) => handleFilterChange("saleType", values)}
            value={filters.saleType}
          >
            <Select.Option value="new">New</Select.Option>
            <Select.Option value="resale">Resale</Select.Option>
          </Select>
        </div>

        <div className={styles.filterSection}>
          <h4>Posted Since</h4>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Select Time Range"
            onChange={(values) => handleFilterChange("postedSince", values)}
            value={filters.postedSince}
          >
            <Select.Option value="yesterday">Yesterday</Select.Option>
            <Select.Option value="lastWeek">Last Week</Select.Option>
            <Select.Option value="last2Weeks">Last 2 Weeks</Select.Option>
            <Select.Option value="lastMonth">Last Month</Select.Option>
          </Select>
        </div>

        <div className={styles.buttonContainer}>
          <Button onClick={clearFilters} danger>
            Clear All
          </Button>
          <Button type="primary" onClick={onClose}>
            Apply Filters
          </Button>
        </div>
      </Drawer>

      <div className={styles.selectedFilters}>
        {Object.entries(filters).map(([key, values]) =>
          values.length > 0 ? (
            <div key={key} className={styles.filterTagGroup}>
              {values.map((value) => (
                <Tag
                  key={value}
                  closable
                  onClose={() =>
                    handleFilterChange(
                      key,
                      filters[key].filter((v) => v !== value)
                    )
                  }
                >
                  {value.replace(/^\w/, (c) => c.toUpperCase())}
                </Tag>
              ))}
            </div>
          ) : null
        )}
      </div>

      <div className={styles.propertiesSection}>
        <div className={styles.propertiesContainer}>
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              price={`${property.price / 10000000}cr`}
              area={property.area.toString()}
              address={property.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
