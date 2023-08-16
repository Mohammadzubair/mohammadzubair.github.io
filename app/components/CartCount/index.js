"use client";
import React from "react";
import { useSelector } from "react-redux";
import CartIcon from "../../assets/icons/CartIcon";
import styles from "./CartCount.module.scss";

const CartCount = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <div className={styles.mainCartBox}>
      <CartIcon className={styles.cartIcon} />
      <span className={styles.cartCount}>{amount}</span>
    </div>
  );
};

export default CartCount;
