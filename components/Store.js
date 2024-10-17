import styles from "./storeStyle.module.css";
import Wrapper from "./Wrapper";

function Store({ products, title, details }) {
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
