import { Flex, Typography } from "antd";
import React from "react";
import Style from "./_features.module.scss";
import { FEATURES_DATA } from "../../../constant";

const { Text } = Typography;

export function Features() {
  return (
    <Flex justify="end">
      <Flex className={Style.feature_container} gap={20}>
        {FEATURES_DATA?.map((f, index) => {
          return (
            <Flex key={index} align="center" gap={10}>
              <div className={Style.icon_img}>
                <img src={f.imgSrc} />
              </div>
              <Text className={Style.title}>{f.name}</Text>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}
