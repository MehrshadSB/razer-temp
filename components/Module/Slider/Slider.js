import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import styles from "./sliderStyle.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slider() {
  const images = [
    "/slider/1.webp",
    "/slider/2.webp",
    "/slider/3.webp",
  ];

  return (
    <div className={styles.imageContainer}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true, hide: true }}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <img
            src={images[0]}
            alt=""
            className={styles.images}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img
            src={images[1]}
            alt=""
            className={styles.images}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img
            src={images[2]}
            alt=""
            className={styles.images}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
