import { Flex, Menu } from "antd";
import React from "react";
import COMPANY_LOGO from "../../../assets/Images/logo.png";
import COMPANY_NAME_IMG from "../../../assets/Images/logo-title.png";
import MARKYTICS_LOGO from "../../../assets/Images/markytics-logo.png";
import { MENU_IDS } from "../../../constant";
import DASHBOARD_IMG from "../../../assets/Images/Frame.png";
import REGISTERED_CALLING_IMG from "../../../assets/Images/Frame-1.png";
import REFRESH_CALL_LOGS_IMG from "../../../assets/Images/Frame-2.png";
import REFER_CV_IMG from "../../../assets/Images/Frame-3.png";
import LOGOUT_IMG from "../../../assets/Images/Frame-4.png";
import { Link, useLocation } from "react-router";
import { Typography } from "antd";
import Style from "./_side.module.scss";

const { Title } = Typography;
export function SideMenu({ collapsedSideMenu }) {
  const location = useLocation();
  const menuItems = [
    {
      key: MENU_IDS.DASHBOARD,
      icon: (
        <div
          style={{ width: "20px", height: "20px", marginInlineEnd: "0.5rem" }}
        >
          <img
            src={DASHBOARD_IMG}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </div>
      ),
      label: (
        <Link
          to="/"
          style={{
            fontWeight: "400",
            fontSize: "1.1rem",
            letterSpacing: ".5px",
            marginInlineStart: "1rem",
          }}
        >
          Dashboard
        </Link>
      ),
    },
    {
      key: MENU_IDS.REGISTERED_CALLING,
      icon: (
        <div
          style={{ width: "20px", height: "20px", marginInlineEnd: "0.5rem" }}
        >
          <img
            src={REGISTERED_CALLING_IMG}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </div>
      ),
      label: (
        <Link
          to={`/${MENU_IDS.REGISTERED_CALLING}`}
          style={{
            fontWeight: "400",
            fontSize: "1.1rem",
            letterSpacing: ".5px",
            marginInlineStart: "1rem",
          }}
        >
          Registered Calling
        </Link>
      ),
    },
    {
      key: MENU_IDS.REFRESH_CALL_LOGS,
      icon: (
        <div
          style={{ width: "20px", height: "20px", marginInlineEnd: "0.5rem" }}
        >
          <img
            src={REFRESH_CALL_LOGS_IMG}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </div>
      ),
      label: (
        <Link
          to={`/${MENU_IDS.REFRESH_CALL_LOGS}`}
          style={{
            fontWeight: "400",
            fontSize: "1.1rem",
            letterSpacing: ".5px",
            marginInlineStart: "1rem",
          }}
        >
          Refresh Call Logs
        </Link>
      ),
    },
    {
      key: MENU_IDS.REFER_CV,
      icon: (
        <div
          style={{ width: "20px", height: "20px", marginInlineEnd: "0.5rem" }}
        >
          <img
            src={REFER_CV_IMG}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </div>
      ),
      label: (
        <Link
          to={`/${MENU_IDS.REFER_CV}`}
          style={{
            fontWeight: "400",
            fontSize: "1.1rem",
            letterSpacing: ".5px",
            marginInlineStart: "1rem",
          }}
        >
          Refer CV
        </Link>
      ),
    },
    {
      key: MENU_IDS.LOGOUT,
      icon: (
        <div
          style={{ width: "20px", height: "20px", marginInlineEnd: "0.5rem" }}
        >
          <img
            src={LOGOUT_IMG}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </div>
      ),
      label: (
        <p
          style={{
            fontWeight: "400",
            fontSize: "1.1rem",
            letterSpacing: ".5px",
            margin: 0,
            marginInlineStart: "1rem",
          }}
        >
          Logout
        </p>
      ),
      // onClick: handleLogout,
    },
  ];

  return (
    <>
      {/* Logo */}
      <div className={Style.logo_container}>
        <div className={Style.logo_image}>
          <img src={COMPANY_LOGO} />
        </div>
        {!collapsedSideMenu && (
          <div className={Style.logo_title_image}>
            <img src={COMPANY_NAME_IMG} />
          </div>
        )}
      </div>

      {/* Side menus */}
      <Menu
        defaultSelectedKeys={[
          location.pathname === "/" ? "dashboard" : location.pathname.slice(1),
        ]}
        mode="inline"
        inlineCollapsed={collapsedSideMenu}
        items={menuItems}
      />

      {/* Powered by */}
      <Flex
        align="center"
        justify="center"
        gap="small"
        style={{
          visibility: `${!collapsedSideMenu ? "visible" : "hidden"}`,
          padding: "1rem 0.6rem",
        }}
      >
        <div className={Style.power_by}>
          <img src={MARKYTICS_LOGO} />
        </div>
        <Title
          level={4}
          style={{
            color: "white",
            margin: "0",
            fontSize: "1.3rem",
            whiteSpace: "nowrap",
          }}
        >
          Powered by Markytics
        </Title>
      </Flex>
    </>
  );
}
