import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const menus = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menus/`, {
    next: { revalidate: 600 },
  });
  const menusRes = await menus.json();

  const mainMenu = menusRes.menus?.[0];
  const footerMenus = menusRes.menus.slice(1);

  const settingResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/settings`);
  const settings = await settingResponse.json();

  return (
    <>
      {mainMenu && (
          <Header mainMenu = {mainMenu} logo = {menusRes.logo} topHeaderData = {settings}/>
        )}
      <body>{children}</body>
      <Footer footerMenu = {footerMenus} footerData = {settings}/>
    </>
  );
}
