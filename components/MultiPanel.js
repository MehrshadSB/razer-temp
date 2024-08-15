import styles from "./multiPanelStyle.module.css";

function MultiPanel() {
  return (
    <div className={styles.container}>
      <h2>WHY BUY FROM RAZER.COM</h2>
      <div className={styles.sections}>
        <ul>
          <li>
            <img src="/Icons/first-dibs-icon.svg" />
          </li>
          <li className={styles.title}>Get First Dibs</li>
          <li>
            Razer.com is the only place where you can buy
            our most anticipated Razer gear immediately upon
            release.
          </li>
        </ul>
        <ul>
          <li>
            <img src="/Icons/largest-array-icon.svg" />
          </li>
          <li className={styles.title}>
            The Largest Array Of Razer Gear
          </li>
          <li>
            As Razer’s official online store, we hold a
            massive collection of products that can’t be
            matched anywhere else.
          </li>
        </ul>
        <ul>
          <li>
            <img src="/Icons/exclusives-icon.svg" />
          </li>
          <li className={styles.title}>
            Exclusive Razer Gear And Swag
          </li>
          <li>
            Get access to limited edition Razer gear that’s
            only available on Razer.com.
          </li>
        </ul>
        <ul>
          <li>
            <img src="/Icons/buynow-paylater-icon.svg" />
          </li>
          <li className={styles.title}>
            Play Now, Pay Later
          </li>
          <li>
            With our 0% installment plan, spend more time
            gaming with your sweet new gear and less time
            fussing over payment.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MultiPanel;
