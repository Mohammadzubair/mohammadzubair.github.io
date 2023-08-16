import React from "react";
import CartCount from "../CartCount";
import { TEXT_LOGO  } from "../../utils/constants";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.mainNavbar}>
      <h6 className={styles.logo}>{TEXT_LOGO}</h6>
      <CartCount />
    </nav>
  );
};

export default Navbar;
