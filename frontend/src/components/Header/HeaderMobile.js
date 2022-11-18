import Link from "next/link";
import React from "react";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import styles from "./Header.module.scss";

const HeaderMobile = ({ main, products }) => {
  return (
    <>
      <div className={styles.nav_bar}>
        <div className={styles.link}>
          <div className={styles.active}>
            {/* <Link href={main}> */}
            <AiOutlineHome className={styles.icon_svg} color="black" />
            <a>Home</a>
            {/* </Link> */}
          </div>
        </div>
        <div className={styles.link}>
          {/* <Link href={products}> */}
          <MdProductionQuantityLimits
            className={styles.icon_svg}
            color="black"
          />
          <a>Products</a>
          {/* </Link> */}
        </div>
        <div className={styles.link}>
          <BiCategoryAlt className={styles.icon_svg} color="black" />
          <a>About</a>
        </div>
        <div className={styles.link}>
          <AiOutlineShoppingCart className={styles.icon_svg} color="black" />
          <a>About</a>
        </div>
      </div>
    </>
  );
};

export default HeaderMobile;
