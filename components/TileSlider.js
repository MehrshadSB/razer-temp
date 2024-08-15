import styles from "./TileSliderStyle.module.css";
import { tile } from "@/Constants/Const";
function TileSlider() {
  const scrolll = () => {
    let left = document.querySelector(".scroll-image2");
    left.scrollBy(-1400, 0);
  };

  const scrollr = () => {
    let left = document.querySelector(".scroll-image2");
    left.scrollBy(1400, 0);
  };

  const revealButtons = () => {
    const scrolll = document.querySelector(".scrolll2");
    scrolll.style.opacity = "1";
    const scrollr = document.querySelector(".scrollr2");
    scrollr.style.opacity = "1";
  };

  const hideButtons = () => {
    const scrolll = document.querySelector(".scrolll2");
    scrolll.style.opacity = "0";
    const scrollr = document.querySelector(".scrollr2");
    scrollr.style.opacity = "0";
  };

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => revealButtons()}
      onMouseLeave={() => hideButtons()}
    >
      <div className={styles.buttons}>
        <div>
          <button
            className={`${styles.scroller} scrolll2`}
            onClick={() => scrolll()}
          >
            <img src="/Icons/arrow-left.png" />
          </button>
        </div>
        <div>
          <button
            className={`${styles.scroller} scrollr2 ${styles.scrollRight}`}
            onClick={() => scrollr()}
          >
            <img
              src="/Icons/arrow-right.png"
              className={styles.rightImage}
            />
          </button>
        </div>
      </div>
      <div className={`${styles.cover} scroll-image2`}>
        {tile.map((item) => (
          <div key={item.title} className={styles.cards}>
            <div className={styles.title}>
              <h4>{item.title}</h4>
            </div>
            <img src={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TileSlider;
