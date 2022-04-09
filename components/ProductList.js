import Link from "next/link";
import Image from "next/image";
import Product from "./Product";

export default function ProductList({ products }) {
  if (!products) return null;

  const imageLoader = ({ src, width, quality }) => {
    return `https://cdn.chec.io/${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.permalink}>

         <Image
         loader={imageLoader}
         src={product.assets[0].url} 
         alt={product.name}
         width={300}
         height={300}
         />

          <Link href={`/products/${product.permalink}`}>
            <a>
              <Product {...product} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}