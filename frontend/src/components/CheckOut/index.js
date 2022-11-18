import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./checkout.module.scss";

const CheckOut = ({ cart }) => {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let myTotal = 0;
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      myTotal = myTotal + element[1];
    }
    setSubtotal(myTotal);
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    // let orderId = "OID" + Math.floor(1000000* Math.random())
    // let url = `${process.env.NEXT_PUBLIC_STRAPI_URL} + "/api/orders/pretransaction`
    // const rawResponse = await fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify({ orderid: orderId, amount: subtotal, ...form, cart: cart })
  };

  return (
    <>
      <div className={styles.row}>
        <div className={styles.col_75}>
          <div className={styles.container}>
            <form onSubmit={submit}>
              <div className={styles.row}>
                <div className={styles.col_50}>
                  <h3>Billing Address</h3>
                  <label htmlFor="fname">
                    <i className="fa fa-user"></i> Full Name
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.name}
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="John M. Doe"
                  />
                  <label htmlFor="email">
                    <i className="fa fa-envelope"></i> Email
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.email}
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                  />
                  <label htmlFor="adr">
                    <i className="fa fa-address-card-o"></i> Address
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.address}
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                  />
                  <label htmlFor="city">
                    <i className="fa fa-institution"></i> City
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.city}
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                  />

                  <div className={styles.row}>
                    <div className={styles.col_50}>
                      <label htmlFor="state">State</label>
                      <input
                        onChange={handleChange}
                        value={form.state}
                        type="text"
                        id="state"
                        name="state"
                        placeholder="NY"
                      />
                    </div>
                    <div className="col_50">
                      <label htmlFor="zip">Zip</label>
                      <input
                        onChange={handleChange}
                        value={form.phone}
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </div>

                <div className="col_50">
                  <h3>Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className={styles.icon_container}>
                    <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
                    <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
                    <i
                      className="fa fa-cc-mastercard"
                      style={{ color: "red" }}
                    ></i>
                    <i
                      className="fa fa-cc-discover"
                      style={{ color: "orange" }}
                    ></i>
                  </div>
                  <label htmlFor="cname">Name on Card</label>
                  <input
                    onChange={handleChange}
                    value={form.name}
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="John More Doe"
                  />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input
                    onChange={handleChange}
                    value={form.phone}
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                  />
                  <label for="expmonth">Exp Month</label>
                  <input
                    onChange={handleChange}
                    value={form.name}
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                  />

                  <div className="row">
                    <div className="col_50">
                      <label htmlFor="expyear">Exp Year</label>
                      <input
                        onChange={handleChange}
                        value={form.phone}
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2018"
                      />
                    </div>
                    <div className="col_50">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        onChange={handleChange}
                        value={form.phone}
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="352"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input
                  onChange={handleChange}
                  type="checkbox"
                  checked="checked"
                  name="sameadr"
                />
                Shipping address same as billing
              </label>
              <Link href="/success">
                <button className={styles.btn}>Continue to Checkout </button>
              </Link>
            </form>
          </div>
        </div>

        <div className={styles.col_25}>
          <div className={styles.container}>
            <h4>
              Cart
              <span className={styles.price} style={{ color: "black" }}>
                <i className="fa fa-shopping-cart"></i>
                <b>{cart.length}</b>
              </span>
            </h4>
            <div>
              {cart.map((item) => {
                return (
                  <p>
                    <a href="#">{item[0]} </a>
                    <span className={styles.price}>${item[1]}</span>
                  </p>
                );
              })}
            </div>
            <hr />
            <p>
              Total
              <span className={styles.price} style={{ color: "black" }}>
                <b>${subtotal}</b>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
