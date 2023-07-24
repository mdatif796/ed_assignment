import styles from "../styles/planCard.module.css";
import tick from "../images/Daco_4675609.png";

const PlanCard = (props) => {
  const {
    months,
    totalPrice,
    perMonthPrice,
    isRecommended,
    isExpired,
    isActive,
  } = props.data;
  return (
    <div
      onClick={() => {
        props.planChange(props.index);
      }}
      className={[
        styles.planCardContainer,
        isActive ? styles.greenBorder : "",
        isExpired ? styles.expired : "",
      ].join(" ")}
    >
      {isRecommended && <span className={styles.recommended}>Recommended</span>}
      <div className={styles.leftDiv}>
        <span
          className={[styles.circle, isActive ? styles.greenCircle : ""].join(
            " "
          )}
        >
          {!isExpired && (
            <img
              style={{ width: "0.5rem", height: "0.5rem" }}
              src={tick}
              alt=""
            />
          )}
          {isExpired && (
            <span
              style={{
                display: "inline-block",
                width: "0.6rem",
                height: "0.6rem",
                backgroundColor: "#bebebe",
                borderRadius: "50%",
              }}
            ></span>
          )}
        </span>
        <span className={styles.subscription}>
          {months} Months Subscription
        </span>
      </div>
      <div className={styles.rightDiv}>
        <span className={styles.totalPrice}>
          Total{" "}
          <span style={{ fontSize: "0.8rem", fontWeight: "500" }}>
            ₹{totalPrice}
          </span>
        </span>
        <span style={{ fontSize: "0.6rem", fontWeight: "500" }}>
          ₹{perMonthPrice}{" "}
          <span
            style={{ fontSize: "0.4rem", fontWeight: "500", color: "#cecece" }}
          >
            /mo
          </span>
        </span>
      </div>
    </div>
  );
};

export default PlanCard;
