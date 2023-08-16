"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/features/modalSlice";
import { CLEAR_CART_BTN } from "../../utils/constants";
import styles from "./TotalCartCount.module.scss";

const TotalCartCount = () => {
  const { total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className={styles.mainCartCountContainer}>
      <div className={styles.cartCountContainerInner}>
        <h4 className={styles.cartCount}>Total</h4>
        <h4 className={styles.cartCount}>$ {total.toFixed(2)}</h4>
      </div>
      <button
        onClick={() => {
          dispatch(openModal());
        }}
        type="button"
        className={styles.clearBtn}
      >
        {CLEAR_CART_BTN}
      </button>
    </div>
  );
};

export default TotalCartCount;
