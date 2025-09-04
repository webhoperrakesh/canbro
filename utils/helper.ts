//-----------------GET ABSOLUTE URL(FOR og:url and canonical link PURPOSE)------------------------
export function getAbsoluteUrl(path: string) {
  const base = process.env.NEXT_PUBLIC_SITE_URL;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
