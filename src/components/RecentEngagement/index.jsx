import { Flex } from 'antd';
import React from 'react'
import Style from "./_recent.module.scss";

export function RecentEngagement({data}) {
  return (
    <Flex vertical className={Style.recent}>
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
      {data?.map((f, index) => {
        return (
          <div className={Style.icon_img} key={index}>
            <img src={f.imgSrc} />
          </div>
        );
      })}
    </Flex>
  </Flex>
  )
}
