import Link from "next/link";
import Category from "./Category";

export default function CategoryList({ categories }) {
  if (!categories) return null;

  return (
    <ul className="categoryAll">
      {categories.map((category) => (
        <li key={category.slug}>
          <Link href={`/categories/${encodeURIComponent(category.slug)}`}>
            <a>
              <Category {...category} />
            </a>
          </Link>
        </li>
      ))}

    </ul>
  );
}