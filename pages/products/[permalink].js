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


  console.log([product]);
    
  return (
  <>
      <div className=" max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="w-full h-full text-center aspect-w-1 aspect-h-1 lg:aspect-none bg-gradient-to-br from-indigo-600 via-pink-400  to-amber-400">
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
          <div className=" ">
            <div className="">
              <h1>{product.name}</h1>
              <p>{product.description}</p>
            <fieldset>
            <legend>{product.variant_groups[0].name}</legend>

            
                <div className="flex items-center mb-4">
                  <input type="radio" name="sizes" value={`${product.variant_groups[0].options[0].name}`}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600
                   dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" aria-labelledby="size-1"
                    aria-describedby="country-option-1" />
                  <label htmlFor="size-s" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {product.variant_groups[0].options[0].name}
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input type="radio" name="sizes" value={`${product.variant_groups[0].options[0].name}`}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600
                   dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" aria-labelledby="size-1"
                    aria-describedby="country-option-1" defaultChecked />
                  <label htmlFor="size-s" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {product.variant_groups[0].options[1].name}
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input type="radio" name="sizes" value={`${product.variant_groups[0].options[0].name}`}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600
                   dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" aria-labelledby="size-1"
                    aria-describedby="country-option-1" />
                  <label htmlFor="size-s" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {product.variant_groups[0].options[2].name}
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input type="radio" name="sizes" value={`${product.variant_groups[0].options[0].name}`}
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600
                   dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" aria-labelledby="size-1"
                    aria-describedby="country-option-1" />
                  <label htmlFor="size-s" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {product.variant_groups[0].options[3].name}
                  </label>
                </div>
           

              </fieldset> 
              <p>{product.price.formatted_with_symbol}</p>
              <button className=""><a>Add to cart</a></button>
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
              className="object-cover"
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