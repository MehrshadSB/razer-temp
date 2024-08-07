import api from "@/services/api";
import styles from "./storeStyle.module.css";
import Wrapper from "./Wrapper";

function Store({ products }) {
  const freshOffTheLine = products.filter((product) =>
    product.tags.includes("FRESH OFF THE LINE")
  );

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>FRESH OFF THE LINES</h2>
        <div className={styles.paragraphs}>
          <p>
            Check out our latest releases to secure the most
            up-to-date upgrades for your setup
          </p>
        </div>
      </div>
      <Wrapper products={freshOffTheLine} />
    </section>
  );
}

export default Store;
