import { Flex } from "antd";
import React, { useState } from "react";
import { DHeader } from "../Dashboard/DHeader";
import { Features } from "./Features";
import { CustomerCards } from "./CustomerCards";
import { CustomerTable } from "./CustomerTable";
import Style from "./_ready-to-pay.module.scss";

export default function ReadyToPay() {
  const [amount] = useState(130);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  return (
    <Flex gap={30} vertical className={Style.ready_to_pay}>
      {/* Header */}
      <DHeader
        title={`Ready to Pay: ${amount}`}
        isReadyToPay={true}
        isSwitchOn={isSwitchOn}
        setIsSwitchOn={setIsSwitchOn}
      />

      {/* Features */}
      <Features />

      {/* Details */}
      <div className={Style.details}>
        {!isSwitchOn ? <CustomerCards /> : <CustomerTable />}
      </div>
    </Flex>
  );
}
