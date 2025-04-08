import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router';
import { useMemo } from 'react';

function Layout() {
  const header = useMemo(() => <Header />, []);
  const footer = useMemo(() => <Footer />, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      {header}
      <main className="w-full flex flex-1 flex-col items-center mt-[68px] overflow-y-auto">
        <Outlet />
      </main>
      {footer}
    </div>
  );
}

export default Layout;
