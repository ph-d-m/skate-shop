import Image from "next/image";
import React, { useState } from "react";
import getCommerce from "../../utils/commerce";

import Layout from "../../components/Layout";
import InfoProduct from "../../components/InfoProduct";
import styles from "../../components/modules/ProductDetails.module.css"


export async function getServerSideProps({ params }) {
  const { permalink } = params;
  const commerce = getCommerce()
  const product = await commerce.products.retrieve(permalink, {
    type: 'permalink',
  });

  return {
    props: {
      product,
    },
  };
}

  // export async function getStaticPaths() {
  //   const commerce = getCommerce()
  //   const { data: products } = await commerce.products.list()
  //   return {
  //     paths: products.map((product) => ({
  //       params: {
  //         permalink: product.permalink,
  //       },
  //     })),
  //     fallback: false,
  //   }
  // }

export default function ProductPage({product}) {

  const imageLoader = ({ src, width, quality }) => {
    return `https://cdn.chec.io/${src}?w=${width}&q=${quality || 90}`
  }

  return (
    <Layout title={product.name}>
      <section className={styles.sectionDetails}>

        <div className={styles.productContainer}>
          <div className={styles.productBackground}>
            <Image
              alt={product.name}
              loader={imageLoader}
              src={product.image.url}
              width={500}
              height={500}
              className={styles.imageDetails}
            />
          </div>
        </div>

        <div className={styles.productContainer}>
          <div className={styles.details}>
            <div className={styles.titleProduct}>
              <h1 className={styles.productName}>{product.name}</h1>
              <div className={styles.infosProduct}>
                {product.inventory.available > 0 ? (
                 <span> In stock </span>
                ) : (
                 <span>Unvailable</span>
                )}
                <span>Product ID: {product.created}</span>
                <span className={styles.priceProduct}>{product.price.formatted_with_symbol}</span>
              </div>
            </div>
            <div className={styles.textDetails} dangerouslySetInnerHTML={{ __html: product.description }}></div>
            <div className={styles.addToCart}>
              <button name="Add to cart"><span>Add to cart</span></button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.displayAssetImage}>
        <div className={styles.assetsContainer}>
          <div className={styles.assetsImageLarge}>
            <Image
              alt={product.name}
              loader={imageLoader}
              src={product.assets[1].url}
              objectFit="cover"
              className={styles.fitAssetImage}
              width={600}
              height={600}
              priority
            />
          </div>

          <div className={styles.assetsImagesMedium}>
            <div className={styles.assetsImageMediumDisplay}>
              <Image
                alt={product.name}
                loader={imageLoader}
                src={product.assets[2].url}
                width={530}
                height={550}
                className={styles.fitAssetImage}
              />
            </div>
            <div className={styles.assetsImageMediumDisplay}>
              <Image
                alt={product.name}
                loader={imageLoader}
                src={product.assets[3].url}
                width={530}
                height={550}
                className={styles.fitAssetImage}
              />
            </div>
          </div>
        </div>
      </section>
      <InfoProduct />
    </Layout>
  );
}