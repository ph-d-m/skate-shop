import Link from "next/link";

import Category from "./Category";

export default function CategoryList({ categories }) {
  if (!categories) return null;


  return (
    <ul className="flex  flex-row-reverse flex-wrap-reverse justify-evenly p-8">
      {categories.map((category) => (
        <li key={category.slug} {...category.children} className="mr-10">
          <Link href={`/categories/${category.slug}`}>
            <a className="categories text-base">
              <Category {...category} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}