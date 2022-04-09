import React from "react";
import getCommerce from "../../utils/commerce";
import Image from "next/image";
import CategoryList from "../../components/CategoryList"


export async function getStaticProps({ params }) {
  const { permalink } = params;
  const commerce = getCommerce()
  const product = await commerce.products.retrieve(permalink, {
    type: 'permalink',
  });
  const { data: categories } = await commerce.categories.list();

  return {
    props: {
      product,
      categories,
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



export default function ProductPage({ product, categories, products }) {

  const imageLoader = ({ src, width, quality }) => {
    return `https://cdn.chec.io/${src}?w=${width}&q=${quality || 75}`
  }

  // function getRandomInt() {
  //   return Math.floor(Math.random() * 3);

    
  // }

  console.log([product]);
    
  return (
  
    <div className="container">
       
      <h1>{product.name}</h1>
      <Image 
       alt={product.name}
       loader={imageLoader}
       src={product.assets[0].url}
       width={500}
       height={500}
       />
      
      <p>{product.price.formatted_with_symbol}</p>
      <CategoryList categories={categories}/>
      </div>
    
  );
}