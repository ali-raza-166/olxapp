import React from "react";
import classes from "./AutoPlaySlider.module.css";
import { useState, useEffect, useRef } from "react";
import img1 from "../../../assets/banner.jpeg";
import img2 from "../../../assets/banner.jpeg";
import img3 from "../../../assets/banner.jpeg";

// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const imgArr = [img1, img2, img3];
const delay = 2500;

const AutoPlaySlider = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imgArr.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={classes.slideshow}>
      <div
        className={classes.slideshowSlider}
        style={{ transform: `translate(${-index * 100}%, 0, 0)` }}
      >
        {imgArr.map((img, index) => (
          <img src={img} key={index} alt="banner"></img>
        ))}
      </div>
    </div>
  );
};
export default AutoPlaySlider;
