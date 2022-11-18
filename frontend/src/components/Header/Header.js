import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import Container from "@components/Container";
import styles from "./Header.module.scss";
// import { useSnipcart } from "use-snipcart";
import { useRouter } from "next/router";
import HeaderMobile from "./HeaderMobile";

const Header = ({ categories, cart, key }) => {
  // const { cart = {} } = useSnipcart();
  const { locale: activeLocale, locales, asPath } = useRouter();

  const avaibleLocales = locales.filter((locale) => {
    return locale !== activeLocale;
  });

  return (
    <>
      <header className={styles.header}>
        <Container className={styles.headerContainer}>
          <p className={styles.headerTitle}>
            <Link href="/">
              <a>Yato</a>
            </Link>
          </p>
          <ul className={styles.headerLinks}>
            <li>
              <Link href="/products">
                <a>Products</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/categories/apparel">
                <a>Catergory</a>
              </Link>
            </li>
            <li>
              <Link href="/categories/items">
                <a>Items</a>
              </Link>
            </li> */}
            {/* <li>
              <Link href="/stores">
                <a>Stores</a>
              </Link>
            </li> */}
          </ul>
          {/* <p className={styles.headerCart}>
          <button className="snipcart-checkout">
            <FaShoppingCart />
            <span>${cart.subtotal?.toFixed(2)}</span>
          </button>
        </p> */}
          <p className={styles.headerCart}>
            <Link href="/checkout">
              <button key={key}>
                <FaShoppingCart />
                <span>$({cart.length})</span>
              </button>
            </Link>
          </p>
          <ul className={styles.headerLocales}>
            {avaibleLocales.map((locale) => {
              return (
                <li key={locale}>
                  <Link href={asPath} locale={locale}>
                    <a>{locale.toUpperCase()}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </header>

      <HeaderMobile />
    </>
  );
};

export default Header;
