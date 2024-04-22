import { Footer } from './footer';
import { Header } from './header';

export default function MainLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col">
      <Header />
      <main className=" 3xl:max-w-screen-3xl flex-1 w-full bg-slate-50 dark:bg-slate-900">
        {children}
      </main>
      <Footer />
    </div>
  );
}
