import React, { useState } from "react";
import SliderData from "./SliderData";
import classes from "./ImageSlider.module.css";
import {
  KeyboardArrowRightOutlined,
  KeyboardArrowLeftOutlined,
} from "@mui/icons-material";
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={classes.slider}>
      <KeyboardArrowLeftOutlined
        className={classes["left-arrow"]}
        onClick={prevSlide}
      />
      <KeyboardArrowRightOutlined
        className={classes["right-arrow"]}
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="travel image"
                className={classes.image}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
