import ProductList from '../components/ProductList';
import getCommerce from "../utils/commerce";
import CategoryList from "../components/CategoryList"
import Image from 'next/image'

export async function getStaticProps() {
    const commerce = getCommerce();
    const { data: products } = await commerce.products.list();
    const { data: categories } = await commerce.categories.list();
    return {
      props: {
        products,
        categories,
      },
    };
  }
  
  export default function Shop({ products, categories }) {
      
console.log([categories]);

    return (
      <>
        <CategoryList categories={categories}/>
        <ProductList products={products} />
        <section className=' max-w-full  bg-gradient-to-br from-indigo-600 via-pink-400  to-amber-400'>
          <Image
          src="/img/PageShop.jpg"
          width={1000}
          height={350}
          alt="Shop"
          className=' object-cover aspect-auto mix-blend-multiply'
          layout='responsive'
          />

        </section>
      </>
    );
  }

