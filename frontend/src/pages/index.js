import Head from "next/head";
import Link from "next/link";
import Layout from "@components/Layout";
import Container from "@components/Container";
import Button from "@components/Button";
import styles from "@styles/Page.module.scss";
// import { GetServerSideProps } from "next";

import { gql } from "@apollo/client";
import { getApolloClient } from "@lib/aplloClient";
// import { buildImage } from "@lib/cloudniary";

export default function Home({ home, Products, AddToCart }) {
  // const { herolink, heroTitle, heroText, heroBackground } = home;
  return (
    <>
      <Head>
        <title>Test</title>
        <meta name="description" content="Get your Space Jelly gear!" />
      </Head>

      <Container>
        <h1 className="sr-only">Test</h1>

        {/* <div className={styles.hero}>
          <Link href={herolink}>
            <a>
              <div className={styles.heroContent}>
                <h2>{heroTitle}</h2>
                <p>{heroText}</p>
              </div>
              <img
                className={styles.heroImage}
                width={heroBackground.width}
                height={heroBackground.height}
                src={heroBackground.url}
                alt="Data_Img"
              />
            </a>
          </Link>
        </div> */}

        <h2 className={styles.heading}>Featured Gear</h2>

        <ul className={styles.products}>
          {Products.map((product, index) => {
            return (
              <li key={index}>
                <Link href={`/products/${product.attributes.Slug}`}>
                  <a>
                    <div className={styles.productImage}>
                      {/* {Object.values.product.attributes.Image.data.attributes.map(
                        (image) => {
                          return (
                            <img
                              width={image.width}
                              // height={product.attributes.Image.height}
                              // src={product.attributes.Image.url}
                              alt="Images"
                            />
                          );
                        }
                      )} */}
                      <img
                        src={
                          product.attributes.Image.data &&
                          product.attributes.Image.data.attributes.url
                        }
                        alt="Images"
                      />
                    </div>
                    <h3 className={styles.productTitle}>
                      {product.attributes.Name}
                    </h3>
                    <p className={styles.productPrice}>
                      ${product.attributes.Price}
                    </p>
                    <span>{product.attributes.category}</span>
                    <br />
                    <button>{product.attributes.colors}</button>
                    <p>Size : {product.attributes.Size}</p>
                  </a>
                </Link>
                <p>
                  <Button
                    onClick={() => {
                      AddToCart(
                        product.attributes.Slug,
                        1,
                        product.attributes.Price
                      );
                    }}
                  >
                    Add to Cart
                  </Button>
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </>
  );
}

export async function getServerSideProps({ locale, ctx }) {
  // const { req, res } = ctx;
  console.log("ctx", ctx);

  // const { cookies } = req;
  // console.log(cookies);

  const client = getApolloClient();
  const data = await client.query({
    query: gql`
      # $locale: Locale!
      query HomePage {
        # page(where: { slug: "home" }) {
        #   heroText
        #   heroTitle
        #   herolink
        #   id
        #   name
        #   slug
        #   heroBackground
        #   localizations(locales: [$locale]) {
        #     heroText
        #     heroTitle
        #     locale
        #   }
        # }
        # (where: { categories_some: { slug: "feautred" } })
        products {
          data {
            id
            attributes {
              Name
              Price
              Description
              Slug
              category
              colors
              Size
              Image {
                data {
                  id
                  attributes {
                    url
                    width
                    height
                    name
                  }
                }
              }
            }
          }
        }
      }
    `,

    // variables: {
    //   locale,
    // },
  });

  // let home = data.data.page;
  // for locale
  // if (home.localizations.length > 0) {
  //   home = {
  //     ...home,
  //     ...home.localizations[0],
  //   };
  // }
  const Products = data.data.products.data;

  return {
    props: {
      // home,
      Products,
    },
  };
}
