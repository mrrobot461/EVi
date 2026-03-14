import { Outlet, useLocation } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { useEffect } from 'react';

export function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="transition-opacity duration-300">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}