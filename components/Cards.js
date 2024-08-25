import styles from "./CardsStyle.module.css";
import { sp } from "@/services/replaceNumber";

function Cards({ product }) {
  const discount = product.discount_amount / 100;
  const finalPrice =
    product.price - product.price * discount;

  const buyHandler = () => {
   
  };

  return (
    <div className={styles.container}>
      {product.discount_amount ? (
        <div className={styles.discount}>
          <p>{product.tags[0]}</p>
        </div>
      ) : product.tags[0] === "NEW" ? (
        <div className={styles.new}>
          <p>{product.tags[0]}</p>
        </div>
      ) : product.tags[0] === "ONLY AT RAZER" ? (
        <div className={styles.onlyAtRazerCon}>
          <p>{product.tags[0]}</p>
        </div>
      ) : null}

      <div className={styles.img}>
        <img src={product.image} />
      </div>
      <div className={styles.details}>
        <section>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </section>
        <div className={styles.action}>
          {product.discount_amount ? (
            <div>
              From
              <span>US ${sp(finalPrice)}</span>
              <span style={{ color: "#949996" }}>
                <s>US ${sp(product.price)}</s>
              </span>
            </div>
          ) : (
            <div>
              <span className={styles.price}>
                US ${sp(product.price)}
              </span>
            </div>
          )}
          <div>
            <button
              className={styles.buy}
              onClick={buyHandler}
            >
              <p>BUY</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
