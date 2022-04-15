import Product from '../components/Product';
import ProductList from '../components/ProductList';
import getCommerce from "../utils/commerce";
import CategoryList from "../components/CategoryList"
import Category from '../components/Category';

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
      </>
    );
  }

