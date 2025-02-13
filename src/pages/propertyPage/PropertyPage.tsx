import React from "react";
import { Row, Col, Descriptions, Typography } from "antd";
import styles from "./PropertyPage.module.css";

const { Title } = Typography;

const PropertyPage: React.FC = () => {
  return (
    <div className={styles.propertyDetailsPage}>
      <Title level={2} className={styles.pageTitle}>
        PROPERTY DETAILS
      </Title>

      <Row gutter={[16, 16]} className={styles.propertyDetailsContainer}>
        {/* Left Side - Image Grid */}
        <Col
          xs={24}
          sm={12}
          md={12}
          lg={12}
          className={styles.imageGridContainer}
        >
          <div className={styles.imageGrid}>
            <img
              alt="PropertyImage 1"
              src="https://naiknavare.com/blog/wp-content/uploads/2021/08/Luxury-Apartment-Buying-Guide.jpg"
              className={styles.gridImage}
            />
            <img
              alt="PropertyImage 2"
              src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/design-and-style/nine-small-house-interior-design-hacks/two-seater-couches-and-wall-mounts-design-hack.jpg"
              className={styles.gridImage}
            />
            <img
              alt="PropertyImage 3"
              src="https://media.istockphoto.com/id/1456467039/photo/beautiful-living-room-and-kitchen-in-new-luxury-home-with-white-cabinets-wood-beams-pendant.jpg?s=612x612&w=0&k=20&c=x_ZXg6o_H6Bsww7Vr8126nXnNJULmYKABuXS3sc8qqE="
              className={styles.gridImage}
            />
            <img
              alt="PropertyImage 4"
              src="https://t4.ftcdn.net/jpg/04/52/12/21/360_F_452122166_tzyiVVl60582IhGuj2EmHSYVoJrIXJW5.jpg"
              className={styles.gridImage}
            />
          </div>
        </Col>

        {/* Right Side - Property Details */}
        <Col xs={24} sm={12} md={12} lg={12} className={styles.propertyInfo}>
          <Descriptions
            title="Property Information"
            bordered
            column={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
          >
            <Descriptions.Item label="Address">
              ABC Apartments, near XYZ railway station, Pune, Maharashtra
            </Descriptions.Item>
            <Descriptions.Item label="Owner">John Doe</Descriptions.Item>
            <Descriptions.Item label="Pricing">₹3 Crore</Descriptions.Item>
            <Descriptions.Item label="Area">2000 sqft</Descriptions.Item>
            <Descriptions.Item label="Floor">5</Descriptions.Item>
            <Descriptions.Item label="Furnished Status">
              Unfurnished
            </Descriptions.Item>
            <Descriptions.Item label="Amenities" span={2}>
              <p>Swimming Pool</p>
              <p>Gym</p>
              <p>24/7 Security</p>
              <p>Parking Space</p>
              <p>Clubhouse</p>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
};

export default PropertyPage;
