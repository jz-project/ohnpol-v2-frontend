import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Header />
      <main className="w-full mt-17 flex flex-1 flex-col items-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
