import Product from '../components/Product';
import ProductList from '../components/ProductList';
import getCommerce from "../utils/commerce";
import CategoryList from "../components/CategoryList"

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
        <h1>Shop All</h1>
        <CategoryList categories={categories}>
        </CategoryList>
        <ProductList products={products} />
      </>
    );
  }

