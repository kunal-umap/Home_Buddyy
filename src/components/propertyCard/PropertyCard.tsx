import React from "react";
import { Card, Button, Rate } from "antd";
import { Link } from "react-router-dom";
import styles from "./PropertyCard.module.css";

interface PropertyCardProps {
  price: string;
  area: string;
  address: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  price,
  area,
  address,
}) => {
  return (
    <Card className={styles["property-card"]} hoverable>
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
      <div className={styles["property-card-content"]}>
        <h3 className={styles["property-card-title"]}>3BHK Flat @ {price}</h3>
        <p className={styles["property-card-area"]}>{area} sqft.</p>
        <p className={styles["property-card-address"]}>{address}</p>
        <div className={styles["property-card-rating"]}>
          <span>Ratings:</span>
          <Rate
            allowHalf
            defaultValue={4}
            className={styles["property-card-rate"]}
          />
        </div>
        <div className={styles["property-card-hover-button"]}>
          <Link to="/PropertyPage">
            <Button type="default" block>
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;
