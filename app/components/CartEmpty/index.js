import React from "react";
import EmptyCartIcon from "../../assets/icons/EmptyCartIcon";
import { CURRENTLY_EMPTY, YOUR_BAG } from "../../utils/constants";
import styles from "./CartEmpty.module.scss";

const CartEmpty = () => {
  return (
    <div className={styles.mainEmptyCartBox}>
      <EmptyCartIcon className={styles.emptyCartIcon} />
      <h2 className={styles.emptyCartHeading}>{YOUR_BAG}</h2>
      <p className={styles.emptyCartSubHeading}>{CURRENTLY_EMPTY}</p>
    </div>
  );
};

export default CartEmpty;
