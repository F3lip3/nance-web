import { Footer } from './footer';
import { Header } from './header';

export default function MainLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
