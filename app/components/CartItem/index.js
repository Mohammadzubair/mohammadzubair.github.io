import React from "react";
import ChevronDown from "../../assets/icons/ChevronDown";
import ChevronUp from "../../assets/icons/ChevronUp";
import { REMOVE_BTN } from "../../utils/constants";
import { useDispatch } from "react-redux";
import {
  removeItem,
  toggleProduct,
  increaseItem,
  decreaseItem,
} from "../../redux/features/cartSlice";
import styles from "./CartItem.module.scss";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.mainCartItemContainer}>
      <div className={styles.cartProducts}>
        <img className={styles.productImage} src={img} alt={title} />
        <div className={styles.productsContainer}>
          <h5 className={styles.productTitle}>{title}</h5>
          <p className={styles.productPrice}>{price}</p>
          <button
            className={styles.productRemoveBtn}
            onClick={() => {
              dispatch(removeItem(id));
            }}
          >
            {REMOVE_BTN}
          </button>
        </div>
      </div>
      <div className={styles.addProducts}>
        <button
          className={styles.productBtn}
          onClick={() => dispatch(increaseItem({ id }))}
        >
          <ChevronUp className={styles.productsIcon} />
        </button>
        <p>{amount}</p>
        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
            }
            dispatch(decreaseItem({ id }));
          }}
          className={styles.productBtn}
        >
          <ChevronDown className={styles.productsIcon} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
