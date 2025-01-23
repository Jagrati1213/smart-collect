import { Flex } from "antd";
import Slider from "react-slick";
import React from "react";
import { Typography } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from "./_carousel.module.scss";

const { Title, Text } = Typography;

export function DataCarousel({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ], //TODO: make responsive
  };
  
  return (
    <div className={Style.slider_container}>
      <Slider {...settings}>
        {data?.length
          ? data?.map((d, index) => {
              return (
                <Flex vertical key={index} className={Style.d_card} gap={0}>
                  <Title level={3} className={Style.value}>
                    {d?.value}
                  </Title>
                  <Text style={{ fontWeight: 400 }} className={Style.date}>
                    {d?.date}
                  </Text>
                </Flex>
              );
            })
          : null}
      </Slider>
    </div>
  );
}
