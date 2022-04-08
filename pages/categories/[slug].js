import getCommerce from "../../utils/commerce";
import ProductList from "../../components/ProductList";

export async function getStaticProps({ params }) {
  const { slug } = params;
  const commerce = getCommerce();
  const category = await commerce.categories.retrieve(slug, {
    type: "slug",
  });

  const { data: products } = await commerce.products.list({
    category_slug: [slug],
  });

  return {
    props: {
      category,
      products,
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

  export default function CategoryPage({ category, products }) {
    return (
      <>
        <h1>{category.name}</h1>
        
        <ProductList products={products} />
      </>
    );
  }