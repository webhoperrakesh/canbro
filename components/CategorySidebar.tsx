import CategorySidebarClient from "./CategorySidebarClient";
// import { categories } from "@/fakeData/productsFakeData"

type Category = {
  id: number;
  title: string;
  slug: string;
};



export async function CategorySidebar() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product-categories`, {
    next: { revalidate: 3600 },
  })

  const { data: categories = [] } = await res.json()

  return (
    <CategorySidebarClient categories={categories} />
  )
}

