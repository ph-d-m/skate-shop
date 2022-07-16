import Link from "next/link";
import Image from "next/image";
import Product from "./Product";
import styles from "./modules/GridItems.module.css"

export async function getStaticProps() {
  const commerce = getCommerce();
  const { data: products } = await commerce.products.list();
  return {
    props: {
      products,
    },
  };
}

export default function ProductList({ products }) {
  if (!products) return null;
  const imageLoader = ({ src, width, quality }) => {
    return `https://cdn.chec.io/${src}?w=${width}&q=${quality || 75}`
  }

  return (

    <>
      <div className={styles.item}>
        <div className={styles.itemGrid}>
          {products.map((product) => (
            <div key={product.permalink} className={styles.itemBackground}>
              <Link href={`/products/${encodeURIComponent(product.permalink)}`} passHref>
                <div className={styles.itemImage}>
                     <Image
                       loader={imageLoader}
                       src={product.image.url}
                       alt={product.name}
                       width={300}
                       height={300}
                       className={styles.itemScaleHover}
                     />

                  <Product {...product} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
    

  );
}