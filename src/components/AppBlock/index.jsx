import React, { useMemo, useState } from "react";
import { Flex, Layout } from "antd";
import { Outlet } from "react-router";
import Style from "./_app.module.scss";
import { SideMenu } from "./SideMenu";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const { Sider, Content } = Layout;

export default function AppBlock() {
  const [collapsedSideMenu, setCollapsedSideMenu] = useState(true);

  const toggleCollapsedSideMenu = () =>
    setCollapsedSideMenu(!collapsedSideMenu);

  const collapseButtonStyle = useMemo(() => {
    if (collapsedSideMenu) {
      return {
        borderTopRightRadius: "2rem",
        borderBottomRightRadius: "2rem",
      };
    } else {
      return {
        borderTopLeftRadius: "2rem",
        borderBottomLeftRadius: "2rem",
      };
    }
  }, [collapsedSideMenu]);
  return (
    <Layout className={Style.app_container} hasSider>
      <Sider
        className={`${Style.app_container_side_menu} ${
          !collapsedSideMenu ? "collapse" : ""
        }`}
        collapsed={collapsedSideMenu}
      >
        <SideMenu collapsedSideMenu={collapsedSideMenu} />
      </Sider>

      <Flex align="center" justify="center" style={{ margin: "0 10px" }}>
        <button
          onClick={toggleCollapsedSideMenu}
          className={`${Style.menu_button} ${
            !collapsedSideMenu ? "expended" : ""
          }`}
          style={collapseButtonStyle}
        >
          {collapsedSideMenu ? <IoIosArrowForward /> : <IoIosArrowBack />}
        </button>
      </Flex>

      <Layout style={{ background: "white" }}>
        <Content
          className={Style.app_container_content}
          style={{
            marginLeft: !collapsedSideMenu ? "330px" : "110px",
            width: `calc(100% - ${!collapsedSideMenu ? "330px" : "110px"})`,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
