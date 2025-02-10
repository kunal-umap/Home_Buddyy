import React from "react";
import { Row, Col, List, Typography } from "antd";
import styles from "./PropertyPage.module.css";

const { Title, Paragraph } = Typography;

const PropertyPage: React.FC = () => {
  return (
    <div className={styles.propertyDetailsPage}>
      <Title level={2} className={styles.pageTitle}>
        PROPERTY DETAILS
      </Title>
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <img
            alt="Main Property"
            src="https://naiknavare.com/blog/wp-content/uploads/2021/08/Luxury-Apartment-Buying-Guide.jpg"
            className={styles.mainPropertyImage}
          />
          <img
            alt="Main Property"
            src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/home-decor-advice/design-and-style/nine-small-house-interior-design-hacks/two-seater-couches-and-wall-mounts-design-hack.jpg"
            className={styles.mainPropertyImage}
          />
          <img
            alt="Main Property"
            src="https://media.istockphoto.com/id/1456467039/photo/beautiful-living-room-and-kitchen-in-new-luxury-home-with-white-cabinets-wood-beams-pendant.jpg?s=612x612&w=0&k=20&c=x_ZXg6o_H6Bsww7Vr8126nXnNJULmYKABuXS3sc8qqE="
            className={styles.mainPropertyImage}
          />
          <img
            alt="Main Property"
            src="https://t4.ftcdn.net/jpg/04/52/12/21/360_F_452122166_tzyiVVl60582IhGuj2EmHSYVoJrIXJW5.jpg"
            className={styles.mainPropertyImage}
          />
        </Col>
        <Col span={8}>
          <div className={styles.propertyInfo}>
            <Title level={4}>Address</Title>
            <Paragraph>
              ABC Apartments, near XYZ railway station, Pune, Maharashtra
            </Paragraph>

            <Title level={4}>Owner</Title>
            <Paragraph>John Doe</Paragraph>

            <Title level={4}>Pricing</Title>
            <Paragraph>₹3 Crore</Paragraph>

            <Title level={4}>Area</Title>
            <Paragraph>2000 sqft</Paragraph>

            <Title level={4}>Floor</Title>
            <Paragraph>5</Paragraph>

            <Title level={4}>Furnished Status</Title>
            <Paragraph>Unfurnished</Paragraph>

            <Title level={4}>Amenities</Title>
            <List
              size="small"
              dataSource={[
                "Swimming Pool",
                "Gym",
                "24/7 Security",
                "Parking Space",
                "Clubhouse",
              ]}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PropertyPage;
