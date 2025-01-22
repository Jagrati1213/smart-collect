import React from "react";
import { Flex, Typography } from "antd";
import Style from "../_card.module.scss";

const { Text } = Typography;

export function PayDetails({ title, image, value }) {
  return (
    <Flex justify="space-between">
      <Flex gap={10} align="center">
        <div className={Style.icon_img}>
          <img src={image} />
        </div>
        <Text className={Style.title}>{title}:</Text>
      </Flex>
      <Text className={Style.value}>{value}</Text>
    </Flex>
  );
}
