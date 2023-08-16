"use client";
import React from "react";
import { useSelector } from "react-redux";
import CartEmpty from "../CartEmpty";
import CartItemsList from "../CartItemsList";
import TotalCartCount from "../TotalCartCount";
import styles from "./CartContainer.module.scss";

const CartContainer = () => {
  const { amount } = useSelector((store) => store.cart);
  if (amount < 1) {
    return <CartEmpty />;
  }

  return (
    <div className={styles.mainCartContainer}>
      <CartItemsList />
      <TotalCartCount />
    </div>
  );
};

export default CartContainer;
