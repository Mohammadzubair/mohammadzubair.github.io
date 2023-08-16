"use client";
import React from "react";
import { useSelector } from "react-redux";
import { YOUR_BAG } from "../../utils/constants";
import CartItem from "../CartItem";
import styles from "./CartItemsList.module.scss";

const CartItemsList = () => {
  const { cartItems } = useSelector((store) => store.cart);
  return (
    <div className={styles.mainCartItemsListContainer}>
      <h2 className={styles.cartHeading}>{YOUR_BAG}</h2>
      <div className={styles.cartLists}>
        {cartItems.map((item, index) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default CartItemsList;
