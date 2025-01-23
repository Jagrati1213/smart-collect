import React from "react";
import { Flex, Typography } from "antd";
import { HEADER_MENU_ITEMS } from "../../../constant";
import { SwitchComponent } from "../../SwitchComponent";

const { Title } = Typography;
export function DHeader({
  title,
  isReadyToPay = false,
  isSwitchOn = false,
  setIsSwitchOn = () => {},
}) {
  return (
    <Flex align="center" justify="space-between">
      <Title level={4} style={{ margin: "0" }}>
        {title}
      </Title>

      <Flex align="center" gap={"large"}>
        {isReadyToPay && (
          <SwitchComponent
            onText={"Table"}
            offText={"Cards"}
            onColor={"#0F2050"}
            offColor={"#E4F8F9"}
            checked={isSwitchOn}
            onToggle={() => setIsSwitchOn(!isSwitchOn)}
          />
        )}
        {HEADER_MENU_ITEMS?.map((item) => {
          return (
            <div key={item.key} style={{ width: "20px", height: "20px" }}>
              <img
                src={item.imageSrc}
                style={{
                  width: "100%",
                  objectFit: "contain",
                  cursor: "pointer",
                }}
              />
            </div>
          );
        })}
      </Flex>
    </Flex>
  );
}
