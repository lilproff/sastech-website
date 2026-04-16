import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/shared/ScrollReveal';
import ThemeProvider from '@/components/providers/ThemeProvider';
import CustomCursor from '@/components/shared/CustomCursor';

export default function RootLayout() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col antialiased bg-off-white dark:bg-navy text-slate-900 dark:text-white transition-colors duration-500">
        <CustomCursor />
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <ScrollReveal />
      </div>
    </ThemeProvider>
  );
}
