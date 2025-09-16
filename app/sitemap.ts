export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const [productsRes, catRes, blogsRes] = await Promise.all([
      fetch(`${apiUrl}/products`, { next: { revalidate: 60 } }),
      fetch(`${apiUrl}/product-categories`, { next: { revalidate: 60 } }),
      fetch(`${apiUrl}/posts`, { next: { revalidate: 60 } }),
    ]);

    // If API failed, log status
    if (!productsRes.ok) {
      console.error("Products API error:", productsRes.status, await productsRes.text());
      return [];
    }

    if (!catRes.ok) {
      console.error("Categories API error:", catRes.status, await catRes.text());
      return [];
    }

    if (!blogsRes.ok) {
      console.error("Blogs API error:", blogsRes.status, await blogsRes.text());
      return [];
    }

    const productsJson = await productsRes.json();
    const catJson = await catRes.json()
    const blogsJson = await blogsRes.json();

    const products = Array.isArray(productsJson) ? productsJson : productsJson?.data ?? [];
    const categories = Array.isArray(catJson) ? catJson : catJson?.data ?? [];
    const blogs = Array.isArray(blogsJson) ? blogsJson : blogsJson?.data ?? [];

    const productUrls = products.map((product: any) => ({
      url: `${baseUrl}/product/${product.slug}`,
      lastModified: product.updated_at
        ? new Date(product.updated_at).toISOString()
        : new Date().toISOString(),
    }));

    const catUrls = categories.map((cat: any) => ({
      url: `${baseUrl}/product-category/${cat.slug}`,
      lastModified: cat.updated_at
        ? new Date(cat.updated_at).toISOString()
        : new Date().toISOString(),
    }));

    const blogUrls = blogs.map((blog: any) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: blog.updated_at
        ? new Date(blog.updated_at).toISOString()
        : new Date().toISOString(),
    }));

    const staticUrls = [
      { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
      { url: `${baseUrl}/about-us`, lastModified: new Date().toISOString() },
      { url: `${baseUrl}/products`, lastModified: new Date().toISOString() },
      { url: `${baseUrl}/pcd-pharma-franchise`, lastModified: new Date().toISOString() },
      { url: `${baseUrl}/contact`, lastModified: new Date().toISOString() },
      { url: `${baseUrl}/visual-aids`, lastModified: new Date().toISOString() },
      { url: `${baseUrl}/blog`, lastModified: new Date().toISOString() },
    ];

    return [...staticUrls, ...catUrls, ...productUrls, ...blogUrls];
  } catch (err) {
    console.error("Sitemap generation error:", err);
    return [];
  }
}
