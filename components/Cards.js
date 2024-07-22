import { useEffect } from "react";
import styles from "./CardsStyle.module.css";

function Cards() {
  useEffect(() => {
    console.log("Re-rendered");
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.discount}>
        <p>7% OFF</p>
      </div>
      <div className={styles.img}>
        <img src="https://assets3.razerzone.com/2qIEzE6PovR0jcvcBUI6HVJQVKM=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhaf%2Fh7b%2F9720377704478%2Fblade14-p10-black-500x500.png" />
      </div>
      <div className={styles.details}>
        <h3>New Razer Blade 14</h3>
        <section>
          <p>
            Ultra-powerful, ultra-portable 14-inch gaming
            laptop with AMD Ryzen™ 9 8945HS processor and
            NVIDIA® GeForce RTX™ 40 Series graphics
          </p>
          <p>
            Now available in a sleek mercury or matte black
            finish.
          </p>
        </section>
        <span>
          From
          <br />
          US$2,499.99
          <br />
          US$2,699.99
        </span>
        <button className={styles.buy}>
          <p>Buy</p>
        </button>
      </div>
      
    </div>
  );
}

export default Cards;
