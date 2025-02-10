import React from "react";
import { Layout, Menu } from "antd";
import Navbar from "../../components/navbar/Navbar";
import PropertyCard from "../../components/common/PropertyCard";
import styles from "./HomePage.module.css";
import { Carousel } from "antd";

const { Header, Content, Sider } = Layout;

const HomePage: React.FC = () => {
  const contentStyle: React.CSSProperties = {
    height: "200px",
    color: "#fff",
    lineHeight: "200px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.logo}>REAL ESTATE</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className={styles.sider}>
          <Menu mode="inline" style={{ height: "100%" }}>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content className={styles.content}>
            <Carousel autoplay>
              <div>
                <h3 style={contentStyle}>BUY, SELL, RENT PROPERTIES AS YOU WISH!</h3>
              </div>
              <div>
                <h3 style={contentStyle}>FIND YOUR DREAM HOME!</h3>
              </div>
              <div>
                <h3 style={contentStyle}>EXCLUSIVE DEALS AWAIT!</h3>
              </div>
            </Carousel>

            <div className={styles.section}>
              <h2>Most-viewed properties</h2>
              <div className={styles.propertyCardsContainer}>
                {[1, 2, 3, 4].map((_, index) => (
                  <PropertyCard key={index} />
                ))}
              </div>
            </div>

            <div className={styles.section}>
              <h2>Properties near you</h2>
              <div className={styles.propertyCardsContainer}>
                {[1, 2, 3, 4].map((_, index) => (
                  <PropertyCard key={index} />
                ))}
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default HomePage;
