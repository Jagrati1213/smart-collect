import { Col, Flex, Row, Typography } from "antd";
import React, { useCallback, useState } from "react";
import GIF from "../../../assets/Images/doller.gif";
import { DetailsCard } from "./DetailsCard";
import Style from "./_customer.module.scss";

const { Title, Text } = Typography;

export function CustomerDetails({
  customerEngagementData,
  customerDetailsData,
}) {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpansion = useCallback(() => {
    setExpanded((prevState) => !prevState);
  }, []);
  return (
    <div className={Style.customer_details_container}>
      <Row justify={"space-between"}>
        <Col
          span={12}
          style={{
            boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
            position: "relative",
            cursor: "pointer",
            backgroundColor:" #40d0d124"
          }}
          onClick={handleToggleExpansion}
        >
          {/* Customer details */}
          <Flex vertical className={Style.customer}>
            {/* details */}
            <Flex
              justify="space-between"
              align="center"
              style={{ marginBlockStart: "2rem" }}
            >
              <div className={Style.gif_container}>
                <img src={GIF} />
              </div>
              <h2 className={Style.total_customers}>12,31,004</h2>
            </Flex>
            <h3 className={Style.heading}>Total Customer Engagement</h3>
            <div className={`${Style.circle} ${Style.left}`}></div>
            <div className={`${Style.circle} ${Style.right}`}></div>
          </Flex>

          {/* Dropdown */}
          <Flex vertical className={Style.dropdown_container}>
            {/* arrow */}
            <div className={Style.arrow_container}>
              <button
                className={`${Style.arrow} ${expanded ? "down" : "up"}`}
                onClick={(event) => {
                  event.stopPropagation();
                  handleToggleExpansion();
                }}
              ></button>
            </div>

            {/* data */}
            {expanded && (
              <Row
                align={"top"}
                className={Style.list}
                justify={"space-between"}
              >
                {customerEngagementData?.map((d, index) => {
                  return (
                    <Col span={3} key={index}>
                      <Flex vertical align="center">
                        <Title level={3} style={{ fontWeight: 700 }}>
                          {d?.value}
                        </Title>
                        <Text>{d?.key}</Text>
                      </Flex>
                    </Col>
                  );
                })}
              </Row>
            )}
          </Flex>
        </Col>

        <Col span={11}>
          <Flex vertical gap={11}>
            {customerDetailsData?.map((d, index) => {
              return (
                <DetailsCard
                  key={index}
                  imageSrc={d?.imageSrc}
                  title={d?.title}
                  amount={d?.amount}
                />
              );
            })}
          </Flex>
        </Col>
      </Row>
    </div>
  );
}
