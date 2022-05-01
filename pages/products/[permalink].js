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


export default function ProductPage({ product, categories, price }) {

  const imageLoader = ({ src, width, quality }) => {
    return `https://cdn.chec.io/${src}?w=${width}&q=${quality || 80}`
  }


  console.log([product]);
    
  return (
  <>
      <div className=" max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="w-full h-auto text-center aspect-w-1 aspect-h-1 lg:aspect-none bg-gradient-to-br from-indigo-600 via-pink-400  to-amber-400">
            <div>
              <Image
                alt={product.name}
                loader={imageLoader}
                src={product.assets[0].url}
                width={500}
                height={500}
                className="object-cover aspect-auto"
              />
            </div>
          </div>
          <div className="w-full h-auto text-left aspect-w-1 aspect flex justify-center flex-col">

            <h1 className=" my-4 text-2xl lg:text-4xl uppercase">{product.name}</h1>
            <div className=" text-lg"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
            <div>
              <p className=" text-lg">Only in Europe <br />
                Delivery time: Minimum 3 - 5 days</p>
            </div>
            <div>
              <p className=" text-lg">We accept returns and repayments. <br />
                See the conditions.</p>
            </div>
            <div className="">
              <button className="text-orange bg-black hover:bg-orange hover:text-black rounded-full  w-full sm:w-auto text-center hover:transition-all"><a>Add to cart</a></button>
              
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="w-full h-full aspect-w-1 aspect-h-1 lg:aspect-none">
            <Image
              alt={product.name}
              loader={imageLoader}
              src={product.assets[0].url}
              width={500}
              height={500}
              className="object-cover aspect-auto"
            />
          </div>
          <div className="w-full h-full aspect-w-1 aspect-h-1 lg:aspect-none">
            
          </div>
          <div className="w-full h-full aspect-w-1 aspect-h-1 lg:aspect-none">
            
          </div>
        </div>
      </div>
      <section className=" max-w-full text-center">
      <h1 className=" text-4xl uppercase pl-8">Looking for something else ?</h1>
      <CategoryList categories={categories} />
      </section>
    </>
  );
}