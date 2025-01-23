import { Flex, Typography } from "antd";
import React from "react";
import PROFILE_IMG from "../../../../assets/Images/gg_profile.png";
import HISTORY_IMG from "../../../../assets/Images/history.png";
import PHONE_IMG from "../../../../assets/Images/mi_call.png";
import DISBURSEMENT_IMG from "../../../../assets/Images/disbursement-id.png";
import EDIT_IMG from "../../../../assets/Images/edit.png";
import LOAN_IMG from "../../../../assets/Images/carbon_global-loan-and-trial.png";
import DATE_IMG from "../../../../assets/Images/clarity_date-line.png";
import { PayDetails } from "./PayDetails";
import { ATTEMPTS_FEATURES_DATA } from "../../../../constant";
import Style from "./_card.module.scss";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

export function Card({
  name,
  customerId,
  disbursementId,
  branchName,
  loanType,
  overdueAmount,
  promiseAmount,
  promiseDate,
  feedbackDate,
}) {
  return (
    <Flex vertical className={Style.card_container}>
      {/* customer details */}
      <Flex
        justify="space-between"
        align="start"
        className={Style.customer_details}
      >
        <Flex gap={10} align="start">
          {/* icon */}
          <div className={Style.profile_img}>
            <img src={PROFILE_IMG} alt={name} />
          </div>

          {/* details */}
          <Flex vertical gap={5}>
            <Title level={4} className={Style.name}>
              {name}
            </Title>
            <Text className={Style.customer_id}>Customer ID: {customerId}</Text>
          </Flex>
        </Flex>

        {/* icons */}
        <Flex gap={20}>
          <div className={Style.profile_img}>
            <img src={PHONE_IMG} alt="phone" />
          </div>
          <div className={Style.profile_img}>
            <img src={HISTORY_IMG} alt="history" />
          </div>
        </Flex>
      </Flex>

      {/* payments details */}
      <Flex vertical gap={5} className={Style.payment_details}>
        <div className={Style.attempts}>
          <Flex justify="space-between" align="center">
            <Text className={Style.attempts_value}>
              No. of Attempts: <span style={{ color: "black" }}>2</span>
            </Text>

            <Flex vertical>
              <div className={Style.indicator_box}>
                <Flex gap={9}>
                  <Flex align="center">
                    <span className={`${Style.dot} ${Style.green}`}></span>
                  </Flex>
                  <Flex align="center">
                    <span className={`${Style.dot} ${Style.green}`}></span>
                  </Flex>
                  <Flex align="center">
                    <span className={`${Style.dot} ${Style.red}`}></span>
                  </Flex>
                  <Flex align="center">
                    <span className={`${Style.dot} ${Style.grey}`}></span>
                  </Flex>
                  <Flex align="center">
                    <span className={`${Style.dot} ${Style.grey}`}></span>
                  </Flex>
                </Flex>
              </div>

              <Flex gap={6} className={Style.images} justify="space-evenly">
                {ATTEMPTS_FEATURES_DATA?.map((f, index) => {
                  return (
                    <div className={Style.icon_img} key={index}>
                      <img src={f.imgSrc} />
                    </div>
                  );
                })}
              </Flex>
            </Flex>
          </Flex>
        </div>

        <PayDetails
          image={DISBURSEMENT_IMG}
          title={"Disbursement ID"}
          value={disbursementId}
        />
        <PayDetails image={EDIT_IMG} title={"Branch Name"} value={branchName} />
        <PayDetails image={LOAN_IMG} title={"Loan Type"} value={loanType} />
      </Flex>

      {/* amount details */}
      <Flex
        justify="space-evenly"
        align="center"
        gap={20}
        className={Style.amount_details}
      >
        <Flex vertical align="center" gap={10}>
          <Title level={3} className={`${Style.amount} ${Style.error}`}>
            Rs.{overdueAmount}
          </Title>
          <Link to="#" className={Style.text} style={{textDecoration:"underline"}}>Overdue Amount</Link>
        </Flex>
        <Flex vertical align="center" gap={10}>
          <Title level={3} className={`${Style.amount} ${Style.success}`}>
            Rs.{promiseAmount}
          </Title>
          <Text className={Style.text}>Promise Amount</Text>
        </Flex>
      </Flex>

      {/* dates */}
      <Flex vertical gap={5} className={Style.date_details}>
        <PayDetails
          image={DATE_IMG}
          title={"Promise date"}
          value={promiseDate}
        />
        <PayDetails
          image={DATE_IMG}
          title={"Latest BM Feedback Date"}
          value={feedbackDate}
        />

        <Link to="#" className={Style.view_link}>
          <Text>View</Text>
        </Link>
      </Flex>

      {/* feedback */}
      <div className={Style.feedback}>
        <button className={Style.feedback_button}>Feedback</button>
      </div>
    </Flex>
  );
}
