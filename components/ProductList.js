import Link from "next/link";

import Product from "./Product";

export default function ProductList({ products }) {
  if (!products) return null;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.permalink}>
            <img src={product.assets[0].url}/>
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