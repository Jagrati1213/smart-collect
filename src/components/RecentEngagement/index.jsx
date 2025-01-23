import { Flex } from 'antd';
import React, { useEffect, useState } from 'react'
import { STATUS_IDS } from '../../constant';
import Style from "./_recent.module.scss";

export function RecentEngagement({recentEngagementAppsData, indicatorGap = 9}) {
  return (
    <Flex vertical className={Style.recent}>
      <div className={Style.indicator_box}>
        <Flex gap={indicatorGap}>
        {recentEngagementAppsData?.map((app, index)=> <Indicator indicateStatus={app?.status} key={index}/>)}
        </Flex>
      </div>

      <Flex gap={6} className={Style.images} justify="space-evenly">
        {recentEngagementAppsData?.map((app, index)=>{
          return <div className={Style.icon_img} key={index}>
                {app?.imgSrc &&<img src={app?.imgSrc} />}
              </div>})}
      </Flex>  
      
  </Flex>
  )
}

const Indicator =({indicateStatus=STATUS_IDS.SUCCESS})=>{
  const colors = [
    {status:STATUS_IDS.SUCCESS, value: "#02951a"},
    {status:STATUS_IDS.REJECTED, value:"#ec3939"},
    {status:STATUS_IDS.PENDING,value:"#cacdca"}
  ];
  const [color, setColor] = useState("gray");

  useEffect(()=>{
    const selectedIndicate = colors.find((c)=> c.status === indicateStatus).value
    setColor(selectedIndicate);
  },[indicateStatus]);

  return <Flex align="center"><span className={`${Style.dot}`} style={{ backgroundColor: color }}></span></Flex>
}