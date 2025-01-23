import React, { useState } from "react";
import { DHeader } from "./DHeader";
import { DataCarousel } from "./DataCarousel";
import { Flex } from "antd";
import { CustomerDetails } from "./CustomerDetails";
import { PayCardDetails } from "./PayCardDetails";
import {
  CUSTOMER_DETAILS_DATA,
  CUSTOMER_ENGAGEMENT_DATA,
  DASHBOARD_CAROUSEL_DATA,
  PAYMENT_DETAILS_DATA,
} from "../../constant";

export default function Dashboard() {
  const [carouselData] = useState(DASHBOARD_CAROUSEL_DATA);
  const [customerEngagementData] = useState(CUSTOMER_ENGAGEMENT_DATA);
  const [customerDetailsData] = useState(CUSTOMER_DETAILS_DATA);
  const [payDetailsData] = useState(PAYMENT_DETAILS_DATA);

  return (
    <Flex gap={20} vertical>
      {/* Header */}
      <DHeader title={"Dashboard"} />

      <Flex vertical gap={32}>
        {/* Data carousel */}
        <DataCarousel data={carouselData} />

        {/* Customer details */}
        <CustomerDetails
          customerEngagementData={customerEngagementData}
          customerDetailsData={customerDetailsData}
        />

        {/* Pay cards */}
        <PayCardDetails data={payDetailsData} />
      </Flex>
    </Flex>
  );
}
