import React from "react";
import { YES_BTN, NO_BTN } from "../../utils/constants";
import styles from "./modal.module.scss";

const Modal = ({ onYes, onNo, title }) => {
  return (
    <div className={styles.mainModalContainer}>
      <div className={styles.modalOverlay}>
        <p className={styles.modalDec}>{title}</p>
        <div className={styles.modalBtns}>
          <button type="button" onClick={onYes}>
            {YES_BTN}
          </button>
          <button type="button" onClick={onNo}>
            {NO_BTN}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
