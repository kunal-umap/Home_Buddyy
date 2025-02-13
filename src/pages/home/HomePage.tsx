import React from "react";
import { Carousel, Input, Space } from "antd";
import PropertyCard from "../../components/propertyCard/PropertyCard";
import styles from "./HomePage.module.css";

const { Search } = Input;

const contentStyle: React.CSSProperties = {
  height: "200px",
  color: "#fff",
  lineHeight: "200px",
  textAlign: "center",
  background: "#5D001E",
  fontSize: "20px",
  fontWeight: "bold",
};

const HomePage: React.FC = () => {
  const onSearch = (value: string) => {
    console.log("Search Value: ", value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <Space direction="vertical" className={styles.searchSpace}>
          <Search
            placeholder="Search for properties..."
            onSearch={onSearch}
            enterButton
            size="large"
          />
        </Space>
      </div>

      <div className={styles.carouselContainer}>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              BUY, SELL, RENT PROPERTIES AS YOU WISH!
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>Find your dream home today!</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Contact trusted agents near you.</h3>
          </div>
        </Carousel>
      </div>

      <div className={styles.propertiesSection}>
        <h3 className={styles.sectionTitle}>Most-viewed properties</h3>
        <div className={styles.propertiesContainer}>
          <PropertyCard
            price="3cr"
            area="2000"
            address="ABC Apartments, near XYZ railway station, Pune, Maharashtra"
          />
          <PropertyCard
            price="3cr"
            area="2000"
            address="ABC Apartments, near XYZ railway station, Pune, Maharashtra"
          />
          <PropertyCard
            price="3cr"
            area="2000"
            address="ABC Apartments, near XYZ railway station, Pune, Maharashtra"
          />
        </div>
      </div>

      <div className={styles.propertiesSection}>
        <h3 className={styles.sectionTitle}>Properties near you</h3>
        <div className={styles.propertiesContainer}>
          <PropertyCard
            price="3cr"
            area="2000"
            address="ABC Apartments, near XYZ railway station, Pune, Maharashtra"
          />
          <PropertyCard
            price="3cr"
            area="2000"
            address="ABC Apartments, near XYZ railway station, Pune, Maharashtra"
          />
          <PropertyCard
            price="3cr"
            area="2000"
            address="ABC Apartments, near XYZ railway station, Pune, Maharashtra"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
