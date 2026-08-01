import Navbar from '@/components/Navbar';

// Layout shared by all regular pages. The 404 page lives outside this group
// and therefore renders without the navbar.
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
