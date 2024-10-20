import styles from "./CardsStyle.module.css";
import { sp } from "@/services/replaceNumber";
import usePostProduct from "@/Hooks/useCarts";
import { useRef } from "react";

function Cards({ product }) {
  const discount = product.discount_amount / 100;
  const finalPrice =
    product.price - product.price * discount;
  const post = usePostProduct();
  const buyButton = useRef(null);
  const doneButton = useRef(null);

  const buyHandler = (id) => {
    const data = { product: id, quantity: 1 };
    const { postRes, loading, error } = post(
      "/order/add-item/",
      data
    );

    switch (loading) {
      case true:
        console.log({ postRes, loading, error });
      case false:
        buyButton.current.style.display = "none";
        doneButton.current.style.display = "block";
        break;
      default:
        break;
    }
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
              ref={buyButton}
              onClick={() => buyHandler(product.id)}
            >
              <p ref={buyButton}>BUY</p>
            </button>
            <button
              className={styles.buy}
              ref={doneButton}
              style={{ display: "none" }}
            >
              <p>✔</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
