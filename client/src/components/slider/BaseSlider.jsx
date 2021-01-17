import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import classes from "./Slider.module.scss";

const BaseSlider = ({
  slidesToShow,
  swipeToSlide,
  accessibility,
  arrows,
  infinite,
  speed,
  sliderData,
  Component,
  responsive,
}) => {
  return (
    <div className={classes["slider"]}>
      <Slider
        slidesToShow={slidesToShow}
        swipeToSlide={swipeToSlide}
        accessibility={accessibility}
        arrows={arrows}
        infinite={infinite}
        speed={speed}
        responsive={responsive}
      >
        {sliderData.map(item => {
          return (
            <div key={item.id}>
              <Component
                title={item.title ? item.title : null}
                icon={item.icon ? item.icon : null}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};


export default React.memo(BaseSlider)