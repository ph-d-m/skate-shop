import getCommerce from "../../utils/commerce";
import ProductList from "../../components/ProductList";
import CategoryList from "../../components/CategoryList";

export async function getStaticProps({ params }) {
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

export async function getStaticPaths() {
    const commerce = getCommerce();
    const { data: categories } = await commerce.categories.list();
  
    return {
      paths: categories.map((category) => ({
        params: {
          slug: category.slug,
        },
      })),
      fallback: false,
    };
  }

  export default function CategoryPage({ category, products, categories }) {
    return (
      <>
        <h1>{category.name}</h1>
        <CategoryList categories={categories}/>
        <ProductList products={products} />
      </>
    );
  }