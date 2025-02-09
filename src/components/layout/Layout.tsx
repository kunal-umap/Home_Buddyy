
import style from './Layout.module.css'

import { Layout, Menu } from 'antd';
import { UserOutlined, TeamOutlined,ShoppingCartOutlined, ShoppingOutlined ,ExportOutlined ,HomeOutlined, ApartmentOutlined  ,HeartOutlined , AppstoreAddOutlined , SettingOutlined ,LogoutOutlined   ,MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default function Layout1() {

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  }

  return (
    <Layout  className={style.layout} >
        <Sider trigger={null} collapsible collapsed={collapsed} className={style.sider}>
          <div className="logo" />
          <Menu mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" className={style.profile} icon={<UserOutlined />}>
              <span>Profile</span>
            </Menu.Item>
            
            <SubMenu key="sub1" icon={<HomeOutlined />}
              title={
                <span>Home</span>
              } 
            >
              <Menu.Item key="2">Buy</Menu.Item>
              <Menu.Item key="3">Rent</Menu.Item>
              <Menu.Item key="4">Explore</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2" icon={<TeamOutlined />}
              title={
                <span>People</span>
              }
            >
              <Menu.Item key="5">Team 1</Menu.Item>
              <Menu.Item key="6">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="7" icon={<ShoppingOutlined />}>
              <span>Buy</span>
            </Menu.Item>
            <Menu.Item key="8" icon={<ExportOutlined />}>
              <span>Sell</span>
            </Menu.Item>
            <Menu.Item key="9" icon={<ApartmentOutlined  />}>
              <span>Rent</span>
            </Menu.Item>
            <Menu.Item key="10" icon={<HeartOutlined />}>
              <span>Whichlist</span>
            </Menu.Item>
            <Menu.Item key="11" icon={<ShoppingCartOutlined />}>
              <span>Cart</span>
            </Menu.Item>
            <Menu.Item key="12" icon={<AppstoreAddOutlined />}>
              <span>Orders</span>
            </Menu.Item>
            <Menu.Item key="13" icon={<SettingOutlined />}>
              <span>Settings</span>
            </Menu.Item>
            <Menu.Item key="14" icon={<LogoutOutlined />}>
              <span>Logout</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className={style.header}>
            <div> 
              {collapsed ? (<MenuFoldOutlined className={style.trigger_icon} onClick={toggle}/>):<MenuUnfoldOutlined onClick={toggle}/>}
            </div>
          </Header>
          <Content className={style.content}>
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
  );
}
