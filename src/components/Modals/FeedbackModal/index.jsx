import { Flex, Modal, Tabs,Typography } from 'antd';
import React, { useEffect, useState } from 'react'
import FEEDBACK_IMG from "../../../assets/Images/fluent-mdl2_feedback.png";
import Style from "./_feedback.module.scss";

const {Title} = Typography;

export function FeedbackModal({modalStatus = false, handleSubmit, handleCancel }) {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const items = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];

  const handleChange = (key)=>{
    console.log(key);
  }

  const handleOk = () => {
    setIsFeedbackModalOpen(false);
    handleSubmit();
  };

  const handleCross = () => {
    setIsFeedbackModalOpen(false);
    handleCancel();
  };
  
  useEffect(()=>{
    setIsFeedbackModalOpen(modalStatus);
  },[modalStatus]);

  return (
    <Modal className={Style.feedback_modal} 
    title={
      <Flex align='center' gap={5} justify='center'>
        <div className={Style.icon_img}>
          <img src={FEEDBACK_IMG} alt='icon'/>
        </div>
        <Title level={4} className={Style.feedback_title}>Feedback</Title>
      </Flex>
    }
    open={isFeedbackModalOpen} 
    onOk={handleOk} 
    onCancel={handleCross}
    >
      <Flex>
          <Tabs defaultActiveKey="1" items={items} onChange={handleChange} />
      </Flex>
  </Modal>
  )
}
