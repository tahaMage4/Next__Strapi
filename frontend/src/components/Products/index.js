import React from "react";
import styles from "./Products.module.scss";

const ProductData = ({ Products, AddToCart }) => {
  return (
    <>
      <div className={styles.main}>
        {Products.map((product, key) => {
          return (
            <div key={key} className={styles.container}>
              <div className={styles.card}>
                <div className={styles.card_head}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSLPl25FnIOHQLH6U3tU7iIOhHHvvgmWkVvQ&usqp=CAU"
                    alt="logo"
                    className={styles.card_logo}
                  />
                  {/* After Image  */}
                  <img
                    style={{ marginLeft: "90px" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxJRy6IV-aAavWloS5U2CJebsKwrZ4v9OJtQNj7OkVM6m7j33uTHmZ4dvLV8eNoonQsNQ&usqp=CAU"
                    alt="Shoe"
                    className={styles.product_img}
                  />
                  <div className={styles.product_detail}>
                    <h2>Hartbeespoort</h2> Support and Nike Zoom Air come
                    together for a more supportive feel with high-speed
                    responsiveness
                  </div>
                  <span className={styles.back_text}>FA</span>
                </div>
                <div className={styles.card_body}>
                  <div className={styles.product_desc}>
                    <span className={styles.product_title}>
                      {product.attributes.Name}
                      <span className={styles.badge}>New</span>
                    </span>
                    <span className={styles.product_captin}>
                      {product.attributes.category}
                    </span>
                    <span className={styles.product_ratin}>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star grey"></i>
                    </span>
                  </div>
                  <div className={styles.product_propeties}>
                    <span className={styles.product_size}>
                      <h4>Size</h4>
                      <ul className={styles.ul_size}>
                        <li>
                          <a href="#">{product.attributes.Size}</a>
                        </li>
                        <li>
                          <a href="#">8</a>
                        </li>
                        <li>
                          <a href="#">9</a>
                        </li>
                        <li>
                          <a href="#">
                            {/* className={styles.active} */}
                            10
                          </a>
                        </li>
                        <li>
                          <a href="#">11</a>
                        </li>
                      </ul>
                    </span>
                    <span className={styles.product_color}>
                      <h4>Colour</h4>
                      <ul className={styles.ul_color}>
                        <li>
                          <a href="#"></a>
                          {/* className={styles.orange active} */}
                        </li>
                        <li>
                          <a href="#" className={styles.green}></a>
                          {/* {product.attributes.colors} */}
                        </li>
                        <li>
                          <a href="#" className={styles.yellow}></a>
                        </li>
                      </ul>
                    </span>

                    <span
                      className={styles.product_price_2}
                      onClick={() => {
                        AddToCart(
                          product.attributes.Slug,
                          1,
                          product.attributes.Price
                        );
                      }}
                    >
                      <b> AddToCart</b>
                    </span>
                    <span className={styles.product_price}>
                      $<b>{product.attributes.Price}</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className={styles.yt}>
        <a href="" target="_blank">
          <img width="151" src="" alt="" />
        </a>
      </div> */}
    </>
  );
};

export default ProductData;
