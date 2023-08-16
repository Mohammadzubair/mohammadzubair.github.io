"use client";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { useSelector, useDispatch } from "react-redux";
import {
  calculateTotal,
  clearCart,
  getCartItems,
} from "../app/redux/features/cartSlice";
import { closeModal } from "../app/redux/features/modalSlice";
import { useEffect } from "react";
import { LOADING_DATA, REMOVE_ALL_ITEMS_FROM_CART } from "./utils/constants";
import styles from "./page.module.scss";

export default function Home() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loadingDataContainer}>
        <h2>{LOADING_DATA}</h2>
      </div>
    );
  }
  return (
    <main className={styles.mainAppContainer}>
      {isOpen && (
        <Modal
          title={REMOVE_ALL_ITEMS_FROM_CART}
          onYes={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
          onNo={() => {
            dispatch(closeModal());
          }}
        />
      )}
      <CartContainer />
    </main>
  );
}
