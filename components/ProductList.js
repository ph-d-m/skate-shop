import Link from "next/link";
import Image from "next/image";
import Product from "./Product";

export default function ProductList({ products }) {
  if (!products) return null;

  const imageLoader = ({ src, width, quality }) => {
    return `https://cdn.chec.io/${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <div>
      <div className=" max-w-full pb-16 ">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <div key={product.permalink} className="group relative odd:bg-orange even:bg-purple">

              <button className="border-none z-10 absolute top-0 right-0 p-2">
                <Image
                src="/img/plus.png"
                width={32}
                height={32}
                alt="Add ?"
                />
              </button>

              <Link href={`/products/${product.permalink}`}>
                <div className="w-full h-auto aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:aspect-none text-center p-5 cursor-pointer">
                  <Image
                    loader={imageLoader}
                    src={product.assets[0].url}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-contain hover:scale-125 "
                  />
                  <a>
                    <Product {...product} />
                  </a>

                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>

    



  );
}