import { SnipcartProvider } from "use-snipcart";
import "@styles/globals.scss";
import { useState, useEffect } from "react";
import Layout from "@components/Layout";
import Cookies from "@components/Cookies";

function MyApp({ Component, pageProps }) {
  // Cart State
  const [cart, setCart] = useState([]);
  // Reload the Data
  const [reloadKey, setReloadKey] = useState(1);

  useEffect(() => {
    const data = window.localStorage.getItem("item");
    console.log("data", data);
    if (data !== []) {
      return setCart(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("item", JSON.stringify(cart));
  }, [cart]);

  const AddToCart = (item, qty, price) => {
    let newcart = cart;
    for (let index = 0; index < qty; index++) {
      newcart.push([item, price]);
    }
    setCart(newcart);
    setReloadKey(Math.random());
  };

  const RemoveToCart = (item, qty) => {
    let newcart = cart;
    let index = newcart.indexOf(item);
    newcart.splice(index);
    setCart(newcart);
  };

  const ClearCart = (item) => {
    setCart([]);
  };

  return (
    <SnipcartProvider>
      {/* <Header cart={cart} /> */}
      <Layout key={reloadKey} cart={cart}>
        <Component
          cart={cart}
          AddToCart={AddToCart}
          RemoveToCart={RemoveToCart}
          ClearCart={ClearCart}
          {...pageProps}
        />
      </Layout>
    </SnipcartProvider>
  );
}

export default MyApp;
