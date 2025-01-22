import { Flex, Typography } from "antd";
import React from "react";
import Style from "../_customer.module.scss";

const { Title, Text } = Typography;

export function DetailsCard({ imageSrc, amount, title }) {
  return (
    <Flex
      className={Style.customer_details}
      align="center"
      justify="space-between"
    >
      <div className={Style.icon_image}>
        <img src={imageSrc} />
      </div>
      <Title level={4} className={Style.amount}>
        {amount || 0}
      </Title>
      <Text className={Style.title}>{title}</Text>
    </Flex>
  );
}
