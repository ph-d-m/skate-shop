import getCommerce from "../../utils/commerce";
import ProductList from "../../components/ProductList";
import CategoryList from "../../components/CategoryList";
import Layout from "../../components/Layout";

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const commerce = getCommerce();
  const category = await commerce.categories.retrieve(slug, {
    type: "slug",
  });

  const { data: products } = await commerce.products.list({
    category_slug: [slug],
  });

  const { data: categories } = await commerce.categories.list();

  return {
    props: {
      category,
      products,
      categories,
    },
  };
}

//  export async function getStaticPaths() {
//      const commerce = getCommerce();
//      const { data: categories } = await commerce.categories.list();
//      return {
//        paths: categories.map((category) => ({
//          params: {
//            slug: category.slug,
//          },
//        })),
//        fallback: false,
//      };
//    }

  export default function CategoryPage({ products, categories, category }) {

    return (
      <Layout title={category.name}>
        <div className="containerShop">
           <div className="containerCategoryItems">
           <CategoryList categories={categories}/>
            </div> 
         </div>
        <ProductList products={products} />
        <section>
          <div className="pageShopImage">
          </div>
        </section>
    </Layout>
    );
  }