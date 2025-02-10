import React from "react";
import { Card, Button, Rate } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./PropertyCard.module.css";

const PropertyCard: React.FC = () => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("./PropertyPage");
  };

  return (
    <Card className={styles["property-card"]}>
      <div className={styles["property-card-cover"]}>
        <img
          alt="Property"
          src="https://naiknavare.com/blog/wp-content/uploads/2021/08/Luxury-Apartment-Buying-Guide.jpg"
          className={styles["property-card-image"]}
        />
        <div className={styles["property-card-heart"]}>
          <span>♥</span>
        </div>
      </div>
      <h3 className={styles["property-card-title"]}>3BHK Flat @ 3cr</h3>
      <p className={styles["property-card-area"]}>2000 sqft.</p>
      <p className={styles["property-card-address"]}>
        ABC Apartments, near XYZ railway station, Pune, Maharashtra
      </p>
      <div className={styles["property-card-rating"]}>
        <span>Ratings:</span>
        <Rate
          allowHalf
          defaultValue={4}
          className={styles["property-card-rate"]}
        />
      </div>
      <div className={styles["property-card-hover-button"]}>
        <Button type="default" block onClick={handleViewDetails}>
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default PropertyCard;