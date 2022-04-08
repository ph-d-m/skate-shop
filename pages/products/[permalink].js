import commerce from "../../utils/commerce";
import React from "react";
import getCommerce from "../../utils/commerce";



export async function getStaticProps({ params }) {
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

export async function getStaticPaths() {
  const commerce = getCommerce()
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

export default function ProductPage({ product }) {

  console.log([product]);
    
  return (
    <>
      <h1>{product.name}</h1>
      <img src={product.assets[0].url}/>
      {/* <img src={product.assets[1].url}/>
      <img src={product.assets[2].url}/> */}
      <p>{product.price.formatted_with_symbol}</p>
    </>
  );
}