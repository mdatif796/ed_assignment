import styles from "../styles/paymentPage.module.css";
import book from "../images/book.png";
import time from "../images/time.png";
import live from "../images/live.png";
import hat from "../images/hat.png";
import ad from "../images/ad.png";
import Payment from "./Payment";

const PaymentPage = () => {
  return (
    <div className={styles.paymentPage}>
      <div className={styles.leftDiv}>
        <h1 className={styles.aboutH1}>
          Access curated courses worth{" "}
          <span style={{ fontSize: "3rem" }}>₹</span>
          <span className={styles.outer}>
            <span className={styles.inner}>18500</span>
          </span>
          at just <span className={styles.downPrice}>₹ 99</span> per year!
        </h1>
        <div className={styles.featureContainer}>
          <img src={book} alt="book" />
          <p>
            <span>100+</span> Job relevant courses
          </p>
        </div>
        <div className={styles.featureContainer}>
          <img src={time} alt="time" />
          <p>
            <span>20,000+</span> Hours of content
          </p>
        </div>
        <div className={styles.featureContainer}>
          <img src={live} alt="live" />
          <p>
            <span>Exclusive</span> webinar access
          </p>
        </div>
        <div className={styles.featureContainer}>
          <img src={hat} alt="hat" />
          <p>
            Scholarship worth <span>₹94,500</span>
          </p>
        </div>
        <div className={styles.featureContainer}>
          <img src={ad} alt="ad" />
          <p>
            <span>Ad Free</span> learning experience
          </p>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <Payment />
      </div>
    </div>
  );
};

export default PaymentPage;
