import styles from "./storeStyle.module.css";
import Wrapper from "./Wrapper";

function Store({ products, title, details }) {
  const randomString = Math.abs(
    Math.random()
      .toString()
      .split("")
      .reduce(function (p, c) {
        return (p << 5) - p + c;
      })
  )
    .toString(36)
    .substr(0, 11);
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <div className={styles.paragraphs}>
          <p>{details}</p>
        </div>
      </div>
      <Wrapper products={products}/>
    </section>
  );
}

export default Store;
