import Cards from "./Cards";
import styles from "./wrapperStyle.module.css";

function Wrapper({ products }) {
  const scrolll = () => {
    let left = document.querySelector(".scroll-image");
    left.scrollBy(-1400, 0);
  };

  const scrollr = () => {
    let left = document.querySelector(".scroll-image");
    left.scrollBy(1400, 0);
  };

  const revealButtons = () => {
    const scrolll = document.querySelector(".scrolll");
    scrolll.style.opacity = "1";
    const scrollr = document.querySelector(".scrollr");
    scrollr.style.opacity = "1";
  };

  const hideButtons = () => {
    const scrolll = document.querySelector(".scrolll");
    scrolll.style.opacity = "0";
    const scrollr = document.querySelector(".scrollr");
    scrollr.style.opacity = "0";
  };


  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => revealButtons()}
      onMouseLeave={() => hideButtons()}
    >
      <div>
        <button
          className={`${styles.scroller} scrolll`}
          onClick={() => scrolll()}
        >
          <img src="/Icons/arrow-left.png" />
        </button>
      </div>
      <div className={styles.cover}>
        <div
          className={`${styles.scrollImage} scroll-image`}
        >
          {products.map((product) => (
            <Cards key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div>
        <button
          className={`${styles.scroller} scrollr`}
          onClick={() => scrollr()}
        >
          <img
            src="/Icons/arrow-right.png"
            className={styles.rightImage}
          />
        </button>
      </div>
    </div>
  );
}

export default Wrapper;
