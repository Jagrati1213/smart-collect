import { Flex, Typography } from "antd";
import React from "react";
import Style from "./_pay.module.scss";
import { Link } from "react-router";

const { Title, Text } = Typography;

export function PayCardDetails({ data }) {
  return (
    <div className={Style.pay_container}>
      <Flex gap={40} justify="space-between" wrap>
        {data?.map((d, index) => {
          return (
            <Link
              to={d?.link || "#"}
              key={index}
              className={Style.card}
              style={{ background: `${d?.color}` }}
            >
              <Flex align="center" justify="space-between">
                <Flex vertical gap={3} className={Style.card_details}>
                  <Title level={2} style={{ color: `${d?.textColor}` }}>
                    {d?.amount}
                  </Title>
                  <Text>{d?.title}</Text>
                </Flex>

                <div className={Style.pay_image}>
                  <img src={d?.imageSrc} alt={d?.title} />
                </div>
              </Flex>
            </Link>
          );
        })}
      </Flex>
    </div>
  );
}
