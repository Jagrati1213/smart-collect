import React from "react";
import { Card } from "./Card";
import { Col, Flex, Row } from "antd";

export function CustomerCards() {
  const customerData = {
    name: "Sunita Datta Gaikwad",
    customerId: "234000033",
    disbursementId: "042-090909090",
    branchName: "SSK Gandhi Nagar",
    loanType: "Pavanraje Renewal 18k",
    overdueAmount: "23,000",
    promiseAmount: "23,000",
    promiseDate: "09-01-2025",
    feedbackDate: "02-01-2025",
  };

  return (
    <Row gutter={[60, 60]} align={"middle"} wrap>
      {Array(6)
        .fill(null)
        ?.map((_, index) => {
          return (
            <Col span={8} key={index}>
              <Card {...customerData} />
            </Col>
          );
        })}
    </Row>
  );
}
