// Shared wrapper for regular subpages. The home page and the 404 page have
// their own full screen layouts and do not use it.
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className='relative min-h-screen pt-40 lg:pt-32 px-6 lg:px-10 pb-16 lg:pb-48'>
      <div className='max-w-6xl mx-auto'>{children}</div>
    </main>
  );
}
