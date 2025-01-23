import { Flex, Table, Typography } from "antd";
import React from "react";
import HISTORY_IMG from "../../../assets/Images/history_icon.png";
import PHONE_IMG from "../../../assets/Images/call_icon.png";
import { RecentEngagement } from "../../RecentEngagement";
import { RECENT_ENGAGEMENT_APPS_DATA } from "../../../constant";
import Style from "./_custom-table.module.scss";

const {Text} = Typography;

export function CustomerTable() {

  const columns = [
    {
      title: 'Sr. No.',
      dataIndex: 'key',
      rowScope: 'row',
      width:90,
      render:(_, data)=> <Text>{data.key}.</Text>
    },
    {
      title: 'Customer Name',
      dataIndex: 'name',
      render:(_, data)=> <Text className={Style.name}>{data.name}</Text>,
      responsive: ['md']
    },
    {
      title: 'Recent Engagement',
      dataIndex: 'recent_engagement',
      render:()=> <RecentEngagement recentEngagementAppsData={RECENT_ENGAGEMENT_APPS_DATA} indicatorGap={13} />
    },
    {
      title: 'No. of Attempts',
      dataIndex: 'attempts',
      render:(_, data)=><Flex justify="center"> <Text className={Style.attempts}>{data.attempts}</Text></Flex>

    },
    {
      title: 'Customer ID',
      dataIndex: 'customerId',
      render:(_, data)=> <Text className={Style.customerId}>{data.customerId}</Text>
    },
    {
      title: 'Disbursement ID',
      dataIndex: 'disbursementId',
      render:(_, data)=> <Text className={Style.disbursementId}>{data.disbursementId}</Text>
    },
    {
      title: 'Branch Name',
      dataIndex: 'branchName',
    },
    {
      title: 'Loan Type',
      dataIndex: 'loanType',
      width:250,
      render:(_, data)=> <Text className={Style.loanType}>{data.loanType}</Text>
    },
    {
      title: 'Overdue Amount',
      dataIndex: 'overdueAmount',
      render:(_, data)=> <Text>₹{data.overdueAmount}</Text>
    },
    {
      title: 'Promise Amount',
      dataIndex: 'promiseAmount',
      render:(_, data)=> <Text>₹{data.promiseAmount}</Text>
    },
    {
      title: 'Promise Date',
      dataIndex: 'promiseDate',
    },
    {
      title: 'History',
      dataIndex: 'history',
      fixed: 'right',
      width:100,
      render:()=> <div className={Style.icon_div}>
        <div className={Style.icon_img}><img src={HISTORY_IMG}/></div>
      </div>
    },
    {
      title: 'Call',
      dataIndex: 'call',
      fixed: 'right',
      width:100,
      render:()=> <div className={Style.icon_div}>
        <div className={Style.icon_img}> <img src={PHONE_IMG}/></div>
    </div>
    },
  ];


  const dataSource = Array.from({
    length: 50,
    }).map((_, i) => ( {
      key: i+1,
      name: "Sunita Datta Gaikwad",
      customerId: "234000033",
      disbursementId: "26276272",
      branchName: "SSK Gandhi Nagar",
      loanType: "Pavanraje Renewal 18k",
      overdueAmount: "23,000",
      promiseAmount: "23,000",
      promiseDate: "09-01-2025",
      feedbackDate: "02-01-2025",
      attempts:2
  }));
  return <>
    <Table
      virtual
      className={Style.customTable}
      columns={columns}
      dataSource={dataSource}
      scroll={{
        x: 2000,
        y: 460,
      }}
      pagination={{
        
      }}
    />
  </>;
}
