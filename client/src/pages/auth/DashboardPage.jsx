import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page from "../layout/Page";
import { Button, Layout, Menu } from "antd";
import classes from "./AuthPage.module.scss";
import { useDispatch } from "react-redux";
import { authLogout } from "../../redux/actions/auth.actions";
import { withNamespaces } from "react-i18next";
import SelectLanguage from "../../components/selectLanguage/SelectLanguage";
import logoSvg1 from "../../assets/img/default-monochrome.svg";
import logoSvg2 from "../../assets/img/default-monochrome-white.svg";
import logoSvg3 from "../../assets/img/isolated-monochrome-white.svg";
import logoSvg4 from "../../assets/img/profile.png";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import Workspaces from "./components/Workspaces";

const DashboardPage = ({ t }) => {
  const { Header, Sider, Content } = Layout;
  const { SubMenu } = Menu;

  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("/dashboard/overview");
  const dispatch = useDispatch();
  const toggle = () => setCollapsed(!collapsed);
  const logout = () => dispatch(authLogout());

  const handleMenuItemClick = ({ key }) => {
    setSelectedMenu(key);
    localStorage.setItem("selectedMenuItem", key);
  };
  const selItem = localStorage.getItem("selectedMenuItem");

  return (
    <Router>
      <Page>
        <Layout className={classes["admin_dashboard_wrapper"]}>
          <Sider width={300} trigger={null} collapsible collapsed={collapsed}>
            <div className={classes["logo"]}>
              <img src={!collapsed ? logoSvg2 : logoSvg3} alt="Contact.me" />
            </div>
            <Menu
              className={classes["menu"]}
              mode="inline"
              onClick={handleMenuItemClick}
              selectedKeys={[selItem]}
            >
              <Menu.Item key="/dashboard/overview" icon={<DashboardOutlined />}>
                <Link to="/dashboard/overview">{t("Dashboard")}</Link>
              </Menu.Item>
              <Menu.Item
                key="/dashboard/workspaces"
                icon={<NotificationOutlined />}
              >
                <Link to="/dashboard/workspaces">{t("Workspace")}</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className={classes["site-layout"]}>
            <Header
              className={classes["site-layout-background"]}
              style={{ padding: 0 }}
            >
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: classes["trigger"],
                  onClick: toggle,
                }
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <SelectLanguage />
                <Button
                  className={classes["logout-btn"]}
                  style={{ marginLeft: "1rem" }}
                  onClick={logout}
                >
                  {t("Logout")}
                </Button>
              </div>
            </Header>
            <Content
              className={classes["site-layout-content"]}
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <Route path="/dashboard/workspaces">
                <Workspaces />
              </Route>
            </Content>
          </Layout>
        </Layout>
      </Page>
    </Router>
  );
};

export default React.memo(withNamespaces()(DashboardPage));
