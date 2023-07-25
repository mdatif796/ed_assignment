import { useEffect, useMemo, useState } from "react";
import styles from "../styles/payment.module.css";
import PlanCard from "./PlanCard";
import clock from "../images/clock.png";
import razorpay from "../images/razorpayIcon.png";

const Payment = () => {
  const [plans, setPlans] = useState([]);
  const [total, setTotal] = useState(179);
  let data = useMemo(
    () => [
      {
        months: 12,
        totalPrice: 99,
        perMonthPrice: 8,
        isRecommended: false,
        isExpired: true,
        isActive: false,
      },
      {
        months: 12,
        totalPrice: 179,
        perMonthPrice: 15,
        isRecommended: true,
        isExpired: false,
        isActive: true,
      },
      {
        months: 6,
        totalPrice: 149,
        perMonthPrice: 25,
        isRecommended: false,
        isExpired: false,
        isActive: false,
      },
      {
        months: 3,
        totalPrice: 99,
        perMonthPrice: 33,
        isRecommended: false,
        isExpired: false,
        isActive: false,
      },
    ],
    []
  );

  useEffect(() => {
    setPlans(data);
  }, [data]);
  const handlePriceChange = (index) => {
    data = data.map((d) => {
      return { ...d, isActive: false };
    });
    data[index].isActive = true;
    setPlans(data);
    setTotal(data[index].totalPrice);
  };
  return (
    <div className={styles.paymentContainer}>
      <div className={styles.btnContainer}>
        <div className={styles.roundDiv}>
          <p>1</p>
          <span>Sign Up</span>
        </div>
        <div className={styles.roundDiv}>
          <p>2</p>
          <span>Subscribe</span>
        </div>
      </div>
      <h2>Select your subscription plan</h2>
      {plans.map((d, index) => {
        return (
          <PlanCard
            planChange={handlePriceChange}
            key={index}
            data={d}
            index={index}
          />
        );
      })}
      <hr
        style={{
          width: "94%",
          backgroundColor: "#cecece",
          marginTop: "1.5rem",
        }}
      />
      <div
        style={{
          width: "88%",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: "0.8rem" }}>Subscription Fee</span>
        <span style={{ fontSize: "0.8rem", fontWeight: "500" }}>₹18,500</span>
      </div>
      <div className={styles.limited}>
        <span
          style={{
            display: "flex",
            width: "93%",
            margin: "auto",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "5px",
          }}
        >
          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: "500",
              color: "#e66b44",
            }}
          >
            Limited time offer
          </span>
          <span style={{ fontSize: "0.8rem", fontWeight: "500" }}>
            -₹18,401
          </span>
        </span>
        <span
          style={{
            color: "#e66b44",
            fontSize: "0.6rem",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            width: "93%",
            margin: "auto",
            marginTop: "3px",
          }}
        >
          <img
            style={{ width: "1rem", height: "1rem", marginRight: "7px" }}
            src={clock}
            alt="clock"
          />
          Offer valid till 25th March 2023
        </span>
      </div>
      <div
        style={{
          width: "88%",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "8px",
        }}
      >
        <span style={{ fontSize: "0.8rem" }}>
          <span style={{ fontWeight: "500" }}>Total</span> (Incl. of 18% GST)
        </span>
        <span style={{ fontSize: "0.8rem", fontWeight: "500" }}>₹{total}</span>
      </div>
      <div className={styles.btn}>
        <button
          style={{
            backgroundColor: "#ffffff",
            border: "2px solid #f99595",
            color: "#f77171",
          }}
        >
          cancel
        </button>
        <button
          style={{
            backgroundColor: "#47ba68",
            border: "2px solid #47ba68",
            color: "#ffffff",
          }}
        >
          proceed to pay
        </button>
      </div>
      <img
        style={{ height: "5%", marginLeft: "0.7rem" }}
        src={razorpay}
        alt="razorpay-img"
      />
    </div>
  );
};

export default Payment;
