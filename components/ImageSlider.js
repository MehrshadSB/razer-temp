import { useState } from "react";
import styles from "./imageSliderStyle.module.css";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyle = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex]})`,
  };

  const revealButtons = () => {
    const scrolll = document.querySelector(".scrollll");
    scrolll.style.opacity = "1";
    const scrollr = document.querySelector(".scrollrr");
    scrollr.style.opacity = "1";
  };

  const hideButtons = () => {
    const scrolll = document.querySelector(".scrollll");
    scrolll.style.opacity = "0";
    const scrollr = document.querySelector(".scrollrr");
    scrollr.style.opacity = "0";
  };

  const goToNext = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? slides.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToPrevious = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex, e) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      className={styles.container}
      onMouseLeave={() => hideButtons()}
      onMouseEnter={() => revealButtons()}
    >
      <div
        className={`${styles.leftArrowStyle} scrollll`}
        onClick={goToNext}
      >
        <img src="/Icons/arrow-left.png" alt="" />
      </div>
      <div style={slideStyle} className={styles.animation}>
        <div
          className={styles.content}
          style={
            currentIndex === 0
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <h2>CONQUER YOUR CAMPUS</h2>
          <div>NEW BACK-TO-SCHOOL SPECIALS</div>
          <ul>
            <li>Shop Now</li>
          </ul>
        </div>
        <div
          className={`${styles.content} ${styles.basilisk}`}
          style={
            currentIndex === 1
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <h2>RAZERSTORE REWARDS GIVEAWAY</h2>
          <div>WIN A RAZER BASILISK V3 PRO BUNDLE</div>
          <ul>
            <li>Join Now</li>
          </ul>
        </div>
        <div
          className={`${styles.content} ${styles.basilisk}`}
          style={
            currentIndex === 2
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <h2>RAZER | HELLO KITTY</h2>
          <div>NOW AVAILABLE ON RAZER CUSTOMS</div>
          <ul>
            <li>Shop Now</li>
          </ul>
        </div>
      </div>
      <div
        className={`${styles.rightArrowStyle} scrollrr`}
        onClick={goToPrevious}
      >
        <img src="/Icons/arrow-right.png" alt="" />
      </div>
      <div className={styles.dotsContainerStyle}>
        {slides.map((slide, slideIndex) => (
          <div
            className={styles.dotStyle}
            onClick={() => goToSlide(slideIndex)}
            key={slideIndex}
            style={
              currentIndex === slideIndex
                ? { backgroundColor: "#44D62C" }
                : { backgroundColor: "#CCCCCC" }
            }
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
