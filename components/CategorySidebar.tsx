import CategorySidebarClient from "./CategorySidebarClient";


export async function CategorySidebar() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product-categories`, {
    next: { revalidate: 600 },
  })

  const { data: categories = [] } = await res.json()

  return (
    <CategorySidebarClient categories={categories} />
  )
}

