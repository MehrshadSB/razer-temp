import ImageSlider from "./ImageSlider";
import styles from "./sliderStyle.module.css";

function Slider() {
  const images = [
    "/slider/1.webp",
    "/slider/2.webp",
    "/slider/3.webp",
  ];

  return (
    <div className={styles.imageContainer}>
      <ImageSlider slides={images} />
    </div>
  );
}

export default Slider;
